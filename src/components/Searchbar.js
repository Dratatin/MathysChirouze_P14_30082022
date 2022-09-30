import search from "../assets/search.svg"

function Searchbar({ input, handleChange }) {
    return (
        <div className="searchbar">
            <input
                className="searchbar__input"
                type="text"
                id="search"
                name="search"
                placeholder="search..."
                value={input}
                onChange={handleChange}>
            </input>
            <label className="searchbar__label" htmlFor="search">
                <img src={search} alt="search icon"></img>
            </label>
        </div>
    )
}

export default Searchbar