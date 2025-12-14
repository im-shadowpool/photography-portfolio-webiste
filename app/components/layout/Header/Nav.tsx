const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  return (
    <nav className="navbar_menu flex absolute overflow-hidden left-1/2 -translate-x-1/2 bg-white p-2 gap-2 border-rounded-md">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-sm font-medium hover:opacity-70 transition"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
