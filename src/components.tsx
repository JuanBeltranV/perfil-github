import { useEffect, useRef, useState, type ReactNode } from 'react'
import type { Project } from './data'

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" className={diagonal ? 'arrow diagonal' : 'arrow'}><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export function ExternalLink({ href, children, className = '', label }: { href: string; children: ReactNode; className?: string; label?: string }) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer" aria-label={label}>{children}<Arrow diagonal /><span className="sr-only"> (abre en otra pestaña)</span></a>
}

export function Header() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() }
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [open])
  return <header className="site-header">
    <a className="wordmark" href="#inicio" aria-label="Juan Beltrán, inicio" onClick={() => setOpen(false)}>jb<span>.</span></a>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? 'Cerrar' : 'Menú'}<span aria-hidden="true">{open ? '−' : '+'}</span></button>
    <nav id="main-nav" aria-label="Navegación principal" className={open ? 'navigation is-open' : 'navigation'}>
      {[['#proyectos', 'Proyectos'], ['#sobre-mi', 'Sobre mí'], ['#formacion', 'Formación'], ['#contacto', 'Hablemos']].map(([href, text]) => <a key={href} href={href} onClick={() => setOpen(false)}>{text}{href === '#contacto' && <Arrow diagonal />}</a>)}
    </nav>
  </header>
}

export function SectionHeading({ number, label, title, children }: { number: string; label: string; title: ReactNode; children?: ReactNode }) {
  return <div className="section-heading"><p className="eyebrow"><span>{number} /</span> {label}</p><div className="section-title-row"><h2>{title}</h2>{children && <p>{children}</p>}</div></div>
}

export function ProjectCard({ project }: { project: Project }) {
  return <article className={`project project-${project.id}`}>
    <figure className="project-figure">
      <a href={`${import.meta.env.BASE_URL}${project.image}`} target="_blank" rel="noopener noreferrer" aria-label={`Ampliar captura de ${project.title} (abre en otra pestaña)`}>
        <div className="project-image-frame"><img src={`${import.meta.env.BASE_URL}${project.image}`} alt={`Interfaz de ${project.title}: ${project.id === 'pokepeluche' ? 'catálogo de peluches con búsqueda y tarjetas de productos' : 'comparación de Paraguay y Ecuador con siluetas, banderas y puntuación'}`} width={project.width} height={project.height} loading="lazy" decoding="async" /><span className="image-expand" aria-hidden="true"><Arrow diagonal /></span></div>
      </a>
      <figcaption>{project.caption}</figcaption>
    </figure>
    <div className="project-copy"><p className="eyebrow">{project.category}</p><div className="project-title"><h3>{project.title}</h3><span>{project.number}</span></div><p className="project-description">{project.description}</p><ul className="tags" aria-label="Tecnologías">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      <div className="project-links"><ExternalLink href={project.repo} label={`Ver código de ${project.title} en GitHub`}>Ver código</ExternalLink>{project.demo && <ExternalLink href={project.demo}>Jugar demo</ExternalLink>}</div>
    </div>
    <details className="project-details"><summary>Explorar el proyecto<span className="details-icon" aria-hidden="true">+</span></summary><div className="details-content"><ol className="architecture" aria-label="Componentes de la arquitectura">{project.architecture.map(item => <li key={item}>{item}</li>)}</ol><div className="detail-columns">{project.details.map(detail => <div key={detail.title}><h4>{detail.title}</h4><p>{detail.text}</p></div>)}</div></div></details>
  </article>
}
