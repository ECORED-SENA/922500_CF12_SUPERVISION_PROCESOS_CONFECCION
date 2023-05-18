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
    h3 Carga instalada en minutos de producción
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        .p-5(style="background-color: #f6f6f6")   
          p.mb-0 Esta se asocia al tiempo que aporta una orden de producción específica con base en el tiempo estándar y el número de unidades programados en ella. Los minutos de producción aportan inventario de carga de tiempo para realizar la planeación y la programación de la planta de producción, ya sea horaria, diaria, semanal, entre otros. (Valverde Chifla, 2014)
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/5.png', alt='')
    p.mb-5(data-aos='fade-right').fw-bold Para realizar su cálculo se emplean las siguientes variables:
    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/6.svg' alt='AvatarTop')
          .tarjeta.w-100.rounded-0(style="background-color: #ffe8de ")
            .p-4.text-center.pt-5
              h5 Número de unidades de la orden de producción
              p Total de unidades asociadas a una orden de producción especifica
      .col-lg-5.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/7.svg' alt='AvatarTop')
          .tarjeta.w-100.rounded-0(style="background-color: #dbfafa ")
            .p-4.text-center.pt-5
              h5 Tiempo estándar de la prenda
              p Unidad de medida de tiempo, en minutos, de una prenda de vestir. Se obtiene mediante un estudio de métodos y tiempos que da como resultado precisamente el tiempo estándar de la prenda
    p.text-center.mb-5 Así, para determinar la carga instalada o minutos de producción se debe realizar la siguiente fórmula:
    .justify-content-center.d-flex
        .tarjeta.color-acento-contenido.p-4.d-inline-flex
          p.text-white.fst-italic.text-center.mb-0 𝐶.𝐼.𝑂=𝑁𝑜.𝑑𝑒 𝑝𝑒𝑟𝑠𝑜𝑛𝑎𝑠 𝑑𝑒 𝑀.𝑂.𝐷∗𝐽𝑜𝑟𝑛𝑎𝑑𝑎 𝑙𝑎𝑏𝑜𝑟𝑎𝑙∗𝐶𝑜𝑛𝑠𝑡𝑎𝑛𝑡𝑒 𝑑𝑒 𝑑í𝑎𝑠 𝑝𝑟𝑜𝑑𝑢𝑐𝑡𝑖𝑣𝑜𝑠 𝑝𝑜𝑟 𝑚𝑒𝑠  
    p.mb-5(data-aos='fade-right') Se puede observar el siguiente ejemplo, para comprender un poco más acerca de la carga instalada o de los minutos de producción aplicados al contexto laboral.
    .row.justify-content-center.mb-5
      .col-lg-10
        div(style="background-color: #F3F9FF").p-5.mt-5
          .d-flex.justify-content-center(style="margin-top: -5rem; margin-bottom: 1.5rem")
            .tarjeta.color-secundario.d-inline-flex.p-4.rounded-3
              p.mb-0(style="color: #000000").fw-bold  Caso de Ejemplo
          p.mb-4 Manufacturamos prendas S.A.S. tiene una planta de producción y cuenta con las siguientes órdenes de fabricación que se presentan a continuación:
          .titulo-sexto.color-primario(data-aos='fade-right')
            h5 Tabla 2
            br
            span.fst-italic Ejemplo carga instalada o minutos de producción
          .row.justify-content-center.mb-4
            .col-lg-11
              .tabla-a
                table
                  thead(style="border-top: 0px")
                    tr
                      th(colspan="8" style="background-color: #FF6E33 ") CARGA INSTALADA O MINUTOS DE PRODUCCIÓN
                  tbody.bg-white.text-center
                    tr(style="background-color: #EBCEC2 ").fw-bold
                      td Fecha de ingreso
                      td Referencia
                      td Descripción
                      td Orden de producción
                      td Número de unidades por orden de producción
                      td Tiempo estándar
                      td Total minutos de producción
                      td Fecha de despacho
                    tr
                      td 7/7/21
                      td 434,343
                      td Blusa irina
                      td 102,223
                      td 457
                      td 12.3
                      td 5621.1
                      td 7/18/21
                    tr
                      td 7/8/21
                      td 434,344
                      td Blusa lunar
                      td 102,224
                      td 535
                      td 15.4 
                      td 8239 
                      td 7/19/21
                    tr
                      td 7/9/21 
                      td 434,345 
                      td Blusa angelical
                      td 102,225 
                      td 840 
                      td 9.81  
                      td 8240.4
                      td 7/21/21
                    tr
                      td 7/10/21 
                      td 434,346 
                      td Blusa triangular 
                      td 102,226 
                      td 1241 
                      td 10.5 
                      td 13030.5 
                      td 7/22/21
          .row.justify-content-center.mb-5
            .col-lg-11
              div(style="background-color: #DEE9F0 ").p-4
                p.mb-0 #[b En la tabla 2], es posible conocer la fecha de ingreso de las órdenes de producción con sus respectivas referencias, descripción, número de unidades, tiempo estándar, total de minutos de producción y la fecha de despacho. A partir de la información suministrada es posible interpretar técnicamente que la referencia 434.343 con orden de producción número 102.223, aporta al proceso un total de 5621,1 minutos o que la referencia 434.346 con orden de producción número 102.226, aporta al proceso un total de 13030,5 minutos. De esta manera, los datos presentados se convierten en el insumo vital para planear y programar en la planta de producción.  
    h3(style="color: #ea526f") Carga instalada en minutos técnicos         
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        .p-5(style="background-color: #f6f6f6")   
          p.mb-0 Se asocia a la diversidad de máquinas con que cuentan las plantas de manufactura, aunque esta carga es poco empleada para protocolos de programación, los minutos técnicos muestran las restricciones que tienen las empresas con respecto a la maquinaria. Igual que los anteriores tipos de cargas, son los minutos asociados al parque de inventario disponible durante una jornada de trabajo, igualmente al tiempo que aportan los recursos de guías y accesorios que acompañan al departamento de producción, además de la calidad y de las áreas de montaje del producto. (Valverde Chifla, 2014)
            br
            br
            | #[b Si bien, una persona puede ser remplazada en el proceso, no pasa lo mismo con la no disponibilidad de una máquina, puesto que esta situación puede acarrear caos al proceso y bajar el índice de productividad de la compañía.]
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/8.png', alt='')
    p.mb-5(data-aos='fade-right').fw-bold Para realizar su cálculo se emplean las siguientes variables:
    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/6.svg' alt='AvatarTop')
          .tarjeta.w-100.rounded-0(style="background-color: #ffe8de ")
            .p-4.text-center.pt-5
              h5 Número de unidades de la orden de producción
              p Total de unidades asociadas a una orden de producción especifica
      .col-lg-5.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/7.svg' alt='AvatarTop')
          .tarjeta.w-100.rounded-0(style="background-color: #dbfafa ")
            .p-4.text-center.pt-5
              h5 Jornada de Trabajo
              p Periodo de tiempo estimado en la normatividad del código Sustantivo del trabajo colombiano, en el que se determinan un numero de de minutos horarios o diarios.
    p.mb-5(data-aos='fade-right').text-center Así, para determinar la carga instalada en minutos técnicos se debe realizar la siguiente fórmula:
    .justify-content-center.d-flex
        .tarjeta.color-acento-contenido.p-4.d-inline-flex
          p.text-white.fst-italic.text-center.mb-0 𝐶.𝐼.𝑇=𝑁𝑜.𝑑𝑒 𝑚á𝑞𝑢𝑖𝑛𝑎𝑠 𝑝𝑜𝑟 𝑒𝑠𝑝𝑒𝑐𝑖𝑎𝑙𝑖𝑑𝑎𝑑∗𝐽𝑜𝑟𝑛𝑎𝑑𝑎 𝑑𝑒 𝑡𝑟𝑎𝑏𝑎𝑗𝑜 (ℎ𝑜𝑟𝑎𝑟𝑖𝑎 𝑜 𝑑𝑖𝑎𝑟𝑖𝑎)
    p.mb-5(data-aos='fade-right') Con el siguiente ejemplo, se podrá comprender un poco más acerca de la carga instalada en minutos técnicos aplicada al contexto laboral.
    .row.justify-content-center.mb-5
      .col-lg-10
        div(style="background-color: #F3F9FF").p-5.mt-5
          .d-flex.justify-content-center(style="margin-top: -5rem; margin-bottom: 1.5rem")
            .tarjeta.color-secundario.d-inline-flex.p-4.rounded-3
              p.mb-0(style="color: #000000").fw-bold  Caso de Ejemplo
          p.mb-4 Manufacturas y Manufacturas S.A.S. presenta la siguiente relación del parque de la maquinaria con la que actualmente cuenta la empresa, con ello, el líder del departamento de producción requiere el cálculo de la capacidad instalada en minutos técnicos para la elaboración del plan maestro de producción, por lo que pide a su asistente elaborar un cuadro de control que contenga los datos.
          .titulo-sexto.color-primario(data-aos='fade-right')
            h5 Tabla 3
            br
            span.fst-italic Ejemplo carga instalada o minutos de producción
          .row.justify-content-center.mb-4
            .col-lg-12
              .tabla-a
                table
                  thead(style="border-top: 0px")
                    tr
                      th(colspan="6" style="background-color: #FF6E33 ") CAPACIDAD INSTALADA TÉCNICA
                  tbody.bg-white.text-center
                    tr(style="background-color: #dee8ee ").fw-bold
                      td(colspan="4") JORNADA LABORAL (hora/día/minutos)
                      td 60
                      td 480
                    tr(style="background-color: #EBCEC2 ").fw-bold
                      td CANTIDAD       
                      td DESCRIPCIÓN MÁQUINA
                      td MINUTOS DISPONIBLES HORA
                      td MINUTOS DISPONIBLES DÍA
                      td FECHA MANTENIMIENTO
                      td MINUTOS PROGRAMADOS
                    tr
                      td 14 
                      td Plana convencional
                      td 840 
                      td 6,720
                      td 
                      td 
                    tr
                      td 6   
                      td Plana electrónica
                      td 360
                      td 2,880
                      td 
                      td 
                    tr
                      td 7   
                      td Plana dos agujas
                      td 420
                      td 3,360
                      td 
                      td 
                    tr
                      td 6   
                      td Fileteadora sencilla
                      td 360
                      td 2,880
                      td 
                      td 
                    tr
                      td 4   
                      td Fileteadora puntada de refuerzo
                      td 240
                      td 1,920
                      td
                      td
                    tr
                      td 4 
                      td Fileteadora puntada de seguridad 
                      td 240 
                      td 1,920
                      td
                      td
                    tr
                      td 5 
                      td Recubridora 
                      td 300 
                      td 2400
                      td
                      td
                    tr
                      td 3 
                      td Sesgadora 
                      td 180 
                      td 1440
                      td
                      td
                    tr
                      td 5 
                      td Recubridora cuchilla izquierda 
                      td 300 
                      td 2400
                      td
                      td
                    tr
                      td 6 
                      td Equipo de plancha 
                      td 360 
                      td 2880
                      td
                      td
                    tr
                      td 2 
                      td Presilladora 
                      td 120 
                      td 960
                      td
                      td
                    tr
                      td 2 
                      td Cerradora de codo pesada 
                      td 120 
                      td 960
                      td
                      td
                    tr
                      td 3 
                      td Cerradora de codo liviana 
                      td 180 
                      td 1440
                      td
                      td
                    tr
                      td 2 
                      td Ojaladora 
                      td 120 
                      td 960
                      td
                      td
                    tr
                      td 2 
                      td Botonadora 
                      td 120 
                      td 960
                      td
                      td
                    tr
                      td 1 
                      td Multiagujas 
                      td 60 
                      td 480
                      td
                      td
                    tr
                      td 3 
                      td Resortadora 
                      td 180 
                      td 1440
                      td
                      td
                    tr
                      td 2 
                      td Pretinadora 
                      td 120 
                      td 960
                      td
                      td
                    tr
                      td 2
                      td Flatseamer 
                      td 120 
                      td 960
                      td
                      td
                    tr
                      td 2 
                      td Remachadora 
                      td 120 
                      td 960
                      td
                      td
                    tr
                      td 1
                      td Flatseamer
                      td 60 
                      td 480
                      td 
                      td 
                    tr
                      td 3 
                      td Fileteadora ceromax 
                      td 180 
                      td 1440
                      td 
                      td 
          .row.justify-content-center.mb-5
            .col-lg-11
              div(style="background-color: #DEE9F0 ").p-4
                p.mb-0 En el ejemplo es posible evidenciar que al analizar la disponibilidad del tiempo asociado al equipo técnico, existe una apropiación de la maquinaria y con este se relaciona la programación del desarrollo de este inventario, lo cual se conectará con la disposición del equipo frente al listado operacional de cada una de las actividades que se deben llevar a cabo en las órdenes de producción que llegan a la empresa.
    h3(style="color: #ea526f") Aplicación en la industria        
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        .p-5(style="background-color: #f6f6f6")   
          p.mb-0 La capacidad instalada en cada uno de sus elementos, provee diversos usos a la información obtenida a partir de las distintas variables, que integradas con los planes estratégicos de las compañías generan grandes beneficios, lo cual permite direccionar la obtención del cumplimiento de objetivos como la productividad y la facturación para el sostenimiento económico. A continuación, se mencionan algunos:
      .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/9.png', alt='')
    TabsA.color-acento-contenido.mb-5
      .tarjeta.p-4(titulo="Uso racional del tiempo" style="background-color: #ebf6ff")
        p Asociado a los recursos más relevantes en los procesos de manufactura (recursos humanos, materias primas y equipamiento, guías y accesorios). En este contexto el tiempo en la capacidad de respuesta es vital con los clientes internos y externos.
      .tarjeta.p-4(titulo="Regulación de los costos <br>de producción" style="background-color: #ebf6ff")
        p Hace referencia al hecho de ser competitivos en un mercado donde la competencia no tiene escrúpulos para aplastar los precios de los productos propios.
      .tarjeta.p-4(titulo="Uso racional del espacio físico" style="background-color: #ebf6ff")
        p Este es muy costoso, sobre todo el suelo comercial, por lo que se espera el máximo aprovechamiento de cada centímetro disponible en las áreas locativas.
      .tarjeta.p-4(titulo="Aplicaciones en la construcción de <br> balances de lineas de trabajo" style="background-color: #ebf6ff")
        p Esta matriz permite calcular metas programadas y la asignación de cargas de trabajo, con el complemento del cuadro de polifuncionalidad.
      .tarjeta.p-4(titulo="Intervención en el diseño de los <br> indicadores de gestión <br>de la compañía" style="background-color: #ebf6ff")
        p Permite trazabilidad al proceso de aplicación de políticas y estrategias corporativas.
      .tarjeta.p-4(titulo="Integración al plan maestro de la <br> producción" style="background-color: #ebf6ff")
        p Se refiere al requerimiento de recurso humano, de materias primas, de maquinaria, costos, disponibilidad y capacidad de respuesta.
    .row.justify-content-center.mb-3
      .col-lg-10
        .tarjeta.color-secundario.p-4.mb-3
          .row.justify-content-around.align-items-center
            .col-2.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/10.svg")
            .col-10
              .row.justify-content-between.align-items-center
                .col-9.mb-sm-0
                  h4.mb-1(style="color: #122b4c") Cálculo de capacidad de producción
                  p.text-small.mb-0(style="color: #122b4c") Observe el siguiente video para observar los pasos para el cálculo del volumen a producir.
                .col.mb-3.mb-sm-0
                  a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/qt8L-ARkz8M" target="_blank" type="application/pdf")
                    span Ver video 
                    i.fas.fa-video
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-secundario.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-2.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/11.svg")
            .col-10
              .row.justify-content-between.align-items-center
                .col-9.mb-sm-0
                  h4.mb-1(style="color: #122b4c") Utilización de la capacidad instalada en la industria.
                  p.text-small.mb-0(style="color: #122b4c") Le invitamos a consultar el artículo sobre el potencial de la capacidad instalada en la industria
                .col.mb-3.mb-sm-0
                  a.boton.color-acento-botones.texto-blanco(href="https://observatorio.unr.edu.ar/utilizacion-de-la-capacidad-instalada-en-la-industria-2/" target="_blank" type="application/pdf")
                    span Ir al articulo 


















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
