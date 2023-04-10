import React from 'react';
import CardItem from '../Components/CardItem';
import textData from '../text';

const GeneralContainer = () => {
    return (
                <CardItem
                id='general'
                className='general-card' 
                title={textData.cards.general.title}
                chartDescription={textData.cards.general.description}
                />
    );
}

export default GeneralContainer;