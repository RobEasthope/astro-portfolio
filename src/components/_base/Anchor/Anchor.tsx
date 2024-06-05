type AnchorProps = {
  id: string;
};

export function Anchor({ children, id }: AnchorProps) {
  return <span id={id} />;
}
