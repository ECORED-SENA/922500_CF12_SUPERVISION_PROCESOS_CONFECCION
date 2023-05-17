<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Balanceo de líneas de producción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p El balanceo de líneas de producción se refiere al llamado equilibrado de cadenas de producción, en el que se consigna, en un formato o matriz, la asignación de los recursos necesarios para ensamblar una prenda de vestir. 
          br
          br
          |Para las plantas de producción un buen balanceo de líneas garantiza el cumplimiento de la eficiencia del equipo operativo y marca la diferencia en el aprovechamiento de los recursos humanos, de esta forma, balancear eficientemente posee dos componentes: el primero hace referencia al cumplimiento del factor numérico o las metas y el segundo, a contar con la aplicación de la herramienta de matriz de polifuncionalidad, es decir, a hacer uso del conocimiento que del producto y sus operaciones posee el recurso humano. (OIT, 1996)
      .col-lg-5.col-4(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/1.svg', alt='')
    h3(style="color: #ea526f") Objetivos de un balance de líneas
    p.mb-5(data-aos='fade-right') El balance de líneas se desarrolla con el fin de alcanzar diversos objetivos, entre los que se encuentran:
    .p-4(style="background-color: #fff1eb").mb-5
      SlyderF.mb-5.slyderf-custom(columnas="col-lg-6 col-xl-3")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/2.svg' alt='AvatarTop')(style="top:40px; width: 60px")
          .tarjeta.color-primario--borde.border-2.w-100
            .p-4
              p Alcanzar el cumplimiento de la producción programada.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/3.svg' alt='AvatarTop')(style="top:40px; width: 60px")
          .tarjeta.color-primario--borde.border-2.w-100
            .p-4
              p Mantener la trazabilidad de la eficiencia individual y de los equipos de trabajo.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/4.svg' alt='AvatarTop')(style="top:40px; width: 60px")
          .tarjeta.color-primario--borde.border-2.w-100
            .p-4
              p Elevar la valoración del ritmo de trabajo, técnica que mide el comportamiento cualitativo del recurso humano al interior del proceso.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/5.svg' alt='AvatarTop')(style="top:40px; width: 60px")
          .tarjeta.color-primario--borde.border-2.w-100
            .p-4
              p Disminuir los tiempos de espera entre operaciones.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/6.svg' alt='AvatarTop')(style="top:40px; width: 60px")
          .tarjeta.color-primario--borde.border-2.w-100
            .p-4
              p Eliminar los cuellos de botella en los módulos de trabajo.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/7.svg' alt='AvatarTop')(style="top:40px; width: 60px")
          .tarjeta.color-primario--borde.border-2.w-100
            .p-4
              p Disminuir la curva de aprendizaje en el montaje de las ordenes de producción.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/8.svg' alt='AvatarTop')(style="top:40px; width: 60px")
          .tarjeta.color-primario--borde.border-2.w-100
            .p-4
              p Eliminar la programación de horas extras por los sobrecostos que genera.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/9.svg' alt='AvatarTop')(style="top:40px; width: 60px")
          .tarjeta.color-primario--borde.border-2.w-100
            .p-4
              p Disminuir costos de operatividad del proceso.
    h3(style="color: #ea526f") Objetivos de un balance de líneas
      p.mb-5(data-aos='fade-right') Se constituye en una herramienta vital para el control de la producción, que tiene como objetivo principal equilibrar los tiempos de trabajo en cada etapa de su proceso, lo cual permitirá la optimización de las diferentes variables que intervienen.
        br
        br
        | #[b De esta manera, los parámetros para construir un balanceo se relacionan, teniendo como referente los siguientes datos técnicos:]
    .tarjeta.bg-slyder.p-4
      SlyderA(tipo='b')
        .row
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
</template>

<script>
export default {
  name: 'Tema2',
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
