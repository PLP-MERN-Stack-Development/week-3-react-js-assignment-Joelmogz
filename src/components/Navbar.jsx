import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    return (
        <nav className="bg-white border-b shadow-sm p-4 flex gap-6">
            <div className="flex gap-6">
            <Link to="/" className="font-semibold text-blue-600 hover:underline">Home</Link>
            <Link to="/tasks" className="font-semibold text-blue-600 hover:underline">Tasks</Link>
            <Link to="/about" className="font-semibold text-blue-600 hover:underline">About</Link>
            <Link to="/posts" className="font-semibold text-blue-600 hover:underline">Posts</Link>
            </div>
            <ThemeToggle />
        </nav>
    );
}

export default Navbar;