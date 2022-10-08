import React from "react";

export default function MovieItem({imageUrl ,imageAlt , year, title , distributor , amount}) {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img
        src={imageUrl}
        className="card-img-top"
        alt={imageAlt}
      />
      <div className="card-body">
        <h3 className="card-text">
         #{title} ({year})
        </h3>
        <hr />
        <p>
        Distributor : {distributor}
        </p>
        <hr />
        <span>
          Amount : {amount}
        </span>
      </div>
    </div>
  );
}
