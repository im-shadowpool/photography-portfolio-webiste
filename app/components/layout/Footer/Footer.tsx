import Container from "@/app/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <Container className="py-12">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Brand. All rights reserved.
          </p>

          <nav className="flex gap-6 text-sm">
            <a href="/privacy" className="hover:opacity-70">
              Privacy
            </a>
            <a href="/terms" className="hover:opacity-70">
              Terms
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
