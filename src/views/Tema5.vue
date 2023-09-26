<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Sistemas de gestión de flujos
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right").order-lg-1.order-2
        .p-5(style="background-color:#fef0f3 ")
          p.mb-0 La gestión de la producción en las plantas de confección, requiere procesos comunicativos eficientes, así como de la comprensión de las actividades que hay que realizar. A continuación, se describen los términos relacionados con la gestión de flujos.
      .col-lg-4.col-12.mb-lg-0.mb-3.order-lg-2.order-1(data-aos="fade-left"): img(src='@/assets/curso/temas/tema5/1.svg', alt='')
    .tarjeta.bg-slyder.p-5.mb-5
      SlyderA(tipo='b')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Trabajo
            p En la cadena de abastecimiento o de aprovisionamiento se encuentra una serie de actividades y recursos y hay una acción que se encarga de relacionar ambos, agregando valor cada que participa, a eso se le puede nombrar trabajo. Es la actividad que transforma y agrega valor a los recursos en busca de un objetivo o meta. Se puede tasar en horas o en unidades. Desde el ángulo de los seres humanos, el trabajo es algo a lo que las personas le dedican parte de su tiempo, aún así, las máquinas también agregan valor cuando intervienen materias primas e insumos.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema5/2.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Flujos
            p Se pueden definir como una serie de actividades que permiten obtener un resultado, desde el inicio hasta el final. Se recomienda que haya orden lógico y coherencia. Los sistemas de producción son un conjunto de partes que se relacionan e interactúan entre sí, siendo todos los departamentos y áreas, proveedores y clientes al mismo tiempo. Deben tener establecido cuáles son esos objetivos comunes, la comunicación debe ser excelente, y la velocidad en cada actividad debe ser igual. Los flujos son secuencias de operaciones con unas condiciones y criterios comunes.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema5/3.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Procesos
            p Son actividades que se realizan para obtener productos y/o servicios, las anteceden unas entradas y culminan con unas salidas. En las plantas de producción y específicamente en las que pertenecen al sistema moda, se realizan procesos diversos, desde el diseño, trazo y corte, ensamble y confección, lavados, hasta el acabado y el despacho. Es muy importante tener dimensionados como se interrelacionan y lo que representan en el proceso total cada uno de esos procesos. Por su parte, la ISO 9000 (2015) define proceso como el conjunto de todas las operaciones que intervienen y se relacionan entre sí para transformar las entradas en resultados. En las organizaciones una de las funciones más relevantes es ir generando valor en la medida que sus operaciones van avanzando, en la transformación de las materias primas en productos o servicios finales. De ahí que a los sistemas de trasformación se les dedique una atención importante.
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema5/4.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Cadena de valor
            p Según Porter (2016), “es una sucesión de acciones realizadas con el objetivo de instalar y valorizar un producto o servicio exitoso en un mercado, lo que permite relacionarla con un proceso o macroproceso” (p.12).
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema5/5.png', alt='Texto que describa la imagen')
    h3(style="color: #ea526f") Flujo de trabajo
    p.mb-5(data-aos='fade-right') Es un conjunto de actividades relacionadas más un conjunto de criterios que indican el comienzo y finalización del proceso y de sus componentes e información adicional sobre cada actividad, tal como participantes, invocación de aplicaciones, datos, etc. Las actividades describen partes del trabajo y constituyen pasos o tareas dentro del proceso, estas pueden ser manuales o automáticas, en el sentido de que puedan requerir o no recursos humanos para su realización, así como invocar aplicaciones externas que realicen parte o todo el trabajo asignado a dicha actividad.
    h3(style="color: #ea526f") Flujo de proceso
    p.mb-5(data-aos='fade-right') Es un movimiento continuo de procesos, actividades y operaciones. Son definidos de acuerdo con la distribución de planta y la ubicación de los puestos de trabajo, teniendo en cuenta la normatividad y reglamentación que rige para estos casos.
      br
      br
      |#[b En este orden se puede afirmar que los elementos que fluyen en estos procesos son:]
    .p-4(style="background-color: #fff1eb").mb-5
      SlyderF.mb-5.slyderf-custom(columnas="col-lg-6 col-xl-4")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/6.svg' alt='AvatarTop')(style="top:30px; width: 105px")
          .tarjeta.color-primario--borde.border-2.w-100
            .p-4
              h5.text-center Documentos
              p.text-center Contienen información detallada de las especificaciones a cumplir, órdenes de producción, cantidades, etc.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/7.svg' alt='AvatarTop')(style="top:30px; width: 105px")
          .tarjeta.color-primario--borde.border-2.w-100
            .p-4
              h5.text-center Materiales
              p.text-center Los elementos que va a sufrir transformación son fundamentales para la obtención de prendas de vestir y deben coincidir con los requerimientos. 
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/8.svg' alt='AvatarTop')(style="top:30px; width: 105px")
          .tarjeta.color-primario--borde.border-2.w-100
            .p-4
              h5.text-center Personas
              p.text-center De acuerdo con talentos y perfiles se necesita talento humano para gestionar todo el proceso.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/9.svg' alt='AvatarTop')(style="top:30px; width: 105px")
          .tarjeta.color-primario--borde.border-2.w-100
            .p-4
              h5.text-center Dinero
              p.text-center Para hacer interactuar los demás recursos es importante disponer de recursos financieros para que apalanquen y soporten las compras y pago de créditos.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/10.svg' alt='AvatarTop')(style="top:30px; width: 105px")
          .tarjeta.color-primario--borde.border-2.w-100
            .p-4
              h5.text-center Maquinaria y Equipos
              p.text-center A pesar de que la producción de prendas de vestir ha llamado manufactura, se requieren equipos, máquinas y herramientas que ayuden a llevar a cabo los pronósticos planteados.
    p.mb-5(data-aos='fade-right') El éxito de un buen flujo de proceso y/o de trabajo se evidencia cuando se hacen mediciones de los resultados obtenidos y se comparan con la situación encontrada antes de implementar un nuevo flujo de producción, es decir, cuando se realiza un proceso de mejora.
      br
      br
      | #[b Los aspectos que indican dicha mejora son:]
    div(style="background-color: #dbfafa ").mb-5
      .row.justify-content-center
        .col-lg-5.mb-lg-0.mb-3
          .p-4
            ul.lista-ul--color
              li
                i.fas.fa-angle-right(style="color: #FF6E33")
                | Se utiliza menos tiempo al aplicar el flujo propuesto.
              li
                i.fas.fa-angle-right(style="color: #FF6E33")
                | Los costos se reducen.
              li
                i.fas.fa-angle-right(style="color: #FF6E33")
                | Se requiere menos mano de obra directa.
              li
                i.fas.fa-angle-right(style="color: #FF6E33")
                | Hay mejor aprovechamiento de los equipos, máquinas y herramientas.
              li
                i.fas.fa-angle-right(style="color: #FF6E33")
                | Se hace mejor y menor uso de las áreas de trabajo.
        .col-lg-5: img(src='@/assets/curso/temas/tema5/11.svg', alt='')
    p.mb-5(data-aos='fade-right') #[b A continuación, se ilustra la relación entradas → proceso → salidas:]
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .p-4.h-100(style="background-color: #ffe0d3")
          h4 Entradas
          ul.lista-ul--color
            li.mb-0
              i.fas.fa-angle-right
              | Documentos. 
            li.mb-0
              i.fas.fa-angle-right
              | Máquinas. 
            li.mb-0
              i.fas.fa-angle-right
              | Personas. 
            li.mb-0
              i.fas.fa-angle-right
              | Materias primas.
            li.mb-0
              i.fas.fa-angle-right
              | Insumos. 
            li.mb-0
              i.fas.fa-angle-right
              | Tecnología. 
            li.mb-0
              i.fas.fa-angle-right
              | Recursos financieros.
      .col-lg-1.mb-lg-0.mb-3
        .d-flex.h-100.align-items-center.justify-content-center
          img.d-lg-block.d-none(src='@/assets/curso/temas/tema5/flecha.svg', alt='')
          img.d-lg-none.d-block(src='@/assets/curso/temas/tema5/flecha_v.svg', alt='' style="width: 100px")
      .col-lg-3.mb-lg-0.mb-3
        .p-4.h-100(style="background-color: #ffd9e1")
          h4 Procesos
          ul.lista-ul--color
            li.mb-0
              i.fas.fa-angle-right
              | Diseño. 

            li.mb-0
              i.fas.fa-angle-right
              | Investigación. 
            li.mb-0
              i.fas.fa-angle-right
              | Alistamiento.
            li.mb-0
              i.fas.fa-angle-right
              | Trazo. 
            li.mb-0
              i.fas.fa-angle-right
              | Corte y confección.
            li.mb-0
              i.fas.fa-angle-right
              | Lavandería.
            li.mb-0
              i.fas.fa-angle-right
              | Acabados y empaques.
      .col-lg-1.mb-lg-0.mb-3
        .d-flex.h-100.align-items-center.justify-content-center
          img.d-lg-block.d-none(src='@/assets/curso/temas/tema5/flecha.svg', alt='')
          img.d-lg-none.d-block(src='@/assets/curso/temas/tema5/flecha_v.svg', alt='' style="width: 100px")
      .col-lg-3.mb-lg-0.mb-3
        .p-4.h-100(style="background-color: #ffebf0")
          h4 Salidas
          ul.lista-ul--color
            li.mb-0
              i.fas.fa-angle-right
              | Prendas terminadas.
            li.mb-0
              i.fas.fa-angle-right
              | Información.
            li.mb-0
              i.fas.fa-angle-right
              | Destinos.
            li.mb-0
              i.fas.fa-angle-right
              | Canales de distribución.
            li.mb-0
              i.fas.fa-angle-right
              | Utilidades.


</template>

<script>
export default {
  name: 'Tema5',
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
