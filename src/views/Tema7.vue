<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Módulos de producción
    .p-4(style="background-color:#fef0f3 ").mb-4
      p.mb-0 Se pueden definir como unidades productivas pequeñas que sumadas dan como resultado el total de la capacidad instalada de la planta, son como plantas pequeñas de producción o subáreas productivas dentro de una planta grande. Cada módulo o unidad productiva se encarga de hacer una referencia diferente, por medio de esa estrategia se entregan más lotes en el mismo tiempo, sobre todo cuando se habla de lotes de pocas unidades; sin embargo, en muchos casos un lote grande se divide en muchos pequeños.
    .row.justify-content-center.mb-5
      .col-lg-10 
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema7/1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los módulos de producción buscan eliminar o minimizar la existencia de inventarios en proceso, que suelen presentarse frecuentemente cuando se trabaja de manera lineal en toda la planta, para las producciones asignadas a estos módulos, al ser más pequeños también son más flexibles para que actúen de manera polivalente, de esa manera ofrece respuestas más rápidas a la producción esperada. Cuando los equipos de trabajo son más pequeños, el riesgo de que la comunicación no sea efectiva disminuye.
    .p-5(style="background-color: #f4f9fe").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8 
          p En los módulos de producción no siempre el número de trabajadores es igual al número de máquinas, en la mayoría de los casos los trabajadores se van desplazando por las máquinas y solo va avanzando de a una unidad, lo que significa que el módulo va produciendo de manera constante prendas terminadas. En el sistema tradicional de producción se manejan paquetes de piezas cortadas, de entre 20 y 30 unidades. De ese modo hay que esperar el tiempo que se requiere para ensamblar todo el paquete, de manera modular están saliendo prendas constantemente y el inventario en proceso es mínimo, como se muestra en la siguiente figura.
        .col-lg-4
          img(src='@/assets/curso/temas/tema7/2.png', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura. 2 
          span Módulo de producción en “U” con todas las operaciones de un proceso
        img.mb-3(src='@/assets/curso/temas/tema7/3.svg', alt='Ejemplo de un módulo de producción en U, el cual representa cada una de las operaciones de un proceso de producción, desde la entrada de la materia prima, hasta la salida del producto final.')
        figcaption.mb-5 Nota. Tomado de Cuatrecasas (2012).
    p.mb-5(data-aos='fade-right') Son recomendables los módulos de producción para hacer lotes no muy grandes, se realiza antes de iniciar la planeación para verificar qué tipo de máquinas se van a necesitar de acuerdo con la cantidad por hora que se pretende producir.
    .row.justify-content-center.mb-3
      .col-lg-10
        .tarjeta.color-secundario.p-3
                .row.justify-content-around.align-items-center
                  .col-auto
                    img(src="@/assets/curso/temas/tema1/10.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h4.mb-1(style="color: #122b4c") Módulo 1 – Confecciones ZO
                        p.mb-0.text-small(style="color: #122b4c") En el siguiente video se ejemplifica el trabajo por módulos, en este caso 6 personas trabajan de pie en un módulo de 7 máquinas. Las dos primeras operarias trabajan en cuatro máquinas, las otras tres trabajan cada una en una máquina y la última operaria realiza oficios manuales.
                      .col-sm-auto
                        a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/hpCS90qCyCs" target="_blank" type="application/pdf")
                          span Ver video 
                          i.fas.fa-video
    p.mb-5(data-aos='fade-right') Cuando se está trabajando de forma modular no se miden eficiencias individuales, sino grupales, los resultados son del módulo, no de cada persona, de ahí que los módulos de producción se han considerado una filosofía, que nace como respuesta a mercados exigentes en el tiempo, y en la versatilidad de la moda, también se han llamado a esos lotes pequeñas series cortas.
    .p-5(style="background-color: #f4f9fe").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8 
          ul.lista-ul--color
            li
              i.fas.fa-angle-right(style='color: #FF6E33' )
              | Al producir de manera modular también se identifican las no conformidades de manera más rápida y la acción de mejora de igual manera se empieza a ejecutar más ágil.
            li
              i.fas.fa-angle-right(style='color: #FF6E33' )
              | Las personas son mejor aprovechadas en todo su potencial y logran desarrollar nuevas habilidades.
            li
              i.fas.fa-angle-right(style='color: #FF6E33' )
              | Las áreas son mejor aprovechadas.
            li
              i.fas.fa-angle-right(style='color: #FF6E33' )
              | Los materiales hacen menos recorridos.
            li
              i.fas.fa-angle-right(style='color: #FF6E33' )
              | El trabajo en equipo se incrementa y las responsabilidades son grupales, no individuales.
        .col-lg-4
          img(src='@/assets/curso/temas/tema7/4.png', alt='')
    .p-5(style="background-color: #fbeef1").mb-5
      h4 Para poder implementar un sistema de módulos es importante:
      .row.justify-content-center.align-items-center
        .col-lg-10 
          ul.lista-ul--color
            li
              i.fas.fa-angle-right(style='color: #FF6E33' )
              | Contar con el apoyo de la gerencia.
            li
              i.fas.fa-angle-right(style='color: #FF6E33' )
              | Capacitar al personal para que se reduzca la resistencia al cambio.
            li
              i.fas.fa-angle-right(style='color: #FF6E33' )
              | Mejorar los puestos de trabajo y adaptarlos a las nuevas formas de trabajar.
            li
              i.fas.fa-angle-right(style='color: #FF6E33' )
              | Establecer metas grupales de acuerdo con el estándar de la prenda y al número de personas por módulo
        .col-lg-2 
          img(src='@/assets/curso/temas/tema7/5.svg', alt='')












</template>

<script>
export default {
  name: 'Tema7',
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
