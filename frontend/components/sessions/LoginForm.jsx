import React from 'react';
import {Link} from 'react-router-dom';

class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
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
            <div className='login-bg'>
                <div className='login'>
                    <header>
                        <h2>Log In</h2>
                    </header>
                    <div className='toggle-link'>
                        <p>{'Become a deviant. '} 
                        <Link to='/signup'>Join</Link>
                        </p>
                    </div>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <label>Username</label>
                        <br/>  
                        <input 
                            type="text" 
                            value={this.state.username}
                            onChange={this.handleInput('username')} 
                        />  
                        <br/>
                        <label>Password</label>
                        <br/>
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                        <br/>
                        <button className='form-submit'>LOG IN</button>
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

export default LoginForm;