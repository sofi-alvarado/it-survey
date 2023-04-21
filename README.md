
# Encuesta para profesionales en Tecnología | El Salvador 2022-2023

Encuesta basada en Stack Overflow Developer Survey 2022 bajo licencia de Open Database License (ODbL). La finalidad de esta encuesta es que aprendamos más sobre las tendencias de tecnología y los perfiles profesionales en el país, y que los datos recolectados nos ayuden a tomar decisiones profesionales o académicas. 

Los resultados de la encuesta están publicados bajo licencia ODbL, en https://github.com/jorgesoft/encuesta-it-el-salvador-2023. Ninguna pregunta hizo referencia a información personal como nombres, email o número telefónico, y todas las preguntas fueron opcionales. 


## Vista Previa

![captura-web](https://user-images.githubusercontent.com/72232312/231279963-ecb0fd07-6bb4-4664-bc37-a3e5a5263a54.png)


Accede al sitio web 👉 https://encuesta-tech-sv.link/ 👈

## Tecnologías utilizadas

* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E) 
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white) 
* ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=flat&logo=amazon-aws&logoColor=white) 
* ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=flat&logo=npm&logoColor=white)
* ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=flat&logo=bootstrap&logoColor=white) 
* ![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=flat&logo=chart.js&logoColor=white) 
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)

Este proyecto fue desarrollado con JavaScript haciendo uso de librerías como ReactJS en la creación de componentes reutilizables en la aplicación, en conjunto con Bootstrap para el diseño del mismo. También se hizo uso de la librería ChartJS para la creación de las gráficas. 

Para hosting se optó por AWS. Los diferentes servicios utilizados son:

- S3, para alojar el proyecto de React compilado como página estática
- CloudFront, como CDN (red de distribución de contenido)
- AWS Certificate Manager (ACM) para obtener un certificado SSL/TLS válido y servir la página 
- Route53, para comprar dominio (encuesta-tech-sv.link) y configurar DNS





## Optimización con CI/CD

Este proyecto hace uso de integración y entrega continua (CI/CD) con GitHub Actions. Las configuraciones están en .github/workflows. Un workflow se activa cuando se hace un push a la rama de “stage”, que compila el proyecto de React y lo sube a un bucket de S3. Los push a master activan un workflow que compila el proyecto, y lo sube en otro bucket de S3 que se usa como “prod”.

El git workflow utilizado es: 

crear nueva branch -> merge a stage -> merge a master (prod)
## Ejecutar localmente

Clona el proyecto

```bash
  git clone https://github.com/sofi-alvarado/it-survey.git
```

Ve al directorio del proyecto

```bash
  cd it-survey
```

Instala las dependencias

```bash
  npm install
```

Ejecuta el servidor

```bash
  npm run start
```


## Desarrolladores
- Implementación con CI/CD, obtención de datos y hosting en AWS: [@jorgesoft](https://github.com/jorgesoft)
- Font-end: [@sofi-alvarado](https://github.com/sofi-alvarado)

## Feedback

Para feedback o preguntas, escribe a contact@jorgesilva.pro
