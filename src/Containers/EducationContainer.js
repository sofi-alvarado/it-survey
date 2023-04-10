import React from 'react';
import CardItem from '../Components/CardItem';
import BarChart from '../Components/BarChart';
import myData from '../resultados_totales.json';
import textData from '../text';
import ChartComponent from '../Components/ChartComponent';

const EducationContainer = () => {
    const text = {
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
                title={textData.cards.education.title}
                cardDescription={textData.cards.education.description}
            />

    {/* Question 1 */}
        <ChartComponent
                title={textData.cards.education.title}
                chartTitle={textData.chartDescription.educacion.title}
                chartDescription={textData.chartDescription.educacion.description}
                chart={<BarChart
                    chartInfo={myData.educacion}
                    autoSkipp={false} />}
                question={text.question1}
        />
    {/* Question 2 */}
        <ChartComponent
                title={textData.cards.education.title}
                chartTitle={textData.chartDescription.aprendizaje.title}
                chartDescription={textData.chartDescription.aprendizaje.description}
                chart={<BarChart
                    chartInfo={myData.aprendizaje}
                    autoSkipp={false} />}
                question={text.question2}
        />
    {/* Question 3 */}
         <ChartComponent
                title={textData.cards.education.title}
                chartTitle={textData.chartDescription.elearning.title}
                chartDescription={textData.chartDescription.elearning.description}
                chart={<BarChart
                    chartInfo={myData.elearning}
                    autoSkipp={false} />}
                question={text.question3}
        />
    {/* Question 4 */}
         <ChartComponent
                title={textData.cards.education.title}
                chartTitle={textData.chartDescription.experiencia.title}
                chartDescription={textData.chartDescription.experiencia.description}
                chart={<BarChart
                    chartInfo={myData.experiencia}
                    autoSkipp={false} />}
                question={text.question4}
        />
    {/* Question 5 */}
         <ChartComponent
                title={textData.cards.education.title}
                chartTitle={textData.chartDescription.trabajoTipo.title}
                chartDescription={textData.chartDescription.trabajoTipo.description}
                chart={<BarChart
                    chartInfo={myData.trabajoTipo}
                    autoSkipp={false} />}
                question={text.question5}
        />
    {/* Question 6 */}
         <ChartComponent
                title={textData.cards.education.title}
                chartTitle={textData.chartDescription.empleadosAprox.title}
                chartDescription={textData.chartDescription.empleadosAprox.description}
                chart={<BarChart
                    chartInfo={myData.empleadosAprox}
                    autoSkipp={false} />}
                question={text.question6}
        />
    {/* Question 7 */}
         <ChartComponent
                title={textData.cards.education.title}
                chartTitle={textData.chartDescription.compensacionAnual.title}
                chartDescription={textData.chartDescription.compensacionAnual.description}
                chart={<BarChart
                    chartInfo={myData.compensacionMensual}
                    autoSkipp={false} />}
                question={text.question7}
        />
    {/* Question 8 */}
         <ChartComponent
                title={textData.cards.education.title}
                chartTitle={textData.chartDescription.frecuenciaSalario.title}
                chartDescription={textData.chartDescription.frecuenciaSalario.description}
                chart={<BarChart
                    chartInfo={myData.frequenciaDeSalario} 
                    autoSkipp={false} />}
                question={text.question8}
        />
    {/* Question 9 */}
         <ChartComponent
                title={textData.cards.education.title}
                chartTitle={textData.chartDescription.certs.title}
                chartDescription={textData.chartDescription.certs.description}
                chart={<BarChart
                    chartInfo={myData.certs}
                    autoSkipp={false} />}
                question={text.question9}
        />
    {/* Question 10 */}
         <ChartComponent
                title={textData.cards.education.title}
                chartTitle={textData.chartDescription.empresaTipo.title}
                chartDescription={textData.chartDescription.empresaTipo.description}
                chart={<BarChart
                    chartInfo={myData.empresaTipo} 
                    autoSkipp={false} />}
                question={text.question10}
        />
    {/* Question 11 */}
         <ChartComponent
                title={textData.cards.education.title}
                chartTitle={textData.chartDescription.lenguajesHablar.title}
                chartDescription={textData.chartDescription.lenguajesHablar.description}
                chart={<BarChart
                    chartInfo={myData.lenguajesHablar} 
                    autoSkipp={false} />}
                question={text.question11}
        />
    {/* Question 12 */}
         <ChartComponent
                title={textData.cards.education.title}
                chartTitle={textData.chartDescription.nivelDeIngles.title}
                chartDescription={textData.chartDescription.nivelDeIngles.description}
                chart={<BarChart
                    chartInfo={myData.nivelDeIngles } 
                    autoSkipp={false} />}
                question={text.question12}
        />
    {/* Question 13 */}
         <ChartComponent
                title={textData.cards.education.title}
                chartTitle={textData.chartDescription.inglesLearning.title}
                chartDescription={textData.chartDescription.inglesLearning.description}
                chart={<BarChart
                    chartInfo={myData.inglesLearning}
                    autoSkipp={false} />}
                question={text.question13}
        />
    </>
    );
}

export default EducationContainer;