const text = {
    cards: {
        general: {
            title: 'General',
            description: 'Encuesta basada en Stack Overflow Developer Survey 2022 bajo licencia de Open Database License (ODbL). La finalidad de esta encuesta es que aprendamos más sobre las tendencias de tecnología y los perfiles profesionales en el país, y que los datos recolectados nos ayuden a tomar decisiones profesionales o académicas. Los resultados de la encuesta están publicados bajo licencia ODbL, en github.com/jorgesoft/encuesta-it-el-salvador-2023. Ninguna pregunta hizo referencia a información personal como nombres, email o número telefónico, y todas las preguntas fueron opcionales. Para feedback o preguntas, escríbeme a contact@jorgesilva.pro',
        },
        basicInformation: {
            title: 'Información Básica',
            description: 'La primera sección de la encuesta está dedicada a identificar los encuestados que trabajan en tecnología, y si se describen a sí mismos como desarrolladores, además de la modalidad en que trabajan.',
        },
        education: {
            title: 'Educación, Trabajo y Carrera',
            description: 'Esta sección está dedicada a entender la educación y carrera de los encuestados, así como la manera en que aprendieron sobre tecnología. Esta sección también incluye preguntas sobre el idioma inglés, una habilidad bastante hablada en la comunidad.',
        },
        tecnology: {
            title: 'Tecnología y Cultura',
            description: 'Esta sección es una simplificación de las preguntas más populares en StackOverflow, las que están dedicadas a hablar sobre tecnologías como lenguajes de programación, la nube y otras herramientas.',
        },
        demography: {
            title: 'Demografía',
            description: 'Preguntas dedicadas a entender la diversidad de los encuestados y sus origines.',
        },
        feedback: {
            title: 'Feedback',
            description: 'Preguntas sobre la opinión de los encuestados sobre esta encuesta. Estas preguntas serán tomadas en cuenta para próximas ediciones.'
        },
    },
    chartDescription: {
        situacionDeEmpleo: {
            title: 'Situación Laboral',
            description: 'La gran mayoría de los encuestados tiene un empleo de tiempo completo. Un 66% se dedica únicamente a su trabajo de tiempo completo, y solo un 6.5% estudia mientras trabaja.'
        },
        softwareDev: {
            title: 'Tipo de Profesional Informático',
            description: 'Mientras que la gran mayoría de los encuestados se describe como un desarrollador, un 18% se describe como otro tipo de profesional de tecnología informática. Estos trabajan en roles como PM, QA, Administración de sistemas, Administración de bases de datos, DevOps, entre otros.'
        },
        modalidadDeTrabajo: {
            title: 'Modalidad de Trabajo',
            description: 'La gran mayoría de los encuestados trabaja completamente remoto, pero solo 9 (20%) dijo trabajar para una empresa totalmente en el exterior.'
        },
        educacion: {
            title: 'Educación Obtenida',
            description: '75% de los encuestados tiene un título académico, y solamente un 20% de los encuestados que trabajan reportaron no tener uno. Los encuestados con maestría reportaron salarios entre los $1600 y $4500 mensuales.'
        },
        aprendizaje: {
            title: 'Modalidad de Aprendizaje',
            description: 'Universidad y cursos online tuvieron la misma cantidad de respuestas. Los encuestados entre 18 y 24 años rara vez utilizan libros para aprender.'
        },
        elearning: {
            title: 'Plataformas Online Preferidas',
            description: '97% de los encuestados reportó usar YouTube para aprender online.  Es interesante observar que el 99% de encuestados reporta usar una plataforma de aprendizaje online, independientemente de su edad o años de experiencia.'
        },
        experiencia: {
            title: 'Años de Experiencia',
            description: 'El top 3% de salarios reportó tener de 1 a 5 años de experiencia. La mayoría de las personas con más de 10 años de experiencia trabajan como desarrolladores para empresas nacionales.'
        },
        trabajoTipo: {
            title: 'Descripción del Trabajo',
            description:'57% de los encuestados se considera un desarrollador full-stack y/o desarrollador con múltiples funciones – incluyendo QA, DevOps, PM, entre otros. Los desarrolladores que trabajan para empresas extranjeras cumples los roles de desarrollador full-stack, back-end, o DevOps/SRE.'
        },
        empleadosAprox: {
            title: 'Tamaño de la Empresa',
            description: '12% de los encuestados reportó trabajar de manera independiente, mientras que 20% trabaja para grandes corporaciones con más de mil empleados.'
        },
        compensacionAnual: {
            title: 'Salario',
            description: 'NOTA: La pregunta original era “¿Cuál es tu compensación laboral anual sin descontar impuestos? Por favor, escriba un número entero sin puntuaciones. Si prefieres no decir, puedes dejar esta pregunta sin responder”. Muchos de los encuestados reportaron cantidades que estarían por debajo del sueldo mínimo. Esta pregunta podría haber estado formulada de forma incorrecta, teniendo en cuenta que en El Salvador la mayoría reporta su salario de manera mensual. Futuras ediciones de esta encuesta preguntarán por salario mensual, en esta encuesta nos hemos abstenido de hablar sobre promedios en cuanto a salarios.'
        },
        frecuenciaSalario: {
            title: 'Frecuencia de Salario',
            description: 'Pregunta hecha para ver la manera en que los encuestados',
        },
        certs: {
            title: 'Certificaciones',
            description: '30.5% de los encuestados reportó tener una o más certificaciones. Aunque Cisco es la tecnología con más profesionales certificados, solo un 4% de los encuestados reportó trabajar como administrador de redes. Los encuestados con certificaciones de Azure y AWS reportaron salarios de hasta $2,500 y $3,600 al mes, respectivamente.'
        },
        empresaTipo: {
            title: 'Tipo de Empresa',
            description: 'Solo un 11% de encuestados reportó trabajar para empresas totalmente en el exterior.',
        },
        lenguajesHablar: {
            title: 'Lenguajes',
            description: 'Hablar otro idioma aparte del español es una de las cualidades más buscadas en programadores latinos. Un 31% de los encuestados respondió comunicarse con otro idioma aparte del español.'
        },
        nivelDeIngles: {
            title: 'Nivel de Inglés',
            description: 'Encuestados que cuentan con un nivel de inglés alto reportaron salarios de hasta $5,000 USD mensuales. 90% de los encuestados con nivel de inglés alto y medio trabajan de modalidad remota o híbrida.'
        },
        inglesLearning: {
            title: 'Aprendizaje del Inglés',
            description: 'Los cursos presenciales fueron la modelidad de aprendizaje mas popular en los encuestados que reportaron tener un nivel de ingles avanzado y medio. Seguido por cursos online y educacion de bachillerato o basica.'
        },
        lenguajesProgramar: {
            title: 'Lenguajes de Programación',
            description: 'JavaScript es el lenguaje de programación más popular entre los encuestados. La gran mayoría de los que encuestados que trabajan con JavaScript también reportaron trabajar como desarrolladores full-stack en empresas nacionales, trabajando con uno o más proveedores de nube. Curiosamente, el porcentaje de los encuestados que reportaron trabajar con JavaScript (64%) es similar al porcentaje reportado en las encuestas de StackOverflow del 2022 (65.36%) y del 2021 (64.96%).'
        },
        cloud: {
            title: 'Cloud',
            description: 'Aunque El Salvador parece seguir las tendencias de popularidad en cuanto lenguajes de programación, el caso no es igual en cuanto proveedores de servicios en la nube. En las encuestas de StackOverflow, AWS supera a GCP y Azure por aproximadamente 20%; los encuestados en El Salvador reportaron usar los tres mayores proveedores de nube casi de manera similar.'
        },
        webFrameworks: {
            title: 'Web Frameworks',
            description: 'Al igual que en la última encuesta de StackOverflow, Node.js y React.js son las frameworks más populares, pero no por muchos puntos.'
        },
        libs: {
            title: 'Frameworks y Librerías',
            description: 'Esta fue una pregunta nueva en la encuesta de StackOverflow para identificar nuevas tendencias. 28.7% de los encuestados en El Salvador respondieron trabajar con .NET, y de estos un 61% trabaja para empresas internacionales.'
        },
        devTools: {
            title: 'Herramientas de Desarrollo',
            description: 'npm y Docker fueron las herramientas de desarrollo más reportadas por los encuestados, al igual que en la encuesta de StackOverflow. Resalta que al contrario de la encuesta de StackOverflow, ningún encuestado de El Salvador reportó usar herramientas de desarrollo gráfico como Unity 3D o Unreal, así como ningún encuestado reportó trabajar como desarrollador de videojuegos.'
        },
        os: {
            title: 'Sistemas Operativos',
            description: 'El uso de macOS de manera profesional es muy reducido en los encuestados de El Salvador (13%), a menos de la mitad de lo reportado en la encuesta de StackOverflow (31%).'
        },
        git: {
            title: 'Control de versiones',
            description: 'Ninguna otra tecnología es más popular que Git en la encuesta. El 7% que reportó está compuesto en su mayoría de encuestados que están aprendiendo a programar o sobre tecnología, o profesionales de tecnología que no se describen como desarrolladores de software.'
        },
        versionControl: {
            title: 'Plataforma de Control de Versiones',
            description: 'Esta es otra pregunta en donde los encuestados de El Salvador responden de manera similar a los encuestados en StackOverflow.'
        },
        blockchain: {
            title: 'Blockchain, Crypto y Web3',
            description: 'La opinión sobre las tecnologías Web3 son bastante diferentes en los encuestados de El Salvador a comparación de la encuesta de StackOverflow. 50% de los encuestados reportó tener una opinión favorable o muy favorable, mientras que solo un 7% tiene una opinión desfavorable o muy desfavorable.'
        },
        infosec: {
            title: 'Seguridad Informática',
            description: '66% de los encuestados respondió tener algún tipo de educación o entrenamiento en seguridad informática.'
        },
        implementaciones: {
            title: 'Otras Tecnologías Implementadas',
            description: 'Pregunta creada para ver las tendencias que consideramos que la encuesta de StackOverflow no abarca, sobre todo, tendencias relacionadas con DevOps y Agile.'
        },
        edad: {
            title: 'Edad',
            description: 'La mayoría de encuestados que respondieron tener entre 18 y 24 años trabaja tiempo completo como desarrolladores. Todos los que respondieron tener entre 45 y 55 años trabajan como desarrolladores full-stack.'
        },
        genero: {
            title: 'Género',
            description: 'Solo un 11% de los encuestados reportó ser mujer. Este porcentaje es mayor que el 5% que respondió ser mujer en la encuesta de StackOverflow. Ningun encuestado seleccionó la opción de “otro” y solo uno prefirió no decir qué género le describe mejor.'
        },
        callcenter: {
            title: 'Experiencia en Call Center',
            description: 'La gran mayoría de los encuestados que reportan haber trabajado en call-center también reportan tener un nivel de inglés intermedio o avanzado. Estos encuestados también reportaron salarios de hasta $2,600 mensuales.'
        },
        atributos: {
            title: 'Atributos',
            description: 'Esta pregunta incluye las preguntas sobre discapacidades y neurodivergencia de StackOverflow.'
        },
        departamento: {
            title: 'Departamento de Residencia ',
            description: 'Solo un 10% de los encuestados reportó ser de la zona occidental del país, y un 3.7% reportó ser de la zona oriental. Ninguno de los encuestados reportó ser de Usulután.'
        },
        duracion: {
            title: 'Duración de la Encuesta',
            description: 'Futuras ediciones de esta encuesta podrían tener la misma cantidad de preguntas, gracias a que 84% de los encuestados evaluó esta encuesta con una duración apropiada.'
        },
        dificultad: {
            title: 'Dificultad de la Encuesta',
            description: 'Menos del 1% evaluó la encuesta como difícil.'
        },
        evaluacion: {
            title: 'Evaluación de la encuesta del 1 al 5',
            description: 'La evaluación promedio de la encuesta fue de 4.39 de 5'
        },
    }
}

export default text;