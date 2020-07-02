import React from 'react';

class SearchForm extends React.Component {
    render() {
        return(
            <div className='search-bg'>
                <div className='search-content'>
                    <form>
                        <input type="text" placeholder="Pick a username" />
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchForm;