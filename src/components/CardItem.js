import React, { Component } from 'react';
import EditIcon from '../images/pencil-alt-solid.svg'
import DeleteIcon from '../images/delete.svg'
import CardIcon from '../images/heartbeat-solid.svg'
import PopUpAlert from './PopUpAlert'

class CardItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEdit: false,
            isDelete: false,
            popUp: false,
            cardIcon: {CardIcon},
            key: this.props
        };
        this.onDelete  = this.onDelete.bind(this);
        this.onEdit  = this.onEdit.bind(this);
        this.onEditSubmit  = this.onEditSubmit.bind(this);
        this.onDeleteSubmit  = this.onDeleteSubmit.bind(this);
    }

    onEdit(){
        this.setState({
            isEdit: true,
            isDelete: false,
            popup: "edit"
        });
    }

    onDelete(){
        this.setState({
            isEdit: false,
            isDelete: true,
            popup: "delete"
        });
    }

    onEditSubmit(popUpAlertData,event){
        this.setState({
            isEdit: false,
            title: popUpAlertData.title,
            content: popUpAlertData.content
        });
    }
    onDeleteSubmit() {
        this.props.onDelete(this.props.id);
        this.setState({
            isDelete: false
        });
    }
    render() {
        const {card} = this.props;
        return (
            <div className="edit-description">
                {this.state.isEdit ?   <PopUpAlert card={card} onClick={e => this.onEditSubmit(card,e)} modalType={"Edit"} /> : null }
                {this.state.isDelete ? <PopUpAlert card={card} onClick={this.onDeleteSubmit} modalType={"Delete"} /> : null}
                <div className={"card-item green-border"}>
                    <div>
                        <div className={"card-body"}>
                            <img variant="top"   src={CardIcon}    className={"card-icon "} alt={""} />
                            <img variant="top"   src={DeleteIcon}  className={"delete-icon"} onClick={this.onDelete}  alt={"delete record"}/>
                            <img variant="left"  src={EditIcon}    className={"edit-icon"} onClick={this.onEdit} alt={"edit record"}/>

                            <div className={"card-title"}>{card.title}</div>
                            <div className={"card-content themeColor"}>{card.content}</div>
                            <div className={"author"}>{card.author}</div>
                            <div className={"date"}>{card.date}</div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default CardItem;
