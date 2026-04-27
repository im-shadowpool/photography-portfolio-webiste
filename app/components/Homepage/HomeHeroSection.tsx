import Container from "../ui/Container"
import Section from "../ui/Section"
import ResultsCards from "./ResultsCard"

const HomeHeroSection = () => {
    return (
        <Section className="pt-[140px] pb-[120px]">
            <Container className="">
                {/* Header Section */}
                <div className="flex flex-col w-240 gap-6 mb-24">
                    <h1>Capturing Life’s Most Beautiful Moments</h1>
                    <p className="max-w-105 text-2xl font-medium">
                        Premium photography for weddings, events, and portraits crafted with creativity, emotion, and precision.
                    </p>
                </div>

                {/* Cards Section */}
                <ResultsCards />
            </Container>

        </Section>
    )
}

export default HomeHeroSection;