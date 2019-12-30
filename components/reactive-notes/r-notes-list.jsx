import React from 'react';
import Toolbar from './toolbar';
import NotesGrid from './notes-grid';
import NoteCard from './note-card';
import data from '../../data.json';
import ToolButton from "./tool-button";
import FloattingButton from '../miscellaneous/floatting-button';

class RNotesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDeleting: false,
            isAttaching: false,
            isPrinting: false,
            isSending: false,
            isSharing: false,
            isAllSelected: false
        }
    }
    onDeleteClick = () => {
        this.setState({
            isDeleting: !this.state.isDeleting,
            isAllSelected: false
        });
    }
    onAttachClick = () => {
        this.setState({
            isAttaching: !this.state.isAttaching,
            isAllSelected: false
        });
    }
    onPrintClick = () => {
        this.setState({
            isPrinting: !this.state.isPrinting,
            isAllSelected: false
        });
    }
    onSendClick = () => {
        this.setState({
            isSending: !this.state.isSending,
            isAllSelected: false
        });
    }
    onShareClick = () => {
        this.setState({
            isSharing: !this.state.isSharing,
            isAllSelected: false
        });
    }
    onSelectAll = () => {
        this.setState({
            isAllSelected: !this.state.isAllSelected
        })
    }
    iconSelection = () => {
        if (this.state.isDeleting) {
            return "trash";
        } else if (this.state.isAttaching) {
            return "file-image";
        } else if (this.state.isPrinting) {
            return "print";
        } else if (this.state.isSending) {
            return "go";
        } else if (this.state.isSharing) {
            return "share";
        }
    }
    render() {
        let cards = data.map((card) => {
            var fText = card.text.length > 70 ? card.text.substr(0, 70) + '...' : card.text;
            var fTitle = card.title.length > 10 ? card.title.substr(0, 10) + '...' : card.title;
            return (
                <NoteCard key={card.id} title={fTitle} text={fText}
                    isShared={card.isShared} id={card.id} isAllSelected={this.state.isAllSelected}
                    isSelectable={this.state.isDeleting || this.state.isAttaching ||
                        this.state.isPrinting || this.state.isSending || this.state.isSharing} />
            );
        });

        let fProps = {
            active: this.state.isDeleting || this.state.isAttaching ||
                this.state.isPrinting || this.state.isSending || this.state.isSharing,
            icon: this.iconSelection(),
            color: this.state.isDeleting ? "red" : "purple"
        };
        return (
            <React.Fragment>
                <Toolbar>
                    <ToolButton icon="plus" link="/home/new-note" color="white" text="New Note" />
                    <ToolButton icon="file-image" onClick={this.onAttachClick} color="white"
                        isLocked={this.state.isDeleting || this.state.isPrinting
                            || this.state.isSharing || this.state.isSending}
                        isSelected={this.state.isAttaching} selectedColor="black" text="Attach Media" />

                    <ToolButton icon="print" onClick={this.onPrintClick} color="white"
                        isLocked={this.state.isDeleting || this.state.isAttaching
                            || this.state.isSharing || this.state.isSending}
                        isSelected={this.state.isPrinting} selectedColor="black" text="Print Notes" />

                    <ToolButton icon="go" onClick={this.onSendClick} color="white"
                        isLocked={this.state.isDeleting || this.state.isPrinting
                            || this.state.isSharing || this.state.isAttaching}
                        isSelected={this.state.isSending} selectedColor="black" text="Send by email" />

                    <ToolButton icon="share" onClick={this.onShareClick} color="white"
                        isLocked={this.state.isDeleting || this.state.isPrinting
                            || this.state.isAttaching || this.state.isSending}
                        isSelected={this.state.isSharing} selectedColor="black" text="Share Note" />

                    <ToolButton icon="trash" onClick={this.onDeleteClick} color="white"
                        isLocked={this.state.isAttaching || this.state.isPrinting
                            || this.state.isSharing || this.state.isSending}
                        isSelected={this.state.isDeleting} selectedColor="black" text="Delete" />
                </Toolbar>
                <NotesGrid>
                    {
                        cards
                    }
                </NotesGrid>
                <button onClick={this.onSelectAll} className={"bg-black centered-f-button" + (fProps.active ? " active" : " inactive")}
                    type="button" >
                    <span>{(this.state.isAllSelected ? "Des" : "S") + "elect All"}</span>
                </button>
                <FloattingButton {...fProps} />
            </React.Fragment>
        );
    }
}

export default RNotesList;