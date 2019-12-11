import React, { Component } from 'react';
import axios from 'axios';

const url = 'http://localhost:4000';

export default class EditAccounts extends Component {
    

    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeSex = this.onChangeSex.bind(this);
        this.onChangeDiseases = this.onChangeDiseases.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstname: '',
            lastname: '',            
            username: '',
            email: '',
            age: '',
            phone: '',
            sex: '',
            diseases: '',
            location: ''
        }
    }

    componentDidMount() {
        console.log('did mount edit')
        axios.get(url+'/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    firstname: response.data[0].firstname,
                    lastname: response.data[0].lastname,
                    email: response.data[0].email,
                    age: response.data[0].age,
                    phone: response.data[0].phone,
                    sex: response.data[0].sex,
                    location: response.data[0].location
                })   
            })
            .catch(function (error) {
                console.log(error);
            })

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
            pass: e.target.value
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
    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        });
    }    


    onSubmit(e) {
        e.preventDefault();
        const User = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            email: this.state.email,
            age: this.state.age,
            phone: this.state.phone,
            sex: this.state.sex,
            location: this.state.location
        };
        console.log(User)
        axios.post(url+'/update/'+this.props.match.params.id, User)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update User Information</h3>
                <form onSubmit={this.onSubmit}>
                    <div 
                    className="form-group"> 
                        <label>First Name: </label>
                        <input 
                                type="text"
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
                        <label>Email: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
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
                        <label>Age: </label>
                        <input 
                                type="number" 
                                className="form-control"
                                value={this.state.age}
                                onChange={this.onChangeAge}
                                />
                    </div>
                    <div className="form-group">
                        <label>Please Choose a Location:    
                            <select value={this.state.value} onChange={this.onChangeLocation}>
                                <option value="Manhattan">Manhattan</option>
                                <option value="Bronx">Bronx</option>
                                <option value="Brooklyn">Brooklyn</option>
                                <option value="Queens">Queens</option>
                                <option value="Staten Island">Staten Island</option>
                            </select>
                        </label>
                    </div>   
                    <div className="form-group">
                        <label>Phone: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.phone}
                                onChange={this.onChangePhone}
                                />
                    </div>
                    <div className="form-group">
                        <label>Diseases: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.diseases}
                                onChange={this.onChangeDiseases}
                                />
                    </div>
                                     
                    <div className="form-group">
                        <input type="submit" value="Update User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}