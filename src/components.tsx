import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import type { Project } from './data'

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" className={diagonal ? 'arrow diagonal' : 'arrow'}><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export function ExternalLink({ href, children, className = '', label }: { href: string; children: ReactNode; className?: string; label?: string }) {
  const hintId = useId()
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer" aria-label={label} aria-describedby={hintId}>{children}<Arrow diagonal /><span id={hintId} className="sr-only" aria-hidden="true"> (abre en otra pestaña)</span></a>
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
  return <header className="site-header" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false) }}>
    <a className="wordmark" href="#inicio" aria-label="Juan Beltrán, inicio" onClick={() => setOpen(false)}>jb<span>.</span></a>
    <button ref={toggle} onBlur={event => { if (!event.relatedTarget?.closest("#main-nav")) setOpen(false) }} onPointerDown={event => { if (open) event.preventDefault() }} className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? 'Cerrar' : 'Menú'}<span aria-hidden="true">{open ? '−' : '+'}</span></button>
    <nav onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false) }} id="main-nav" aria-label="Navegación principal" className={open ? 'navigation is-open' : 'navigation'}>
      {[['#proyectos', 'Proyectos'], ['#sobre-mi', 'Sobre mí'], ['#formacion', 'Formación'], ['#contacto', 'Contacto']].map(([href, text]) => <a key={href} href={href} onClick={() => setOpen(false)}>{text}{href === '#contacto' && <Arrow diagonal />}</a>)}
    </nav>
  </header>
}

export function SectionHeading({ title, children }: { title: ReactNode; children?: ReactNode }) {
  return <div className="section-heading"><div className="section-title-row"><h2>{title}</h2>{children && <p>{children}</p>}</div></div>
}

export function ProjectCard({ project }: { project: Project }) {
  return <article className={`project project-${project.id}`}>
    <header className="project-heading"><h3>{project.title}</h3><p>{project.category}</p></header><figure className="project-figure">
      <ProjectImage project={project} />
    </figure>
    <div className="project-copy"><p className="project-description">{project.description}</p><div className="project-insight"><h4>Decisión técnica</h4><p>{project.insight}</p></div><ul className="tags" aria-label="Tecnologías">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      <div className="project-links"><ExternalLink href={project.repo} label={`Ver código de ${project.title} en GitHub`}>Ver código</ExternalLink>{project.demo && <ExternalLink href={project.demo}>Jugar demo</ExternalLink>}</div>
    </div>
    <details className="project-details"><summary>Arquitectura y decisiones<svg className="details-icon" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 10h12" /><path className="details-icon-vertical" d="M10 4v12" /></svg></summary><div className="details-content"><ol className="architecture" aria-label="Componentes de la arquitectura">{project.architecture.map(item => <li key={item}>{item}</li>)}</ol><div className="detail-columns">{project.details.map(detail => <div key={detail.title}><h4>{detail.title}</h4><p>{detail.text}</p></div>)}</div></div></details>
  </article>
}

function ProjectImage({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const backdropPress = useRef(false)
  const src = `${import.meta.env.BASE_URL}${project.image}`
  const alt = `Interfaz de ${project.title}: ${project.id === 'pokepeluche' ? 'catálogo de peluches con búsqueda y tarjetas de productos' : 'comparación de Paraguay y Ecuador con siluetas, banderas y puntuación'}`

  useEffect(() => {
    if (!open || !dialog.current) return
    const element = dialog.current
    const returnFocus = trigger.current
    const overflow = document.body.style.overflow
    element.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      element.close()
      document.body.style.overflow = overflow
      returnFocus?.focus({ preventScroll: true })
    }
  }, [open])

  return <>
    <button className="image-trigger" ref={trigger} type="button" aria-haspopup="dialog" aria-label={`Ampliar captura de ${project.title}`} onClick={() => setOpen(true)}>
      <span className="project-image-frame"><img src={src} alt={alt} width={project.width} height={project.height} loading="lazy" decoding="async" /></span>
      <span className="image-caption">Ampliar captura <Arrow diagonal /></span>
    </button>
    {open && <dialog className="image-dialog" ref={dialog} aria-labelledby={`image-title-${project.id}`} onCancel={() => setOpen(false)}
      onKeyDown={event => {
        // The close button is the only focusable control in this image viewer.
        if (event.key === 'Tab') { event.preventDefault(); event.currentTarget.querySelector('button')?.focus() }
      }}
      onPointerDown={event => { backdropPress.current = event.target === event.currentTarget }}
      onClick={event => { if (backdropPress.current && event.target === event.currentTarget) setOpen(false) }}>
      <div className="image-dialog-content">
        <div className="image-dialog-toolbar"><h2 id={`image-title-${project.id}`}>Captura de {project.title}</h2><button type="button" aria-label="Cerrar imagen" autoFocus onClick={() => setOpen(false)}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m5 5 10 10M15 5 5 15" /></svg></button></div>
        <img src={src} alt={alt} width={project.width} height={project.height} />
      </div>
    </dialog>}
  </>
}
