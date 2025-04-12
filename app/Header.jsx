"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="branding">
        <h1 className="site-title">No AI Allowed</h1>
        <p className="subtitle">Analog Minds, Digital Stage</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/poetry">Poetry</Link>
          </li>
          <li>
            <Link href="/stories">Stories</Link>
          </li>
          <li>
            <Link href="/photos">Photos</Link>
          </li>
          <li>
            <Link href="/humor">Humor</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
