import React from "react";
import { Link } from "@reach/router";

function Header() {
  return (
    <>
      <header className="fixed-header">
        <nav className="nav justify-content-center  py-1 mb-2 text-white bg-dark">
          {NAV_LINKS.map(navlink => (
            <NavLink to={`${navlink.url}`} key={`${navlink.title}`}>
              {navlink.title}
            </NavLink>
          ))}
        </nav>
      </header>
    </>
  );
}

const NAV_LINKS = [
  { title: "Home", url: "/" },
  { title: "Podcast", url: "/podcast" },
  { title: "Conferences", url: "/conferences" },
  { title: "Doctrine of salvation", url: "/doctrine-of-salvation" },
  { title: "Statement of beliefs", url: "/statement-of-beliefs" },
  { title: "Place of worship", url: "/place-of-worship" },
  { title: "Books", url: "/books-section" },
  { title: "Sermons", url: "/sermons-section" },
  { title: "Global reports", url: "/announcements-section" },
  { title: "About us", url: "/about-us" }
];

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: "nav-link",
        style: {
          color: isCurrent ? "white" : "#ffffff80"
        }
      };
    }}
  />
);

export default Header;
