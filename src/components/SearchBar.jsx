/* eslint-disable react/prop-types */

const SearchBar = ({handleInput, handleSearch}) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-2 pt-10">
          <input
            onChange={handleInput}
            type="text"
            placeholder="Search for a team, match or series"
            className="w-3/5 md:w-2/5 p-3 text-sm md:text-lg rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 text-sm md:px-7 md:py-3 md:text-lg md:font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg hover:from-blue-600 hover:to-pink-700 transition duration-300"
          >
            {" "}
            Search Now🏏
          </button>
        </div>
  )
}

export default SearchBar