import poems from "@/data/poems";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return poems.map((poem) => ({ slug: poem.slug }));
}

export default function PoemPage({ params }) {
  const poem = poems.find((p) => p.slug === params.slug);

  if (!poem) return notFound();

  return (
    <main style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>{poem.title}</h1>
      <p style={{ textAlign: "center", fontStyle: "italic", color: "#777" }}>
        by {poem.author}
      </p>

      <div
        style={{
          background: "#fff",
          border: "1px solid #ddd",
          padding: "2rem",
          borderRadius: "8px",
          marginTop: "2rem",
          lineHeight: "2",
          fontSize: "1.1rem",
        }}
      >
        {poem.body.split("\n").map((line, i) => (
          <p key={i} style={{ textAlign: "center" }}>
            {line}
          </p>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "1rem",
          fontSize: "0.9rem",
          color: "#999",
        }}
      >
        <p>
          <strong>Tags:</strong> {poem.tags.join(", ")}
        </p>
        <p>
          <strong>Published:</strong> {poem.published}
        </p>
      </div>
    </main>
  );
}
