import { Bundler, getBundler } from "./bundler";

function FooterLink({ href, children }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="FooterLink"
      href={href}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const bundler = getBundler();
  if (bundler === Bundler.Turbopack) {
    return (
      <div className="Footer">
        <FooterLink href="https://turbo.build/pack">Turbopack Docs</FooterLink>
        &middot;
        <FooterLink href="https://nextjs.org/blog/next-15">
          Next.js 15
        </FooterLink>
      </div>
    );
  } else {
    return (
      <div className="Footer">
        <FooterLink href="https://rspack.dev/">Rspack Docs</FooterLink>
        &middot;
        <FooterLink href="https://nextjs.org/docs">Next.js Docs</FooterLink>
        &middot;
        <FooterLink href="https://areweturboyet.com/">
          Are We Turbo Yet?
        </FooterLink>
      </div>
    );
  }
}
