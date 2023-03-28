import React from 'react';
import CardItem from '../Components/CardItem';
import BarChart from '../Components/BarChart';
import myData from '../resultados_totales.json';
import ChartComponent from '../Components/ChartComponent';
import DonutChart from '../Components/DonutChart';

const FeedbackContainer = () => {
    const text = {
        title: 'Feedback',
        chartTitle: 'Chart Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.',
        question1: '¿Cómo sientes que fue la duración de esta encuesta?',
        question2: '¿Qué tan difícil fue completar esta encuesta?',
        question3: '¿Con cuántas estrellas evaluarías esta encuesta?',
    }

    return (
        <>
            <CardItem
                id='feedback'
                className='feedback-card'
                title={text.title}
            />
        {/* Question 1 */}
              <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.duracion}
                    autoSkipp={false} />}
                question={text.question1}
            />
        {/* Question 2 */}
              <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<DonutChart
                    chartInfo={myData.dificultad} />}
                question={text.question2}
            />
        {/* Question 3 */}
              <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.evaluacion}
                    autoSkipp={false} />}
                question={text.question3}
            />
        </>
    );
}

export default FeedbackContainer;