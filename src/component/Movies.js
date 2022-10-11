import React from "react";
import MovieItems from "./MovieItem";
import { List } from "./dataFile/MoviesList";

export default function Movies({theme , cardTheme}) {
  return (
    <div className="col md-4 raw my-5" style={{backgroundColor: theme}}>
      {List.map((movies) => {
        return (
          <div key={movies.id} className="three my-3">
            <MovieItems
              cardTheme={cardTheme}
              imageUrl={movies.img.src}
              imageAlt={movies.img.alt}
              year={movies.year}
              title={`${movies.id}- ${movies.title}`}
              distributor={movies.distributor}
              amount={movies.amount}
            />
          </div>
        );
      })}
    </div>
  );
}
