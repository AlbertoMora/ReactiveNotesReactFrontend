import React from 'react';
import BlockstyleToolbar, { getBlockStyle } from './block-style-toolbar';
import Editor from 'draft-js-plugins-editor';
import createHighlightPlugin from './plugins/highlight-plugin';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import {
    EditorState, RichUtils,
    convertToRaw, convertFromRaw,
    AtomicBlockUtils
} from 'draft-js';
import { MediaBlockRenderer } from './mediaBlockRendererFn';
import Modal from '../../miscellaneous/modal/modal';

const highlightPlugin = createHighlightPlugin();
const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;

class NoteEditor extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            modalActive: false
        }
        this.onEditorChange = (editorState) => {
            this.setState({
                editorState
            }, () => {
                let data = convertToRaw(this.state.editorState.getCurrentContent());
                this.props.callback(data);
            });
        }
        this.plugins = [
            highlightPlugin,
            emojiPlugin
        ];
        this.setDomEditorRef = (element) => { this.editor = element; }
    }
    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data && this.props.data !== null) {
            const contentState = convertFromRaw(this.props.data);
            this.setState({
                editorState: EditorState.createWithContent(contentState)
            }, () => {
                var data = convertToRaw(this.state.editorState.getCurrentContent());
                this.props.callback(data);
            });
        }
    }
    saveEditorContent(data) {
        this.props.callback(data);
    }
    handleKeyCommand = (command) => {
        const { editorState } = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onEditorChange(newState);
            return true;
        }
        return false;
    }
    onToggleInlineType = (inlineType) => {
        this.onEditorChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineType));
    }
    onToggleBlockType = (blocktype) => {
        this.onEditorChange(RichUtils.toggleBlockType(this.state.editorState, blocktype));
    }
    onModalOpen = () => {
        this.setState({
            modalActive: true
        });
    }
    onModalClose = () => {
        this.setState({
            modalActive: false
        })
    }
    onTab = (e) => {
        e.preventDefault();
        const newEditorState = RichUtils.onTab(e, this.state.editorState, 6);
        this.onEditorChange(newEditorState);
    }
    onImageInsert = (value) => {
        if (value) {
            const editorState = this.state.editorState;
            const contentState = editorState.getCurrentContent();
            const contentStateWithEntity = contentState.createEntity(
                "image",
                "IMMUTABLE",
                { src: value }
            );

            const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
            const newEditorState = EditorState.set(
                editorState,
                {
                    currentContent: contentStateWithEntity
                },
                "create-entity"
            );
            this.setState({
                editorState: AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ")
            });
        }
    }
    render() {
        return (
            <div className="editor-container">
                <Modal active={this.state.modalActive}
                    title="Image Url Picker"
                    text="Please provide us an image link to insert in the Note Editor"
                    icon="file-image"
                    type="input-modal"
                    buttons="ok-cancel"
                    placeholder="Image Link"
                    placeholderIcon="link"
                    callback={this.onImageInsert}
                    modalClose={this.onModalClose}
                />
                <div className="e-toolbar-wrapper">
                    <BlockstyleToolbar
                        editorState={this.state.editorState}
                        onImageInsert={this.onModalOpen}
                        onToggleBlockType={
                            this.onToggleBlockType
                        }
                        onToggleInlineType={
                            this.onToggleInlineType
                        }
                    />
                </div>
                <div className="editor-wrapper" id="editor">
                    <EmojiSelect />
                    <Editor
                        blockRendererFn={MediaBlockRenderer}
                        blockStyleFn={getBlockStyle}
                        handleKeyCommand={this.handleKeyCommand}
                        editorState={this.state.editorState}
                        onChange={this.onEditorChange}
                        plugins={this.plugins}
                        ref={this.setDomEditorRef}
                    />
                </div>
            </div>
        );
    }
}

export default NoteEditor;