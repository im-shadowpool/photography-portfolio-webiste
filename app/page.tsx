import ResultsCards from "./components/Homepage/ResultsCard";
import Container from "./components/ui/Container";
import Section from "./components/ui/Section";
import "./components/Homepage/Homepage.css";
import Image from "next/image";
import Button from "./components/ui/Button";
import StickyCards from "./components/layout/StickyCards/StickyCards";

export default function Home() {
  return (
    <Section className="pt-40">
      <Container className="">
        <div className="">
          <div className="flex flex-col w-240 gap-6">
            <h1>Get Hyped. Get Noticed. Get Results.</h1>
            <p className="max-w-87.5 text-2xl font-medium">
              Klaar met gokken op content die niets oplevert?
            </p>
          </div>
        </div>
        {/* Cards Section */}
        <ResultsCards />
        {/* About Section */}
        <div className="about-section py-24 flex flex-col gap-16">
          <h2 className="w-[58rem] sectionH2Title">
            Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep
            raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
          </h2>
          <div className="flex gap-20 justify-between items-end">
            <Image
              src={"/results_section/results-1.jpg"}
              alt="About-us Image"
              width={500}
              height={500}
              className="flex-1/6 object-cover border-rounded-lg max-h-[24rem] max-w-[16rem]"
            />
            <div className="flex-1/2 flex gap-6 justify-center">
              <div className="flex flex-col gap-6 items-start justify-between w-[30rem]">
                <p className="sectionH2Desc">
                  We stoppen niet bij mooie plaatjes en vette beelden. We maken
                  het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit
                  meer content zonder strategie. Nooit meer content zonder
                  resultaat.
                </p>
                <Button content="Know more" path="/about-us" />
              </div>
            </div>
            <div className="flex flex-1/6 justify-end">
              <span>Down</span>
            </div>
          </div>
        </div>
        {/* Sticky Cards */}
        <StickyCards />
      </Container>
    </Section>
  );
}
