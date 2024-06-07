import { ORGANISATIONS } from "@/data/ORGANISATIONS";

export function OrgCount() {
  const orgCount = Object.keys(ORGANISATIONS).length;

  return orgCount;
}
