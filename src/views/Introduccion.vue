<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos='fade-right') En la planeación de la capacidad productiva y las cargas de trabajo, la estrategia es determinar qué tan preciso puede ser el equilibrio de recursos de un proceso productivo, organizar los tiempos en cuanto a las distintas actividades del proceso de producción es crucial para cumplir los objetivos propuestos.
      br
      br
      |Todas las organizaciones del mundo deben, de acuerdo con el sector económico al que pertenecen, buscar la manera de obtener un crecimiento significativo, a través de ejercicios que las ayuden a ser más competitivas; ese elemento diferenciador o estrategia ganadora se refiere a cómo realizan sus actividades y cómo administran sus recursos.  
    
    p.mb-4 
      span.color-secundario A continuación se puede observar en el siguiente video la importancia de esta temática.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
