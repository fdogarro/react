const Search = ({searchValue, setSearchValue, getImages}) => {
  return (
    <div className="input-group input-group-lg mt-3">
        <input 
            className="form-control"
            value={searchValue}
            placeholder="a funny cat face"
            onChange={e => setSearchValue(e.target.value)}
        />
        <button 
            className="btn btn-dark" 
            onClick={getImages}
        >
         Generate
        </button>
  </div>
  )
}

export default Search
