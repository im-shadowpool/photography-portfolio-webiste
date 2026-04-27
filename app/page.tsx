import ResultsCards from "./components/Homepage/ResultsCard";
import Container from "./components/ui/Container";
import Section from "./components/ui/Section";
import "./components/Homepage/Homepage.css";
import Image from "next/image";
import Button from "./components/ui/Button";
import StickyCards from "./components/layout/StickyCards/StickyCards";
import HomeHeroSection from "./components/Homepage/HomeHeroSection";
import HomeAboutSection from "./components/Homepage/HomeAboutSection";
import HomeStickyCards from "./components/Homepage/HomeStickyCards";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeStickyCards />

    </>

  );
}
