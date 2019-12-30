import { RichUtils } from "draft-js";
import {getDefaultKeyBinding, KeyBindingUtil} from 'draft-js';
const {isCtrlKeyCommand} = KeyBindingUtil;

export default () => {
    return {
        customStyleMap: {
            HIGHLIGHT: {
                background: "#fffe0d"
            },
            CODE: {
                backgroundColor: "#212121",
                color: "#5cbeff",
                padding: "3px",
                fontSize: "0.7rem"
            }
        },
        keyBindingFn: (e) => {
            if (isCtrlKeyCommand(e) && e.keyCode === 121) {
                return "highlight";
            }
            return getDefaultKeyBinding(e);
        },
        handleKeyCommand: (command, editorState, { setEditorState }) => {
            if (command === "highlight") {
                setEditorState(RichUtils.toggleInlineStyle(editorState, "HIGHLIGHT"));
                return true;
            }
        }
    };
};
