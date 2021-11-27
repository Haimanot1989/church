import React from "react";
import { MeetingInfo } from "./MeetingInfo";
export const OnlineLoacation = ({ zoomInfo }) => {
  return <p>{zoomInfo && <MeetingInfo {...zoomInfo} />}</p>;
};
