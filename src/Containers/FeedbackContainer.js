import React from 'react';
import CardItem from '../Components/CardItem';
import BarChart from '../Components/BarChart';
import myData from '../resultados_totales.json';
import textData from '../text';
import ChartComponent from '../Components/ChartComponent';
import DonutChart from '../Components/DonutChart';

const FeedbackContainer = () => {
    const text = {
        question1: '¿Cómo sientes que fue la duración de esta encuesta?',
        question2: '¿Qué tan difícil fue completar esta encuesta?',
        question3: '¿Con cuántas estrellas evaluarías esta encuesta?',
    }

    return (
        <>
            <CardItem
                id='feedback'
                className='feedback-card'
                title={textData.cards.feedback.title}
                chartDescription={textData.cards.feedback.description}
            />
        {/* Question 1 */}
              <ChartComponent
                title={textData.cards.feedback.title}
                chartTitle={textData.chartDescription.duracion.title}
                chartDescription={textData.chartDescription.duracion.description}
                chart={<BarChart
                    chartInfo={myData.duracion}
                    autoSkipp={false} />}
                question={text.question1}
            />
        {/* Question 2 */}
              <ChartComponent
                title={textData.cards.feedback.title}
                chartTitle={textData.chartDescription.dificultad.title}
                chartDescription={textData.chartDescription.dificultad.description}
                chart={<DonutChart
                    chartInfo={myData.dificultad} />}
                question={text.question2}
            />
        {/* Question 3 */}
              <ChartComponent
                title={textData.cards.feedback.title}
                chartTitle={textData.chartDescription.evaluacion.title}
                chartDescription={textData.chartDescription.evaluacion.description}
                chart={<BarChart
                    chartInfo={myData.evaluacion}
                    autoSkipp={false} />}
                question={text.question3}
            />
        </>
    );
}

export default FeedbackContainer;