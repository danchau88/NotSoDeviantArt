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
            <div>
                <header>
                    <h2>Log In</h2>
                    <br/>
                    <p>Become a deviant.
                        <Link to='/signup'>Join</Link>
                    </p>
                </header>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>Username
                        <input 
                            type="text" 
                            value={this.state.username}
                            onChange={this.handleInput('username')} 
                        />
                    </label>    
                    <br/>
                    <label>Password
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <br/>
                    <button>LOG IN</button>
                </form>
                <ul className='errors'>
                    {displayErrors}
                </ul>
            </div>
        )
    }
}

export default LoginForm;