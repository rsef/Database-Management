import React, { Component } from 'react';
import axios from 'axios';

export default class ThankYouPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            hospital_name: '',            
        }
    }
    componentDidMount() {
        console.log('did mount thankyou')
        axios.get('http://localhost:4000/thankyou/'+this.props.match.params.location)
            .then(response => {
                console.log(response,"test");  
                this.setState({
                    location: response.data.location,
                    hospital_name: response.data.hospital_name,
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
                <label value= {this.state.location}
                    >Thank you: </label>
                <input 
                        type="text"
                        className="form-control"
                        value={this.state.location || "estset"}
                        />
            </div>
        )
    }
}