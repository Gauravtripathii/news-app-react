import React from "react";

function NewsCard(props) {
  return (
    <div className="news-card">
      <p>
        <img src={props.image} alt="profile-image" />
      </p>
      <h3>{props.title}</h3>
      <h5>{props.description}</h5>
    </div>
  );
}

export default NewsCard;
