import Link from "next/link";
import stories from "@/data/stories";

export default function StoriesPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>📚 Stories</h1>
      <section
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          marginTop: "2rem",
        }}
      >
        {stories.map((story) => (
          <article
            key={story.slug}
            style={{
              background: "#fff",
              padding: "1rem",
              borderRadius: "8px",
              border: "1px solid #ddd",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3>{story.title}</h3>
            <p>
              <em>by {story.author}</em>
            </p>
            <p style={{ fontStyle: "italic", color: "#666" }}>
              {story.body.split("\n")[0]}...
            </p>
            <Link
              href={`/stories/${story.slug}`}
              style={{ color: "darkgreen" }}
            >
              Читать полностью →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
