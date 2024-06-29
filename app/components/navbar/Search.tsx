const Search = () => {
  return (
    <div className="hidden md:flex flex-1">
      <input
        className="py-2 px-3 bg-gray-100 rounded-lg border-none outline-none flex flex-1"
        type="text"
        placeholder="Arama Yap..."
      />
      <button className="p-2 rounded-lg bg-orange-600 text-sm border-transparent text-white">
        Ara
      </button>
    </div>
  );
};

export default Search;
