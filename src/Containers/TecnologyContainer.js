import React from 'react';
import CardItem from '../Components/CardItem';
import BarChart from '../Components/BarChart';
import DonutChart from '../Components/DonutChart';
import myData from "../resultados_totales.json";
import ChartComponent from '../Components/ChartComponent';

const TecnologyContainer = () => {
    const firstColor='#9d3030';
    const secondColor='#e35050';

    const text = {
      title: 'Tecnología y Cultura',
      chartTitle: 'Chart Title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.',
      question1: '¿Con cuál de los siguientes lenguajes de programación, scripting o markup has trabajado extensivamente durante el ultimo año?',
      question2: '¿Con cuál de los siguientes proveedores de nube has trabajado extensivamente durante el ultimo año?',
      question3: '¿Con cuál de las siguientes frameworks y tecnologías web has trabajado extensivamente durante el ultimo año?',
      question4: '¿Con cuál de las siguientes frameworks y librerías has trabajado extensivamente durante el ultimo año?',
      question5: '¿Con cuál de las siguientes herramientas de desarrollo has trabajado extensivamente durante el ultimo año?',
      question6: '¿Cuál es el principal sistema operativo que usas para trabajar?',
      question7: '¿Cuál sistema de control de versiones usas?',
      question8: '¿Qué servicio para sistema de control usas?',
      question9: '¿Cómo es tu opinión sobre blockchain, crypto y Web3?',
      question10: '¿Tienes alguna educación o entrenamiento en seguridad informática?',
      question11: '¿Cuál de las siguientes opciones es implementada donde trabajas?',
  }
  
    return (
        <>
            <CardItem
                id='tecnology'
                className='tecnology-card'
                title={text.title}
            />
            {/* Question 1 */}
                <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.lenguajesProgramar}
                    autoSkipp={false} 
                    firstColor={firstColor}
                    secondColor={secondColor} />}
                question={text.question1}
            />
            {/* Question 2 */}
                <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.cloud}
                    autoSkipp={false} 
                    firstColor={firstColor}
                    secondColor={secondColor} />}
                question={text.question2}
            />
            {/* Question 3 */}
                <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.webFrameworks}
                    autoSkipp={false} 
                    firstColor={firstColor}
                    secondColor={secondColor} />}
                question={text.question3}
            />
            {/* Question 4 */}
                <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.libs}
                    autoSkipp={false} 
                    firstColor={firstColor}
                    secondColor={secondColor} />}
                question={text.question4}
            />
            {/* Question 5 */}
                <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.devTools}
                    autoSkipp={false} 
                    firstColor={firstColor}
                    secondColor={secondColor} />}
                question={text.question5}
            />
            {/* Question 6 */}
                <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<DonutChart
                    chartInfo={myData.os}
                    firstColor={firstColor}
                    secondColor={secondColor} />}
                question={text.question6}
                classContainer='chart-container'
            />
            {/* Question 7 */}
                <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.git}
                    firstColor={firstColor}
                    secondColor={secondColor} />}
                question={text.question7}
            />
            {/* Question 8 */}
                <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.versionControl}
                    firstColor={firstColor}
                    secondColor={secondColor} />}
                question={text.question8}
            />
            {/* Question 9 */}
                <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.blockchain}
                    autoSkipp={false} 
                    firstColor={firstColor}
                    secondColor={secondColor} />}
                question={text.question9}
            />
            {/* Question 10 */}
                <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<DonutChart
                    chartInfo={myData.infosec}
                    firstColor={firstColor}
                    secondColor={secondColor} />}
                question={text.question10}
                classContainer='chart-container'
            />
            {/* Question 11 */}
                <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.implementaciones}
                    autoSkipp={false} 
                    firstColor={firstColor}
                    secondColor={secondColor} />}
                question={text.question11}
            />
        </>
    )
}

export default TecnologyContainer;