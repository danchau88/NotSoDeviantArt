import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            DOB: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render(){
        const displayErrors = this.props.errors.map((error, index) => (
            <li key={index}>{error}</li>
        ));
        return(
            <div className='signup'>
                <header>
                    <h2>Join NotSoDeviantArt</h2>
                    <br/>
                    <p>Already a NSdeviant?
                        <Link to='/login'>Log In</Link>
                    </p>
                </header>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>Pick a username
                        <input 
                          type="text" 
                          value={this.state.username}
                          onChange={this.handleInput('username')} 
                        />
                    </label>
                    <br/>
                    <label>Add your email
                        <input 
                          type="text" 
                          value={this.state.email}
                          onChange={this.handleInput('email')} 
                        />
                    </label>
                    <br/>
                    <label>Choose a password
                        <input 
                          type="password" 
                          value={this.state.password}
                          onChange={this.handleInput('password')} 
                        />
                    </label>
                    <br/>
                    <label>Date of Birth
                        <input 
                            type="date"
                            onChange={this.handleInput('DOB')}
                        />
                    </label>
                    <br/>
                    <button>JOIN</button>
                </form>
                <ul className='errors'>
                    {displayErrors}
                </ul>
            </div>
        )
    }
}

export default SignupForm;