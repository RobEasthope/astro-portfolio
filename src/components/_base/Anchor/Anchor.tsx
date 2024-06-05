type AnchorProps = {
  id: string;
};

export function Anchor({ id }: AnchorProps) {
  return <span id={id} />;
}
