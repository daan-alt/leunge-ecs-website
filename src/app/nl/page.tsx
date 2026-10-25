import { HomePage } from "@/components/pages/HomePage";
import { alternatesFor } from "@/lib/locale";

export const metadata = { alternates: alternatesFor("home", "nl") };

export default function NlHome() {
  return <HomePage locale="nl" />;
}
