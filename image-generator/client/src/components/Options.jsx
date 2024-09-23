const Options = ({selectedOptions, setSearchValue}) => {
  return (
    <ul className="list-group list-group-horizontal mt-3">
        {selectedOptions.map((option, index) => 
        <li className="list-group-item" key={index} onClick={() => setSearchValue(option)}>{option}</li>
        )}
    </ul>
  )
}

export default Options
