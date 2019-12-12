import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const url = 'http://localhost:4000';


const Elligible = props => (
    <tr>
        <td>{props.elligible.location}</td>
        <td>{props.elligible.hospital_name}</td>
        <td>{props.elligible.blood_type}</td>
        <td>{props.elligible.percentage_stored}</td>
        <td>{props.elligible.date_of_report}</td>
    </tr>
    
    
)
export default class Elligble extends Component {
    _ismounted = false;

    constructor(props) {
        super(props);
        this.state = {elligible: []};
    }
    

        componentDidMount() {
            console.log('is mounted elligible')
                axios.get(url +'/hospitals/'+this.props.match.params.location)
                    .then(response => {
                    this.setState({elligible: response.data});
                    })
                    .catch(function (error) {
                    console.log(error);
                    })
        }
        componentDidUpdate(prevProps) {
            console.log(prevProps.data,"tst")
            if(prevProps.data !== this.props.data){ // break condition to stop rerendering
                axios.get(url +'/hospitals/'+this.props.match.params.location)
                    .then(response => {
                    this.setState({elligible: response.data});
                    })
                .catch(function (error) {
                    console.log('prob',error);
                })   
            }
        }
        elligibleList() {
            return this.state.elligible.map(function(currentelligible, i) {
              console.log('key',i)
             return <Elligble elligible={currentelligible} key={i} />;
            });
        }
        onChangeLocation(e) {
            this.setState({
                location: e.target.value
            });
        }
        onChangeBloodType(e) {
            this.setState({
                blood_type: e.target.value
            });
        }
        render() {
            return (
                <div>
                    <h3>Hospital Status</h3>                             
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>Hospital Location</th>
                                <th>Hospital Name</th>
                                <th>Blood Type</th>
                                <th>Blood Bags Availiable</th>
                                <th>As of Date</th>

                            </tr>
                        </thead>
                        <tbody>
                        { this.elligibleList() }
                         </tbody>
                    </table>
                </div>
            )
        }
    }