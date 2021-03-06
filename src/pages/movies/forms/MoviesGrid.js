import { Grid } from "@mui/material";
import { formatArray } from "lib/arrayObject";
import React from "react";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ data = [] }) {
  return (
    <div>
      <Grid container spacing={4}>
        {formatArray(data).map((movie, movieIndex) => {
          const rand = String(Math.random());
          return (
            <Grid key={rand + movieIndex} item lg={3} md={4} sm={6} xs={12}>
              <MovieCard data={movie} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
