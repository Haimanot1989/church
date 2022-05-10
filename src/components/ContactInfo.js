import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquare,
  faEnvelope,
  faGlobe,
  faMale
} from "@fortawesome/free-solid-svg-icons";
export const ContactInfo = ({ phoneNumbers, emails, webistes, names }) => {
  return (
    <div>
      {names && names.length > 0 && (
        <p>
          <FontAwesomeIcon icon={faMale} />{" "}
          {names.map(name => (
            <Name key={name} name={name} />
          ))}
        </p>
      )}
      {phoneNumbers && phoneNumbers.length > 0 && (
        <p>
          <FontAwesomeIcon icon={faPhoneSquare} />{" "}
          {phoneNumbers.map(phoneNumber => (
            <Phone key={phoneNumber} phoneNumber={phoneNumber} />
          ))}
        </p>
      )}
      {emails && emails.length > 0 && (
        <p>
          <FontAwesomeIcon icon={faEnvelope} />{" "}
          {emails.map(email => (
            <Email key={email} email={email} />
          ))}
        </p>
      )}
      {webistes && webistes.length > 0 && (
        <p>
          <FontAwesomeIcon icon={faGlobe} />{" "}
          {webistes.map(site => (
            <Site key={site} site={site} />
          ))}
        </p>
      )}
    </div>
  );
};

const Name = ({ name }) => {
  return <span>{name}</span>;
};
const Phone = ({ phoneNumber }) => {
  return <span>{phoneNumber}</span>;
};
const Email = ({ email }) => {
  return <span>{email}</span>;
};
const Site = ({ site }) => {
  return (
    <a href={site} target="_blank" rel="noopener noreferrer">
      {site}
    </a>
  );
};
