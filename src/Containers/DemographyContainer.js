import React from 'react';
import CardItem from '../Components/CardItem';
import BarChart from '../Components/BarChart';
import DonutChart from '../Components/DonutChart';
import myData from '../resultados_totales.json';
import ChartComponent from '../Components/ChartComponent';

const DemographyContainer = () => {
    const text = {
        title: 'Demografía',
        chartTitle: 'Chart Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.',
        question1: '¿Cuál es tu edad?',
        question2: '¿Cuál de los siguientes te describe mejor?',
        question3: '¿Alguna vez has trabajado en call-center?',
        question4: '¿Consideras tener alguno de los siguientes atributos personales?',
        question5: '¿En cuál departamento de El Salvador vives?',
    }

    return (
        <>
            <CardItem
                id='demography'
                className='demography-card'
                title={text.title}
            />
            {/* Question 1 */}
              <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.edad}
                    autoSkipp={false} />}
                question={text.question1}
            />
            {/* Question 2 */}
                <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<DonutChart
                    chartInfo={myData.genero} />}
                question={text.question2}
            />
            {/* Question 3 */}
                <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.callcenter}
                    autoSkipp={false} />}
                question={text.question3}
            />
            {/* Question 4 */}
                <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.atributos}
                    autoSkipp={false} />}
                question={text.question4}
            />
            {/* Question 5 */}
                <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.departamento}
                    autoSkipp={false} />}
                question={text.question5}
            />
        </>

    );
}

export default DemographyContainer;