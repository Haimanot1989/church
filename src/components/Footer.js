import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = function() {
  return (
    <>
      <footer className="page-footer font-small mdb-color pt-4 bg-dark text-white">
        {/* <!-- Footer Links -->*/}
        <div className="container text-center text-md-left">
          {/* <!-- Footer links --> */}
          <div className="row text-center text-md-left mt-3 pb-3">
            {/* <!-- Grid column --> */}
            <div className="col-md-6 col-lg-3 col-xl-5 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Apostolic Church International Fellowship
              </h6>
              <p>
                In case of any question, get in touch with us using the contact
                information under the contact section.
              </p>
            </div>
            {/* <!-- Grid column --> */}

            <hr className="w-100 clearfix d-md-none"></hr>
            {/* <!-- Grid column --> */}
            <div className="col-md-4 col-lg-3 col-xl-4 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> haimif@yahoo.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
