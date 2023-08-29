<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Diagrama de flujo o flujograma y diagrama de hilo
    .p-4(style="background-color:#fef0f3 ").mb-4
      p.mb-0 Comencemos hablando del diagrama de flujo, el cual es una representación gráfica de los procesos u operaciones representados por medio de símbolos y articulados con conectores, facilita de manera visual que se pueda hacer un recorrido general del proceso. Para elaborarlo se construye en un orden lógico, una lista de las operaciones necesarias para ejecutar el proceso y que se pretenden graficar.
    .row.justify-content-center.mb-5
      .col-lg-3.col-5.d-lg-block.d-none: img(src='@/assets/curso/temas/tema6/1.svg', alt='')
      .col-lg-9
        .p-4(style="background-color: #ffe8de ")
          .bloque-texto-c.color-secundario.bg-transparent
            i.fas.fa-quote-right
            p.mb-0 Según Harrington (1997) “los diagramas de flujo son representaciones gráficas de procesos que muestran las actividades tanto de los procesos de negocio o productos/servicios como la relación entre estos. Dichos procesos tienen valor en casi todos los pasos de los precios para la solución de problemas. Se pueden utilizar para identificar problemas, definir mediciones, generar ideas, proporcionar una visión de la condición futura deseada y seleccionar la solución apropiada” (p.98).
            span Harrington (1997)
    .p-5(style="background-color: #f3f9ff ").mb-5
      h5.mb-5 Se podría definir que las ventajas más destacadas de usar flujogramas en la gestión de procesos son:
      .row.justify-content-center.mb-5.align-items-center
        .col-lg-7.mb-lg-0.mb-3
          ul.lista-ul--color
            li
              i.fas.fa-angle-right(style="color: #FF6E33")
              | Permite una fácil y rápida comprensión de la estructura de los procesos, así como de sus relaciones.

            li
              i.fas.fa-angle-right(style="color: #FF6E33")
              | Posibilita codificar de manera sistemática y estructurada el proceso.
            li
              i.fas.fa-angle-right(style="color: #FF6E33")
              | Permite una interpretación universal.
            li
              i.fas.fa-angle-right(style="color: #FF6E33")
              | Facilita la comprensión de la información compleja.
            li
              i.fas.fa-angle-right(style="color: #FF6E33")
              | Visibiliza relaciones cliente – proveedor.
            li
              i.fas.fa-angle-right(style="color: #FF6E33")
              | Permite identificar problemas y oportunidades.
            li
              i.fas.fa-angle-right(style="color: #FF6E33")
              | Define e identifica las actividades.
            li
              i.fas.fa-angle-right(style="color: #FF6E33")
              | Es fácil elaboración y no require recursos sofisticados.
        .col-lg-4.col-6: img(src='@/assets/curso/temas/tema6/2.png', alt='')
    .bg-tema6.p-5.mb-5
      h5 Como desventajas se pueden destacar:
      ul.lista-ul--color
        li
          i.fas.fa-angle-right(style="color: #FF6E33")
          | Es limitado a la hora de representar operaciones concurrentes, ya que en principio está concebido para representar procesos secuenciales.
        li
          i.fas.fa-angle-right(style="color: #FF6E33")
          | Puede convertirse en una estrategia compleja para el planteamiento y diseño de algunos procesos.

        li
          i.fas.fa-angle-right(style="color: #FF6E33")
          | Hay procesos que manejan muchos datos y la incorporación de información es restringida.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 7
      br
      span.fst-italic 4 principales figuras para realizar diagramas de flujo de proceso
    .row.justify-content-center.mb-5
      .col-lg-7
        .tabla-a
          table
            caption Nota. Tomado de Cabreralibuy (2020).
            thead(style="border-top: 0px")
              tr(style="background-color: #FF6E33 ") 
                th Figura
                th Descripción
            tbody.bg-white.text-center
              tr
                td 
                  p.text-center Terminador / Iniciador
                  img(src='@/assets/curso/temas/tema6/3.svg', alt='' style="width: 131px").m-auto
                td Esta figura se utiliza para mostrar el inicio del proceso y también donde finaliza
              tr
                td 
                  p.text-center Proceso
                  img(src='@/assets/curso/temas/tema6/4.svg', alt='' style="width: 131px").m-auto
                td Con esta figura se representan las actividades, tareas y operaciones que se realizan durante el proceso.
              tr
                td 
                  p.text-center Flecha
                  img(src='@/assets/curso/temas/tema6/5.svg', alt='' style="width: 131px").m-auto
                td Esta figura indica la dirección del flujo y se utiliza con frecuencia para unir dos etapas sucesivas de un mismo proceso.
              tr
                td 
                  p.text-center Proceso
                  img(src='@/assets/curso/temas/tema6/6.svg', alt='' style="width: 131px").m-auto
                td En este punto del proceso se debe tomar una determinación y según las flechas que salen de esta figura se determinan las acciones a seguir.
    p.mb-5(data-aos='fade-right') Los diagramas de flujo sirven para visualizar cómo avanzan las operaciones y cómo se relacionan con la distribución de planta y los puestos de trabajo. Eso significa que se pueden identificar situaciones que necesitan ser mejoradas, de esa manera este tipo de gráfica ayuda a tomar mejores decisiones y a mejorar tiempos.
    h4(style="color: #EA526F") Diagrama de hilo
    .row.justify-content-center.mb-5
      .col-lg-8
        .p-5(style="background-color: #ecf7f4 ")
          p.mb-0 Es una herramienta que sirve para visualizar y mejorar recorridos de la producción, en áreas determinadas de la empresa o con el flujo de determinados productos o líneas de producción. Se debe realizar un dibujo a escala del área de trabajo, de los puestos de trabajo o de las áreas o máquinas que tengan importancia dentro del proceso, así mismo, del camino que recorren los materiales.
            br
            br
            |Luego se colocan alfileres o algo similar en los puntos clave del proceso y con un hilo se unen esos puntos, representando las distancias y transportes necesarios para que el flujo de producción funcione con el menor recorrido y en el menor tiempo, eso significa ahorro de costos. En la actualidad por medio de ordenadores se simulan los alfileres y el hilo.
      .col-lg-4.col-6: img(src='@/assets/curso/temas/tema6/7.png', alt='')
    .p-5.mb-5(style="background-color: #d3f5f6")
      .row.justify-content-center.align-items-center
        .col-lg-2.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema6/8.svg', alt='')
        .col-lg-10
          p.mb-0 Estos diagramas ayudan a marcar y a determinar las distancias recorridas entre operaciones y los recorridos totales de las personas y materiales involucrados en el proceso. Al poder establecer lo anterior, entonces también se pueden hacer observaciones sobre cómo disminuir esos transportes e incluso en algunos casos eliminarlos.
    p.mb-5(data-aos='fade-right') Cuando se hacen recorridos que pasan por el mismo sitio de manera constante a veces se identifica cuántos de esos recorridos son necesarios y cuáles no. La ubicación de los puestos de trabajo se visualiza mejor y se puede observar si su posición actual es óptima o si es susceptible de mejoramiento. #[b Los diagramas de hilo son de particular interés al planear una distribución en planta, cuando el movimiento del material y operarios es de gran importancia, por eso tiene múltiples aplicaciones tales como:]
    .p-5(style="background-color: #f3f9ff ").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-lg-0.mb-3
          ul.lista-ul--color
            li
              i.fas.fa-angle-right(style="color: #FF6E33")
              | Utilizarlos para medir la distancia total recorrida de trabajadores, materiales o equipos, al igual que ayuda a medir la frecuencia de movimiento.
            li
              i.fas.fa-angle-right(style="color: #FF6E33")
              | Analiza los movimientos de varios sujetos o patrones totales del flujo.
            li
              i.fas.fa-angle-right(style="color: #FF6E33")
              | Ayuda a mejorar los tiempos y movimientos, determinando, disminuyendo o eliminando los retrocesos, desplazamientos y acumulación de tránsito.

            
        .col-lg-2.col-6: img(src='@/assets/curso/temas/tema6/9.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-8
        .p-5(style="background-color: #ecf7f4 ")
          h4 Ejemplo 
          p.mb-5 En la siguiente figura se muestra un diagrama de hilo, donde las letras son los puestos de trabajo o los almacenamientos, y se puede ver los alfileres y los hilos que unen y hacen interactuar las operaciones, mostrando los recorridos y las distancias que las separan.
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1  
            br
            span.fst-italic Ejemplo diagrama de hilo


      .col-lg-4.col-6: img(src='@/assets/curso/temas/tema6/10.png', alt='')
    figcaption.d-inline-flex Nota. Tomado de Mejía (2021).

</template>

<script>
export default {
  name: 'Tema6',
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

<style lang="sass">
.bg-tema6
  background-image: url(../assets/curso/temas/tema6/bg-tema6.svg)
  background-repeat: no-repeat
  background-position: center
  background-size: cover
</style>
