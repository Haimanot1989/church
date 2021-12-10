import React from "react";
import { IoMdTime } from "react-icons/io";
import { IoIosCalendar } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
const ConfSubTypeDate = ({ date }) => {
  return (
    <p>
      <IoIosCalendar /> {date.day} {date.date}
      <sup>{date.sup}</sup> {date.month}
    </p>
  );
};

const ConfSubTypeDates = ({ dates }) => {
  return (
    <p>
      <IoIosCalendar /> {dates[0].day} {dates[0].date}
      <sup>{dates[0].sup}</sup> {dates[0].month} - {dates[1].day}{" "}
      {dates[1].date}
      <sup>{dates[1].sup}</sup> {dates[1].month}
    </p>
  );
};
export const ConfSubTypeTimeItem = ({
  id,
  date,
  startTime,
  finishTime,
  lunchBreak
}) => {
  return (
    <li className="custom-li-style" key={id}>
      {Array.isArray(date) ? (
        <ConfSubTypeDates dates={date} />
      ) : (
        <ConfSubTypeDate key={date} date={date} />
      )}
      <p>
        {startTime && finishTime && (
          <ConfSubTypeStartAndFinishTime
            startTime={startTime}
            finishTime={finishTime}
          />
        )}
      </p>
      {lunchBreak && (
        <p>
          <FontAwesomeIcon icon={faUtensils} /> {lunchBreak}
        </p>
      )}
      <hr className="w-50 clearfix"></hr>
    </li>
  );
};

const ConfSubTypeStartAndFinishTime = ({ startTime, finishTime }) => {
  return (
    <>
      <IoMdTime /> {startTime} - {finishTime}{" "}
    </>
  );
};
