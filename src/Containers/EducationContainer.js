import React from 'react';
import CardItem from '../Components/CardItem';
import BarChart from '../Components/BarChart';
import DonutChart from '../Components/DonutChart';
import myData from '../resultados_totales.json';
import ChartComponent from '../Components/ChartComponent';

const EducationContainer = () => {
    const text = {
      title: 'Educación, Trabajo y Carrera',
      chartTitle: 'Chart Title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras tincidunt.',
      question1: '¿Cuál de los siguientes es tu nivel de educación completado?',
      question2: '¿Cómo obtuviste tus conocimientos de tecnología? Selecciona todos los que apliquen.',
      question3: '¿Cuáles son tus plataformas para aprender preferidas?',
      question4: 'Sin incluir tu educación, ¿Cuántos años tienes de trabajar en tecnología?',
      question5: '¿Cuál de los siguientes describe tu trabajo actual?',
      question6: 'Aproximadamente, ¿Cuántos empleados tiene la organización para la que trabajas?',
      question7: '¿Cuál es tu compensación laboral anual sin descontar impuestos?',
      question8: '¿Cómo recibes tu compensación laboral?',
      question9: '¿Tienes alguna certificación de las siguientes tecnologías?',
      question10: '¿Cuál de las siguientes define mejor la empresa para la que trabajas?',
      question11: '¿Con cuál lenguaje te comunicas profesionalmente?',
      question12: '¿Cuál es tu nivel de inglés?',
      question13: '¿Cómo aprendiste a hablar inglés?',
    }
  
    return (
        <>
            <CardItem
                id='education-info'
                className='education-card'
                title={text.title}
            />

    {/* Question 1 */}
        <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.educacion}
                    autoSkipp={false} />}
                question={text.question1}
        />
    {/* Question 2 */}
        <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.aprendizaje}
                    autoSkipp={false} />}
                question={text.question2}
        />
    {/* Question 3 */}
         <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.elearning}
                    autoSkipp={false} />}
                question={text.question3}
        />
    {/* Question 4 */}
         <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.experiencia}
                    autoSkipp={false} />}
                question={text.question4}
        />
    {/* Question 5 */}
         <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.trabajoTipo}
                    autoSkipp={false} />}
                question={text.question5}
        />
    {/* Question 6 */}
         <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.empleadosAprox}
                    autoSkipp={false} />}
                question={text.question6}
        />
    {/* Question 7 */}
         <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.compensacionMensual}
                    autoSkipp={false} />}
                question={text.question7}
        />
    {/* Question 8 */}
         <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<DonutChart
                    chartInfo={myData.frequenciaDeSalario} />}
                question={text.question8}
        />
    {/* Question 9 */}
         <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.certs}
                    autoSkipp={false} />}
                question={text.question9}
        />
    {/* Question 10 */}
         <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<DonutChart
                    chartInfo={myData.empresaTipo} />}
                question={text.question10}
        />
    {/* Question 11 */}
         <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<DonutChart
                    chartInfo={myData.lenguajesHablar} />}
                question={text.question11}
        />
    {/* Question 12 */}
         <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<DonutChart
                    chartInfo={myData.nivelDeIngles } />}
                question={text.question12}
        />
    {/* Question 13 */}
         <ChartComponent
                title={text.title}
                chartTitle={text.chartTitle}
                chartDescription={text.text}
                chart={<BarChart
                    chartInfo={myData.inglesLearning}
                    autoSkipp={false} />}
                question={text.question13}
        />
    </>
    );
}

export default EducationContainer;