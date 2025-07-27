export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 mt-12 py-6 text-center text-gray-500 text-sm select-none bg-white">
      Made with{" "}
      <span role="img" aria-label="heart" className="text-red-500">
        ❤️
      </span>{" "}
      by{" "}
      <a
        href="https://github.com/pratyoos"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-indigo-600 hover:underline"
        title="Pratyoos GitHub"
      >
        Pratyoos
      </a>
    </footer>
  );
}