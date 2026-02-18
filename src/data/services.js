import {
    FaGavel, FaBalanceScale, FaHandshake, FaBriefcase,
    FaUsers, FaFileInvoiceDollar, FaBuilding
} from 'react-icons/fa'

export const services = [
    {
        id: 1,
        title: 'Derecho Penal',
        description: 'Defensa legal integral en procesos penales. Representación ante Ministerio Público y tribunales. Recursos de amparo y apelación.',
        icon: FaGavel,
    },
    {
        id: 2,
        title: 'Derecho Civil',
        description: 'Asesoría en contratos, obligaciones, sucesiones, testamentos y todo tipo de controversias civiles.',
        icon: FaBalanceScale,
    },
    {
        id: 3,
        title: 'Derecho Mercantil',
        description: 'Constitución de sociedades, contratos comerciales, propiedad intelectual y resolución de conflictos mercantiles.',
        icon: FaHandshake,
    },
    {
        id: 4,
        title: 'Derecho Laboral',
        description: 'Defensa de derechos laborales, despidos injustificados, liquidaciones, demandas ante juntas de conciliación.',
        icon: FaBriefcase,
    },
    {
        id: 5,
        title: 'Derecho Familiar',
        description: 'Divorcios, custodia, pensiones alimenticias, adopciones y todo tipo de asuntos familiares.',
        icon: FaUsers,
    },
    {
        id: 6,
        title: 'Derecho Fiscal',
        description: 'Asesoría fiscal, cumplimiento tributario, defensa ante el SAT y recursos administrativos.',
        icon: FaFileInvoiceDollar,
    },
    {
        id: 7,
        title: 'Derecho Inmobiliario',
        description: 'Compraventa de inmuebles, regularización de predios, escrituración y trámites ante el Registro Público.',
        icon: FaBuilding,
    },
]

export const products = [
    {
        id: 1,
        title: 'Elaboración de Contratos',
        description: 'Contratos civiles, mercantiles, laborales y de arrendamiento hechos a la medida de tus necesidades.',
        icon: '📄',
    },
    {
        id: 2,
        title: 'Constitución de Sociedades',
        description: 'Creación legal de tu empresa: acta constitutiva, registro ante el SAT e IMSS.',
        icon: '🏢',
    },
    {
        id: 3,
        title: 'Bajas Laborales',
        description: 'Gestión completa de finiquitos, liquidaciones y terminación de relaciones laborales.',
        icon: '📋',
    },
    {
        id: 4,
        title: 'Asesorías Especializadas',
        description: 'Consultoría jurídica a medida para personas físicas y morales en cualquier rama del derecho.',
        icon: '⚖️',
    },
    {
        id: 5,
        title: 'Representación Sindical',
        description: 'Asesoría y representación para sindicatos, trabajadores y organizaciones obreras.',
        icon: '🤝',
    },
    {
        id: 6,
        title: 'Trámites ante Dependencias',
        description: 'Gestión de trámites ante cualquier dependencia gubernamental, notarías y registros públicos.',
        icon: '🏛️',
    },
]

export const demoSuccessCases = [
    {
        id: 1,
        title: 'Defensa penal exitosa por lesiones',
        description: 'Se logró la absolución completa del cliente acusado injustamente de lesiones graves, mediante una estrategia de defensa integral.',
        result: 'Sentencia absolutoria',
        date: '2024-11',
    },
    {
        id: 2,
        title: 'Recuperación de pensión alimenticia',
        description: 'Representación de madre soltera que no recibía pensión alimenticia para sus dos hijos menores de edad desde hace 3 años.',
        result: 'Pensión otorgada con retroactivo',
        date: '2024-08',
    },
    {
        id: 3,
        title: 'Reinstalación laboral por despido injustificado',
        description: 'Trabajadora despedida durante su embarazo. Se gestionó demanda laboral y se obtuvo reinstalación con salarios caídos.',
        result: 'Reinstalación y pago de salarios caídos',
        date: '2024-05',
    },
]

export const demoNews = [
    {
        id: 1,
        title: 'Nuevas reformas a la Ley Federal del Trabajo 2025',
        description: 'Análisis de las principales reformas laborales que entraron en vigor este año y cómo impactan los derechos de los trabajadores.',
        date: '2025-01-15',
        category: 'Análisis Legal',
    },
    {
        id: 2,
        title: '¿Cómo proteger tus derechos como inquilino?',
        description: 'Guía básica sobre los derechos de los arrendatarios en la Ciudad de México y cómo hacer valer tu contrato.',
        date: '2024-12-20',
        category: 'Guía Jurídica',
    },
    {
        id: 3,
        title: 'Promoción: Consulta inicial gratuita en enero',
        description: 'Durante este mes, ofrecemos tu primera consulta jurídica sin costo. Agenda tu cita y conoce tus derechos.',
        date: '2025-01-01',
        category: 'Promoción',
    },
]
