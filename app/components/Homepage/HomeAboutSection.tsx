import Image from "next/image";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import { Subtitle } from "../ui/Subtitle";

const HomeAboutSection = () => {
    return (
        <Section className="bg-(--color-secondary) py-[120px]">
            <Container>
                <div className="about-section flex flex-col items-start">
                    {/* Header Section */}
                    <Subtitle>Our Story</Subtitle>
                    <h2 className="w-[62rem] mb-16">
                        At Vikas Studio, we transform moments into timeless photographs.
                    </h2>
                    {/* Content Section */}
                    <div className="flex gap-16 justify-between items-end">
                        <Image
                            src={"/results_section/results-1.jpg"}
                            alt="About-us Image"
                            width={500}
                            height={500}
                            className="flex-1/6 object-cover border-rounded-lg max-h-[24rem] max-w-[16rem]"
                        />
                        <div className="flex-1/2">
                            <div className="flex flex-col gap-6 items-start justify-between w-[45rem]">
                                <p className="sectionH2Desc">A Studio Built on Passion and Precision, From grand weddings to intimate family portraits, every frame tells a story worth remembering.
                                </p>
                                <p className="sectionH2Desc">
                                    Vikas Studio is a professional photography studio dedicated to capturing meaningful moments with elegance and authenticity. With years of experience in wedding photography, event coverage, and studio portraits, we combine artistic vision with advanced equipment to create photographs that last a lifetime.
                                </p>
                                <Button content="Know more" path="/about-us" className="mt-[0.5rem]" />
                            </div>
                        </div>
                        <div className="flex flex-1/6 justify-end">
                            <span>Down</span>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default HomeAboutSection;