

const Search = ({ query, setQuery})=>{

  return ( <section className="w-full flex items-center flex-col px-5">
    <h1 className="my-5 sm:my-10 text-green-500 text-shadow-green-800 text-shadow-lg tracking-wider">Food List</h1>
    <div className="w-full sm:w-xl md:w-2xl flex items-center md:my-10 rounded-2xl shadow-green-600 shadow-lg">
      <svg className="w-6 h-6 text-green-500 mx-5 animate-pulse" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-width="2.5" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
      </svg>
      <input type="text" className="w-full font-semibold text-green-500 border-0 py-2 sm:py-3 border-green-500 rounded-lg outline-0" value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
    </div>
  </section>
  )
}

export default Search;