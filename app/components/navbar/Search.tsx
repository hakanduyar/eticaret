const Search = () => {
  return (
    <div className="hidden md:flex flex-1">
      <input
        className="py-2 px-3 bg-slate-600 rounded-sm border-none outline-none flex flex-1"
        type="text"
        placeholder="Arama Yap..."
      />
      <button className="p-2 bg-">Ara</button>
    </div>
  );
};

export default Search;
