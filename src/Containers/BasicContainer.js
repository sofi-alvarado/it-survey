import React from 'react';
import CardItem from '../Components/CardItem';
import BarChart from '../Components/BarChart';
import DonutChart from '../Components/DonutChart';
import myData from '../resultados_totales.json';
import textData from '../text';
import ChartComponent from '../Components/ChartComponent';

const BasicContainer = () => {
    const text = {
        question1: '¿Cuál de los siguientes describe tu situación de empleo?',
        question2: '¿Cuál de las siguientes opciones te describe mejor?',
        question3: '¿Cómo describes tu modalidad de trabajo?'
    }

    return (
        <>
            <CardItem
                id='basic-info'
                className='basic-info-card'
                title={textData.cards.basicInformation.title}
                chartDescription={textData.cards.basicInformation.description}
            />
        {/* Question 1 */}
            <ChartComponent
                title={textData.cards.basicInformation.title}
                chartTitle={textData.chartDescription.situacionDeEmpleo.title}
                chartDescription={textData.chartDescription.situacionDeEmpleo.description}
                chart={<BarChart
                    chartInfo={myData.situacionDeEmpleo}
                    autoSkipp={false} />}
                question={text.question1}
            />
        {/* Question 2 */}
            <ChartComponent
                title={textData.cards.basicInformation.title}
                chartTitle={textData.chartDescription.softwareDev.title}
                chartDescription={textData.chartDescription.softwareDev.description}
                chart={<BarChart
                    chartInfo={myData.softwareDev}
                    autoSkipp={false} />}
                question={text.question2}
            />
        {/* Question 3 */}
            <ChartComponent
                title={textData.cards.basicInformation.title}
                chartTitle={textData.chartDescription.modalidadDeTrabajo.title}
                chartDescription={textData.chartDescription.modalidadDeTrabajo.description}
                chart={<DonutChart
                    chartInfo={myData.modalidadDeTrabajo} />}
                question={text.question3}
            />
        </>
    );
}

export default BasicContainer;
