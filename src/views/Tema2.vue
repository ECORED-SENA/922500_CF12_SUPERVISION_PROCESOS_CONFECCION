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
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/1.svg', alt='')
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
    .tarjeta.bg-slyder.p-5.mb-5
      SlyderA(tipo='b')
        .row.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Muestra física
            p Se refiere a la premuestra o modelo de la orden de producción.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/10.png', alt='Texto que describa la imagen')
        .row.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Número de personas de mano de obra directa
            p Hace referencia a la posibilidad de balancear una línea de trabajo mediante tres direcciones con base a las unidades de una orden de producción, es decir, conociendo el número de personas, el inventario disponible de máquinas o los minutos de carga.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/11.png', alt='Texto que describa la imagen')
        .row.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Inventario de maquinaria
            p Son las guías y accesorios para contrarrestar restricciones de los equipos.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/12.png', alt='Texto que describa la imagen')
        .row.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Grado de polifuncionalidad del equipo operativo
            p Se refiere al conocimiento de cada una de las operaciones de la prenda por parte de las personas de mano de obra directa.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/13.png', alt='Texto que describa la imagen')
        .row.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Índice de ausentismo
            p Permite prever paros por la ausencia del recurso humano, lo que permite realizar un adelanto a su reemplazo en el proceso.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/14.png', alt='Texto que describa la imagen')
        .row.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Índice de eficiencia individual del equipo operativo
            p Hace referencia al índice que mide la productividad individual en un proceso determinado.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/15.png', alt='Texto que describa la imagen')
        .row.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Planilla de control
            p Documento donde se registran los datos recolectados.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/16.png', alt='Texto que describa la imagen')
        .row.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Estatus de la tecnología que posee la empresa
            p Hace referencia al nivel tecnológico manejado por la empresa, así como las revoluciones por minuto de sus motores (RPM).
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/17.png', alt='Texto que describa la imagen')
        .row.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Aplicación de los datos técnicos
            p Se refiere al uso de los datos que arroja el cálculo de la capacidad instalada, minutos instalados, carga en minutos técnicos y minutos de producción.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/18.png', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') En el siguiente formato, se evidencian cada uno de los elementos que hacen parte del balanceo de líneas de producción.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 4  
      br
      span.fst-italic Ejemplo de formato de balanceo de líneas modulares
    
    
    
    //TODO! pendiente plantear la tabla como anexo. 

    //- .row.justify-content-center.mb-4
    //-       .col-lg-11
    //-         .tabla-a
    //-           table
    //-             thead(style="border-top: 0px")
    //-               tr(style="background-color: #FF6E33 ") 
    //-                 th(colspan="3" ) BALANCEO DE LÍNEA DE TRABAJO
    //-                 th(colspan="2" ) DEPARTAMENTO DE INGENIERÍA
    //-             tbody.bg-white.text-center
    //-               tr(style="background-color: #dee9f0 ").fw-bold
    //-                 td DATOS DISPONIBLES
    //-                 td DIARIA
    //-                 td HORARIA
    //-                 td(colspan="2" ) ESPECIFICACIÓN DE LA PRENDA
    //-               tr
    //-                 td Jornada de trabajo (min/dia/hora)
    //-                 td 480
    //-                 td 60
    //-                 td(rowspan="2") REFERENCIA
    //-                 td(rowspan="2") 558889
    //-               tr
    //-                   td Número de operarios (MOD)
    //-                   td(colspan="2") 5
    //-               tr
    //-                   td Tiempo estándar (100%) (min)
    //-                   td(colspan="3") 6.113
    //-                   td NOMBRE
    //-                   td Blusa manga corta
    //-               tr
    //-                   td Eficiencia (%)
    //-                   td(colspan="3") 
    //-                   td EMPRESA
    //-                   td Creaciones Trineo
    //-               tr
    //-                   td(colspan="3") RESULTADO
    //-                   td ESTUDIO DE TIEMPO No.
    //-                   td 222222
                    
    //-               tr
    //-                   td Tiempoe Estándar (Afectado) (min)
    //-                   td
    //-                   td UNIDADES LOTE 
    //-                   td 1223 
    //-                   td DIBUJO No. 
    //-                   td No
    //-               tr
    //-                   td Número de unidades HORA
    //-                   td 49
    //-                   td HORAS
    //-                   td 24.92
    //-                   td PLANO No.
    //-                   td Punto
    //-               tr
    //-                   td Número de unidades DIA
    //-                   td 393
    //-                   td DIAS DE PRODUCCIÓN
    //-                   td 3.115
    //-                   td TALLER
    //-                   td
    //-             tbody
    //TODO! pendiente plantear la tabla como anexo. 
    h3(style="color: #ea526f") Posibles causas en el desequilibrio de un balanceo de producción
    p.mb-5(data-aos='fade-right') A continuación, se enumeran una serie de situaciones, que a partir de distintos contextos, pueden generar un desequilibrio en un balanceo de producción:
    .p-5(style="background-color: #ffede5;  margin-bottom: 100px")
      ul.lista-ul--color.mb-5
        li
          i.fas.fa-angle-right(style="color: #FF6E33")
          | Ausentismo del recurso humano, hace referencia al momento en que el personal operativo no llega a su puesto de trabajo y se requiere
        li
          i.fas.fa-angle-right(style="color: #FF6E33")
          | Desconocimiento administrativo de la matriz de polifuncionalidad, debilidades y fortalezas que tiene el equipo de colaboradores por el conocimiento o desconocimiento que se tiene del producto a ensamblar.
        li
          i.fas.fa-angle-right(style="color: #FF6E33")
          | Falta de planes de mantenimiento de máquinas guías y accesorios.

        li
          i.fas.fa-angle-right(style="color: #FF6E33")
          | Mala calidad en las piezas cortadas.
        li
          i.fas.fa-angle-right(style="color: #FF6E33")
          | Materias primas, materiales e insumos de mala calidad.
        li
          i.fas.fa-angle-right(style="color: #FF6E33")
          | Faltante en insumos para la confección de las prendas de vestir.
        li
          i.fas.fa-angle-right(style="color: #FF6E33")
          | Falta de diseño de indicadores de gestión y control de piso, lo cual no permite llevar trazabilidad a los números en la planta.
        li
          i.fas.fa-angle-right(style="color: #FF6E33")
          | Ineficiencia del personal operativo cuando no cumple las metas programadas.
        li
          i.fas.fa-angle-right(style="color: #FF6E33")
          | Omitir operaciones en la tabla de secuencia de actividades del producto.
        li
          i.fas.fa-angle-right(style="color: #FF6E33")
          | Cálculo errado de los estándares de las operaciones, tiempos mal tomados y métodos de trabajo deficientes.
        li
          i.fas.fa-angle-right(style="color: #FF6E33")
          | Entrada a la línea de modelos con deficiencia en la información de la ficha técnica y deficiencia en las especificaciones de fabricación.
      .d-flex.justify-content-center
        img(src='@/assets/curso/temas/tema2/19.png', alt='' style="width: 387px; margin-bottom: -100px")
    h3(style="color: #ea526f") Variables
    p.mb-5(data-aos='fade-right') Al balancear una prenda de vestir y asignar tareas para copar la jornada laboral de los colaboradores, se deben tener presentes las siguientes variables, que se encuentran documentadas en un cuadro de control del balanceo:
    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        div(titulo="Variable 1").px-5.py-3
          h4 Conocimiento de la jornada de trabajo en minutos

          p Se establece el tiempo laboral básico, es decir, jornada horaria (60 minutos) y jornada diaria (480 minutos), se aclara que no debe integrar horas extras.


        div(titulo="Variable 2").px-5.py-3
          h4 Número de operarios de mano de obra directa

          p Se refiere tanto a aquellos que manipulan las máquinas, como aquellos que realizan actividades manuales.

        div(titulo="Variable 3").px-5.py-3
          h4 Tiempo estándar del producto

          p Así como de cada una de las operaciones se trabaja al 100 %, cabe recordar que al definir la unidad de medida en minutos asociada a un método de trabajo, afecta la valoración del ritmo de trabajo y al cual se le adiciona un tiempo suplementario. Este es un tema tratado anteriormente en el cálculo del tiempo estándar en el estudio del trabajo.
          
        div(titulo="Variable 4").px-5.py-3
          h4 Porcentaje de eficiencia de la planta
          p Así como de cada una de las operaciones se trabaja al 100 %, cabe recordar que al definir la unidad de medida en minutos asociada a un método de trabajo, afecta la valoración del ritmo de trabajo y al cual se le adiciona un tiempo suplementario. Este es un tema tratado anteriormente en el cálculo del tiempo estándar en el estudio del trabajo.
        div(titulo="Variable 5").px-5.py-3
          h4 Cálculo del número de unidades por hora

          p Se obtiene a través de la siguiente fórmula:
          img(src='@/assets/curso/temas/tema2/20.svg', alt='' style="width: 666px")
          
        div(titulo="Variable 6").px-5.py-3
          h4 Cálculo del número de unidades por día

          p Se obtiene a través de la siguiente fórmula:
          img(src='@/assets/curso/temas/tema2/21.svg', alt='' style="width: 666px")
          
        div(titulo="Variable 7").px-5.py-3
          h4 Cálculo de minutos por operación por día

          p Se obtiene a través de la siguiente fórmula:
          img(src='@/assets/curso/temas/tema2/23.svg', alt='' style="width: 704px")
          
        div(titulo="Variable 8").px-5.py-3
          h4 Cálculo de minutos por operación por hora

          p Este se emplea al hacer balance por hora. Se obtiene a través de la siguiente fórmula:
          img(src='@/assets/curso/temas/tema2/24.svg', alt='' style="width: 787px")
          
        div(titulo="Variable 9").px-5.py-3
          h4 Cálculo del número de persona requeridas para evacuar los minutos por operación, por hora o por día

          p Es de resaltar que el resultado que obtenemos de este cálculo depende de si la empresa utiliza el balanceo para el día o para la hora. Como el dato es similar, mencionamos ambos cálculos matemáticos:
          img(src='@/assets/curso/temas/tema2/25.svg', alt='' style="width: 790px")
          img(src='@/assets/curso/temas/tema2/26.svg', alt='' style="width: 790px")
    h3(style="color: #ea526f") Cálculo de cargas de trabajo
    p.mb-5(data-aos='fade-right') Para determinar las cargas de trabajo en sus distintas dimensiones, se realizan los siguientes cálculos:
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Total de personas por especialidad de máquinas" :icono="require('@/assets/curso/temas/tema2/31.svg')")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            h4 Total de personas por especialidad de máquinas
            p Se obtiene realizando la sumatoria de los datos numéricos de la columna Cálculo personas por operación ubicada en la tabla 4.
          .col-md-3
            img(src='@/assets/curso/temas/tema2/27.png', alt='')
      .py-4.py-md-5(titulo="Puestos reales de trabajo" :icono="require('@/assets/curso/temas/tema2/32.svg')")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            h4 Puestos reales de trabajo
            p Este dato corresponde a la creación de puestos trabajo por lo que la disponibilidad física de ellos es un requerimiento del balanceo. En este punto siempre se recomienda aproximar a un número entero.
          .col-md-3
            img(src='@/assets/curso/temas/tema2/28.png', alt='')
      .py-4.py-md-5(titulo="Asignación de tareas" :icono="require('@/assets/curso/temas/tema2/33.svg')")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            h4 Asignación de tareas
            p Para asignar al equipo de trabajo las tareas, primero se debe registrar la jornada laboral de las personas, con los minutos de producción por hora (60 minutos), por día (480 minutos) o por operación, acorde al sistema de balanceo que lleve la planta.
          .col-md-3
            img(src='@/assets/curso/temas/tema2/29.png', alt='')
      .py-4.py-md-5(titulo="Separación de la maquinaria" :icono="require('@/assets/curso/temas/tema2/34.svg')")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            h4 Separación de la maquinaria
            p Contribuye al diseño de la distribución en planta del módulo.
          .col-md-3
            img(src='@/assets/curso/temas/tema2/30.png', alt='')
    p.mb-5(data-aos='fade-right') A continuación, se presenta un ejemplo práctico de balanceo de líneas:
    .p-5(style="background-color: #fce5e9").mb-5
      p #[b La empresa Tejiendo Hilos S.A.S. presenta la siguiente información:]
      .row.justify-content-center.mb-5
        .col-lg-10 
          .tarjeta.bg-white.p-4 
            .row.justify-content-center
              .col-lg-9
                ul.lista-ul--color
                  li
                    i.fas.fa-angle-right(style="color: #FF6E33 ")
                    | Orden de producción: No 13225.

                  li
                    i.fas.fa-angle-right(style="color: #FF6E33 ")
                    | Descripción de la prenda: blusa manga sisa.
                  li
                    i.fas.fa-angle-right(style="color: #FF6E33 ")
                    | Referencia 563494.
                  li
                    i.fas.fa-angle-right(style="color: #FF6E33 ")
                    | Se emplean 5 personas de mano de obra directa y se desarrolla una jornada de trabajo de lunes a sábado, 480 minutos al día.
              .col-lg-2.col-6: img(src='@/assets/curso/temas/tema2/35.svg', alt='')
            p.mb-5(data-aos='fade-right') Con esta información se debe construir el cuadro de control y balancear la línea de trabajo sabiendo que la lista de operaciones es la siguiente: 
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 5
        br
        span.fst-italic Ejemplo práctico balanceo de líneas (listado operacional)
      .row.justify-content-center.mb-4
        .col-lg-11
          .tabla-a
            table
              thead(style="border-top: 0px")
                tr(style="background-color: #FF6E33 ") 
                  th No.	
                  th OPERACIÓN		
                  th MÁQUINA 
                  th SAM (100%)
              tbody.bg-white.text-center
                tr
                  td 1	
                  td FIJAR MARQUILLA	
                  td Plana sencilla	
                  td 0.316
                tr
                  td 2	
                  td UNIR HOMBRO DERECHO	
                  td Fileteadora sencilla	
                  td 0.216
                tr
                  td 3	
                  td SESGAR CUELLO REDONDO	
                  td Sesgadora 	
                  td 0.356
                tr
                  td 4	
                  td UNIR HOMBRO IZQ CASANDO SESGO	
                  td Fileteadora sencilla	
                  td 0.232
                tr
                  td 5	
                  td PRESILLAR X 1	
                  td Presilladora 	
                  td 0.422
                tr
                  td 6	
                  td PEGAR MANGAS X 2	
                  td Fileteadora sencilla	
                  td 0.760
                tr
                  td 7	
                  td CERRAR COSTADOS M/C X 2 CON COMPOSICIÓN	
                  td Fileteadora sencilla	
                  td 0.833
                tr
                  td 8	
                  td DOBLAR RUEDO MANGAS X 2	
                  td Recubridora	
                  td 0.633
                tr
                  td 9	
                  td DOBLAR RUEDO BAJO	
                  td Recubridora	
                  td 0.620
                tr
                  td 10	
                  td PULIR Y REVISAR CAMISETA CON MARQUILLA	
                  td Manual 	
                  td 0.975
                tr
                  td 11	
                  td PEGAR STICKER EN ETIQUETA Y BOLSA	
                  td Manual 	
                  td 0.138
                tr
                  td 12	
                  td ETIQUETAR X 1	
                  td Manual 	
                  td 0.126
                tr
                  td 13	
                  td PEGAR ADHESIVO ADVERTENCIA	
                  td Manual 	
                  td 0.160
                tr
                  td 14	
                  td DOBLAR, EMPACAR Y ENCINTAR BOLSA	
                  td Manual 	
                  td 0.326
                tr
                  td(colspan="3" ) TOTAL
                  td 6.113
      p.mb-5(data-aos='fade-right') Por consiguiente, en la tabla 5, se establece la información que se ubicará en el formato de balanceo en líneas de trabajo, ver siguiente tabla.
      //todo! TABLA COMO ANEXO 
    .row.justify-content-center.mb-3
      .col-lg-10
        .tarjeta.color-secundario.p-3
                .row.justify-content-around.align-items-center
                  .col-auto
                    img(src="@/assets/curso/temas/tema1/10.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h4.mb-1(style="color: #122b4c") Balanceo de líneas de producción
                        p.mb-0.text-small(style="color: #122b4c") Para ampliar este tema lo invitamos a ver el desarrollo de un ejercicio práctico utilizando la herramienta Excel.
                      .col-sm-auto
                        a.boton.color-acento-botones(href="https://youtu.be/i_6vW3PMsv0" target="_blank" type="application/pdf")
                          span Ver video 
                          i.fas.fa-video


                    
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
