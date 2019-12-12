import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const url = 'http://localhost:4000';


const Account = props => (
    <tr>
        <td>{props.user.firstname}</td>
        <td>{props.user.lastname}</td>
        <td>{props.user.email}</td>
        <td>{props.user.age}</td>
        <td>{props.user.phone}</td>
        <td>{props.user.sex}</td>
        <td>{props.user.location}</td>
        <td>
        <Link to={"/edit/"+props.user.userID}>Create/Update Donar</Link>
        </td>
        <td>
        <Link to={"/delete/"+props.user.userID}>Delete</Link>
        </td>
    </tr>
    
)
export default class ListAccounts extends Component {
    _ismounted = false;

    constructor(props) {
        super(props);
        this.state = {users: []};
    }
    

        componentDidMount() {
            console.log('is mounted')
                axios.get(url +'/users/')
                    .then(response => {
                    this.setState({users: response.data});
                    })
                    .catch(function (error) {
                    console.log(error);
                    })
        }
        componentDidUpdate(prevProps) {
            console.log(prevProps.data)
            if(prevProps.data !== this.props.data){ // break condition to stop rerendering
                axios.get(url +'/users/')
                    .then(response => {
                    this.setState({users: response.data});
                    })
                .catch(function (error) {
                    console.log('prob',error);
                })   
            }
        }
        userList() {
            return this.state.users.map(function(currentUser, i) {
              console.log('key',i)
             return <Account user={currentUser} key={i} />;
                
            });
        }
    
        render() {
            return (
                <div>
                    <h3>Signup List</h3>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Phone</th>
                                <th>Sex</th>
                                <th>Location</th>
                                <th>Create Donar</th>
                                <th>Delete User</th>
                            </tr>
                        </thead>
                        <tbody>
                        { this.userList() }
                         </tbody>
                    </table>
                </div>
            )
        }
    }