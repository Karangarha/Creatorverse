import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="h-[80vh] w-full flex flex-col items-center justify-center px-10 gap-8 bg-[url('https://www.nhm.ac.uk/content/dam/nhm-www/discover/what-is-space/what-is-space-milky-way-full-width.jpg.thumb.1920.1920.png')] bg-no-repeat bg-cover">
      <div className="text-7xl font-semibold text-white">Creatorverse</div>
      <div className="flex gap-4">
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 text-lg"
        >
          Show Creators
        </Link>
        <Link
          to="/add"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 text-lg"
        >
          Add Creator
        </Link>
      </div>
    </div>
  );
}
