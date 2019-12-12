import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const url = 'http://localhost:4000';


const Donar = props => (
    <tr>
        <td>{props.donar.firstname}</td>
        <td>{props.donar.lastname}</td>
        <td>{props.donar.email}</td>
        <td>{props.donar.phone}</td>
        <td>{props.donar.location}</td>
        <td>{props.donar.bloodtype}</td>
    </tr>
    
)
export default class ListDonars extends Component {
    _ismounted = false;

    constructor(props) {
        super(props);
        this.state = {donars: []};
    }
    

        componentDidMount() {
            console.log('is mounted contacts',this.props.match.params)
                axios.get(url +'/email/'+this.props.match.params.location+"/"+this.props.match.params.blood_type)
                    .then(response => {
                    this.setState({donars : response.data});
                    })
                    .catch(function (error) {
                    console.log(error);
                    })
                    axios.get(url +'/email/'+this.props.match.params.location+"/"+this.props.match.params.blood_type)
                    .then(response => {
                    this.setState({donars : response.data});
                    })
                    .catch(function (error) {
                    console.log(error);
                    })
        }
        componentDidUpdate(prevProps) {
            console.log(prevProps.data)
            if(prevProps.data !== this.props.data){ // break condition to stop rerendering
                axios.get(url +'/email/'+this.props.match.params.location+"/"+this.props.match.params.blood_type)
                    .then(response => {
                    this.setState({donars: response.data});
                    })
                .catch(function (error) {
                    console.log('prob',error);
                })   
            }
        }
        donarList() {
            return this.state.donars.map(function(currentDonar, i) {
              console.log('key',i)
             return <Donar donar={currentDonar} key={i} />;
                
            });
        }
    
        render() {
            return (
                <div>
                    <h3>Contact Information for Users With Matching Bloodtypes</h3>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Location</th>
                                <th>Blood Type</th>

                            </tr>
                        </thead>
                        <tbody>
                        { this.donarList() }
                         </tbody>
                    </table>
                </div>
            )
        }
    }