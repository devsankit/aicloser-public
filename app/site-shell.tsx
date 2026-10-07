type SiteShellProps = {
  markup: string;
};

export default function SiteShell({ markup }: SiteShellProps) {
  return (
    <div className="next-page-shell" dangerouslySetInnerHTML={{ __html: markup }} />
  );
}
