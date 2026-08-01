const Search = ({ query, setQuery }) => {
  return (
    <section className="w-full flex items-center flex-col px-5 py-14 md:py-15">
      <div className="mb-5 text-center">
        <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
          Fresh Recipes
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900 mb-8 text-center">
        Search our <span className="text-orange-500">menu</span>
      </h2>

      <div className="w-full sm:w-xl md:w-2xl flex items-center rounded-full border border-gray-200 bg-white focus-within:border-orange-500 transition">
        <svg
          className="w-5 h-5 text-orange-500 ml-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2.5"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
        <input
          type="text"
          placeholder="e.g. jollof rice, pasta, tacos"
          className="w-full font-medium text-gray-800 border-0 px-4 py-3 sm:py-4 rounded-full outline-none placeholder:text-gray-400 placeholder:font-normal"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <p className="mx-auto mt-4 max-w-2xl text-gray-500 text-center">
        Browse hundreds of recipes made with fresh ingredients and cook
        something amazing today.
      </p>
    </section>
  );
};

export default Search;
