import React from "react";
import { IoMdTime } from "react-icons/io";
import { IoIosCalendar } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

export const ConfSubTypeTimeItem = ({
  id,
  date,
  startTime,
  finishTime,
  lunchBreak
}) => {
  return (
    <li className="custom-li-style" key={id}>
      <p>
        <IoIosCalendar /> {date.day} {date.date}
        <sup>{date.sup}</sup> {date.month}
      </p>
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
