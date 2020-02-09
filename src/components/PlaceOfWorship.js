import React from "react";
import { IoMdTime } from "react-icons/io";
import { IoIosCalendar } from "react-icons/io";
import { GoLocation } from "react-icons/go";

const PlaceOfWorship = () => {
  let imageUrl =
    "https://images.unsplash.com/photo-1554355409-7d69eaad80d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80";
  let meetingType = "Sunday Service";
  let startTime = "14:00";
  let finishTime = "17:30";
  let mainLocation = {
    map:
      "https://www.google.com/maps/place/Sk%C3%B8yer'n+fritidsklubb/@59.8997986,10.8407608,17z/data=!3m1!4b1!4m5!3m4!1s0x46416f63edefaf97:0x8273d57b2f979b8!8m2!3d59.8997986!4d10.8429495",
    placeName: "Skøyer'n fritidsklubb"
  };
  return (
    <>
      <main role="main" className="container mb-2">
        <section className="jumbotron text-center">
          <h1 className="jumbotron-heading">Apostolic church of Norway</h1>
          <p className="lead text-muted">
            You are most welcome to join us for our weekly meetings in Oslo.
          </p>
          <div className="card">
            <img className="card-img-top" src={imageUrl} alt="Bible" />
            <ul className="list-group list-group-flush">
              <li key="mainBody" className="list-group-item">
                {/* confType, city, country */}
                <h5 className="card-title">{meetingType}</h5>
              </li>
              <li
                style={{ border: "px solid rgba(0,0,0,.125)" }}
                key="sundayService"
              >
                <p>
                  <IoIosCalendar /> Every Sunday
                </p>
                <p>
                  <IoMdTime /> {startTime} - {finishTime}{" "}
                </p>
                <a href={mainLocation.map}>
                  <GoLocation /> {mainLocation.placeName}
                </a>
                <hr className="w-50 clearfix"></hr>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default PlaceOfWorship;
