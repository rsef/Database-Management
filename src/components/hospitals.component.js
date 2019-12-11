import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const url = 'http://localhost:4000';


const Hospital = props => (
    <tr>
        <td className={props.hospital.information ? 'deleted' : ''}>{props.hospital.location}</td>
        <td className={props.hospital.information ? 'deleted' : ''}>{props.hospital.hospital_name}</td>
        <td className={props.hospital.information ? 'deleted' : ''}>{props.hospital.percentage_stored}</td>
        <td className={props.hospital.information ? 'deleted' : ''}>{props.hospital.date_of_report}</td>
    </tr>
    
)
export default class Hospitals extends Component {
    _ismounted = false;

    constructor(props) {
        super(props);
        this.state = {hospitals: []};
    }
    

        componentDidMount() {
            console.log('is mounted')
                axios.get(url +'/hospitals/')
                    .then(response => {
                    this.setState({hospitals: response.data});
                    })
                    .catch(function (error) {
                    console.log(error);
                    })
        }
        componentDidUpdate(prevProps) {
            console.log(prevProps.data)
            if(prevProps.data !== this.props.data){ // break condition to stop rerendering
                axios.get(url +'/hospitals/')
                    .then(response => {
                    this.setState({hospitals: response.data});
                    })
                .catch(function (error) {
                    console.log('prob',error);
                })   
            }
        }
        hospitalList() {
            return this.state.hospitals.map(function(currentHospital, i) {
              console.log('key',i)
             return <Hospital hospital={currentHospital} key={i} />;
                
            });
        }
    
        render() {
            return (
                <div>
                    <h3>Hospital Status</h3>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>Hospital Name</th>
                                <th>Blood Type</th>
                                <th>% Availiable</th>
                                <th>As of Date</th>

                            </tr>
                        </thead>
                        <tbody>
                        { this.hospitalList() }
                         </tbody>
                    </table>
                </div>
            )
        }
    }