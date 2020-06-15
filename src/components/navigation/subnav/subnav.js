import React from "react";
import Link from "react";
import styled from "styled-components";

const LinkStyle = styled.a`
  margin-right: 48px;
`;
const navlinks = [
  { id: 1, grp: 1, auth: true, xauth: true, name: "Homes", route: "/" },
  { id: 2, grp: 999, auth: true, xauth: true, name: "Yachts", route: "/plan" },
  {
    id: 3,
    grp: 999,
    auth: true,
    xauth: true,
    name: "Boating",
    route: "/trips"
  },
  {
    id: 4,
    grp: 999,
    auth: true,
    xauth: false,
    name: "Shopping",
    route: "/shopping"
  },
  {
    id: 5,
    grp: 1,
    auth: true,
    xauth: true,
    name: "Events",
    route: "/auth/register"
  },
  {
    id: 6,
    grp: 999,
    auth: false,
    xauth: true,
    name: "Log In",
    route: "/auth/login"
  },
  {
    id: 7,
    grp: 2,
    auth: true,
    xauth: false,
    name: "Profile",
    route: "/users/my-profile"
  },
  {
    id: 8,
    grp: 2,
    auth: true,
    xauth: true,
    name: "Invite Friends",
    route: "/invite"
  },
  { id: 9, grp: 2, auth: true, xauth: true, name: "Terms", route: "/" },
  { id: 10, grp: 2, auth: true, xauth: true, name: "Help", route: "/info" },
  {
    id: 11,
    grp: 2,
    auth: true,
    xauth: false,
    name: "Log Out",
    route: "/auth/logout"
  },
  {
    id: 12,
    grp: 2,
    auth: true,
    xauth: true,
    name: "About",
    route: "/misc/about"
  }
  //Terms and Conditions
];

export default function NavLink() {
  const navitems = navlinks.map(link => {
    if (link.grp === 1 && link.xauth === true) {
      return (
        <LinkStyle
          className="link-gray"
          key={link.id}
          href={link.route.toString()}
        >
          {link.name}
        </LinkStyle>
      );
    }
  });

  return <>{navitems}</>;
}
