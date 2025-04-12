"use client";

import { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function AdminEditor() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start writing...</p>",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const html = editor?.getHTML();
    const entry = {
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      tags: tags.split(",").map((t) => t.trim()),
      image,
      content: html,
      published: new Date().toISOString(),
    };
    console.log("📝 CONTENT:", entry);
    alert("Контент сохранён (в консоли)!");
  };

  return (
    <main style={{ maxWidth: "800px", margin: "2rem auto" }}>
      <h1>🧠 Full Editor</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && (
          <img src={image} alt="preview" style={{ maxHeight: "200px" }} />
        )}

        <EditorContent
          editor={editor}
          style={{
            border: "1px solid #ddd",
            padding: "1rem",
            borderRadius: "8px",
            minHeight: "200px",
          }}
        />

        <button
          type="submit"
          style={{ padding: "0.75rem", background: "#191919", color: "#fff" }}
        >
          Save Content
        </button>
      </form>
    </main>
  );
}
