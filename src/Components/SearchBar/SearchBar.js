import { Link } from 'react-router-dom';

export default function SearchBar(props){
    return (
        <form onSubmit={props.handleSubmit} className="searchBar">
          <input
            placeholder="Search For Books"
            type="text"
            name="bookSearchString"
            required
            // onChange={handleChange}
            // value=''
          />
            <button type="submit">Find Free Books</button>
        </form>
      )
}