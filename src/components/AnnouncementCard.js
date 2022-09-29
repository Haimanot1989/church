import React from "react";

const AnnouncementCard = ({
  title,
  subTitle,
  summary,
  pdfLink,
  image,
  pages
}) => {
  return (
    <div className="card overlay-container card-font-style">
      <div className="card mb-4 box-shadow">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-sub-title">{subTitle}</h6>
        </div>
        <div className="card-body">
          <img
            className="card-img-top img-height-equalizer "
            alt={title}
            src={image}
          ></img>
        </div>
        <div className="card-body books-description-box">
          <p className="card-text">{summary}</p>
          <div className="action-box">
            <a href={pdfLink} className="btn btn-lg btn-secondary action-btn">
              {`Open the letter - ${pages} pages`}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard;
