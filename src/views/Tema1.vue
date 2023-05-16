<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Capacidad instalada
    .row.justify-content-center.mb-3
      .col-lg-6.mb-lg-0.mb-3(data-aos="fade-right")
        p Para la industria textil de confección, hablar de capacidad instalada se refiere al componente vital del proceso productivo; es decir, sus recursos esenciales como: las personas, el producto y la maquinaria, que en compañía de la tecnología provee servicios o productos de óptima calidad. De estos depende que los administrativos, proyecten el futuro económico que tanto les preocupa. Lo que implica obtener máxima eficiencia del equipo operativo y utilizar sus conocimientos, puesto que provee al mercado de altos parámetros de calidad inmersos en sus productos, lo que significa una ventaja competitiva que la empresa sostiene en el tiempo.
        .cajon.color-secundario.p-4.mb-4(style="background-color: #DBFAFA")
          p.mb-0 De esta manera, proveer al mercado de productos que colmen las expectativas de un consumidor final aumenta la demanda, la sostenibilidad y el crecimiento económico, así como el incremento del empleo para una región golpeada por la actual situación de salud y bajas económicas. (Valverde Chifla, 2014)
      .col-lg-6.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/1.svg', alt='')
    p.mb-5(data-aos='fade-right').fw-bold A continuación, se detallarán cada uno de los recursos asociados con la capacidad instalada en el proceso de manufactura.
    div(style="background-color: #FCE5E9").p-5.mb-5
      h4 Capacidad instalada operativa
      p Esta se asocia a las personas, lo cual se define como el número de minutos que se obtiene del personal de mano de obra directa, utilizando como variables la jornada de trabajo y el número de días productivos por mes, lo cual en promedio suman 24 minutos. (Valverde Chifla, 2014)
        br
        br
        |#[b Para realizar su cálculo se emplean las siguientes variables:]
      .row.justify-content-center.mb-5
        .col-lg-11
          .row.justify-content-center
            .col-lg-4.mb-lg-0.mb-3
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema1/2.svg' alt='AvatarTop')
                .tarjeta.bg-white.rounded-0.w-100
                  .p-4
                    h5 Número de personas de mano de obra directa 
                    p Se define como el recurso humano directo que interviene en el proceso productivo, es decir, las personas que transforman la materia prima.
            .col-lg-4.mb-lg-0.mb-3
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema1/3.svg' alt='AvatarTop')
                .tarjeta.bg-white.rounded-0.w-100
                  .p-4
                    h5 Jornada de trabajo
                    p Periodo de tiempo estimado en la normatividad del Código sustantivo del trabajo colombiano, en el que se determinan un número de minutos horarios o diarios.
            .col-lg-4
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema1/4.svg' alt='AvatarTop')
                .tarjeta.bg-white.rounded-0.w-100
                  .p-4
                    h5 Constante de días productivos por mes
                    p Para obtener este dato se debe calcular un promedio estadístico de la sumatoria de los días hábiles de producción por cada mes, lo cual numéricamente se estima que se trabaja con 24 días.
      p.mb-3(data-aos='fade-right').text-center.fw-bold Así, para determinar la Capacidad Instalada Operativa se debe aplicar la siguiente fórmula:
      .justify-content-center.d-flex
        .tarjeta.color-acento-contenido.p-4.d-inline-flex
          p.text-white.fst-italic.text-center.mb-0 𝐶.𝐼.𝑂=𝑁𝑜.𝑑𝑒 𝑝𝑒𝑟𝑠𝑜𝑛𝑎𝑠 𝑑𝑒 𝑀.𝑂.𝐷∗𝐽𝑜𝑟𝑛𝑎𝑑𝑎 𝑙𝑎𝑏𝑜𝑟𝑎𝑙∗𝐶𝑜𝑛𝑠𝑡𝑎𝑛𝑡𝑒 𝑑𝑒 𝑑í𝑎𝑠 𝑝𝑟𝑜𝑑𝑢𝑐𝑡𝑖𝑣𝑜𝑠 𝑝𝑜𝑟 𝑚𝑒𝑠
    p.mb-3.text-center #[b A continuación, se presenta un ejemplo para comprender un poco más acerca de la capacidad instalada operativa aplicada al contexto laboral.]
    .row.justify-content-center.mb-5
      .col-lg-10
        div(style="background-color: #F3F9FF").p-5.mt-5
          .d-flex.justify-content-center(style="margin-top: -5rem; margin-bottom: 1.5rem")
            .tarjeta.color-secundario.d-inline-flex.p-4.rounded-3
              p.mb-0(style="color: #000000").fw-bold  Caso de Ejemplo
          p.mb-4 Hilos y Dedales S.A.S. tiene una planta de manufactura y cuenta con 2 módulos de ensamble que respectivamente poseen personal de mano de obra directa de 9, 8, y 14 personas en el área de empaque. La empresa labora de lunes a sábado en 8 horas diarias. Por ello, se pide calcular la capacidad instalada operativa, por equipos de trabajo, durante una hora, un día y un mes.
          .titulo-sexto.color-primario(data-aos='fade-right')
            h5 Tabla 1 
            br
            span.fst-italic Ejemplo capacidad instalada operativa
          .row.justify-content-center.mb-4
            .col-lg-11
              .tabla-a
                table
                  thead(style="border-top: 0px")
                    tr
                      th(colspan="5" style="background-color: #FF6E33 ") CAPACIDAD INSTALADA OPERATIVA MÓDULO 1
                  tbody.bg-white
                    tr(style="background-color: #EBCEC2 ").fw-bold
                      td Variable
                      td No. de Personas de MOD
                      td Jornada de trabajo
                      td Constante días de producción
                      td Total minutos operativos instalados
                    tr
                      td Hora
                      td 9
                      td 60
                      td 1
                      td 540
                    tr
                      td Día
                      td 9
                      td 480
                      td 1
                      td 4320
                    tr
                      td Mes
                      td 9
                      td 480
                      td 24
                      td 103680
                  
          .row.justify-content-center.mb-4
            .col-lg-11
              .tabla-a
                table
                  thead(style="border-top: 0px")
                    tr
                      th(colspan="5" style="background-color: #FF6E33 ") CAPACIDAD INSTALADA OPERATIVA MÓDULO 2
                  tbody.bg-white
                    tr(style="background-color: #EBCEC2 ").fw-bold
                      td Variable
                      td No. de Personas de MOD
                      td Jornada de trabajo
                      td Constante días de producción
                      td Total minutos operativos instalados
                    tr
                      td Hora
                      td 8
                      td 60
                      td 1
                      td 540
                    tr
                      td Día
                      td 8
                      td 480
                      td 1
                      td 3840
                    tr
                      td Mes
                      td 8
                      td 480
                      td 24
                      td 92160
          .row.justify-content-center.mb-2
            .col-lg-11
              .tabla-a.mb-5
                table
                  thead(style="border-top: 0px")
                    tr
                      th(colspan="5" style="background-color: #FF6E33 ") CAPACIDAD INSTALADA OPERATIVA - AREA DE EMPAQUE
                  tbody.bg-white
                    tr(style="background-color: #EBCEC2 ").fw-bold
                      td Variable
                      td No. de Personas de MOD
                      td Jornada de trabajo
                      td Constante días de producción
                      td Total minutos operativos instalados
                    tr
                      td Hora
                      td 14
                      td 60
                      td 1
                      td 840
                    tr
                      td Día
                      td 14
                      td 480
                      td 1
                      td 6720
                    tr
                      td Mes
                      td 14
                      td 480
                      td 24
                      td 161280
          .row.justify-content-center.mb-5
            .col-lg-11
              div(style="background-color: #DEE9F0 ").p-4
                p.mb-0 #[b Después de observar la tabla 1], en la interpretación técnica es posible evidenciar que el módulo 1 con 9 personas, aporta 540 minutos en una hora, 4.320 minutos en un día y 103.680 minutos en un mes. Igualmente se muestran los resultados en el módulo 2 y en el área de empaque. De esta forma, se presentan múltiples usos que poseen estos datos numéricos para la planeación de la producción en la empresa.
                  

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
