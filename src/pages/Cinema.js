import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Sidenav from "../components/Sidenav";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MovieCard from "../components/Cards/MovieCard";
import { categories, movie_apiKey } from "../utils/config";
import ScrollToTopButton from "../components/ScrollButton";
import SearchBar from "../components/Search";

const Cinema = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [pageTitle, setPageTitle] = useState("Movies");

  const handleSearch = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    setPageTitle(newQuery ? `Search for "${newQuery}"` : "Movies");
    if (!newQuery && query) {
      window.location.reload();
    }
  };

  const handleResponseData = (data) => {
    if (Array.isArray(data.results)) {
      setMovies(data.results);
    } else if (data) {
      // If data is a single movie object, create an array with a single item
      setMovies([data]);
    } else {
      // Set an empty array if no movies are available
      setMovies([]);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (query) {
        // If a search query exists, fetch movies using the search query

        fetch(
          `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${movie_apiKey}`
        )
          .then((res) => res.json())
          .then((data) => {
            handleResponseData(data);
          })
          .catch((error) => {
            console.error("Error fetching movies:", error);
            // Set an empty array in case of an error
            setMovies([]);
          });
      }

      console.log(query);
    }
  };
  useEffect(() => {
    fetch(categories.cinema)
      .then((res) => res.json())
      .then((data) => {
        if (data.results && Array.isArray(data.results)) {
          setMovies(data.results);
        } else {
          // Set an empty array if the movies are not available
          setMovies([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        // Set an empty array in case of an error
        setMovies([]);
      });
  }, []);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 5 }} alignItems="center">
          <Typography
            variant="h4"
            color="text.secondary"
            fontWeight="600"
            textAlign="left"
          >
            {pageTitle}
          </Typography>
          <Typography component={"div"} ml={110}>
            <SearchBar
              handleChange={handleSearch}
              searchInput={query}
              inputKeyPress={handleKeyPress}
            />
          </Typography>
          <Divider sx={{ mb: 4 }} />
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {movies.map((movie, index) => {
              return (
                <Grid item xs={6} md={4} key={index}>
                  <MovieCard
                    poster={movie?.poster_path}
                    title={movie?.title}
                    year={movie?.release_date}
                    overview={movie?.overview}
                    vote={movie?.vote_average}
                  />
                </Grid>
              );
            })}
          </Grid>
          <ScrollToTopButton />
        </Box>
      </Box>
    </>
  );
};
export default Cinema;
