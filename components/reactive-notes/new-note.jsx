import React from 'react';
import NoteEditor from './note-editor/note-editor';
import BreadCrumb from '../miscellaneous/breadcrumb';
import BrCrItem from '../miscellaneous/breadcumb-item';
import NoteMetadata from './note-editor/editor-metadata';


class NewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialText: null,
            noteText: null,
            title: null
        }
    }

    componentDidMount() {
        var editorData = this.getSavedEditorData();
        this.setState({
            initialText: editorData
        });
        this.onTickSave();
    }
    
    onTextUpdate = (textState) => {
        this.setState({
            noteText: textState
        });
    }

    onTitleChange = (value) => {
        this.setState({
            title: value
        });
    }
    onTickSave = () => {
        setInterval(() => {
            this.onDataSave();
        }, 5000);
    }
    onDataSave = () => {
        var strRaw = JSON.stringify(this.state.noteText);
        localStorage.setItem('editorData', strRaw);
    }
    getSavedEditorData() {
        const savedData = localStorage.getItem('editorData');
        return savedData !== null ? JSON.parse(savedData) : null;
    }
    
    render() {
        return (
            <React.Fragment>
                <BreadCrumb>
                    <BrCrItem to="/home" text="My Notes" icon="note"/>
                    <BrCrItem to="/home/new-note" text="New Note" icon="plus"/>
                </BreadCrumb>    
                <NoteMetadata onTitleChange={this.onTitleChange} onDataSave={this.onDataSave} />
                <NoteEditor data={this.state.initialText} callback={this.onTextUpdate}/>
            </React.Fragment>
        );
    }
}

export default NewNote;