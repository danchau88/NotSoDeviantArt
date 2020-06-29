import React from 'react';
import DeviationsIndexItem from './DeviationsIndexItem';

class DeviationsIndex extends React.Component{
    componentDidMount(){
        this.props.getAllDeviations()
    }

    render() {
        const {deviations} = this.props;
        const devItems = deviations.map(deviation => 
            <DeviationsIndexItem deviation={deviation} key={`dev-${deviation.id}`} />
        )
        return(
            <ul className='dev-index'>
                {devItems}
            </ul>
        )
    }
}

export default DeviationsIndex;