<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Flujo de procesos - Secuencias operacionales
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right").order-lg-1.order-2
        .p-5.py-3(style="background-color:#cdfbfa ")
          p.mb-0 En los sistemas de transformación de materias primas e insumos en productos y servicios de la industria de la moda, es importante listar las actividades u operaciones del proceso, ese listado o secuencia debe ser organizado de forma tal que a medida que se vaya desarrollando, se evidencie la coherencia en el desarrollo del proceso, es importante entonces definir las entradas y las salidas, para poder establecer los rangos o alcances de esas secuencias. Cuando las secuencias operacionales solo se refieren a la construcción de prendas de vestir se debe remitir a las muestras físicas o fichas técnicas, que son los elementos que definen cómo va elaborada la prenda de vestir requerida.
      .col-lg-4.col-12.order-lg-2.mb-lg-0.mb-3(data-aos="fade-left"): img(src='@/assets/curso/temas/tema4/1.jpg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10 
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La secuencia operacional para realizar de los procesos se refiere al proceso de comprender, visualizar e identificar los procedimientos y/o actividades que participan en una seguidilla de acciones que se hacen para obtener un resultado, por medio de herramientas gráficas, listados y otros elementos. La secuencia operacional es el camino que se traza para ir avanzando y agregando valor a ese proceso requerido para conseguir las metas.
    h3(style="color: #ea526f") Pasos para construir una secuencia operacional
    p.mb-5(data-aos='fade-right') Para diseñar e implementar una secuencia de operaciones, es necesario seguir los siguientes pasos:
    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center(titulo="Paso 1 ").px-5.py-3
          .col-lg-7.order-lg-1.order-2

            p Definir el sistema de producción que se va a utilizar.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-3
            img(src='@/assets/curso/temas/tema4/3.svg', alt='')
        .row.justify-content-center(titulo="Paso 2").px-5.py-3
          .col-lg-7.order-lg-1.order-2

            p Elaborar un listado de actividades u operaciones: su naturaleza, tiempos estándar y la ubicación de los puestos de trabajo, es información importante para construir secuencias operacionales.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-3
            img(src='@/assets/curso/temas/tema4/4.svg', alt='')
        .row.justify-content-center(titulo="Paso 3").px-5.py-3
          .col-lg-7.order-lg-1.order-2

            p Establecer cuáles equipos y materiales se van a emplear.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-3
            img(src='@/assets/curso/temas/tema4/5.svg', alt='')
        .row.justify-content-center(titulo="Paso 4").px-5.py-3
          .col-lg-7.order-lg-1.order-2

            p Calcular el número de personas requeridas de acuerdo con el volumen de la demanda y las operaciones; las personas y los horarios definen la capacidad productiva.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-3
            img(src='@/assets/curso/temas/tema4/6.svg', alt='')
        .row.justify-content-center(titulo="Paso 5").px-5.py-3
          .col-lg-7.order-lg-1.order-2

            p Asignar el sitio y los elementos a utilizar; es decir, organizar la planta, esto requiere consideraciones como el área de la cual se dispone, los inventarios que se manejan, y las áreas con las que se relacionan o se apoyan. Se organiza la planta de acuerdo con la línea de producción.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-3
            img(src='@/assets/curso/temas/tema4/7.svg', alt='')
        .row.justify-content-center(titulo="Paso 6").px-5.py-3
          .col-lg-7.order-lg-1.order-2

            p Determinar los controles que se van a realizar para hacer seguimiento a la secuencia operacional.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-3
            img(src='@/assets/curso/temas/tema4/8.svg', alt='')
        .row.justify-content-center(titulo="Paso 7").px-5.py-3
          .col-lg-7.order-lg-1.order-2

            p De acuerdo con el sistema de producción que se utiliza se debe acordar la secuencia operacional y ese sistema está definido por el tipo de producto, el tamaño de la empresa, la tecnología incorporada en los equipos y los materiales que se utilizan, entre otros.
          .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-3
            img(src='@/assets/curso/temas/tema4/9.svg', alt='')
    p.mb-5(data-aos='fade-right') La secuencia operacional debe manejar controles y registros para poder hacer los seguimientos pertinentes y que permitan identificar situaciones susceptibles de ser mejoradas e implementar acciones de mejora. Los resultados del control permiten manejar producciones más organizadas y los consumos de recursos como materias primas, tiempo, entre otros, y ayudan a verificar las cantidades producidas.
    .p-5(style="background-color: #dbfafa ").mb-4
      h4 Ventajas de la secuencia operacional
      p Los procesos productivos de confección son cada vez más dinámicos, su organización genera cierta complejidad, por lo cual se requiere una comprensión metódica de sus elementos y de cada interacción que se dé en dicho proceso con el fin de mantener o mejorar su eficiencia; por eso organizar secuencias operacionales trae ciertas ventajas como:
      .row.justify-content-center.mb-5
        .col-lg-6
          ul.lista-ul--color
            li
              i.fas.fa-angle-right(style="color: #FF6E33")
              | Ayudar a identificar procesos o actividades susceptibles de mejora.

            li
              i.fas.fa-angle-right(style="color: #FF6E33")
              | Cuantificar en dinero y/o en tiempo los beneficios de la acción de mejora.

            li
              i.fas.fa-angle-right(style="color: #FF6E33")
              | Ayudar a reorganizar los puestos de trabajo y la distribución de planta.

            li
              i.fas.fa-angle-right(style="color: #FF6E33")
              | Identificar operaciones que no estaban presupuestadas.

            li
              i.fas.fa-angle-right(style="color: #FF6E33")
              | Hacer nuevas mediciones de tiempos
        .col-lg-4: img(src='@/assets/curso/temas/tema4/10.png', alt='')
    p.mb-5(data-aos='fade-right') En resumen, elaborar una secuencia operacional permite visualizar e identificar las operaciones o actividades que van a intervenir en un proceso, calculando tiempos, máquinas e información, para de esa manera poder mejorar una situación actual que requiera mejora.
      br
      br
      |En la tabla que se encuentra a continuación, se presenta un ejemplo de una secuencia operacional, en la que se observa el listado de las operaciones en un orden lógico, identificando las máquinas en las cuales se ejecuta la operación y el tiempo estándar que se demora cada una. Adicional, se anotan observaciones pertinentes y que apunten a mejorar la productividad y los nombres de las personas que hacen o harán la operación.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 6
      br
      span.fst-italic  Secuencia operacional
    .row.justify-content-center.mb-4
      .col-lg-11
        .tabla-a
          table
            thead(style="border-top: 0px")
              tr(style="background-color: #FF6E33 ") 
                th
                th(colspan="4") Cliente : MIC
                th
              tr(style="background-color: #dee9f0 ") 
                th #OP 
                th OPERACIÓN 
                th STD 
                th MÁQUINA 
                th OBSERVACIONES 
                th OPERARIA
            tbody.bg-white
              tr
                td 1 
                td Encotillar 
                td 0.51  
                td C.C.
                td Debe estar junto con la operación # 3
                td 
              tr
                td 2 
                td Dobladillar bolsillo trasero 
                td 0.4 
                td 2.A 
                td Trabajar con guía
                td 
              tr
                td 3 
                td Unir tiro trasero 
                td 0.7 
                td C.C.
                td 
                td 
              tr
                td 4 
                td Pegar bolsillo trasero X 2 
                td 2.2 
                td 2.A 
                td Tener en cuenta perforados desde el corte
                td 
              tr(style="background-color: #b7dee8 ")
                td 
                td TOTAL TRASERO 
                td 3.81
                td 
                td 
                td 
              tr
                td 5 
                td Dobladillar reloj 
                td 0.15 
                td 1.A 
                td Trabajar con guía
                td 
              tr
                td 6 
                td Pegar reloj 
                td 0.5 
                td 1.A
                td 
                td 
              tr
                td 7 
                td Rec. vistas 
                td 0.6 
                td RECUBRIDORA
                td 
                td 
              tr
                td 8 
                td Pegar forro a boca 
                td 0.6 
                td 1.A
                td 
                td 
              tr
                td 9 
                td Asen boca 
                td 0.7 
                td 1.A
                td 
                td 
              tr
                td 10 
                td Cerrar bolsillo 
                td 0.6 
                td FIL.5
                td 
                td 
              tr
                td 11 
                td Cuadrar 
                td 0.8 
                td 1.A
                td 
                td 
              tr
                td 12 
                td Filetear aletilla y aletillón 
                td 0.1 
                td FIL.3
                td 
                td 
              tr
                td 13 
                td Pegar y asentar aletilla 
                td 0.55 
                td 1.A
                td 
                td 
              tr
                td 14 
                td Pegar cierre 
                td 0.3 
                td 2.A
                td 
                td 
              tr
                td 15 
                td Hacer jota 
                td 0.3 
                td 2.A
                td 
                td 
              tr
                td 16 
                td Unir completo 
                td 0.8 
                td 2.A
                td 
                td 
              tr
                td 
                td Total delantero 
                td 6
                td 
                td 
                td 
              tr
                td 17 
                td Cerrar entrepierna 
                td 0.6 
                td FIL. 5
                td 
                td 
              tr
                td 18 
                td Asen. entrepierna 
                td 0.9 
                td 2.A
                td 
                td 
              tr
                td 19 
                td Cerrar costados 
                td 0.65 
                td FIL. 5
                td 
                td 
              tr
                td 20 
                td Asen. costados 
                td 0.8 
                td 1.A
                td 
                td 
              tr
                td 21 
                td Fijar pasadores x 5 
                td 0.9 
                td 1.A
                td 
                td 
              tr
                td 22 
                td Ojalar pretinas 
                td 0.3 
                td OJALADORA
                td 
                td 
              tr
                td 23
                td Unir pretina 
                td 0.2 
                td 1.A
                td 
                td 
              tr
                td 24 
                td Empretinar 
                td 0.9 
                td EMPRETINADORA
                td 
                td 
              tr
                td 25 
                td Cabezas 
                td 1 
                td 1.A
                td 
                td 
              tr
                td 26 
                td Hacer bota 
                td 0.9 PLANA 1 AG.
                td 
                td 
                td 
              tr
                td 27 
                td Hacer pasador 
                td 0.3 
                td RECUBRIDORA
                td 
                td 
              tr
                td 28 
                td Cortar pasador 
                td 0.1 
                td MANUAL
                td 
                td 
              tr
                td 29 
                td Presillar x 23 
                td 2.3 
                td PRESILLADORA
                td 
                td 
              tr
                td 30 
                td Ojalar x 2 
                td 0.3 
                td OJALADORA
                td 
                td 
              tr(style="background-color: #b7dee8 ")
                td 
                td Total ensamble 
                td 10.2
                td 
                td 
                td 
              tr(style="background-color: #b7dee8 ")
                td 
                td Total prenda 
                td 20
                td 
                td 
                td 
              
               


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
