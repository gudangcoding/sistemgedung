import Image from "next/image";
import { apps } from "@/content/apps";

export function AppShowcase() {
  return (
    <div className="app-download-grid">
      {apps.map((app) => (
        <article className="app-download-card" key={app.title}>
          <div className="app-download-media">
            <Image
              src={app.image}
              alt={app.alt}
              width={1600}
              height={893}
              sizes="(max-width: 760px) 100vw, (max-width: 980px) 50vw, 33vw"
            />
          </div>
          <div className="app-download-body">
            <span className="app-download-label">{app.label}</span>
            <h3>{app.title}</h3>
            <p className="app-download-subtitle">{app.subtitle}</p>
            <p>{app.text}</p>
            <ul>
              {app.points.map((point) => (
                <li key={point}><span aria-hidden="true">✓</span>{point}</li>
              ))}
            </ul>
            <a className="button button-dark" href={app.href} target="_blank" rel="noopener noreferrer">
              {app.action} <span>↗</span>
            </a>
            <p className="app-download-note">{app.note}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
