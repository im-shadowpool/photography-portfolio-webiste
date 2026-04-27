import StickyCards from "../layout/StickyCards/StickyCards";
import Button from "../ui/Button";
import Container from "../ui/Container"
import Section from "../ui/Section"

const HomeStickyCards = () => {
    return (
        <Section>
            <Container>
                <div className="sectionTitle mb-16">
                    <div className="__sectionOne w-[40rem]">
                        <span className="subTitle">Our Photography Services</span>
                        <h2>
                            Photography Services for Every Occasion
                        </h2>
                    </div>

                    <div className="__sectionTwo  w-[25em]">
                        <p className="mt-2">Whether it’s a wedding, a special celebration, or a personal portrait, our team ensures every moment is captured with creativity and care.</p>
                        <Button content="Know more" path="/about-us" className="mt-[0.5rem]" />
                    </div>

                </div>
                <StickyCards />
            </Container>
        </Section>
    )
}

export default HomeStickyCards;