import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState();
  const { id } = useParams();
  const API_KEY = "d6278b3dc3e6f8f8376a89851c3f8c8f";
  const movieDetailURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    axios
      .get(movieDetailURL)
      .then((res) => setMovieDetail(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div className="container py-5">
        <h1 className="text-center">{movieDetail?.title}</h1>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={baseImageUrl + movieDetail?.poster_path}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8 d-flex flex-column ">
              <div className="card-body">
                <h5 className="card-title">Overview</h5>
                <p className="card-text">{movieDetail?.overview}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  {"Release Date : " + movieDetail?.release_date}
                </li>
                <li className="list-group-item">
                  {"Rate : " + movieDetail?.vote_average}
                </li>
                <li className="list-group-item">
                  {"Total Vote : " + movieDetail?.vote_count}
                </li>
                <li className="list-group-item">
                  <Link to={-1} className="card-link">
                    Go Back
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
