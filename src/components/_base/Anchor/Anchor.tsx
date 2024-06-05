type AnchorProps = {
  children: React.ReactNode;
  id: string;
};

export function Anchor({ children, id }: AnchorProps) {
  return <span id={id}>{children}</span>;
}
