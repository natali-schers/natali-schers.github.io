import { useEffect, useRef, useState } from "react";
import SectionLabel from "../SectionLabel/SectionLabel";
import './Credentials.css';

type Credential = {
  year: string;
  title: string;
  source: string;
  type: string;
  imageName?: string;
};

type CredentialSubcategory = {
  id: string;
  label: string;
  credentials: Credential[];
};

type CredentialCategory = {
  id: string;
  label: string;
  credentials?: Credential[];
  subcategories?: CredentialSubcategory[];
};

const credentialCategories: CredentialCategory[] = [
  {
    id: "tecnicos",
    label: "Cursos Técnicos",
    credentials: [
      {
        year: "2020 - 2022",
        title: "Informática para Internet",
        source: "ETEC Prof.ª Maria Cristina Medeiros",
        type: "Técnico",
      },
      {
        year: "2023 - 2024",
        title: "Desenvolvimento de Sistemas",
        source: "Senac",
        type: "Técnico",
      },
    ],
  },
  {
    id: "cursos",
    label: "Cursos & Certificações",
    subcategories: [
      {
        id: "front",
        label: "Frontend",
        credentials: [
          {
            year: "2025",
            title: "User Experience and User Interface",
            source: "FIAP",
            type: "Qualificação Profissional",
            imageName: "user-experience-and-user-interface.png",
          },
        ],
      },
      {
        id: "back",
        label: "Backend",
        credentials: [
          {
            year: "2026",
            title: "Desenvolvimento .NET",
            source: "FIAP",
            type: "Nano Curso",
            imageName: "desenvolvimento-dotnet.png",
          },
        ],
      },
      {
        id: "db",
        label: "Banco de Dados",
        credentials: [
          {
            year: "2023",
            title: "Assistente em Administração de Banco de Dados",
            source: "Senac",
            type: "Qualificação Profissional",
          },
        ],
      },
    ],
  },
  {
    id: "graduacao",
    label: "Graduação",
    credentials: [
      {
        year: "2025 - 2026",
        title: "Web Design",
        source: "FIAP",
        type: "Graduação",
      },
    ],
  },
];

function CredentialCard({
  item,
  onOpen,
}: {
  item: Credential;
  onOpen: (item: Credential) => void;
}) {
  return (
    <article
      className={`credential-card${item.imageName ? " credential-card--interactive" : ""}`}
      role={item.imageName ? "button" : undefined}
      tabIndex={item.imageName ? 0 : undefined}
      aria-label={item.imageName ? `Ver imagem de ${item.title}` : undefined}
      aria-haspopup={item.imageName ? "dialog" : undefined}
      onClick={item.imageName ? () => onOpen(item) : undefined}
      onKeyDown={
        item.imageName
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onOpen(item);
              }
            }
          : undefined
      }
    >
      <span className="credential-year">{item.year}</span>
      <h3>{item.title}</h3>
      <p>{item.source}</p>
      <span className="credential-type">{item.type}</span>
      {item.imageName && <span className="credential-open-hint">Ver certificado</span>}
    </article>
  );
}

export default function Credentials() {
  const [activeCat, setActiveCat] = useState(credentialCategories[0].id);
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [selectedCredential, setSelectedCredential] = useState<Credential | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (selectedCredential && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [selectedCredential]);

  const currentCat = credentialCategories.find((c) => c.id === activeCat)!;

  const resolvedSub =
    currentCat.subcategories
      ? activeSub ?? currentCat.subcategories[0].id
      : null;

  const visibleCredentials = currentCat.subcategories
    ? currentCat.subcategories.find((s) => s.id === resolvedSub)?.credentials ?? []
    : currentCat.credentials ?? [];

  function handleCatChange(id: string) {
    setActiveCat(id);
    setActiveSub(null);
  }

  return (
    <section className="credentials section" id="formacao">
      <SectionLabel number="04">Educação</SectionLabel>

      <div className="credential-filters">
        <div className="credential-tabs" role="tablist" aria-label="Categorias de formação">
          {credentialCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCat === cat.id}
              className={`credential-tab${activeCat === cat.id ? " active" : ""}`}
              onClick={() => handleCatChange(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {currentCat.subcategories && (
          <div className="credential-subtabs" role="tablist" aria-label="Subcategorias">
            {currentCat.subcategories.map((sub) => (
              <button
                key={sub.id}
                role="tab"
                aria-selected={(resolvedSub === sub.id)}
                className={`credential-subtab${resolvedSub === sub.id ? " active" : ""}`}
                onClick={() => setActiveSub(sub.id)}
              >
                {sub.label}
                <span className="subtab-count">{sub.credentials.length}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="credential-list" key={`${activeCat}-${resolvedSub}`}>
        {visibleCredentials.map((item) => (
          <CredentialCard key={item.title} item={item} onOpen={setSelectedCredential} />
        ))}
      </div>

      {selectedCredential?.imageName && (
        <dialog
          ref={dialogRef}
          className="credential-modal"
          aria-labelledby="credential-modal-title"
          onClose={() => setSelectedCredential(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              dialogRef.current?.close();
            }
          }}
        >
          <div className="credential-modal-content">
            <div className="credential-modal-header">
              <h2 id="credential-modal-title">{selectedCredential.title}</h2>
              <button type="button" onClick={() => dialogRef.current?.close()} className="primary-button">
                Fechar
              </button>
            </div>
            <img
              src={`/${selectedCredential.imageName}`}
              alt={`Certificado de ${selectedCredential.title}`}
            />
          </div>
        </dialog>
      )}
    </section>
  );
}