import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT': return {
            ...state,
            contacts: state.contacts.filter(contact => contact.id !== action.payload)
        };
        default: return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'Peter Gichia',
                email: 'petergich@test.com',
                phone: '555-555-5555'
            }, 
            {
                id: 2,
                name: 'Emma Njeri',
                email: 'emmanjeri@test.com',
                phone: '777-777-7777'
            }, 
            {
                id: 3,
                name: 'Karen Williams',
                email: 'karenw@test.com',
                phone: '999-999-9999'
            }
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children} 
            </Context.Provider>
        );
    }

}

export const Consumer = Context.Consumer;