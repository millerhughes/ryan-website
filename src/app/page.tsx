import { Hero } from "@/components/hero";
import { TheCoach } from "@/components/the-coach";
import { Disciplines } from "@/components/disciplines";
import { Method } from "@/components/method";
import { Rates } from "@/components/rates";
import { WhereWhen } from "@/components/where-when";
import { Proof } from "@/components/proof";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TheCoach />
      <Disciplines />
      <Method />
      <Rates />
      <WhereWhen />
      <Proof />
      <Faq />
      <Contact />
    </>
  );
}
