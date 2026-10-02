import { useState } from "react";
import SectionLabel from "../SectionLabel/SectionLabel";
import './Credentials.css';

type Credential = {
  year: string;
  title: string;
  source: string;
  type: string;
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
        year: "2023",
        title: "Desenvolvimento de Sistemas",
        source: "ETEC",
        type: "Técnico",
      },
      {
        year: "2021",
        title: "Informática para Internet",
        source: "ETEC",
        type: "Técnico",
      },
    ],
  },
  {
    id: "cursos",
    label: "Cursos",
    subcategories: [
      {
        id: "front",
        label: "Frontend",
        credentials: [
          {
            year: "2022",
            title: "Advanced React Patterns",
            source: "Frontend Masters",
            type: "Curso",
          },
          {
            year: "2023",
            title: "CSS for JavaScript Developers",
            source: "Josh W. Comeau",
            type: "Curso",
          },
        ],
      },
      {
        id: "back",
        label: "Backend",
        credentials: [
          {
            year: "2023",
            title: "Arquitetura de Software",
            source: "Full Cycle",
            type: "Formação",
          },
          {
            year: "2024",
            title: "AWS Certified Developer",
            source: "Amazon Web Services",
            type: "Certificação",
          },
        ],
      },
      {
        id: "db",
        label: "Banco de Dados",
        credentials: [
          {
            year: "2022",
            title: "PostgreSQL para Desenvolvedores",
            source: "Udemy",
            type: "Curso",
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
        year: "2025",
        title: "Análise e Desenvolvimento de Sistemas",
        source: "FATEC",
        type: "Graduação",
      },
    ],
  },
];

function CredentialCard({ item }: { item: Credential }) {
  return (
    <article className="credential-card">
      <span className="credential-year">{item.year}</span>
      <h3>{item.title}</h3>
      <p>{item.source}</p>
      <span className="credential-type">{item.type}</span>
    </article>
  );
}

export default function Credentials() {
  const [activeCat, setActiveCat] = useState(credentialCategories[0].id);
  const [activeSub, setActiveSub] = useState<string | null>(null);

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
      <SectionLabel number="04">Cursos & Certificados</SectionLabel>

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
          <CredentialCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}