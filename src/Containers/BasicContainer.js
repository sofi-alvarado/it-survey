import React from 'react';
import CardItem from '../Components/CardItem';
import BarChart from '../Components/BarChart';
import DonutChart from '../Components/DonutChart';
import myData from '../resultados_totales.json';
import ChartComponent from '../Components/ChartComponent';

const BasicContainer = () => {
    const text = {
        title: 'Información Básica',
        chartTitle: 'Chart Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.',
        question1: '¿Cuál de los siguientes describe tu situación de empleo?',
        question2: '¿Cuál de las siguientes opciones te describe mejor?',
        question3: '¿Cómo describes tu modalidad de trabajo?'
    }

    return (
        <>
            <CardItem
                id='basic-info'
                className='basic-info-card'
                title={text.title}
            />
        {/* Question 1 */}
            <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.situacionDeEmpleo}
                    autoSkipp={false} />}
                question={text.question1}
            />
        {/* Question 2 */}
            <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.softwareDev}
                    autoSkipp={false} />}
                question={text.question2}
            />
        {/* Question 3 */}
            <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<DonutChart
                    chartInfo={myData.modalidadDeTrabajo} />}
                question={text.question3}
            />
        </>
    );
}

export default BasicContainer;
