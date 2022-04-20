import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContext";

const API_KEY = process.env.REACT_APP_TMDB_apiKey;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null);

  const getMovies = (url) => {
    axios
      .get(url)
      .then((res) => setMovies(res.data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (searchTerm && currentUser) {
      getMovies(SEARCH_API + searchTerm);
    } else if (!currentUser) {
      alert("Please sign in!");
      navigate("/login");
    } else {
      alert("Please enter your movie name");
    }
  };

  const handleBtnClick = () => {
    setSearchTerm(searchInputRef.current.value);
  };
  return (
    <>
      <form className="search" onSubmit={handleFormSubmit}>
        <input
          ref={searchInputRef}
          type="search"
          className="search-input"
          placeholder="Search a movie..."
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleBtnClick} type="submit">
          Search
        </button>
      </form>
      <div className="d-flex justify-content-center flex-wrap ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};

export default Main;
