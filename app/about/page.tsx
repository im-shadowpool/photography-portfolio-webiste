import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import "./About.css";

export default function AboutPage() {
  return (
    <Section className="page-hero px-(--container-padding-sm)">
      <Container className="page-hero-container border-rounded-md" size="wide">
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
        <Container className="pageTitle px-(--container-padding) pb-0">
          <div className="pageTitle-content">
            <span className="subTitle">About us</span>
            <h1 className="h1-page-title">
              Every celebration begins with a conversation
            </h1>
            <p>
              Whether you’re planning a wedding, pre-wedding shoot, birthday, or
              corporate event — we’d love to hear your story and help bring it
              to life through our lens.
            </p>
          </div>
          <div className="pageTitle-box">
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
          </div>
        </Container>
      </Container>
    </Section>
  );
}
