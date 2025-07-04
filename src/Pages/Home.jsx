import { Link } from "react-router-dom";

const Home = () => {
    return (
          <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
        Welcome to Taskify 📝
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-8">
        A clean, responsive task manager app built with React, Tailwind CSS, and public APIs. Create, manage, and organize your tasks — in light or dark mode.
      </p>

      <Link
        to="/tasks"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition duration-300"
      >
        Get Started
      </Link>
    </div>
    )
}

export default Home;