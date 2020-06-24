import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
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
                        <h2>Log In</h2>
                    </header>
                    <div className='toggle-link'>
                        <p>{'Become a NSdeviant. '} 
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

export default withRouter(LoginForm);