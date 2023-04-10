import React from 'react';
import CardItem from '../Components/CardItem';

const text = {
    chartDescription: 'Encuesta basada en Stack Overflow Developer Survey 2022, bajo licencia de Open Database License (ODbL). La finalidad de esta encuesta es que aprendamos mas sobre las tendencias de tecnología y los perfiles profesionales en el país, y que los datos recolectados nos ayuden a tomar decisiones profesionales o académicas. Los resultados de la encuesta estan publicados bajo licencia ODbL, en github.com/jorgesoft/encuesta-it-el-salvador-2023 Ninguna pregunta hizo referencia a información personal como nombres, email o numero telefónico, y todas las preguntas fueron opcionales. Para feedback o preguntas, escríbeme a contact@jorgesilva.pro Encuesta inspirada en Linea aqui',
}

const GeneralContainer = () => {
    return (
                <CardItem
                id='general'
                className='general-card' 
                title='General'
                chartDescription={text.chartDescription}
                />
    );
}

export default GeneralContainer;