import React from 'react';
import DeviationsIndexItem from './DeviationsIndexItem';

class DeviationsIndex extends React.Component{
    componentDidMount(){
        this.props.getAllUsers()
        .then(() => this.props.getAllDeviations())
        // .then(() => this.props.getAllUsers())
    }

    render() {
        const {deviations, users} = this.props;
        if (!deviations || !users) return (
            <div className='loader'>
                <div className="loadingio-spinner-bean-eater-916qsk75w7e"><div className="ldio-c4ah9yqoipt">
                <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>
                </div></div>
            </div>
        );
        const devItems = deviations.map(deviation => 
            <DeviationsIndexItem deviation={deviation} artist={users[deviation.artist_id]} key={deviation.id} />
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