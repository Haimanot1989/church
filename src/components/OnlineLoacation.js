import React from "react";
import { MeetingInfo } from "./MeetingInfo";
export const OnlineLoacation = ({ zoomInfo }) => {
  return <div>{zoomInfo && <MeetingInfo {...zoomInfo} />}</div>;
};
