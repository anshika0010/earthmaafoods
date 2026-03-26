"use client"
import { useState } from "react"
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react"
import ProductList from "@/components/Product/ProductList"

export default function ProductsHeader() {

  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("All Products (100)")
  const [activeFilter, setActiveFilter] = useState("All needs")

  const filters = [
    "All needs",
    "Products",
    "Food type",
    "Ingredient",
    "Health Goal",
    "Category"
  ]

  const handleSearch = (e) => {
    setSearch(e.target.value)
    console.log("Search:", e.target.value)
  }

  const handleFilter = (item) => {
    setActiveFilter(item)
    console.log("Filter:", item)
  }

  const handleSort = (e) => {
    setSort(e.target.value)
    console.log("Sort:", e.target.value)
  }

  return (
    <>
    <section className="bg-gray-50 py-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm tracking-widest text-gray-500 mb-3">
            OUR PRODUCTS
          </p>

          <h2 className="text-4xl font-semibold text-gray-700">
            Pure by{" "}
            <span className="text-blue-500">Nature</span>, Proven by{" "}
            <span className="text-blue-500">Science</span>
          </h2>
        </div>

        {/* Search + Dropdown */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">

          {/* Search */}
          <div className="flex items-center bg-white border rounded-md px-3 py-2 flex-1 shadow-sm">
            <Search className="w-4 h-4 text-gray-400" />

            <input
              type="text"
              placeholder="Select Products"
              value={search}
              onChange={handleSearch}
              className="ml-2 w-full outline-none text-sm"
            />
          </div>

          {/* Dropdown */}
          <div className="relative">
            <select
              value={sort}
              onChange={handleSort}
              className="bg-white border rounded-md px-4 py-2 text-sm pr-8 appearance-none cursor-pointer"
            >
              <option>All Products (100)</option>
              <option>Popular</option>
              <option>Newest</option>
              <option>Price Low to High</option>
            </select>

            <ChevronDown className="absolute right-2 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>

        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center gap-3">

          {filters.map((item, index) => (
            <button
              key={index}
              onClick={() => handleFilter(item)}
              className={`px-4 py-1.5 rounded-full text-sm border transition
              ${
                activeFilter === item
                  ? "bg-blue-50 text-blue-600 border-blue-200"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}

          {/* Filters Button */}
          <button className="flex items-center gap-2 text-blue-500 ml-2 text-sm">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Sort Button */}
          <button className="flex items-center gap-1 text-gray-500 text-sm ml-auto">
            sort by
            <ChevronDown className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
<ProductList/>
    </>
  )
}