export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-10">
      <p>&copy; {new Date().getFullYear()} HerbChain. All rights reserved.</p>
      <p className="text-sm">Built with care by team chainmasters.</p>
    </footer>
  );
}
