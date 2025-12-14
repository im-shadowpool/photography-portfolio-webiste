import Container from "@/app/components/ui/Container";
import "./Header.css"

import Button from "../../ui/Button";
import Nav from "./Nav";
// import Nav from "./Nav";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-999 w-full" >
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="">
          <img src={"/logos/logo.svg"} alt="Logo" className="w-full" width={223} height={40} />
        </div>
        <Nav />
        <Button path="/contact-us" content="Get Results" />

        {/* <Nav /> */}
      </Container>
    </header>
  );
}
