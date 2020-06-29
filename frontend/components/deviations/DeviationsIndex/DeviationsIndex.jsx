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
            <div className='outer-box'>
                <div className='dev-index-navbar'></div>
                <section className='dev-index'>
                    {devItems}
                </section>
            </div>
        )
    }
}

export default DeviationsIndex;