
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MovieApp.css";
import { useNavigate } from "react-router-dom";

const API_KEY = "183928bab7fc630ed0449e4f66ec21bd";

const MovieApp2 = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [years, setYears] = useState("");
  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState("");
  const [lang, setLang] = useState("");
  const [actor, setActor] = useState("");
  const [desid, setDesid] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    ShowAll();
  }, []);

  const ShowAll = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=2`
    );
    setMovies(res.data.results.slice(0, 24));
  };

  const SearchMovie = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
    );
    setMovies(res.data.results);
  };

  const SearchMovieYear = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&primary_release_year=${years}`
    );
    setMovies(res.data.results);
  };

  const GetRating = () => {
    setMovies(movies.filter((m) => m.vote_average >= rating));
  };

  const GetGenre = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}`
    );
    setMovies(res.data.results);
  };

  const SetLanguage = () => {
    setMovies(movies.filter((m) => m.original_language === lang));
  };

  const GetActor = async () => {
    const personRes = await axios.get(
      `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${actor}`
    );
    if (!personRes.data.results.length) return;

    const actorId = personRes.data.results[0].id;
    const movieRes = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_cast=${actorId}`
    );
    setMovies(movieRes.data.results);
  };

  const fetchTrailer = async (movieId) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
    );
    const trailer = res.data.results.find(
      (v) => v.site === "YouTube" && v.type === "Trailer"
    );
    trailer ? setTrailerKey(trailer.key) : alert("Trailer not available");
  };

  const SetDescriptions=(id)=>{
    setDesid(prev=>(prev?null:id))
  }

  return (
    <div className="netflix-app">
      {/* NAVBAR */}
      <header className="navbar">
        <h1>🎬 Movie-Maniac</h1>
       
        
      </header>
      

      {/* FILTER BAR */}
      <div className="filters">
        
        <select onChange={(e) => setRating(e.target.value)}>
          <option value="">Rating</option>
          <option value="5">5+</option>
          <option value="6">6+</option>
          <option value="7">7+</option>
        </select>
  <button onClick={GetRating}>Rating</button>

        <select onChange={(e) => setYears(e.target.value)}>
          <option value="">Year</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>

        <button onClick={SearchMovieYear}>Year</button>

        <select onChange={(e) => setGenre(e.target.value)}>
          <option value="">Genre</option>
          <option value="28">Action</option>
          <option value="35">Comedy</option>
          <option value="18">Drama</option>
          <option value="878">Sci-Fi</option>
        </select>
 
        <button onClick={GetGenre}>Genre</button>

        <select onChange={(e) => setLang(e.target.value)}>
          <option value="">Language</option>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
  <button onClick={SetLanguage}>Language</button>
        <input
          placeholder="Actor"
          value={actor}
          onChange={(e) => setActor(e.target.value)}
        />

   

 <button onClick={GetActor}>Actor</button>
      
        <input
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && SearchMovie()}
        />
        <button onClick={SearchMovie}>Search</button>
       
       
       
        <button onClick={ShowAll}>Home</button>
      </div>

      {/* MOVIE GRID */}
      <div className="netflix-grid">
        {movies.map((movie) => (
          <div className="netflix-card" key={movie.id}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/300x450"
              }
              alt={movie.title}
            />
 
            <div className="netflix-info">
              <h3>{movie.title}</h3>
              <p>⭐ {movie.vote_average}</p>
         
              <button onClick={() => fetchTrailer(movie.id)}>
                ▶ Watch Trailer
              </button>

              <button onClick={() => SetDescriptions(movie.id)}>
                {desid === movie.id ? "Hide" : "Info"}
              </button>

              {desid === movie.id && (
                <p className="overview">{movie.overview}</p>
              )}
            
                 <p>Popularity: {movie.popularity}</p>
         <p>Language: {movie.original_language}</p>
         <p>release-date:-{movie.release_date}</p>
     
            </div>
          </div>
        ))}
      </div>

      {/* TRAILER */}
      {trailerKey && (
        <div className="trailer-overlay">
          <button className="close" onClick={() => setTrailerKey(null)}>✖</button>
          <iframe
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Trailer"
          />
        </div>
      )}

      <button className="next" onClick={() => navigate("/MovieApp3")}>
        Next 
      </button>
        <button className="next" onClick={() => navigate("/")}>
       Prev
      </button>
    </div>
  );
};

export default MovieApp2;


