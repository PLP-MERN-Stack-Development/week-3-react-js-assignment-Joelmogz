import { useEffect, useState} from "react";
import axios from "axios";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

//   pagination state
    const [page, setPage] = useState(1);
    const postsPerPage = 10;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const res = await axios.get("https://jsonplaceholder.typicode.com/post");
                setPosts(res.data);
                setFilteredPosts(res);
            } catch (err) {
                setError("Failed to load Posts.", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);
    
    // filter post on search inputs

    useEffect(() => {
        const filtered = posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));

        setFilteredPosts (filtered);
        setPage(1); //reset first page on search
    }, [search, posts]);

    // pagination logic
    const start = (page -1) * postsPerPage;
    const end = start + postsPerPage;
    const paginatedPosts = filteredPosts.slice(start, end);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    return(
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            <h2 className="text-2xl font-bold">JSONPlaceholder Posts</h2>

            <input 
                type="text"
                placeholder="Search by title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 border rounded"
            />
            {loading && <p>Loading posts...</p>}
            {error && <p className="text-red-600">{error}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {paginatedPosts.map((post => (
                    <div key={post.id} className="bg-white shadow p-4 rounded">
                        <h3 className="font-semibold text-blue-600">{post.title}</h3>
                        <p className="text-gray-700">{post.body}</p>
                    </div>
                )))}
            </div>

        
        {/* Pagination Controls*/}
        <div className="flex justify-center gap-2">
            <button
            disabled = {page === 1}
            onClick={() => setPage((prev) => prev -1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50">
                Prev
            </button>
            <span className="px-3 py-1">{page} / {totalPages}</span>
            <button
            disabled={page === totalPages}
            onClick={() => setPage((prev) => +1)}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50">
                Next
            </button>
        </div>
        </div>
    );

}

export default Posts;