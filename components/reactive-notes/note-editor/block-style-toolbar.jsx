import React from 'react';
import HeaderStyleDropdown from './header-style-dropdown';
import BlockStyleButton from './block-style-button';
import { Row, Col } from 'react-bootstrap';

function BlockStyleToolbar(props) {

    const { editorState } = props;
    //block
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();
    //inline
    const sty = editorState.getCurrentInlineStyle();

    return (
        <Row className="editor-toolbar">
            <Col xs={12} md={5}>
                <span className="editor-controls">
                    {INLINE_TYPES.map(type => {
                        return (
                            <BlockStyleButton
                                active={sty.has(type.style)}
                                label={type.label}
                                onToggleBlockType={props.onToggleBlockType}
                                onToggleInlineType={props.onToggleInlineType}
                                style={type.style}
                                key={type.style}
                                type={type.type}
                            />
                        );
                    })}
                    <BlockStyleButton
                        active={false}
                        label={<i className="i-file-image"></i>}
                        onToggleBlockType={props.onImageInsert}
                        style={"IMAGE"}
                        type={"block"}
                    />
                </span>
            </Col>
            <Col xs={12} md={2}>
                <span className="editor-controls">
                    <HeaderStyleDropdown
                        headerOptions={BLOCK_TYPE_HEADINGS}
                        active={blockType}
                        onToggleBlockType={props.onToggleBlockType}
                    />
                </span>
            </Col>
            <Col xs={12} md={5}>
                <span className="editor-controls">
                    {BLOCK_TYPES.map(type => {
                        return (
                            <BlockStyleButton
                                active={type.style === blockType}
                                label={type.label}
                                onToggleBlockType={props.onToggleBlockType}
                                onToggleInlineType={props.onToggleInlineType}
                                style={type.style}
                                key={type.style}
                                type={type}
                            />
                        );
                    })}
                </span>
            </Col>
        </Row>
    );
}
export const INLINE_TYPES = [
    { label: <i className="i-italic"></i>, style: "ITALIC", type: "inline" },
    { label: <i className="i-bold"></i>, style: "BOLD", type: "inline" },
    { label: <i className="i-underline"></i>, style: "UNDERLINE", type: "inline" },
    { label: <i className="i-pencil"></i>, style: "HIGHLIGHT", type: "inline" },
    { label: <i className="i-code"></i>, style: "CODE", type: "inline" },
]
export const BLOCK_TYPES = [
    { label: <i className="i-unformatted-text"></i>, style: 'unformatted-text', type: "block" },
    { label: <i className="i-centered-text"></i>, style: 'centered-text', type: "block" },
    { label: <i className="i-quote-right"></i>, style: "blockquote", type: "block" },
    { label: <i className="i-ulist"></i>, style: "unordered-list-item", type: "block" },
    { label: <i className="i-olist"></i>, style: "ordered-list-item", type: "block" },
    { label: <i className="i-codeline"></i>, style: 'code-block', type: "block" }
];

export const BLOCK_TYPE_HEADINGS = [
    { label: "H1", style: "header-one" },
    { label: "H2", style: "header-two" },
    { label: "H3", style: "header-three" },
    { label: "H4", style: "header-four" },
    { label: "H5", style: "header-five" },
    { label: "H6", style: "header-six" }
];
export function getBlockStyle(block) {
    switch (block.getType()) {
        case "blockquote":
            return "richeditor-blockquote";
        case "unformatted-text":
            return "richeditor-text-align-left"
        case "centered-text":
            return "richeditor-text-align-center"
        case "code-block":
            return "richeditor-codeblock"
        default:
            return null;
    }
}
export default BlockStyleToolbar;