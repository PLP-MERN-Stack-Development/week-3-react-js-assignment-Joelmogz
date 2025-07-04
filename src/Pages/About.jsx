const About = () => {
    return (
        <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h2 className="text-3xl font-bold mb-4 dark:text-white">About Taskify</h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        <strong>Taskify</strong> is a simple, responsive task management app built using
        React, Tailwind CSS, and public APIs. It was designed to help users create,
        organize, and manage their tasks efficiently — whether on desktop or mobile.
      </p>

      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
        <li>Built with modern frontend tools: <code className="bg-gray-200 px-1 rounded">React</code>, <code className="bg-gray-200 px-1 rounded">Vite</code>, and <code className="bg-gray-200 px-1 rounded">Tailwind CSS</code></li>
        <li>Features CRUD functionality using local state and Axios</li>
        <li>Fetches public data from <code className="bg-gray-200 px-1 rounded">JSONPlaceholder</code></li>
        <li>Implements theme switching (dark/light mode)</li>
        <li>Uses utility-first CSS for layout, transitions, and responsiveness</li>
      </ul>

      <div className="mt-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Built by <span className="font-medium">Joe 🕵️‍♂️</span> as a frontend learning project.
        </p>
      </div>
    </div>
    )
}

export default About;