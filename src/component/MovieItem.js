import React from "react";

export default function MovieItem(props) {
  return (
          
            <div className="card" style={{width: '18rem' , backgroundColor: props.cardTheme}} >
      <img
        src={props.imageUrl}
        className="card-img-top"
        alt={props.imageAlt}
      />
      <div className="card-body">
        <h3 className="card-text">
         #{props.title} ({props.year})
        </h3>
        <hr />
        <p>
        Distributor : {props.distributor}
        </p>
        <hr />
        <span>
          Amount : {props.amount}
        </span>
      </div>
    </div>
  );
}
