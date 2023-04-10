import React from 'react';
import CardItem from '../Components/CardItem';
import BarChart from '../Components/BarChart';
import DonutChart from '../Components/DonutChart';
import myData from '../resultados_totales.json';
import textData from '../text';
import ChartComponent from '../Components/ChartComponent';

const TecnologyContainer = () => {
    const text = {
        question1: '¿Con cuál de los siguientes lenguajes de programación, scripting o markup has trabajado extensivamente durante el último año?',
        question2: '¿Con cuál de los siguientes proveedores de nube has trabajado extensivamente durante el último año?',
        question3: '¿Con cuál de las siguientes frameworks y tecnologías web has trabajado extensivamente durante el último año?',
        question4: '¿Con cuál de las siguientes frameworks y librerías has trabajado extensivamente durante el último año?',
        question5: '¿Con cuál de las siguientes herramientas de desarrollo has trabajado extensivamente durante el último año?',
        question6: '¿Cuál es el principal sistema operativo que usas para trabajar?',
        question7: '¿Cuál sistema de control de versiones usas?',
        question8: '¿Qué servicio para sistema de control usas?',
        question9: '¿Cómo es tu opinión sobre blockchain, crypto y Web3?',
        question10: '¿Tienes alguna educación o entrenamiento en seguridad informática?',
        question11: '¿Cuál de las siguientes opciones es implementada donde trabajas?',
    };
  
    return (
        <>
            <CardItem
                id='tecnology'
                className='tecnology-card'
                title={textData.cards.tecnology.title}
                cardDescription={textData.cards.tecnology.description}
            />
            {/* Question 1 */}
                <ChartComponent
                title={textData.cards.tecnology.title}
                chartTitle={textData.chartDescription.lenguajesProgramar.title}
                chartDescription={textData.chartDescription.lenguajesProgramar.description}
                chart={<BarChart
                    chartInfo={myData.lenguajesProgramar}
                    autoSkipp={false} />}
                question={text.question1}
            />
            {/* Question 2 */}
                <ChartComponent
                title={textData.cards.tecnology.title}
                chartTitle={textData.chartDescription.cloud.title}
                chartDescription={textData.chartDescription.cloud.description}
                chart={<BarChart
                    chartInfo={myData.cloud}
                    autoSkipp={false} />}
                question={text.question2}
            />
            {/* Question 3 */}
                <ChartComponent
                title={textData.cards.tecnology.title}
                chartTitle={textData.chartDescription.webFrameworks.title}
                chartDescription={textData.chartDescription.webFrameworks.description}
                chart={<BarChart
                    chartInfo={myData.webFrameworks}
                    autoSkipp={false} />}
                question={text.question3}
            />
            {/* Question 4 */}
                <ChartComponent
                title={textData.cards.tecnology.title}
                chartTitle={textData.chartDescription.libs.title}
                chartDescription={textData.chartDescription.libs.description}
                chart={<BarChart
                    chartInfo={myData.libs}
                    autoSkipp={false} />}
                question={text.question4}
            />
            {/* Question 5 */}
                <ChartComponent
                title={textData.cards.tecnology.title}
                chartTitle={textData.chartDescription.devTools.title}
                chartDescription={textData.chartDescription.devTools.description}
                chart={<BarChart
                    chartInfo={myData.devTools}
                    autoSkipp={false} />}
                question={text.question5}
            />
            {/* Question 6 */}
                <ChartComponent
                title={textData.cards.tecnology.title}
                chartTitle={textData.chartDescription.os.title}
                chartDescription={textData.chartDescription.os.description}
                chart={<BarChart chartInfo={myData.os}
                    autoSkipp={false} />}
                question={text.question6}
            />
            {/* Question 7 */}
                <ChartComponent
                title={textData.cards.tecnology.title}
                chartTitle={textData.chartDescription.git.title}
                chartDescription={textData.chartDescription.git.description}
                chart={<BarChart chartInfo={myData.git} 
                    autoSkipp={false} />}
                question={text.question7}
            />
            {/* Question 8 */}
                <ChartComponent
                title={textData.cards.tecnology.title}
                chartTitle={textData.chartDescription.versionControl.title}
                chartDescription={textData.chartDescription.versionControl.description}
                chart={<BarChart
                    chartInfo={myData.versionControl} />}
                question={text.question8}
            />
            {/* Question 9 */}
                <ChartComponent
                title={textData.cards.tecnology.title}
                chartTitle={textData.chartDescription.blockchain.title}
                chartDescription={textData.chartDescription.blockchain.description}
                chart={<BarChart
                    chartInfo={myData.blockchain}
                    autoSkipp={false}  />}
                question={text.question9}
            />
            {/* Question 10 */}
                <ChartComponent
                title={textData.cards.tecnology.title}
                chartTitle={textData.chartDescription.infosec.title}
                chartDescription={textData.chartDescription.infosec.description}
                chart={<BarChart
                    chartInfo={myData.infosec} 
                    autoSkipp={false} />}
                question={text.question10}
            />
            {/* Question 11 */}
                <ChartComponent
                title={textData.cards.tecnology.title}
                chartTitle={textData.chartDescription.implementaciones.title}
                chartDescription={textData.chartDescription.implementaciones.description}
                chart={<BarChart
                    chartInfo={myData.implementaciones}
                    autoSkipp={false} />}
                question={text.question11}
            />
        </>
    );
}

export default TecnologyContainer;