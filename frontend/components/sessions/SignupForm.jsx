import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
        this.handleExit = this.handleExit.bind(this);
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

    handleExit(){
        this.props.history.goBack()
    }

    render(){
        const leftDisplay = (
            <div className='form-left'>
                <Link to='/'><h2><span id='NS'>NotSo</span>DeviantArt</h2></Link>
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
                    <div>
                    <header>
                        <h2>{'Join '}<span id='NS'>NotSo</span>DeviantArt</h2>
                        <div className='toggle-link'>
                            <p>{'Already a NSdeviant? '}
                            <Link to='/login'>Login</Link>
                            </p>
                        </div>
                    </header>

                    <form onSubmit={this.handleSubmit}>
                        <label>Pick a username </label>
                        <input 
                            type="text" 
                            value={this.state.username}
                            onChange={this.handleInput('username')} 
                        />
                        <label>Add your email</label>
                        <input 
                            type="text" 
                            value={this.state.email}
                            onChange={this.handleInput('email')} 
                        />
                        <label>Choose a password</label>
                        <input 
                            type="password" 
                            value={this.state.password}
                            onChange={this.handleInput('password')} 
                        />
                        <label>Date of Birth</label>
                        <input 
                            type="date"
                            onChange={this.handleInput('DOB')}
                        />
                        <button className='form-submit'>JOIN</button>
                    </form>
                    </div>

                    <span 
                        className='exit-btn' 
                        onClick={this.handleExit}
                    >x</span>

                    <ul className='errors'>
                        {displayErrors}
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(SignupForm);