import React, { Component } from 'react';
import './login.css';




class LoginForm extends Component {
    state = {
        username: null,
        password: null
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
            <div className='loginFormWrapper'>
                <form className='loginFormContainer' onSubmit={this.handleOnSubmit}>
                    <h1>Login</h1>

                    <div className="loginFormInput">
                        <label>Username</label>
                        <input className="usernameInput"
                               type="text"
                               id="username"
                               onChange={this.handleOnChange}
                        />
                    </div>

                    <div className="loginFormInput">
                        <label>Passoword</label>
                        <input className="passwordInput"
                               type="password"
                               id="password"
                               onChange={this.handleOnChange}
                        />
                    </div>

                    <div className="loginFormInput">
                        <button className='loginFormButtom'>Login</button>
                    </div>
                </form>
            </div>
        )
    }

};

export default LoginForm;