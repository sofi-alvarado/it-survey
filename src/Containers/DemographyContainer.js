import React from 'react';
import CardItem from '../Components/CardItem';
import BarChart from '../Components/BarChart';
import DonutChart from '../Components/DonutChart';
import myData from '../resultados_totales.json';
import textData from '../text';
import ChartComponent from '../Components/ChartComponent';

const DemographyContainer = () => {
    const text = {
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
                title={textData.cards.demography.title}
                chartDescription={textData.cards.demography.description}
            />
            {/* Question 1 */}
              <ChartComponent
                title={textData.cards.demography.title}
                chartTitle={textData.chartDescription.edad.title}
                chartDescription={textData.chartDescription.edad.description}
                chart={<BarChart
                    chartInfo={myData.edad}
                    autoSkipp={false} />}
                question={text.question1}
            />
            {/* Question 2 */}
                <ChartComponent
                title={textData.cards.demography.title}
                chartTitle={textData.chartDescription.genero.title}
                chartDescription={textData.chartDescription.genero.description}
                chart={<DonutChart
                    chartInfo={myData.genero} />}
                question={text.question2}
            />
            {/* Question 3 */}
                <ChartComponent
                title={textData.cards.demography.title}
                chartTitle={textData.chartDescription.callcenter.title}
                chartDescription={textData.chartDescription.callcenter.description}
                chart={<BarChart
                    chartInfo={myData.callcenter}
                    autoSkipp={false} />}
                question={text.question3}
            />
            {/* Question 4 */}
                <ChartComponent
                title={textData.cards.demography.title}
                chartTitle={textData.chartDescription.atributos.title}
                chartDescription={textData.chartDescription.atributos.description}
                chart={<BarChart
                    chartInfo={myData.atributos}
                    autoSkipp={false} />}
                question={text.question4}
            />
            {/* Question 5 */}
                <ChartComponent
                title={textData.cards.demography.title}
                chartTitle={textData.chartDescription.departamento.title}
                chartDescription={textData.chartDescription.departamento.description}
                chart={<BarChart
                    chartInfo={myData.departamento}
                    autoSkipp={false} />}
                question={text.question5}
            />
        </>

    );
}

export default DemographyContainer;