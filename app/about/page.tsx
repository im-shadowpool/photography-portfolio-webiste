import Image from "next/image";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import "./About.css";
import ImageTelescope from "../components/layout/ImageTelescope/ImageTelescope";
import CardFan from "../components/layout/CardFan/CardFan";
import FilmTestimonials from "../components/layout/Testimonials/Testimonials";
import Slider from "../components/layout/Testimonials/Testimonials";
import HorizontalServices from "../components/layout/Services/HorizontalServices";

export default function AboutPage() {
  return (
    <>
      <Section className="page-hero px-(--container-padding-sm) pb-0">
        <Container
          className="page-hero-container border-rounded-md"
          size="wide"
        >
          <div className="video-wrapper">
            <video
              className="bg-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                type="video/mp4"
              />
            </video>

            {/* Overlay */}
            <div className="video-overlay" />
          </div>
          <Container className="pageTitle px-(--container-padding)">
            <div className="pageTitle-content">
              <span className="subTitle subTitleBlured">About us</span>
              <h1 className="h1-page-title">Stories told through light</h1>
              <p>
                Whether you’re planning a wedding, pre-wedding shoot, birthday,
                or corporate event — we’d love to hear your story and help bring
                it.
              </p>
            </div>
            {/* <div className="pageTitle-box">
            <div className="pageTitle-social-container">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  strokeWidth="1.2"
                  color="#000"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
                  ></path>
                  <path
                    stroke="#000"
                    d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"
                  ></path>
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m17.5 6.51.01-.011"
                  ></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  strokeWidth="1.2"
                  color="#000"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-5-1.338L2 21.5l.832-5.5A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10"
                  ></path>
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.96 13.868 2.08-.406 1.96.753v1.823c0 .607-.522 1.07-1.11.94-1.523-.334-4.29-1.174-6.212-3.11-1.83-1.843-2.455-4.41-2.668-5.827C6.925 7.474 7.374 7 7.943 7h1.894l.735 1.969-.389 2.101"
                  ></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  strokeWidth="1.2"
                  color="#000"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.118 14.702 14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047.42 2.783 1.66 7.83 5.283 11.453 3.805 3.805 9.286 5.456 12.302 6.113 1.165.253 2.198-.655 2.198-1.848v-3.584z"
                  ></path>
                </svg>
              </a>
            </div>
          </div> */}
            <div className="pageTitleInfoBox">
              <div className="InfoBox">
                <h4>Stories</h4>
                <p>Told visually</p>
              </div>
              <div className="InfoBoxDivider"></div>
              <div className="InfoBox">
                <h4>Premium Delivery</h4>
                <p>High-quality visuals</p>
              </div>
              <div className="InfoBoxDivider"></div>
              <div className="InfoBox">
                <h4>Memories</h4>
                <p>Preserved forever</p>
              </div>
            </div>
          </Container>
        </Container>
      </Section>

      {/* Page Contents */}

      <Section>
        <Container className="flex flex-col gap-16">
          <h2 className="sectionH2Title w-[58rem]">
            At Vikas Studio, photography is more than just images—it’s about
            freezing real emotions, genuine smiles, and once-in-a-lifetime
            moments.
          </h2>

          <div className="flex justify-start items-end gap-16">
            <Image
              src={"/footer_images/1.webp"}
              alt="About-us Image"
              width={500}
              height={500}
              className="flex-1/6 object-cover border-rounded-lg max-w-[24rem]"
            />
            <div className="flex gap-6 flex-col max-w-[45rem]">
              <p className="sectionH2Desc">
                Rooted in Indian traditions and elevated with modern techniques,
                we specialize in telling stories that feel personal, authentic,
                and timeless.
              </p>
              <p className="sectionH2Desc">
                From intimate family portraits to grand weddings and large-scale
                events, every frame we capture reflects care, precision, and
                quality
              </p>
            </div>

            <div>scroll</div>
          </div>
        </Container>
        <Container className="flex justify-between items-center gap-16">
          <div className="w-1/2 flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-6">
              <span className="subTitle">Our Story</span>
              <h2>Our Story</h2>

              <div className="flex flex-col items-start gap-4">
                <p>
                  Founded with a passion for visual storytelling, Vikas Studio
                  has grown into a trusted name for professional photography
                  across all occasions. With years of experience and a deep
                  understanding of Indian ceremonies, cultures, and
                  celebrations, we know exactly when to click and what to
                  capture.
                </p>
                <p>
                  Every project is approached with the same intent—deliver
                  photographs that feel alive even years later.
                </p>
              </div>
            </div>
            <div className="ourStoryQuote">
              "We believe the best photographs are not staged—they’re felt."
            </div>
            <div className="flex gap-6">
              <div className="flex gap-3 items-center outStoryStatsItem">
                <div className="flex justify-center items-center rounded-full bg-(--white) w-12 h-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    strokeWidth="1.5"
                    color="var(--brandColor)"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="var(--brandColor)"
                      strokeLinejoin="round"
                      d="M22 8.862a5.95 5.95 0 0 1-1.654 4.13c-2.441 2.531-4.809 5.17-7.34 7.608-.581.55-1.502.53-2.057-.045l-7.295-7.562c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 0 1 8.08 0l.266.274.265-.274A5.61 5.61 0 0 1 16.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0 1 22 8.862Z"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="">
                    <b>500+ Weddings</b>
                  </p>
                  <p className="">Captured WorldWide</p>
                </div>
              </div>
              <div className="flex gap-3 items-center outStoryStatsItem">
                <div className="flex justify-center items-center rounded-full bg-(--white) w-12 h-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="var(--brandColor)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M8.5 14v8l3.818-3 3.182 3v-8m3-5.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="">
                    <b>Award Winning</b>
                  </p>
                  <p className="">Recognised Exxcellence</p>
                </div>
              </div>
            </div>
            <div className="w-full bg-(--text-white-color) h-px"></div>
            <div>
              <Button content="Start your journey" path="/contact" />
              {/* Signature */}
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src={"/footer_images/1.webp"}
              alt="About-us Image"
              width={500}
              height={500}
              className="flex-1/6 object-cover border-rounded-lg min-w-full"
            />
          </div>
        </Container>
      </Section>

      <ImageTelescope />

      <HorizontalServices />

      <Slider />
    </>
  );
}
