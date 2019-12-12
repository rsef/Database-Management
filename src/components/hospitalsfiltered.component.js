import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const url = 'http://localhost:4000';


const HospitalFiltered = props => (
    <tr>
        <td>{props.hospitalfiltered.location}</td>
        <td>{props.hospitalfiltered.hospital_name}</td>
        <td>{props.hospitalfiltered.blood_type}</td>
        <td>{props.hospitalfiltered.percentage_stored}</td>
        <td>{props.hospitalfiltered.date_of_report}</td>
        <td>
        <Link to={"/email/"+props.hospitalfiltered.location+"/"+props.hospitalfiltered.blood_type+"/"}>Find Elligible Donars</Link>
        </td>
    </tr>
    
    
)
export default class HospitalsFiltered extends Component {
    _ismounted = false;

    constructor(props) {
        super(props);
        this.state = {filteredhospitals: []};
    }
    

        componentDidMount() {
            console.log('is mounted hospitals f')
                axios.get(url +'/hospitals/'+this.props.match.params.location)
                    .then(response => {
                    this.setState({filteredhospitals: response.data});
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
                    this.setState({filteredhospitals: response.data});
                    })
                .catch(function (error) {
                    console.log('prob',error);
                })   
            }
        }
        fhospitalList() {
            return this.state.filteredhospitals.map(function(currentFHospital, i) {
              console.log('key',i)
             return <HospitalFiltered hospitalfiltered={currentFHospital} key={i} />;
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
                        { this.fhospitalList() }
                         </tbody>
                    </table>
                </div>
            )
        }
    }