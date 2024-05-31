export function StandardContentContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-1 bg-off-white px-1 py-2 md:mx-2">{children}</div>;
}
