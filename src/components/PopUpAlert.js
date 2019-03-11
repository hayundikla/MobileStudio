import React, { Component } from 'react';
import { Modal, Button, Col, FormControl, Form } from 'react-bootstrap';

class PopUpAlert extends Component{
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleTitleChange(event) {
        event.preventDefault();
        this.props.card.title = event.target.value;
    }
    handleContentChange(event) {
       event.preventDefault();
       this.props.card.content = event.target.value;
    }

    onEditSubmit(titleInput, contentInput, event){
       event.preventDefault();

       this.props.onEditSubmit(titleInput, contentInput);
       this.handleClose();
    }

    render() {
        const {card, modalType, onClick} = this.props;
        return (
            <Modal show={this.state.show} onHide={this.handleClose} card-id={card.id}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalType} Card #{card.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {(modalType === "Edit") &&
                    <Form onSubmit={onClick}>
                        <div>
                            <Col xs={12}>
                                <FormControl
                                    className={"form-control"}
                                    placeholder={"Card Title"}
                                    defaultValue={card.title}
                                    onChange={this.handleTitleChange}
                                    aria-label={"Card Title"}
                                />
                            </Col>
                            <Col xs={12}>
                                <FormControl
                                    className={"form-control"}
                                    placeholder={"Card content"}
                                    defaultValue={card.content}
                                    onChange={this.handleContentChange}
                                    aria-label={"Card Content"}
                                />
                            </Col>

                            <div className={"form-btns-group"}>
                                <Button className={"btn btn-secondary"} onClick={this.handleClose}>Close</Button>
                                <Button className={"btn btn-primary"} onClick={onClick}>Save</Button>
                            </div>
                        </div>
                    </Form>
                    }
                    {(modalType==="Delete") &&
                    <div className={"confirmation"}>
                        <div className={"alert alert-danger"}>Are you sure you want to Delete record?</div>
                        <div className={"form-btns-group"}>
                            <Button className={"btn btn-secondary"} onClick={this.handleClose}>Close</Button>
                            <Button className={"btn btn-danger"} onClick={onClick}>Confirm {modalType}</Button>
                        </div>
                    </div>
                    }
                </Modal.Body>
            </Modal>

        );
    }
}
export default PopUpAlert;
