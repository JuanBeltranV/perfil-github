import pythonCertificate from '../assets/certs/Cert_Entry_Python.pdf?url'
import aiCertificate from '../assets/certs/Cert_Certiprof_AI.pdf?url'
import fullstackCertificate from '../assets/certs/Certificado_Modulo.pdf?url'

export const profile = {
  github: 'https://github.com/JuanBeltranV',
  linkedin: 'https://www.linkedin.com/in/juan-ignacio-beltran-vasquez-2140083b7/',
  email: 'jua.beltranv@duocuc.cl',
  // Set only after adding the real PDF to public/, e.g. 'cv/juan-beltran.pdf'.
  cvPath: null as string | null,
}

export interface Project {
  id: string
  number: string
  title: string
  category: string
  description: string
  tags: string[]
  image: string
  width: number
  height: number
  caption: string
  repo: string
  demo?: string
  architecture: string[]
  details: { title: string; text: string }[]
}

export const projects: Project[] = [
  {
    id: 'pokepeluche', number: '01', title: 'PokePeluche',
    category: 'DESARROLLO FULLSTACK · PROYECTO ACADÉMICO',
    description: 'Un catálogo con personalidad. Una API con permisos claros. Aplicación para consultar y administrar peluches inspirados en Pokémon.',
    tags: ['React', 'Java · Spring Boot', 'Amazon Cognito', 'SQLite'],
    image: 'images/pokepeluche.webp', width: 1425, height: 1145,
    caption: 'Captura del repositorio · etapa de diseño Emerald',
    repo: 'https://github.com/JuanBeltranV/tienda-pokepeluche',
    architecture: ['React + Amplify', 'API Gateway', 'Spring Boot', 'SQLite'],
    details: [
      { title: 'El proyecto', text: 'Catálogo académico con búsqueda, detalle de productos, administración y mensajes de contacto. No incluye carrito, pagos ni pedidos.' },
      { title: 'Decisiones técnicas', text: 'Cognito autentica; Spring Security valida los JWT y aplica permisos por rol. El backend separa controladores, servicios y repositorios, con persistencia mediante JPA y SQLite.' },
      { title: 'Alcance y estado', text: 'La demostración documentada conecta API Gateway con Spring mediante Cloudflare Quick Tunnel. Requiere servicios locales y no tiene una demo pública permanente. La captura conserva una etapa anterior de la interfaz; el README describe el estado funcional actual.' },
    ],
  },
  {
    id: 'country-clash', number: '02', title: 'Country Clash',
    category: 'FRONTEND · JUEGO WEB',
    description: 'Dos países. Una decisión. Un juego de geografía para descubrir cuánto sabes sobre la población del mundo.',
    tags: ['React', 'Vite', 'D3 Geo', 'TopoJSON'],
    image: 'images/country-clash.webp', width: 1584, height: 924,
    caption: 'Captura real del proyecto · comparación entre países',
    repo: 'https://github.com/JuanBeltranV/country-clash',
    demo: 'https://juanbeltranv.github.io/country-clash/',
    architecture: ['Datos de países', 'React', 'D3 Geo + TopoJSON', 'GitHub Pages'],
    details: [
      { title: 'La experiencia', text: 'Elige el país con mayor población. Cada acierto suma un punto y conserva al ganador para la siguiente ronda. Al fallar, puedes reiniciar la partida.' },
      { title: 'Decisiones técnicas', text: 'Las siluetas reales se dibujan con world-atlas, TopoJSON y D3 Geo. La interfaz muestra banderas, países y puntuación actual, junto al mejor puntaje de la sesión.' },
      { title: 'Disponibilidad', text: 'Aplicación estática publicada en GitHub Pages. Incluye datos locales de respaldo para mantener el juego funcionando si cambia la API pública.' },
    ],
  },
]

export const certificates = [
  { code: 'PCEP', title: 'Programación en Python', official: 'PCEP™ – Certified Entry-Level Python Programmer', issuer: 'Python Institute', date: 'Junio 2025', href: pythonCertificate },
  { code: 'CAIPC', title: 'Inteligencia artificial', official: 'Artificial Intelligence Professional Certification – CAIPC®', issuer: 'CertiProf', date: 'Junio 2026', href: aiCertificate },
  { code: 'FULLSTACK', title: 'Desarrollador Fullstack', official: 'Certificación de módulo · Desarrollador Fullstack', issuer: 'Duoc UC', date: 'Septiembre 2026', href: fullstackCertificate },
]

export const technologies = [
  { number: '01', title: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'Python'] },
  { number: '02', title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML + CSS'] },
  { number: '03', title: 'Cloud / DevOps', items: ['Amazon Cognito', 'API Gateway', 'Git', 'GitHub Actions'] },
  { number: '04', title: 'Bases de datos', items: ['SQLite', 'Oracle SQL', 'JPA / Hibernate'] },
]
