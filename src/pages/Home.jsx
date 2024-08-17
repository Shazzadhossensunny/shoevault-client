import { useEffect } from "react";
import { useState } from "react"
import Singleproduct from "../components/Singleproduct";


export default function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
        const res = await fetch(`http://localhost:5000/products?page=${page}&limit=6&search=${searchQuery}`);
        const data = await res.json();
        setProducts(data.products);
        setTotalPages(data.totalPages);
    };

    fetchProducts();
}, [page,searchQuery]);

const handleSearch = (e) => {
  e.preventDefault();
  setPage(1);
  setSearchQuery(e.target.search.value.trim());

};

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl text-center font-semibold">Products</h2>
      {/* search */}
      <div className="join flex justify-center my-3">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search..."
                        className="input input-bordered join-item"
                    />
                    <button type="submit" className="btn btn-primary join-item">
                        Search
                    </button>
                </form>
            </div>
      {/* search category */}
      <div>
        {/* todo */}
      </div>
      {/* all products */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {
          products.map((product)=> <Singleproduct key={product._id} product={product}></Singleproduct>)
        }

      </div>
      {/* pagination */}
      <div className="flex justify-center items-center mt-6 space-x-2">
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className="px-4 py-2 bg-gray-300 rounded disabled:bg-gray-200"
                >
                    Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => setPage(index + 1)}
                        className={`px-4 py-2 rounded ${page === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                    className="px-4 py-2 bg-gray-300 rounded disabled:bg-gray-200"
                >
                    Next
                </button>
            </div>




    </div>
  )
}
