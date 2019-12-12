import React, { Component } from 'react';
import axios from 'axios';

const url = 'http://localhost:4000';

const Thankyou = props => (
    <tr>
        <td>{props.thankyou.firstname}</td>
        <td>{props.thankyou.lastname}</td>
        <td>{props.thankyou.hospital_name}</td>
        <td>{props.thankyou.location}</td>
        <td>{props.thankyou.date_of_report}</td>
    </tr>
    
)
export default class ThankYouPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            location: '',
            hospital_name: '',     
            date_of_report: '',       
        }
    }
    componentDidMount() {
        console.log('did mount thankyou')
        axios.get(url+'thankyou/'+this.props.match.params.location)
            .then(response => {
                console.log(response,"test");  
                this.setState({
                    location: response.data[0].location,
                    hospital_name: response.data[0].hospital_name,
                    firstname: response.data[0].firstname,
                    
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
  
    }
    render() {
        return (
            <div 
            className="form-group"> 
                <label defaultValue= {this.state.location}
                    >Thank you: </label>
                <input 
                        type="text"
                        className="form-control"
                        defaultValue={this.state.location || "estset"}
                        />
            </div>
        )
    }
}