import React from "react";
import ArticleCard from "./ArticleCard";

const StatementOfBeliefs = function() {
  const article = {
    title: "Statement of Beliefs",
    subTitle: "",
    summary:
      "The beloved physician, Luke, was led of the Lord to write a systematic account of the Christian faith. “Forasmuch as many have taken in hand to set forth in order a declaration of those things which are most surely believed among us” (Luke 1:1). In the spirit of Luke, we also desire to articulate our shared understanding of fundamental Christian beliefs as the basis of our unity and fellowship. We understand salvation to mean deliverance from the power and effects of sin through (a) the revelatory knowledge that Jesus Christ is the One God alone. This means Jesus is the Father, Son and the Holy Ghost, without any division of God’s personhood (Is 9:6; Gal 4:6; John 8:24), and (b) acting upon that knowledge by faith in fulfilling the plan of salvation outlined in Acts 2:38. With the Apostle Peter, we wholeheartedly hold the conviction that, “Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved” (Acts 4:12).",
    pdfLink: "/books/STATEMENT_OF_BELIEFS.pdf",
    image: "/books/STATEMENT_OF_BELIEFS.png",
    pages: "7"
  };

  return (
    <div className="album py-5 bg-light position-main">
      <div className="container">
        <div className="row">
          <ArticleCard {...article} />
        </div>
      </div>
    </div>
  );
};

export default StatementOfBeliefs;
