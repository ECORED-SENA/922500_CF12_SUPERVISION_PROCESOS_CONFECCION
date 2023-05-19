<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Matriz de polifuncionalidad
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        .p-5(style="background-color:#cdfbfa ")
          p.mb-0 La matriz de polifuncionalidad hace referencia al cuadro de control, donde se incluye el conocimiento que tiene cada una de las personas de gestión humana asociadas al proceso, igualmente la maquinaria en la que operan, el producto que se elabora y, por consiguiente, de las operaciones y sus métodos de trabajo. Todo esto se expresa integrado en un índice porcentual, utilizando una escala de valoración numérica que se observa en la siguiente tabla.
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/1.svg', alt='')
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 7  
      br
      span.fst-italic Ejemplo de matriz de polifuncionalidad
    //todo! TABLA COMO ANEXO 
    .row.justify-content-center.mb-5
      .col-lg-10 
        .bloque-derecha
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/2.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4(style="width: 70%")
              p.mb-0 De esta manera, la matriz de polifuncionalidad se convierte en una herramienta estratégica que sirve de base para el equilibrio de las líneas de producción, con lo que se da forma y fondo al equipo de trabajo de eficiencia. Con esto se evita que el producto no conforme o la falta de calidad con base en los datos que aporta, por consiguiente, se asigna la persona a la operación acorde al conocimiento que aporta el indicador, esto da como resultado un excelente índice de calidad y cumplimiento en los ciclos de entrega, además de elevados números en la facturación de la empresa, lo cual aporta al sostenimiento económico en el tiempo. (OIT, 1996)
    p.mb-5(data-aos='fade-right') Para construir una matriz de polifuncionalidad tendremos en cuenta el listado operacional. Este es un formato planilla o plantilla, donde se registran las operaciones de la prenda de forma secuencial, estableciendo tres subfases:
    .p-5(style="background-color: #ecf7f4; min-height: 500px " ).mb-4
      .d-flex.justify-content-center.flex-wrap
        .contenedor.m-4
          img(src='@/assets/curso/temas/tema3/3.svg', alt='' style="width: 295px").mb-3
          .tarjeta(style="background-color: #b4f3f2 ; width: 295px ").p-3.h-100
            p.mb-0 en esta etapa las piezas se unen para ser preparadas para otro proceso.
        .contenedor.m-4
          img(src='@/assets/curso/temas/tema3/4.svg', alt='' style="width: 295px").mb-3
          .tarjeta(style="background-color: #f1d4c3 ; width: 295px ").p-3.h-100
            p.mb-0 en esta etapa se intervienen las piezas claves del producto.
        .contenedor.m-4
          img(src='@/assets/curso/temas/tema3/5.svg', alt='' style="width: 295px").mb-3
          .tarjeta(style="background-color: #eccdd3 ; width: 295px ").p-3.h-100
            p.mb-0 en esta etapa se evacúa el producto hacia una terminación para ser referenciado y almacenado o para otro proceso alterno como lavandería, bordado o estampado.
    p.mb-5(data-aos='fade-right') #[b A continuación, se presenta un ejemplo del listado de operaciones que sirve como base para la construcción de la matriz polifuncional:]
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 8  
      br
      span.fst-italic Ejemplo listado de operaciones
    .row.justify-content-center.mb-4
      .col-lg-11
        .tabla-a
          table
            thead(style="border-top: 0px")
              tr(style="background-color: #FF6E33 ") 
                th(colspan="4") LISTADO OPERACIONES
              tr(style="background-color: #dee9f0 ") 
                th(colspan="2") REFERENCIA 561007 Orden de producción: 561007
                th 	FECHA
                th 7/7/21
              tr(style="background-color: #dee9f0 ") 
                th SEC
                th DESCRIPCIÓN DE LA OPERACIÓN
                th MÁQUINA
                th SAM
            tbody.bg-white
              tr
                td  1 
                td Fijar marquilla  
                td Plana 1 
                td 0.308
              tr
                td 2 
                td Unir hombro derecho 
                td Fileteadora sencilla 
                td 0.394
              tr
                td 3 
                td Sesgar cuello redondo 
                td Recubridora 
                td 0.972
              tr
                td 4 
                td Unir hombro izquierdo casando sesgo 
                td Fileteadora sencilla  
                td 0.422
              tr
                td 5 
                td Sesgar sisas x 2 
                td Recubridora 
                td 1.448
              tr
                td 6 
                td Cerrar costados m/s x 2 con composición sesga en sisas 
                td Fileteadora sencilla 
                td 1.392
              tr
                td 7 
                td Presilla x 1 cuello 
                td Presilladora 
                td 0.216
              tr
                td 8 
                td Presilla sisas x 2 
                td Presilladora 
                td 0.61
              tr
                td 9 
                td Doblar ruedo bajo 
                td Recubridora 
                td 1.24
              tr
                td 10 
                td Pulir y revisar esqueleto 
                td Manual 
                td 1.276
              tr
                td 11 
                td Pegar stickers en etiqueta y bolsa 
                td Manual 
                td 0.138
              tr
                td 12 
                td Etiquetar x 2 
                td Manual 
                td 0.144
              tr
                td 13 
                td Doblar, empacar y encintar bolsa dúo camisetas 
                td Manual 
                td 0.412
              tr
                td(colspan="3").text-end TOTAL
                td 8.972












</template>

<script>
export default {
  name: 'Tema3',
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
