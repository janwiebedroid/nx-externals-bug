import { child } from "@external/child";

export function parent(): string {
  return child();
}
