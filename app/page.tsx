import Image from "next/image";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Section from "./components/ui/Section";

export default function Home() {
  return (
    <Section className="pt-40">
      <Container className="">

        <div className="">
          <div className="flex flex-col w-[70%] gap-6">
            <h1>Get Hyped. Get Noticed. Get Results.</h1>
            <p className="max-w-87.5 text-2xl font-medium">Klaar met gokken op content die niets oplevert?</p>
          </div>
        </div>

      </Container>
    </Section>
  );
}
