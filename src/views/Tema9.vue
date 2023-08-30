<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Cadenas de abastecimiento
    .p-4(style="background-color:#fef0f3 ").mb-4
      p.mb-0 Denominadas también cadenas de aprovisionamiento o de suministros; son todas las actividades, instalaciones y logística de las que hacen parte las entradas y la transformación de los materiales en productos terminados y su posterior distribución, teniendo en cuenta cantidades, fechas, velocidad y costos. En la industria de la moda se ha venido implementando en los últimos años este concepto con gran éxito, ya que integra todas las actividades a un objetivo común y más grande
    .row.justify-content-center.mb-5
      .col-lg-4.col-12.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema9/1.jpg', alt='')
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4(style="background-color: #dbfafa ")
          p.mb-0 Abastecer una demanda significa gestionar recursos y actividades diseñadas para atender los pedidos, administrar de manera idónea todos los elementos necesarios para satisfacer las demandas. Lograr que esos recursos y actividades estén en las cantidades solicitadas, en el momento y lugar indicado y cumpliendo las especificaciones deseadas es el objetivo de una cadena de abastecimiento, teniendo en cuenta que abarca áreas administrativas, de logística, de recursos humanos, financieros, tecnológicos, paquetes de información, bases de datos, etc.
    p.mb-5(data-aos='fade-right') Todas estas interacciones deben realizarse y acompañarse cuidando la eficiencia y el consumo óptimo de los recursos a utilizar. Cada vez que se realiza una actividad u operación, esta debe agregar valor a todo el proceso, de lo contrario esa actividad estaría estorbando. #[b Las actividades que hacen parte de la cadena de aprovisionamiento abarcan aquellas que tienen que ver con las actividades a que son sometidas las materias primas e insumos, entre ellas:]
    .tarjeta.bg-slyder.p-5.mb-5 
      SlyderA(tipo='b')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Procesamiento de órdenes
            p Para que funcione la programación es importante que las actividades de procesamiento sean coherentes con los pedidos y demandas, sobre todo con las cantidades y las fechas pactadas. Los procesos deben de ir uno a uno, interactuando a la misma velocidad, y satisfaciendo las necesidades de unos y otros. Estas cadenas de abastecimiento o aprovisionamiento son las encargadas de que el procesamiento esté conectado directamente con la demanda.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema9/2.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Control de inventarios
            p Una de las virtudes más importantes de la interpretación de un sistema de aprovisionamiento es establecer las cantidades necesarias para cada tipo de actividad, sin equivocarse de manera representativa, ni por exceso, ni por defecto. Cuando se manejan muchos inventarios ociosos, el costo de almacenamiento y financiero es alto, y cuando no se tienen los elementos de fabricación a tiempo se corre un gran riesgo de que se dañe la cadena de producción con sus respectivas consecuencias.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema9/3.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Almacenamiento y distribución
            p Es precisamente esta actividad la que mide si la cadena está funcionando bien, a la velocidad y el tiempo esperado; el sistema de halar producción (pull) es el que más se utiliza cuando estamos conscientes de una cadena de aprovisionamiento. Precisamente, se implementa este sistema de proveer los recursos necesarios para cada actividad, para que pueda funcionar la cadena.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema9/4.png', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') Todos los actores de esta cadena de suministro intervienen y se integran a la línea de producción, que busca satisfacer la demanda de los clientes, distribuidores y/o puntos de venta. De ese modo, todos deben conocer los objetivos comunes para que su participación sea enriquecedora y contribuya a que las expectativas se satisfagan, incluso si en la cadena hay actividades y/o servicios delegados en terceros. De ahí que los proveedores de materiales y servicios se conviertan en pieza clave en el engranaje exacto que se pretende diseñar e implementar para proveer la demanda.
      br
      br
      |#[b En la siguiente figura se ilustra la manera en que deben interactuar las actividades de una organización, proveyéndose unas a otras.]
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 3 
      span Cadena de aprovisionamiento
    img(src='@/assets/curso/temas/tema9/5.svg', alt='La cadena de aprovisionamiento se compone de las siguientes fases: materias primas, producción, transporte y logística, agencias y sucursales, almacenamiento o bodegaje, venta, facturación y distribución y entregas.').mb-4
    figcaption.mb-5 Nota. Tomado y adaptado de Roldán (2017)
    .row.justify-content-center.mb-3
      .col-lg-10
        .tarjeta.color-secundario.p-3
                .row.justify-content-around.align-items-center
                  .col-auto
                    img(src="@/assets/curso/temas/tema1/10.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h4.mb-1(style="color: #122b4c") Logística cadena de abastecimiento
                        p.mb-0.text-small(style="color: #122b4c") Observe el siguiente video con el que podrá ampliar el concepto de la cadena de abastecimiento:
                      .col-sm-auto
                        a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/u9f8_u8NwZE" target="_blank" type="application/pdf")
                          span Ver video 
                          i.fas.fa-video
</template>

<script>
export default {
  name: 'Tema9',
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
