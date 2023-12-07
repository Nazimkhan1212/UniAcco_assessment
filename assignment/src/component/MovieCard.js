import { useEffect, useState } from "react";
import axios from "axios";

const MovieCard = () => {
  const [movie, setMovie] = useState([]);
  let pages = 1;
  let limit = 34;
  useEffect(() => {
    const fetchData = async () => {
      //   for (let i = pages; i < limit; i++) {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=38ea5e7c8561a585923cb35fd520dfa3&page=1`
      );
      // console.log(data.results);
      setMovie(data.results);
      //   console.log(data.results, "results");
    };
    // };
    fetchData();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "10px",
      }}
    >
      {movie.map(({ id, title, overview, vote_average, poster_path }) => {
        return (
          <div key={id}>
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid black",
                margin: "0 10px",
                width: "300px",
                maxHeight: "500px",
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                style={{ height: "300px", minWidth: "280px" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.1rem 0.1rem",
                }}
              >
                <p>{title.slice(0, 30)}</p>
                <p>{vote_average}</p>
              </div>
              <div
                style={{
                  padding: "0.1rem 0.3rem",
                }}
              >
                <p style={{ overflow: "clip" }}>
                  {overview.length > 30
                    ? overview.slice(0, 70) + "..."
                    : overview}
                </p>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
};
export default MovieCard;
