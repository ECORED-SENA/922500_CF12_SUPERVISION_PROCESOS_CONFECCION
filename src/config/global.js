export default {
  global: {
    componenteFormativo:
      'Capacidad productiva, cargas de trabajo y flujos de proceso',
    descripcionCurso:
      'Planear la capacidad productiva y las cargas de trabajo, permite determinar qué tan preciso puede ser el equilibrio de los tres principales recursos del proceso productivo. Y un flujo de proceso se articula con la distribución de la planta de producción y con la ubicación de los puestos de trabajo, permitiendo visualizar necesidades de recursos y capacidades de producción para dar respuesta a la demanda.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/a4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Capacidad instalada',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Balanceo de líneas de producción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Matriz de polifuncionalidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Flujo de procesos - Secuencias operacionales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Sistemas de gestión de flujos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Diagrama de flujo o flujograma y diagrama de hilo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Módulos de producción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Plan de operaciones y sistemas de transformación o producción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Cadenas de abastecimiento',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Capacidad instalada',
      referencia:
        'Consultoría Profesional México. (2018). Fácil Cálculo de capacidad de producción.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=qt8L-ARkz8M&ab_channel=ConsultoriaProfesionalMexico',
    },
    {
      tema: 'Capacidad instalada',
      referencia:
        'Jara, L. (2015). Utilización de la Capacidad Instalada en la Industria.',
      tipo: 'Artículo web',
      link:
        'https://observatorio.unr.edu.ar/utilizacion-de-la-capacidad-instalada-en-la-industria-2/#:~:text=La%20capacidad%20instalada%20es%20el,equipos%20de%20producci%C3%B3n%2C%20instalaciones%2C%20recursos',
    },
    {
      tema: 'Balanceo de líneas de producción',
      referencia:
        'Martínez, C .(2020). Balanceo de Líneas de Producción en Excel.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=i_6vW3PMsv0&ab_channel=CarlosMartinez',
    },
    {
      tema: 'Módulos de producción',
      referencia: 'Confecciones ZOE. (2017). Módulo 1.',
      tipo: 'Video',
      link: 'https://youtu.be/hpCS90qCyCs',
    },
    {
      tema: 'Sistemas de transformación o producción',
      referencia:
        'Instituto Tecnológico de Oaxaca. (s.f.). Introducción a los sistemas de producción - ITO.',
      tipo: 'Video',
      link: 'https://youtu.be/6q2U_X1I54s',
    },
    {
      tema: 'Sistemas de transformación o producción',
      referencia: 'Collazo, I. (2019). Tipos de sistemas de producción.',
      tipo: 'Video',
      link: 'https://youtu.be/pAe6LqJzkdA',
    },
    {
      tema: 'Cadenas de abastecimiento',
      referencia:
        'VirtualDocencia. (2016). Logística cadena de abastecimiento.',
      tipo: 'Video',
      link: 'https://youtu.be/u9f8_u8NwZE',
    },
  ],
  glosario: [
    {
      termino: 'Agregar valor',
      significado:
        'cuando a un producto o a un servicio se le va añadiendo o sumando características que enriquecen su contenido o presentación para lograr objetivos.',
    },
    {
      termino: 'Bienes y servicios',
      significado:
        'tangibles e intangibles, así se denomina el universo de lo obtenido, mediante procesos productivos.',
    },
    {
      termino: 'Cargas de trabajo',
      significado:
        'conjunto de requerimientos que debe realizar un trabajador en su jornada laboral.',
    },
    {
      termino: 'Código sustantivo del trabajo',
      significado:
        'documento constitucional donde se especifican todas las normas que regulan el contexto laboral en el país.',
    },
    {
      termino: 'Cuadro de control',
      significado:
        'documento donde se monitoriza procesos relacionados con la producción.',
    },
    {
      termino: 'Cuellos de botella',
      significado:
        'esta expresión define el represamiento del producto en los puestos de trabajo, por causa de mala programación, un estándar mal medido o la asignación de una persona con desconocimiento de los métodos de trabajo.',
    },
    {
      termino: 'Días hábiles',
      significado: 'se refiere a los días del año que son laborables.',
    },
    {
      termino: 'Estatus',
      significado: 'posición que se ocupa dentro de un grupo social.',
    },
    {
      termino: 'Estudio de métodos',
      significado:
        'hace referencia al registro y el análisis de los procesos establecidos del trabajo.',
    },
    {
      termino: 'Índice de productividad',
      significado:
        'permite comparar el nivel de eficiencia de una empresa con relación a sus procesos.',
    },
    {
      termino: 'Listado operacional',
      significado:
        'se refiere al orden en que se realizan las actividades de un proceso.',
    },
    {
      termino: 'Listado operacional',
      significado:
        'se refiere al orden en que se realizan las actividades de un proceso.',
    },
    {
      termino: 'Manufactura',
      significado:
        'se puede acuñar este término a la transformación de materias primas e insumos por medio de las manos y las máquinas.',
    },
    {
      termino: '<em>Marketing</em>',
      significado:
        'serie de elementos que ayudan a ser más especialistas en la parte de la comercialización y las ventas.',
    },
    {
      termino: 'Orden de producción',
      significado:
        'documento de instrucción que permite establecer la dirección de un proceso.',
    },
    {
      termino: 'Polifuncionalidad',
      significado:
        'capacidad de llevar a cabo distintas actividades en un mismo tiempo determinado.',
    },
    {
      termino: 'Proceso productivo',
      significado:
        'conjunto de actividades que lleva a cabo una organización para generar productos o servicios.',
    },
    {
      termino: 'Referencia',
      significado: 'código con el que se identifica una prenda.',
    },
    {
      termino: 'Variables',
      significado: 'elementos característicos que pueden cambiar.',
    },
    {
      termino: 'Ventaja competitiva',
      significado:
        'característica que distingue a una empresa sobre el mercado en general y se entiende como un valor agregado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cabreralibuy, R. (2020). Cómo hacer un diagrama de flujo de procesos. Herramientas Lean.',
      link: 'https://www.herramientaslean.com/diagramas-de-flujo-de-proceso',
    },
    {
      referencia:
        'Cuatrecasas, L. (2012). Procesos en flujo flexible Lean. Ediciones Díaz de Santos.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/62615?page=19',
    },
    {
      referencia: 'Curin, J. (2017). Plan de operaciones. Emprende pyme.net',
      link: 'https://www.emprendepyme.net/plan-de-operaciones',
    },
    {
      referencia:
        'Harrington, H. (1997). Administración total del mejoramiento continuo. McGraw Hill.',
      link: '',
    },
    {
      referencia:
        'ISO. (2015). Sistemas de gestión de la calidad - Fundamentos y vocabulario. ISO 9000:2015.',
      link: 'https://www.iso.org/obp/ui/#iso:std:iso:9000:ed-4:v1:es',
    },
    {
      referencia: 'Mejía, T. (2021). Diagrama de hilos. Lifeder.',
      link: 'https://www.lifeder.com/diagrama-de-hilos/',
    },
    {
      referencia:
        'OIT (1996). Introducción al estudio del trabajo. Cuarta edición. Oficina Internacional del Trabajo.',
      link: '',
    },
    {
      referencia:
        'Porter, M. (2016). La cadena de valor. Editores Plurilingua Publishing.',
      link: '',
    },
    {
      referencia: 'Roldán, P. (2017). Cadena de suministro. Economipedia',
      link: 'https://economipedia.com/definiciones/cadena-de-suministro.html',
    },
    {
      referencia:
        'Valverde Chifla, E. C., y Aguilar, J. P. (2014). La Capacidad Instalada de la Empresa y su incidencia en la Producción de Jeans en CALIFOR JEAN. [Bachelor’s thesis, Universidad Técnica de Ambato. Facultad de Ciencias Administrativas. Carrera de Organización de Empresas].',
      link:
        'http://repositorio.uta.edu.ec/bitstream/123456789/7119/1/141%20o.e.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Víctor Manuel Isaza Córdoba',
          cargo: 'Contratista Diseño Curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Mod - Regional Antioquia',
        },
        {
          nombre: 'María Camila Álvarez Trujillo',
          cargo: 'Contratista Diseño Curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
        },
        {
          nombre: 'Liliana María Ceballos Gutiérrez',
          cargo: 'Asesora metodológica, diseño y desarrollo curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Moda Complejo Sur Itagüí - Regional Antioquia',
        },
        {
          nombre: 'Pedro Luis Sossa Ramírez',
          cargo: 'Diseño y desarrollo curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Moda Complejo Sur Itagüí - Regional Antioquia',
        },
        {
          nombre: 'Vilma Perilla Méndez',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor metodológico y pedagógico',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro: 'Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodólogo para formación virtual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
