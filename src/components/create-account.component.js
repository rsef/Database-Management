import React, { Component } from 'react';

export default class CreateAccount extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeSex = this.onChangeSex.bind(this);
        this.onChangeDiseases = this.onChangeDiseases.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstname: '',
            lastname: '',            
            username: '',
            email: '',
            password: '',
            age: '',
            phone: '',
            sex: '',
            diseases: '',
        }
    }

//Update the current state of object aspect
onChangeFirstName(e) {
    this.setState({
        firstname: e.target.value
    });
}
onChangeLastName(e) {
    this.setState({
        lastname: e.target.value
    });
}
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onChangeSex(e) {
        this.setState({
            sex: e.target.value
        });
    }

    onChangeDiseases(e) {
        this.setState({
            diseases: e.target.value
        });
    }
    onSubmit(e) { // Reset object after inputting data
        e.preventDefault(); // untill DB implemented prevent it from functioning
        
        console.log(`Form submitted:`);
        console.log(`Firstname: ${this.state.firstname}`);
        console.log(`Lastname: ${this.state.lastname}`);                
        console.log(`Username: ${this.state.username}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Password: ${this.state.password}`);
        console.log(`Age: ${this.state.age}`);
        console.log(`Phone: ${this.state.phone}`);
        console.log(`Sex: ${this.state.sex}`);
        console.log(`Diseases: ${this.state.diseases}`);

        this.setState({
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            age: '',
            phone: '',
            sex: '',
            diseases: '',
        })
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>First Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.firstname}
                                onChange={this.onChangeFirstName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.lastname}
                                onChange={this.onChangeLastName}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="SexOptions" 
                                    id="SexMale" 
                                    value="Male"
                                    checked={this.state.sex==='Male'} 
                                    onChange={this.onChangeSex}
                                    />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="SexOptions" 
                                    id="SexFemale" 
                                    value="Female" 
                                    checked={this.state.sex==='Female'} 
                                    onChange={this.onChangeSex}
                                    />
                            <label className="form-check-label">Female</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Sign up" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}