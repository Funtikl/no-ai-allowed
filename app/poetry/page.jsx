import Link from "next/link";
import poems from "@/data/poems";

export default function PoetryPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>🖋️ Poetry</h1>
      <section
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          marginTop: "2rem",
        }}
      >
        {poems.map((poem) => (
          <article
            key={poem.slug}
            style={{
              background: "#fff",
              padding: "1rem",
              borderRadius: "8px",
              border: "1px solid #ddd",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3>{poem.title}</h3>
            <p>
              <em>by {poem.author}</em>
            </p>
            <p style={{ fontStyle: "italic", color: "#666" }}>
              {poem.body.split("\n")[0]}...
            </p>
            <Link href={`/poetry/${poem.slug}`} style={{ color: "darkblue" }}>
              Читать полностью →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
