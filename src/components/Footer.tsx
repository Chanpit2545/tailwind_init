const links = ["About", "Projects", "Speaking", "Uses"];

export function Footer() {
  return (
    <footer className="flex justify-between items-center py-12 px-16">
      <div className="flex gap-6">
        {links.map((link) => (
          <div className="text-sm font-semibold hover:text-blue-500 transition-colors">
            {link}
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500">
        © 2024 Spencer Sharp. All rights reserved.
      </p>
    </footer>
  );
}
