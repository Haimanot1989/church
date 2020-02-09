import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons";
export const ContactInfo = ({ phoneNumbers, emails }) => {
  return (
    <div>
      {phoneNumbers.length > 0 && (
        <p>
          <FontAwesomeIcon icon={faPhoneSquare} /> {phoneNumbers}
        </p>
      )}
      {emails && emails.length > 0 && (
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> {emails}
        </p>
      )}
    </div>
  );
};
