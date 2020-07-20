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
        this.demoLogin = this.demoLogin.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors()
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

    demoLogin(){
        this.props.demoUser()
    }

    render(){
        const leftDisplay = (
            <div className='form-left'>
                <div className='form-left-content'>
                    <Link to='/'><h2><span id='NS'>NotSo</span>DeviantArt</h2></Link>
                    <h1>JOIN THE LARGEST ART COMMUNITY IN THE WORLD</h1>
                    <p>Explore and discover art, become a better artist, connect with others over mutual hobbies, or buy and sell work – you can do it all here.</p>
                    <div id='credit'>
                        <label>ART BY</label>
                        <Link to='/deviations/11' id='user'>pjacubinas
                            <span className="fa-stack">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-star fa-stack-1x fa-inverse"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        )    
        
        const displayErrors = (
            <ul className='errors'>
                {this.props.errors.map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>
        )
        return(
            <div className='form-bg'>

                {leftDisplay}

                <div className='form-right'>
                    <div className='form-right-content'>

                    <header>
                        <h2>{'Log In '}<span id='NS'>NS</span>Deviant</h2>
                        <div className='toggle-link'>
                            <p>{'Become a NSdeviant. '} 
                            <Link to='/signup'>Join</Link>
                            </p>
                        </div>
                        <button className='demo-btn' onClick={this.demoLogin}>
                            DEMO IT
                        </button>
                    </header>
    
                    <form onSubmit={this.handleSubmit}>
                        <label>Username</label>
                        <input 
                            type="text"
                            placeholder="Username here"  
                            value={this.state.username}
                            onChange={this.handleInput('username')} 
                        />  
                        <label>Password</label>
                        <input 
                            type="password"
                            placeholder="Password here"  
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                        <button className='form-submit'>LOG IN</button>
                    </form>

                    {displayErrors}
                    
                    </div>
                    <span 
                        className='exit-btn'
                        onClick={this.handleExit}
                    >x</span>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginForm);