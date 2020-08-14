import React from 'react';

 
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: ''};
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount(){
        this.props.getAllDeviations()
    }

    handleInput(e) {
        this.setState({title: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push("/")
        this.props.findDeviations(this.state.title)
    }

    render() {
        return(
            <div className='search-bar'>
                <label><i className="fas fa-search"></i>{' Search NotSoDeviantArt'}</label>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Deviation title..." 
                        onChange={this.handleInput}
                    />
                    {/* <button className='nav-button'>SEARCH</button> */}
                </form>
            </div>
        )
    }
}

export default SearchForm;