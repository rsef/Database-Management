import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const url = 'http://localhost:4000';


const Hospital = props => (
    <tr>
        <td>{props.hospital.location}</td>
        <td>{props.hospital.hospital_name}</td>
        <td>{props.hospital.blood_type}</td>
        <td>{props.hospital.percentage_stored}</td>
        <td>{props.hospital.date_of_report}</td>
        <td>
        <Link to={"/contact/"+props.hospital.location}>See More Info</Link>
        </td>
    </tr>
    
)
export default class Hospitals extends Component {
    _ismounted = false;

    constructor(props) {
        super(props);
        this.state = {hospitals: []};
    }
    

        componentDidMount() {
            console.log('is mounted hospitals')
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
        onSubmit(e) {
            e.preventDefault();
            const hospitals = {
                location: this.state.location,
                hospital_name: this.hospital_name,
                blood_type: this.state.blood_type,
                percentage_stored: this.percentage_stored,
                date_of_report: this.date_of_report
            };
        }
        hospitalList() {
            return this.state.hospitals.map(function(currentHospital, i) {
              console.log('key',i)
             return <Hospital hospital={currentHospital} key={i} />;
                
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
                        { this.hospitalList() }
                         </tbody>
                    </table>
                </div>
            )
        }
    }