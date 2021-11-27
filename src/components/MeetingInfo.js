import React from "react";
import { MainLocation } from "./MainLocation";
import { MeetingId, MeetingPassword } from "./OnlineMeetingCard";

export const MeetingInfo = zoomInfo => {
  return (
    <>
      {zoomInfo.meetingId && <MeetingId {...zoomInfo} />}
      {zoomInfo.meetingPassword && <MeetingPassword {...zoomInfo} />}
      {zoomInfo.meetingLink && <MainLocation {...zoomInfo.meetingLink} />}
    </>
  );
};
