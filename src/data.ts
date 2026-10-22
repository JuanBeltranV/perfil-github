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
  title: string
  category: string
  insight: string
  description: string
  tags: string[]
  image: string
  width: number
  height: number
  repo: string
  demo?: string
  architecture: string[]
  details: { title: string; text: string }[]
}

export const projects: Project[] = [
  {
    id: 'pokepeluche', title: 'PokePeluche',
    category: 'Fullstack · Proyecto académico',
    insight: 'Cognito autentica al usuario; Spring Security valida los JWT y aplica los permisos por rol.',
    description: 'Aplicación web para consultar y administrar un catálogo de peluches de Pokémon. Desarrollada con React, Spring Boot y SQLite, con autenticación mediante Amazon Cognito y permisos por roles.',
    tags: ['React', 'Java · Spring Boot', 'Amazon Cognito', 'SQLite'],
    image: 'images/pokepeluche.webp', width: 1425, height: 1103,
    repo: 'https://github.com/JuanBeltranV/tienda-pokepeluche',
    architecture: ['React + Amplify', 'API Gateway', 'Spring Boot', 'SQLite'],
    details: [
      { title: 'El proyecto', text: 'Catálogo académico con búsqueda, detalle de productos, administración y mensajes de contacto. No incluye carrito, pagos ni pedidos.' },
      { title: 'Decisiones técnicas', text: 'Cognito autentica; Spring Security valida los JWT y aplica permisos por rol. El backend separa controladores, servicios y repositorios, con persistencia mediante JPA y SQLite.' },
      { title: 'Alcance y estado', text: 'La demostración documentada conecta API Gateway con Spring mediante Cloudflare Quick Tunnel. El frontend y el backend se ejecutan localmente; no hay una demo pública permanente.' },
    ],
  },
  {
    id: 'country-clash', title: 'Country Clash',
    category: 'Frontend · Juego web',
    insight: 'Las siluetas se dibujan con D3 Geo y TopoJSON. Si REST Countries falla, el juego utiliza datos locales de respaldo.',
    description: 'Juego web en el que debes elegir cuál de dos países tiene mayor población. Desarrollado con React, utilizando datos de países y mapas geográficos.',
    tags: ['React', 'Vite', 'D3 Geo', 'TopoJSON'],
    image: 'images/country-clash.webp', width: 1584, height: 924,
    repo: 'https://github.com/JuanBeltranV/country-clash',
    demo: 'https://juanbeltranv.github.io/country-clash/',
    architecture: ['Datos de países', 'React', 'D3 Geo + TopoJSON', 'GitHub Pages'],
    details: [
      { title: 'Funcionamiento', text: 'El jugador elige el país con mayor población. Cada acierto suma un punto y conserva al ganador para la siguiente ronda. Al fallar, puede reiniciar la partida.' },
      { title: 'Decisiones técnicas', text: 'Las siluetas reales se dibujan con world-atlas, TopoJSON y D3 Geo. La interfaz muestra banderas, países y puntuación actual, junto al mejor puntaje de la sesión.' },
      { title: 'Datos y disponibilidad', text: 'Consulta REST Countries v3.1 para obtener nombres, población y banderas. Si la petición falla o no devuelve suficientes países válidos, utiliza datos locales de respaldo. Publicada en GitHub Pages.' },
    ],
  },
]

export const certificates = [
  { code: 'PCEP', title: 'Programación en Python', official: 'PCEP™ – Certified Entry-Level Python Programmer', issuer: 'Python Institute', date: 'Junio 2025', href: pythonCertificate },
  { code: 'CAIPC', title: 'Inteligencia artificial', official: 'Artificial Intelligence Professional Certification – CAIPC®', issuer: 'CertiProf', date: 'Junio 2026', href: aiCertificate },
  { code: 'FULLSTACK', title: 'Desarrollador Fullstack', official: 'Certificación de módulo · Desarrollador Fullstack', issuer: 'Duoc UC', date: 'Septiembre 2026', href: fullstackCertificate },
]

export const technologies = [
  { title: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'Python'] },
  { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML + CSS'] },
  { title: 'Cloud / DevOps', items: ['Amazon Cognito', 'API Gateway', 'Git', 'GitHub Actions'] },
  { title: 'Bases de datos', items: ['SQLite', 'Oracle SQL', 'JPA / Hibernate'] },
]
