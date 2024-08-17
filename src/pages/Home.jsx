import { useEffect } from "react";
import { useState } from "react";
import Singleproduct from "../components/Singleproduct";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("dateAdded");

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        `http://localhost:5000/products?page=${page}&limit=6&search=${searchQuery}&brand=${brand}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortBy=${sortBy}`
      );
      const data = await res.json();
      setProducts(data.products);
      setTotalPages(data.totalPages);
    };

    fetchProducts();
  }, [page, searchQuery, brand, category, minPrice, maxPrice, sortBy]);

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
      <div className="flex flex-col md:flex-row justify-between my-3 flex-wrap">
        <select
          onChange={(e) => setBrand(e.target.value)}
          className="select select-bordered join-item"
          defaultValue=""
        >
          <option value="">All Brands</option>
          <option value="Nike">Nike</option>
          <option value="Adidas">Adidas</option>
          <option value="Reebok">Reebok</option>
          <option value="Converse">Converse</option>
          <option value="ASICS">ASICS</option>
          <option value="Salomon">Salomon</option>
          <option value="Vans">Vans</option>
          <option value="New Balance">New Balance</option>
          <option value="Mizuno">Mizuno</option>
          <option value="Under Armour">Under Armour</option>
          <option value="Brooks">Brooks</option>
        </select>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered join-item"
          defaultValue=""
        >
          <option value="">All Categories</option>
          <option value="Running Shoes">Running Shoes</option>
          <option value="Casual Shoes">Casual Shoes</option>
          <option value="Trail Running Shoes">Trail Running Shoes</option>
          <option value="Basketball Shoes">Basketball Shoes</option>
          <option value="Training Shoes">Training Shoes</option>
          <option value="Hiking Shoes">Hiking Shoes</option>
          <option value="Football Shoes">Football Shoes</option>
        </select>
        <input
          type="number"
          placeholder="Min Price"
          className="input input-bordered join-item"
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          className="input input-bordered join-item"
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="select select-bordered join-item"
          defaultValue="dateAdded"
        >
          <option value="dateAdded">Newest First</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>
      </div>
      {/* all products */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {products.map((product) => (
          <Singleproduct key={product._id} product={product}></Singleproduct>
        ))}
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
            className={`px-4 py-2 rounded ${
              page === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
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
  );
}
