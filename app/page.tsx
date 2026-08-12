import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FocusAreas from "@/components/FocusAreas";
import EventsTeaser from "@/components/EventsTeaser";
import { MembershipCall } from "@/components/Footer";
import { Metadata } from "next";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <FocusAreas />
      <EventsTeaser />
      <MembershipCall />
    </main>
  );
}
