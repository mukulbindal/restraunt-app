import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

export class DishDetailComponent extends Component {
    constructor(props) {
        super(props);

    }
    renderComments(comment) {
        return (
            <div key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author} , {comment.date}</p>
            </div>
        );
    }
    render() {
        const dish = this.props.dish;
        return (
            <div className='row'>
                <Card className='col-12 col-md-5 m-1'>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                <div className='col-12 col-md-5 m-3'>
                    <h1>Comments</h1>
                    {this.props.dish.comments.map(
                        comment => {
                            return this.renderComments(comment);
                        }
                    )}
                </div>
            </div>
        );
    }
}
