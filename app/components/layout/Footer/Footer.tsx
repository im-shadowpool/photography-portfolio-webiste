import Container from "@/app/components/ui/Container";
import Section from "../../ui/Section";
import Button from "../../ui/Button";
import "./Footer.css";
import FooterHoverImages from "./FooterHoverImages";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      {/* Pre Footer */}
      <Container className="pre-footer">
        <FooterHoverImages />
        <div className="pre-footer-content">
          <h2>Let's get started</h2>
          <p>Get in touch to see how we can help you.</p>
          <div className="buttons-group">
            <Button path="/contact-us" content="Get Results" />
            <Button path="/contact-us" content="Get a Call Back" />
          </div>
        </div>
      </Container>
      {/* Post Footer */}
      <div className="post-footer-wrapper">
        <Container className="post-footer">
          <div className="post-footer-1">
            <div className="f-col-1">
              <img src="/logos/logo.svg" alt="Logo" />
              <p>
                We supply a wide range of food, produce, and custom packaging
                from ready-to-order items to fully bespoke branded solutions and
                custom moulds.
              </p>
            </div>
            <div className="f-col-2">
              <h4>Quick Links</h4>
            </div>
            <div className="f-col-3">
              <h4>Reach us</h4>
              <div className="icon-list">
                <a className="icon-list-single" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    strokeWidth="1.5"
                    color={"var(--text-color)"}
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke={"var(--text-color)"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m7 9 5 3.5L17 9"
                    ></path>
                    <path
                      stroke={"var(--text-color)"}
                      d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"
                    ></path>
                  </svg>
                  <p>hello@reromspaces.com</p>
                </a>
                <a className="icon-list-single" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    strokeWidth="1.5"
                    color={"var(--text-color)"}
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke={"var(--text-color)"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.118 14.702 14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047.42 2.783 1.66 7.83 5.283 11.453 3.805 3.805 9.286 5.456 12.302 6.113 1.165.253 2.198-.655 2.198-1.848v-3.584z"
                    ></path>
                  </svg>
                  <p>+91 99999 99999</p>
                </a>
                <a className="icon-list-single" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    strokeWidth="1.5"
                    color={"var(--text-color)"}
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke={"var(--text-color)"}
                      d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1 1 16 0Z"
                    ></path>
                    <path
                      fill={"var(--text-color)"}
                      stroke={"var(--text-color)"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                    ></path>
                  </svg>
                  <p>Road - 12, Sector 1, Hyderabad - 500044 </p>
                </a>
              </div>
            </div>
          </div>
          <div className="post-footer-2">
            <p>© 2023 Rerom Spaces. All rights reserved.</p>
            <div className="post-footer-2-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
