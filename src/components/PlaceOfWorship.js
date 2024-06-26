import React from "react";
import { IoMdTime } from "react-icons/io";
import { IoIosCalendar } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import { PageDescriber } from "./PageDescription";

const PlaceOfWorship = () => {
  let imageUrl = "./place_of_worship.png";
  let meetingType = "Sunday Service";
  let startTime = "14:00";
  let finishTime = "17:30";
  let mainLocation = {
    map:
      "https://www.google.com/maps/place/Sk%C3%B8yer'n+Juniorklubb/@59.8994456,10.8408631,17z/data=!3m1!4b1!4m6!3m5!1s0x46416ffdba8423b7:0x2feb9124178f8590!8m2!3d59.8994456!4d10.843438!16s%2Fg%2F11kq6rtn7p?entry=ttu",
    placeName: "Skøyer'n fritidsklubb, Solbergliveien 85, 0683 Oslo"
  };
  let pageDescription = {
    title: "Jesus Alone is God Church of Norway",
    bodyTexts: [
      "We have physical meeting every Sunday and zoom meetings on Saturdays(19:00 CET). You are most welcome to join us."
    ]
  };
  let digitalLocation = {
    meetingId: "639 807 0890",
    meetingPassword: "OneGod",
    meetingLink: {
      map:
        "https://us02web.zoom.us/j/6398070890?pwd=MlZxZWcwR3I0d3R1MmhDN0syaUx0Zz09",
      placeName:
        "Join the digital meeting by click on this link or use the id and password above in the zoom app"
    }
  };
  return (
    <>
      <main role="main" className="container mb-2 position-main">
        <PageDescriber {...pageDescription} />
        <div className="card service-card">
          <img className="card-img-top" src={imageUrl} alt="Bible" />
          <ul className="list-group list-group-flush">
            <li key="mainBody" className="list-group-item">
              {/* confType, city, country */}
              <h5 className="card-title">{meetingType}</h5>
            </li>
            <li
              style={{
                border: "px solid rgba(0,0,0,.125)",
                listStyleType: "none",
                textAlign: "center"
              }}
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
              <p>Zoom Meeting ID: {digitalLocation.meetingId}</p>
              <p>Zoom Meeting Password: {digitalLocation.meetingPassword}</p>
              <p>
                <a href={digitalLocation.meetingLink.map}>
                  <GoLocation /> {digitalLocation.meetingLink.placeName}
                </a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default PlaceOfWorship;
