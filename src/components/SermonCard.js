import React from "react";

const SermonCard = ({ title, summary, pdfLink, image, pages }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
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
          <div className="d-flex justify-content-between align-items-center">
            <a href={pdfLink} className="btn btn-sm btn-outline-secondary">
              Open the sermon
            </a>
            <small className="text-muted">{pages} pages</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SermonCard;