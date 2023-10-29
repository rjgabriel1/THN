import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Sidenav from "../components/Sidenav";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArticleCard from "../components/Cards/ArticleCard";
import { categories, apiKey } from "../utils/config";
import ScrollToTopButton from "../components/ScrollButton";
import SearchBar from "../components/Search";

const Health = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [pageTitle, setPageTitle] = useState("Health");
  const baseUrl = "https://newsapi.org/v2/everything";

  const handleSearch = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    setPageTitle(newQuery ? `Search for "${newQuery}"` : "Health");
    if (!newQuery && query) {
      window.location.reload();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (query) {
        // If a search query exists, fetch articles using the search query
        fetch(`${baseUrl}?q=${query}&apiKey=${apiKey}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.articles && Array.isArray(data.articles)) {
              setArticles(data.articles);
            } else {
              // Set an empty array if the articles are not available
              setArticles([]);
            }
          })
          .catch((error) => {
            console.error("Error fetching articles:", error);
            // Set an empty array in case of an error
            setArticles([]);
          });
      }

      console.log(query);
    }
  };
  useEffect(() => {
    fetch(categories.health)
      .then((res) => res.json())
      .then((data) => {
        if (data.articles && Array.isArray(data.articles)) {
          setArticles(data.articles);
        } else {
          // Set an empty array if the articles are not available
          setArticles([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        // Set an empty array in case of an error
        setArticles([]);
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
            {articles.map((article) => {
              return (
                <Grid item xs={6} md={4} key={article.title}>
                  <ArticleCard
                    cover={article?.urlToImage}
                    title={article?.title}
                    description={article?.description}
                    source={article?.source?.name}
                    published_at={article?.publishedAt}
                    linkTo={article?.url}
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
export default Health;
