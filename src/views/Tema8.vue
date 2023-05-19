<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Plan de operaciones y sistemas de transformación o producción
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p El programa que dimensiona, que da medidas a los recursos y demás detalles relacionados con la producción de bienes y servicios de una empresa, se llama plan de operaciones o plan operativo. Contiene toda la información de las operaciones y el flujo de los procesos que son necesarios. 
        .cajon.color-secundario.p-4.mb-4(style="background-color: #dbfafa")
          p.mb-0  Todo este conjunto de operaciones y procesos que se van desarrollando en un flujo constante de transformación de entradas, materias primas, máquinas, mano de obra, dinero e información, entre otros, generará valor a cada actividad. Según Curin (2017), el plan de operaciones contiene el diseño de la estructura y la implementación de todos los procesos que permitirán producir el producto y servicio, y llevarlo al cliente de forma más eficaz y eficiente
      .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema8/1.png', alt='')
    .p-5(style="background-color: #fbeef1").mb-5
      h4 Este plan de operaciones permite:
      .row.justify-content-center.align-items-center
        .col-lg-8 
          ul.lista-ul--color
            li
              i.fas.fa-angle-right(style='color: #FF6E33' )
              | Definir las acciones operativas (procesos) necesarias para realizar la producción.
            li
              i.fas.fa-angle-right(style='color: #FF6E33' )
              | Calcular los recursos necesarios de materiales y mano de obra.
            li
              i.fas.fa-angle-right(style='color: #FF6E33' )
              | Comparar capacidades instaladas versus demandas solicitadas
        .col-lg-2 
          img(src='@/assets/curso/temas/tema8/2.svg', alt='')
    h3 Sistemas de transformación o producción
    p.mb-5(data-aos='fade-right') Los sistemas de producción engloban todos los procesos, actividades y elementos que permiten que la materia prima se convierta en productos terminados. #[b La manera como se transforman materias primas en productos terminados (prendas de vestir) tienen diferentes formas de funcionar, esencialmente se pueden definir cuatro tipos:]
    TabsA.color-acento-contenido.mb-5
      .tarjeta.p-4(titulo="Sistema de producción <br>de flujo continuo" style="background-color: #ebf6ff")
        p No existen variaciones significativas entre sus productos, como su nombre lo expresa la producción es constante y habitualmente se ocupa de grandes volúmenes de unidades a producir. Parar y volver a iniciar un sistema de producción de este tipo es demasiado costoso, por ejemplo, hornos de producción constante.
      .tarjeta.p-4(titulo="Sistema de <br>producción en masa" style="background-color: #ebf6ff")
        p Es similar a la producción de flujo continuo, pero sus lotes son de menos unidades y a pesar de que sus productos son muy parecidos, muestran diferencias más relevantes. Sus procesos son muy automatizados.
      .tarjeta.p-4(titulo="Sistema de producción<br> por lotes" style="background-color: #ebf6ff")
        p Aquí se minimizan las cantidades, se podría decir que en los sistemas de flujo continuo se habla de producir millares, en la producción en masa centenas, en la producción por lotes se producen decenas. Se utiliza más en pymes, que es donde las capacidades de producción son más coherentes con este tipo de lotes.
      .tarjeta.p-4(titulo="Sistema de producción<br> por trabajo" style="background-color: #ebf6ff")
        p Se trata de sistemas dedicados a la producción de lotes muy pequeños, personalizados, de mucha manufactura, y con diseños exclusivos.
    .row.justify-content-center.mb-5
      .col-lg-8
        .p-5(style="background-color: #dbfafa ")
          h5 Para saber elegir cuál sistema es más conveniente se tienen en cuenta aspectos como:
          .row.justify-content-center
            .col-lg-5
              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-angle-right(style='color: #FF6E33' )
                  | El tamaño de la empresa.
                li.mb-0
                  i.fas.fa-angle-right(style='color: #FF6E33' )
                  | Las características del producto.
                li.mb-0
                  i.fas.fa-angle-right(style='color: #FF6E33' )
                  | Número de unidades solicitadas.
                li.mb-0
                  i.fas.fa-angle-right(style='color: #FF6E33' )
                  | Capacidad de producción instalada.
                li.mb-0
                  i.fas.fa-angle-right(style='color: #FF6E33' )
                  | Tecnología a utilizar.
            .col-lg-6
              img(src='@/assets/curso/temas/tema8/3.png', alt='' style="margin-bottom: -100px")
    p.mb-5(data-aos='fade-right') #[b Adicionalmente, para tomar una buena decisión existen indicadores que miden la conveniencia de uno u otro, como son:]
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema8/4.svg' alt='AvatarTop')
          .tarjeta.w-100(style="background-color: #dee9f0 ")
            .text-center.p-4
              h5 Costo
              p Los valores de los recursos que utilizo son determinantes para elegir un sistema de producción.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema8/5.svg' alt='AvatarTop')
          .tarjeta.w-100(style="background-color: #dee9f0 ")
            .text-center.p-4
              h5 Tiempo
              p Las fechas de inicio y de entrega de los proyectos o lotes que se realizan son influyentes en el servicio al cliente, los costos y el reconocimiento.
      .col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema8/6.svg' alt='AvatarTop')
          .tarjeta.w-100(style="background-color: #dee9f0 ")
            .text-center.p-4
              h5 Calidad
              p El cumplimiento de las especificaciones solicitadas por el cliente debe ser el resultado de un sistema de producción adecuado para cada tipo de empresa.
    p.mb-5(data-aos='fade-right') #[b Los sistemas de producción se relacionan con los sectores económicos de producción así:]
    .row.justify-content-center.mb-5
      .col-lg-4.col-6: img(src='@/assets/curso/temas/tema8/7.png', alt='')
      .col-lg-6
        .linea-editada
          LineaTiempoD.color-primario
            p.text-small(numero="1" titulo="Sector primario") Se refiere a las actividades que tienen que ver con la tierra, por ejemplo, la agricultura, la ganadería, la minería, etc.
            p.text-small(numero="2" titulo="Sector secundario") Tiene que ver con los procesos de transformación y manufactura
            p.text-small(numero="3" titulo="Sector terciario") Este sector es el que tiene que ver con las actividades de comercialización y #[em marketing.]
    .row.justify-content-center.mb-3
      .col-lg-10
        .tarjeta.color-secundario.p-4.mb-3
          .row.justify-content-around.align-items-center
            .col-2.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/10.svg")
            .col-10
              .row.justify-content-between.align-items-center
                .col-9.mb-sm-0
                  h4.mb-1(style="color: #122b4c") Introducción a los sistemas de producción - ITO
                  p.text-small.mb-0(style="color: #122b4c") Para conocer más sobre el tema remítase a los siguientes videos:
                .col.mb-3.mb-sm-0
                  a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/6q2U_X1I54s" target="_blank" type="application/pdf")
                    span Ver video 
                    i.fas.fa-video  
    .row.justify-content-center.mb-3
      .col-lg-10
        .tarjeta.color-secundario.p-4.mb-3
          .row.justify-content-around.align-items-center
            .col-2.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/10.svg")
            .col-10
              .row.justify-content-between.align-items-center
                .col-9.mb-sm-0
                  h4.mb-1(style="color: #122b4c") Tipos de sistemas de producción
                  p.text-small.mb-0(style="color: #122b4c") Para conocer más sobre el tema remítase a los siguientes videos:
                .col.mb-3.mb-sm-0
                  a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/pAe6LqJzkdA" target="_blank" type="application/pdf")
                    span Ver video 
                    i.fas.fa-video  

</template>

<script>
export default {
  name: 'Tema8',
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

.linea-tiempo-d.color-primario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number,
  background-color: #ffdacb
.linea-tiempo-d__item--selected .linea-tiempo-d__item__content__title, .linea-tiempo-d__item__content__slot
  background-color: #fff0ea
</style>
