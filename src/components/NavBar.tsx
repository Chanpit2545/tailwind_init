const links = ["About", "Articles", "Projects", "Speaking", "Uses"];

export function NavBar() {
  return (
    <header className="flex justify-center">
      <div className="flex bg-white shadow-lg gap-6 py-2 px-12 rounded-md border font-semibold text-base">
        {links.map((link) => (
          <div className="hover:text-blue-500 transition-colors">{link}</div>
        ))}
      </div>
    </header>
  );
}
