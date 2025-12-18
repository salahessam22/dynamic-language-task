import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "16px", borderBottom: "1px solid #ccc" }}>
      <Link href="/about" style={{ marginRight: "16px" }}>
        About
      </Link>

      <Link href="/contact" style={{ marginRight: "16px" }}>
        Contact
      </Link>

      <Link href="/projects">
        Projects
      </Link>
    </nav>
  );
}

