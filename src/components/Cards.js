import React from "react";
import { IoMdTime } from "react-icons/io";
import { IoIosCalendar } from "react-icons/io";
import { GoLocation } from "react-icons/go";

function Cards() {
  let januaryConferenceGermany = conferences["januaryConferenceGermany"];
  let februaryConferenceUK = conferences["februaryConferenceUK"];
  let theLordsSupperNorway = conferences["theLordsSupperNorway"];
  let theLordsSupperCanada = conferences["theLordsSupperCanada"];

  let theLordsSupperAustralia = conferences["theLordsSupperAustralia"];
  let annualConference = conferences["annualConference"];
  return (
    <>
      <div className="card-deck mb-2">
        <Card {...januaryConferenceGermany} />
        <Card {...februaryConferenceUK} />
      </div>
      <div className="card-deck mb-2">
        <Card {...theLordsSupperNorway} />
        <Card {...theLordsSupperCanada} />
      </div>
      <div className="card-deck mb-2">
        <Card {...theLordsSupperAustralia} />
        <Card {...annualConference} />
      </div>
    </>
  );
}

const conferences = {
  newYearConference: {
    imageUrl: "/stockholm.png",
    confType: "New Year Conference",
    country: "Sweden",
    city: "Stockholm",
    confStart: {
      date: "28",
      sup: "th",
      month: "December"
    },
    confEnd: {
      date: "31",
      sup: "st",
      month: "December"
    },
    confSubtypes: [
      {
        title: "Whole day program",
        location: {
          address: "KISTA TORG 7, 164 42 Kista",
          map:
            "https://www.google.com/maps/place/Kista+Tr%C3%A4ff/@59.4022735,17.9397174,17z/data=!3m1!4b1!4m5!3m4!1s0x465f9ef25f64e0cd:0x66aab4a9f9ddf527!8m2!3d59.4022735!4d17.9419061"
        },
        time: [
          {
            date: {
              day: "Saturday",
              date: "28",
              sup: "th",
              month: "December"
            },
            startTime: "14:00",
            finishTime: "20:00"
          },
          {
            date: {
              day: "Sunday",
              date: "29",
              sup: "th",
              month: "December"
            },
            startTime: "15:00",
            finishTime: "21:00"
          }
        ]
      },
      {
        title: "Youth program",
        location: {
          address: "Borgenvägen 16, 182 38 Danderyd",
          map:
            "https://www.google.com/maps/place/Borgenv%C3%A4gen+16,+182+38+Danderyd,+Sweden/@59.4050446,18.0018831,17z/data=!3m1!4b1!4m5!3m4!1s0x465f9c22477dcc5b:0x43856619d855d1ad!8m2!3d59.4050446!4d18.0040718"
        },
        time: [
          {
            date: {
              day: "Monday",
              date: "30",
              sup: "th",
              month: "December"
            },
            startTime: "13:00",
            finishTime: "16:00"
          },
          {
            date: {
              day: "Tuesday",
              date: "31",
              sup: "st",
              month: "December"
            },
            startTime: "13:00",
            finishTime: "16:00"
          }
        ]
      },
      {
        title: "Evening program",
        location: {
          address: "KISTA TORG 7, 164 42 Kista",
          map:
            "https://www.google.com/maps/place/Kista+Tr%C3%A4ff/@59.4022735,17.9397174,17z/data=!3m1!4b1!4m5!3m4!1s0x465f9ef25f64e0cd:0x66aab4a9f9ddf527!8m2!3d59.4022735!4d17.9419061"
        },
        time: [
          {
            date: {
              day: "Monday",
              date: "30",
              sup: "th",
              month: "December"
            },
            startTime: "18:00",
            finishTime: "22:00"
          },
          {
            date: {
              day: "Tuesday",
              date: "31",
              sup: "st",
              month: "December"
            },
            startTime: "18:00",
            finishTime: "22:00"
          }
        ]
      }
    ]
  },
  januaryConferenceGermany: {
    imageUrl:
      "https://images.unsplash.com/photo-1566506631331-a578cfba9cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    confType: "January conference",
    country: "Germany",
    city: "Frankfurt",
    confStart: {
      date: "24",
      sup: "th",
      month: "January"
    },
    confEnd: {
      date: "25",
      sup: "th",
      month: "January"
    },
    confSubtypes: []
  },
  februaryConferenceUK: {
    imageUrl:
      "https://images.unsplash.com/photo-1512734099960-65a682cbfe2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    confType: "February conference",
    country: "UK",
    city: "London",
    confStart: {
      date: "15",
      sup: "th",
      month: "February"
    },
    confEnd: {
      date: "16",
      sup: "th",
      month: "February"
    },
    confSubtypes: []
  },
  theLordsSupperNorway: {
    imageUrl:
      "https://images.unsplash.com/photo-1433757741270-94a3bcadc2f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    confType: "The Lord's Supper",
    country: "Norway",
    city: "Oslo",
    confStart: {
      date: "3",
      sup: "rd",
      month: "April"
    },
    confEnd: {
      date: "5",
      sup: "th",
      month: "April"
    },
    confSubtypes: [
      {
        title: "Evening program",
        location: {
          address: "Solbergliveien 85, 0683 Oslo",
          map:
            "https://www.google.com/maps/place/Sk%C3%B8yer'n+fritidsklubb/@59.8997986,10.8407608,17z/data=!3m1!4b1!4m5!3m4!1s0x46416f63edefaf97:0x8273d57b2f979b8!8m2!3d59.8997986!4d10.8429495"
        },
        time: [
          {
            date: {
              day: "Friday",
              date: "3",
              sup: "rd",
              month: "April"
            },
            startTime: "17:00",
            finishTime: "20:00"
          }
        ]
      },
      {
        title: "Whole day program",
        location: {
          address: "Solbergliveien 85, 0683 Oslo",
          map:
            "https://www.google.com/maps/place/Sk%C3%B8yer'n+fritidsklubb/@59.8997986,10.8407608,17z/data=!3m1!4b1!4m5!3m4!1s0x46416f63edefaf97:0x8273d57b2f979b8!8m2!3d59.8997986!4d10.8429495"
        },
        time: [
          {
            date: {
              day: "Saturday",
              date: "4",
              sup: "th",
              month: "April"
            },
            startTime: "11:00",
            finishTime: "20:00"
          },
          {
            date: {
              day: "Sunday",
              date: "5",
              sup: "th",
              month: "April"
            },
            startTime: "11:00",
            finishTime: "20:00"
          }
        ]
      }
    ]
  },
  theLordsSupperCanada: {
    imageUrl:
      "https://images.unsplash.com/photo-1490623970972-ae8bb3da443e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    confType: "The Lord's Supper",
    country: "Canada",
    city: "Toronto",
    confStart: {
      date: "10",
      sup: "th",
      month: "April"
    },
    confEnd: {
      date: "12",
      sup: "th",
      month: "April"
    },
    confSubtypes: []
  },
  theLordsSupperAustralia: {
    imageUrl:
      "https://images.unsplash.com/photo-1538385838701-51d6b218a676?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    confType: "The Lord's Supper",
    country: "Australia",
    city: "Perth",
    confStart: {
      date: "17",
      sup: "th",
      month: "April"
    },
    confEnd: {
      date: "19",
      sup: "th",
      month: "April"
    },
    confSubtypes: []
  },
  annualConference: {
    imageUrl:
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    confType: "Annual European Conference",
    country: "France",
    city: "Paris",
    confStart: {
      date: "31",
      sup: "st",
      month: "July"
    },
    confEnd: {
      date: "2",
      sup: "nd",
      month: "August"
    },
    confSubtypes: []
  },
  octoberConference: {}
};
const Card = ({
  imageUrl,
  confType,
  city,
  country,
  confStart,
  confEnd,
  confSubtypes
}) => {
  return (
    <div className="card">
      <img className="card-img-top" src={imageUrl} alt="Card image cap" />
      <ul className="list-group list-group-flush">
        <li key="mainBody" className="list-group-item">
          {/* confType, city, country */}
          <h5 className="card-title">
            {confType} - {city}, {country}
          </h5>
          {/* conStart, confEnd */}
          <h6 className="card-subtitle mb-2 text-muted">
            {confStart.date}
            <sup>{confStart.sup}</sup> {confStart.month} - {confEnd.date}
            <sup>{confEnd.sup}</sup> {confEnd.month}
          </h6>
        </li>
        {confSubtypes.length > 0 ? (
          confSubtypes.map(item => {
            return <ConfSubTypeItem {...item} />;
          })
        ) : (
          <ConfSubTypeItemDetailComingSoon />
        )}
      </ul>
    </div>
  );
};
const ConfSubTypeItemDetailComingSoon = () => {
  return (
    <li key="detail" className="list-group-item">
      <div className="card-body">
        <p className="card-text">
          Program and address details will be coming soon!
        </p>
      </div>
    </li>
  );
};
const ConfSubTypeItem = ({ id, title, location, time }) => {
  return (
    <li key={id} className="list-group-item">
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">
          {title} at{" "}
          <a href={location.map}>
            <GoLocation /> {location.address}
          </a>
        </h6>
        <ul style={{ listStyle: "none" }}>
          {time.map(item => (
            <ConfSubTypeTimeItem {...item} />
          ))}
        </ul>
      </div>
    </li>
  );
};

const ConfSubTypeTimeItem = ({ id, date, startTime, finishTime }) => {
  return (
    <li style={{ border: "px solid rgba(0,0,0,.125)" }} key={id}>
      <p>
        <IoIosCalendar /> {date.day} {date.date}
        <sup>{date.sup}</sup> {date.month}
      </p>
      <p>
        <IoMdTime /> {startTime} - {finishTime}{" "}
      </p>
    </li>
  );
};
export default Cards;
