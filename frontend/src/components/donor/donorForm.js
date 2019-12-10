import React, { Component } from 'react';
import './donorForm.css';




class DonorForm extends Component {
    state = {
        firstname: null,
        lastname: null,
        zipcode: null,
        bloodType: null
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        //TODO: do a async to post to database
        
        // alert(' thanks you');
        // console.log(this.props)

        // this.props.history.push('/')
    };

    render () {
        return (
            <div className='donorFormWrapper'>
                <form className='donorFormContainer' onSubmit={this.handleOnSubmit}>
                    <h1>Donor Form</h1>

                    <div className="donorFormInput">
                        <label>First Name:</label>
                        <input className="firstnameInput"
                               type="text"
                               id="firstname"
                               onChange={this.handleOnChange}
                        />
                    </div>

                    <div className="donorFormInput">
                        <label>Last Name:</label>
                        <input className="lastnameInput"
                               type="text"
                               id="lastname"
                               onChange={this.handleOnChange}
                        />
                    </div>

                    <div className="donorFormInput">
                        <label>Zipcode:</label>
                        <input className="firstnameInput"
                               type="text"
                               id="zipcode"
                               onChange={this.handleOnChange}
                        />
                    </div>

                    <div className="donorFormInput">
                        <label>Blood Type:</label>
                        <input className="firstnameInput"
                               type="text"
                               id="bloodType"
                               onChange={this.handleOnChange}
                        />
                    </div>

                    <div className="donorFormInput">
                        <button className='donorFormButtom'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }

};

export default DonorForm;