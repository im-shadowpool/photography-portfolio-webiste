import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  return (
    <nav className="navbar_menu flex absolute overflow-hidden left-1/2 -translate-x-1/2 bg-white p-0.5 gap-1 border-rounded-xs">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className="p-2 px-3 border-rounded-xs hover:!text-white hover:bg-(--brandColor) transition duration-300">
          {item.label}
        </Link>
      ))} 
    </nav>
  );
}
