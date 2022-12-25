import React, { Component } from 'react';

import { ListGroup, ListGroupItem } from 'reactstrap';
import App from './App';

export default class CategoryList extends Component {

    state = {
        categories: [
            { categoryId: 1, categoryName: "Cocacola" },
            { categoryId: 2, categoryName: "Fanta" }
        ],

        currentCategory:""
    };

    changeCategory = category => {
        this.setState({ currentCategory: category.categoryName });
    };

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ListGroup>
                    {this.state.categories.map(category => (
                        <ListGroupItem onClick={() => this.changeCategory(category)}
                            key={category.categoryId}>{category.categoryName}</ListGroupItem>))}
                </ListGroup>
            </div>
        )
    }
}

