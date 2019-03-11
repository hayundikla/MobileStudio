import React, { Component } from 'react';
import CardItem from './CardItem';
import {Col, Row} from 'react-bootstrap';

class Cards extends Component{
    constructor(props){
        super(props);
        this.state = {
            cards: props.cardsItems
        };
        this.onDelete = this.onDelete.bind(this);
       // this.onEdit = this.onEdit.bind(this);

    }
    componentWillMount(){
        const cards = this.getCards();
        this.setState({
            cards
        });
    }

    getCards(){
        return this.state.cards;
    }

    onDelete(id){
        const cards = this.getCards();

        const filteredCards = cards.filter(card =>{
            return card.id !== id;
        });
        this.setState({
            cards: filteredCards
        });
    }
    render() {
        return (
            <Row>
                <Col className={"cards-list"} xs={12}>
                    {
                        this.state.cards.map(card =>{
                            return(
                                <Col xs={12} key={card.title}>
                                    <CardItem
                                        onDelete = {this.onDelete}
                                        onEdit = {this.onEdit}
                                        card={card}
                                        key={card.id}
                                        {...card}
                                    />
                                </Col>
                            );
                        })
                    }
                </Col>
            </Row>
        );
    }
}

export default Cards;
