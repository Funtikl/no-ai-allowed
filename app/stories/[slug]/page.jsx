import stories from "@/data/stories";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export default function StoryPage({ params }) {
  const story = stories.find((s) => s.slug === params.slug);

  if (!story) return notFound();

  return (
    <main style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>{story.title}</h1>
      <p style={{ textAlign: "center", fontStyle: "italic", color: "#777" }}>
        by {story.author}
      </p>

      <div
        style={{
          background: "#fff",
          border: "1px solid #ddd",
          padding: "2rem",
          borderRadius: "8px",
          marginTop: "2rem",
          lineHeight: "2",
          fontSize: "1.05rem",
        }}
      >
        {story.body.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
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
          <strong>Tags:</strong> {story.tags.join(", ")}
        </p>
        <p>
          <strong>Published:</strong> {story.published}
        </p>
      </div>
    </main>
  );
}
