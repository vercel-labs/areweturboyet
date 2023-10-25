function FooterLink(props) {
  let href = `https://${props.href}`;
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="FooterLink"
      href={href}
    >
      {props.children}
    </a>
  );
}

export default function Footer() {
  return (
    <div className="Footer">
      <FooterLink href="turbo.build/pack">Turbopack Docs</FooterLink>
      &middot;
      <FooterLink href="nextjs.org/blog/next-14">Next.js 14</FooterLink>
    </div>
  );
}
