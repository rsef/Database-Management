import React, { Component } from 'react';
import axios from 'axios';

export default class DeletedUserPage extends Component {
    componentDidMount() {
        console.log('is mounted')
            axios.get('http://localhost:4000/delete/'+this.props.match.params.id)
                .then(response => {
                this.setState({users: response.data});
                })
                .catch(function (error) {
                console.log(error);
                })
            }
    render() {
        return (
            <div>
                <div
                    type="text"
                    value= {this.props.match.params.id}
                >
                <label> Deleted User </label>            
                </div>
            </div>
            
        )
    }
}