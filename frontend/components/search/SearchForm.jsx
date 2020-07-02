import React from 'react';
import {Link} from 'react-router-dom';
 
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleExit = this.handleExit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    
    componentDidMount(){
        this.props.getAllDeviations()
    }

    handleInput(e) {
        this.props.searchDeviations(e.target.value)
    }


    handleExit(){
        this.props.history.goBack()
    }

    render() {
        return(
            <div className='search-bg'>
                <div className='search-modal'>
                    <label>Search NotSoDeviantArt</label>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Deviation title..." 
                            onChange={this.handleInput}
                        />
                        <button className='nav-button'><Link to='/'>SEARCH</Link></button>
                    </form>
                    
                    <span className="search-exit" onClick={this.handleExit}>x</span>
                </div>
            </div>
        )
    }
}

export default SearchForm;