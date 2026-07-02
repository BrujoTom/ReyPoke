export const quickLinks = [
  { label: "Inicio", href: "https://www.colegioamaliaerrazuriz.cl/" },
  {
    label: "Nuestra Historia",
    href: "https://www.colegioamaliaerrazuriz.cl/medical-center/nuestra-historia/"
  },
  { label: "Niveles Académicos", href: "https://www.colegioamaliaerrazuriz.cl/niveles-academicos/" },
  { label: "Estamentos", href: "https://www.colegioamaliaerrazuriz.cl/medical-center/estamentos/" },
  {
    label: "Equipo directivo y de gestión",
    href: "https://www.colegioamaliaerrazuriz.cl/equipo-directivo-y-de-gestion/"
  },
  { label: "Cuerpo Docente", href: "https://www.colegioamaliaerrazuriz.cl/cuerpo-docente/" },
  { label: "Asistentes de la Educación", href: "https://www.colegioamaliaerrazuriz.cl/asistentes-educacion/" },
  { label: "Tour Virtual", href: "https://www.colegioamaliaerrazuriz.cl/tour/" },
  { label: "Trabaja con nosotros", href: "https://www.colegioamaliaerrazuriz.cl/contact-us/" },
  { label: "Gestión académica", href: "https://www.colegioamaliaerrazuriz.cl/gestion-academica/" },
  { label: "Academias", href: "https://www.colegioamaliaerrazuriz.cl/academias/" },
  { label: "Admisión", href: "https://www.colegioamaliaerrazuriz.cl/admision/" },
  { label: "Noticias", href: "https://www.colegioamaliaerrazuriz.cl/noticias/" },
  { label: "Documentos", href: "https://www.colegioamaliaerrazuriz.cl/documentos/" },
  { label: "Listado de materiales año 2026", href: "https://www.colegioamaliaerrazuriz.cl/lista-materiales/" }
];

export const menuGroups = [
  {
    label: "Colegio",
    items: [
      {
        label: "Nuestra Historia",
        demoHref: "/secciones/nuestra-historia",
        officialHref: "https://www.colegioamaliaerrazuriz.cl/medical-center/nuestra-historia/"
      },
      {
        label: "Niveles Académicos",
        demoHref: "/secciones/niveles-academicos",
        officialHref: "https://www.colegioamaliaerrazuriz.cl/niveles-academicos/"
      },
      {
        label: "Estamentos",
        demoHref: "/secciones/estamentos",
        officialHref: "https://www.colegioamaliaerrazuriz.cl/medical-center/estamentos/"
      }
    ]
  },
  {
    label: "Conócenos",
    items: [
      {
        label: "Equipo directivo y de gestión",
        demoHref: "/secciones/equipo-directivo-y-de-gestion",
        officialHref: "https://www.colegioamaliaerrazuriz.cl/equipo-directivo-y-de-gestion/"
      },
      {
        label: "Cuerpo Docente",
        demoHref: "/secciones/cuerpo-docente",
        officialHref: "https://www.colegioamaliaerrazuriz.cl/cuerpo-docente/"
      },
      {
        label: "Asistentes de la Educación",
        demoHref: "/secciones/asistentes-educacion",
        officialHref: "https://www.colegioamaliaerrazuriz.cl/asistentes-educacion/"
      },
      {
        label: "Tour Virtual",
        demoHref: "/secciones/tour-virtual",
        officialHref: "https://www.colegioamaliaerrazuriz.cl/tour/"
      },
      {
        label: "Trabaja con nosotros",
        demoHref: "/secciones/trabaja-con-nosotros",
        officialHref: "https://www.colegioamaliaerrazuriz.cl/contact-us/"
      }
    ]
  },
  {
    label: "Gestión",
    items: [
      {
        label: "Gestión académica",
        demoHref: "/secciones/gestion-academica",
        officialHref: "https://www.colegioamaliaerrazuriz.cl/gestion-academica/"
      },
      {
        label: "Academias",
        demoHref: "/secciones/academias",
        officialHref: "https://www.colegioamaliaerrazuriz.cl/academias/"
      },
      {
        label: "Documentos",
        demoHref: "/secciones/documentos",
        officialHref: "https://www.colegioamaliaerrazuriz.cl/documentos/"
      },
      {
        label: "Materiales 2026",
        demoHref: "/secciones/materiales-2026",
        officialHref: "https://www.colegioamaliaerrazuriz.cl/lista-materiales/"
      }
    ]
  }
] as const;

export const sectionPages = {
  "nuestra-historia": {
    title: "Nuestra Historia",
    officialHref: "https://www.colegioamaliaerrazuriz.cl/medical-center/nuestra-historia/",
    content: [
      "El Colegio Amalia Errázuriz fue fundado en 1941, a instancias de Monseñor Juan Subercaseax, en ese entonces arzobispo de la Serena, bajo la administración de la Congregación de San Juan Bautista, situación que se mantuvo hasta 1972.",
      "A partir de 1973, su sostenedor es la Corporación Juan Subercaseaux, sin fines de lucro, cuyo único objetivo es ofrecer a la Comunidad Ovallina una verdadera alternativa educacional de calidad para niños y jóvenes.",
      "El Colegio Amalia Errázuriz, de Orientación Cristiana Católica con un fuerte compromiso con la labor Pastoral de la Iglesia Católica, tiene un Proyecto Educativo consolidado."
    ]
  },
  "niveles-academicos": {
    title: "Niveles Académicos",
    officialHref: "https://www.colegioamaliaerrazuriz.cl/niveles-academicos/",
    content: [
      "Información de niveles académicos del Colegio Amalia Errázuriz.",
      "Para iteración de diseño, esta sección mantiene acceso directo al contenido oficial vigente."
    ]
  },
  estamentos: {
    title: "Estamentos",
    officialHref: "https://www.colegioamaliaerrazuriz.cl/medical-center/estamentos/",
    content: [
      "Sección de estamentos de la comunidad educativa.",
      "Base de página preparada para reemplazar por bloques y fichas según tu criterio visual."
    ]
  },
  "equipo-directivo-y-de-gestion": {
    title: "Equipo directivo y de gestión",
    officialHref: "https://www.colegioamaliaerrazuriz.cl/equipo-directivo-y-de-gestion/",
    content: [
      "Presentación del equipo directivo y de gestión del establecimiento.",
      "Puedes usar esta plantilla para pasar a cards con fotos y cargos."
    ]
  },
  "cuerpo-docente": {
    title: "Cuerpo Docente",
    officialHref: "https://www.colegioamaliaerrazuriz.cl/cuerpo-docente/",
    content: [
      "Sección dedicada al cuerpo docente del colegio.",
      "Lista para edición visual de perfiles, áreas y contacto."
    ]
  },
  "asistentes-educacion": {
    title: "Asistentes de la Educación",
    officialHref: "https://www.colegioamaliaerrazuriz.cl/asistentes-educacion/",
    content: [
      "Información de asistentes de la educación.",
      "Plantilla navegable para ajustes de estructura y estilo."
    ]
  },
  "tour-virtual": {
    title: "Tour Virtual",
    officialHref: "https://www.colegioamaliaerrazuriz.cl/tour/",
    content: [
      "Acceso al tour virtual institucional.",
      "Puedes incorporar aquí un iframe, video o galería inmersiva."
    ]
  },
  "trabaja-con-nosotros": {
    title: "Trabaja con nosotros",
    officialHref: "https://www.colegioamaliaerrazuriz.cl/contact-us/",
    content: [
      "Canal de contacto para postulaciones laborales.",
      "Sección preparada para un formulario de RRHH si quieres implementarlo."
    ]
  },
  "gestion-academica": {
    title: "Gestión académica",
    officialHref: "https://www.colegioamaliaerrazuriz.cl/gestion-academica/",
    content: [
      "Sección institucional de gestión académica.",
      "Ideal para organizar por bloques: evaluaciones, coordinación, lineamientos y recursos."
    ]
  },
  academias: {
    title: "Academias",
    officialHref: "https://www.colegioamaliaerrazuriz.cl/academias/",
    content: [
      "Fútbol femenino y masculino: Promover la práctica del futbol bajo una orientación formativa para lograr la formación integral de nuestros alumnos.",
      "Medio Ambiente: La academia de Ciencias y medio Ambiente busca aportar en el conocimiento de los alumnos y las alumnas.",
      "Robótica Educativa: Aprender a utilizar componentes electrónicos utilizados en la robótica como herramienta."
    ]
  },
  documentos: {
    title: "Documentos",
    officialHref: "https://www.colegioamaliaerrazuriz.cl/documentos/",
    content: [
      "Repositorio documental institucional.",
      "Podemos convertir esta vista en un buscador con filtros por categoría/año."
    ]
  },
  "materiales-2026": {
    title: "Listado de materiales año 2026",
    officialHref: "https://www.colegioamaliaerrazuriz.cl/lista-materiales/",
    content: [
      "Acceso al listado de materiales 2026.",
      "Lista para reemplazar por tablas descargables por nivel."
    ]
  }
} as const;

export const historyParagraphs = [
  "El Colegio Amalia Errázuriz fue fundado en 1941, a instancias de Monseñor Juan Subercaseax, en ese entonces arzobispo de la Serena, bajo la administración de la Congregación de San Juan Bautista, situación que se mantuvo hasta 1972.",
  "A partir de 1973, su sostenedor es la Corporación Juan Subercaseaux, sin fines de lucro, cuyo único objetivo es ofrecer a la Comunidad Ovallina una verdadera alternativa educacional de calidad para niños y jóvenes.",
  "El Colegio Amalia Errázuriz, de Orientación Cristiana Católica con un fuerte compromiso con la labor Pastoral de la Iglesia Católica, tiene un Proyecto Educativo consolidado, cuyo objetivo fundamental es promover la Excelencia Académica sin descuidar la formación integral basada en los valores que la Familia promueve en sus hijos e hijas.",
  "El compromiso de que la totalidad de sus alumnos y alumnas accedan a la Educación Superior se cumple cada año, es así que en la actualidad ocupa el lugar 51 Nacional, en resultados de la Prueba de Selección Universitaria (PSU).",
  "En los últimos 20 años el Colegio Amalia Errázuriz se ha mantenido entre los primeros 100 mejores Colegios del País, lo que constituye un orgullo para la Comunidad Escolar Amalina y contribuye al reconocimiento de la Educación de nuestra Ciudad.",
  "Su matrícula actual es de 596 alumnos y alumnas, distribuidos en un curso por nivel, desde Pre Kinder hasta Cuarto Año Medio."
];

export const methodology = [
  {
    number: "01",
    title: "Colegio Laico",
    text: "Colegio Laico de una fuerte tradición y nexo con la Iglesia Católica, por lo que su quehacer formativo está basado en una Formación Cristiana Católica, de apoyo a la Formación en Valores, cuya responsabilidad es ineludible e indelegable de la Familia. El Colegio apoya y refuerza."
  },
  {
    number: "02",
    title: "Desarrollo cognitivo",
    text: "El trabajo de las potencialidades cognitivas de cada uno de nuestros(as) alumnos(as) desarrollando en ellos destrezas y habilidades que al término de la Enseñanza Media les permite elegir su propio Proyecto de Vida, especialmente centrado en la Educación Superior Universitaria."
  },
  {
    number: "03",
    title: "Actividades extraescolares",
    text: "Las Actividades Extraescolares promueven el desarrollo integral de nuestros alumnos y alumnas."
  }
];

export const academyItems = [
  {
    title: "Fútbol femenino y masculino",
    text: "Promover la práctica del futbol bajo una orientación formativa para lograr la formación integral de nuestros alumnos, con la entrega de valores que les permita tener un óptimo desarrollo personal y deportivo."
  },
  {
    title: "Medio Ambiente",
    text: "La academia de Ciencias y medio Ambiente busca aportar en el conocimiento de los alumnos y las alumnas para una comprensión básica, del medio ambiente como sistema, de los problemas ambientales, y de la presencia del ser humano en él."
  },
  {
    title: "Robótica Educativa",
    text: "Aprender a utilizar componentes electrónicos utilizados en la robótica como herramienta, para desarrollar la capacidad de reflexión de los estudiantes, promoviendo el pensamiento meta-cognitivo."
  }
];

export const newsItems = [
  {
    date: "6 de Mayo de 2026",
    title: "Laura Aguilera: Destacada atleta de 17 años que brilla en Santiago y apunta al alto rendimiento internacional",
    excerpt: "Laura Aguilera Cofré, de 17 años, cursa cuarto año medio...",
    href: "https://www.colegioamaliaerrazuriz.cl/2026/05/06/laura-aguilera-destacada-atleta-de-17-anos-que-brilla-en-santiago-y-apunta-al-alto-rendimiento-internacional/",
    image: "https://www.colegioamaliaerrazuriz.cl/wp-content/uploads/2026/05/image0.png"
  },
  {
    date: "6 de Mayo de 2026",
    title: "Máximo Lara: El destacado atleta de Ovalle que brilla a nivel nacional en la categoría sub 18",
    excerpt: "Máximo Lara, estudiante de 15 años, cursa el segundo año...",
    href: "https://www.colegioamaliaerrazuriz.cl/2026/05/06/maximo-lara-el-destacado-atleta-de-ovalle-que-brilla-a-nivel-nacional-en-la-categoria-sub-18/",
    image: "https://www.colegioamaliaerrazuriz.cl/wp-content/uploads/2026/05/unnamed.png"
  },
  {
    date: "6 de Mayo de 2026",
    title: "Magistrada del Juzgado de Letras de Ovalle visitó el Colegio Amalia Errázuriz para acercar la justicia a los estudiantes",
    excerpt: "Carolina Prat Alarcón, jueza del Segundo Juzgado de Letras de...",
    href: "https://www.colegioamaliaerrazuriz.cl/2026/05/06/magistrada-del-juzgado-de-letras-de-ovalle-visito-el-colegio-amalia-errazuriz-para-acercar-la-justicia-a-los-estudiantes/",
    image: "https://www.colegioamaliaerrazuriz.cl/wp-content/uploads/2026/05/Captura.png"
  },
  {
    date: "10 de Abril de 2026",
    title: "Lanzamiento SchoolNet",
    excerpt: "¡Nos emociona compartir una gran noticia! Como parte de nuestra...",
    href: "https://www.colegioamaliaerrazuriz.cl/2026/04/10/lanzamiento-schoolnet/",
    image: "https://www.colegioamaliaerrazuriz.cl/wp-content/uploads/2026/04/schoolnet-800x450-1.png"
  }
];
