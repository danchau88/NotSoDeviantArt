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
        const leftDisplay = (
            <div className='form-left'>
                <Link className='home-title' to='/'><h2>NotSoDeviantArt</h2></Link>
                <h1>JOIN THE LARGEST ART COMMUNITY IN THE WORLD</h1>
            </div>
        )    
        const displayErrors = this.props.errors.map((error, index) => (
            <li key={index}>{error}</li>
        ));
        
        return(
            <div className='form-bg'>

                {leftDisplay}

                <div className='form-right'>
                    <header>
                        <h2>Join NotSoDeviantArt</h2>
                    </header>
                    <div className='toggle-link'>
                        <p>{'Already a NSdeviant? '}
                        <Link to='/login'>Login</Link>
                        </p>
                    </div>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <label>Pick a username </label>
                        <br/>
                        <input 
                            type="text" 
                            value={this.state.username}
                            onChange={this.handleInput('username')} 
                        />
                        <br/>
                        <label>Add your email</label>
                        <br/>
                        <input 
                            type="text" 
                            value={this.state.email}
                            onChange={this.handleInput('email')} 
                        />
                        <br/>
                        <label>Choose a password</label>
                        <br/>
                        <input 
                            type="password" 
                            value={this.state.password}
                            onChange={this.handleInput('password')} 
                        />
                        <br/>
                        <label>Date of Birth</label>
                        <br/>
                        <input 
                            type="date"
                            onChange={this.handleInput('DOB')}
                        />
                        <br/>
                        <button className='form-submit'>JOIN</button>
                    </form>
                    <Link to='/'>
                        <span className='exit-btn'>X</span>
                    </Link>
                    <ul className='errors'>
                        {displayErrors}
                    </ul>
                </div>
            </div>
        )
    }
}

export default SignupForm;