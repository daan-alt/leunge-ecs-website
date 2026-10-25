import { HomePage } from "@/components/pages/HomePage";
import { alternatesFor } from "@/lib/locale";

export const metadata = { alternates: alternatesFor("home", "en") };

export default function Home() {
  return <HomePage locale="en" />;
}
