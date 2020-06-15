import React from "react";
import Link from "next/link";

const navlinks = [
  { id: 1, grp: 1, auth: true, xauth: true, name: "Discover", route: "/" },
  {
    id: 2,
    grp: 1,
    auth: false,
    name: "Plan",
    route: "/plan/index",
    as: "/plan",
  },
  { id: 3, grp: 1, auth: true, xauth: true, name: "Trips", route: "/trips" },
  {
    id: 4,
    grp: 1,
    auth: true,
    xauth: true,
    name: "Chat",
    route: "/chat",
  },
  {
    id: 5,
    grp: 1,
    auth: true,
    xauth: true,
    name: "Join",
    route: "/join",
  },

  {
    id: 7,
    grp: 2,
    auth: true,
    xauth: false,
    name: "Profile",
    route: "/users/my-profile",
  },
  {
    id: 8,
    grp: 2,
    auth: true,
    xauth: true,
    name: "Invite Friends",
    route: "/invite",
  },
  { id: 9, grp: 2, auth: true, xauth: true, name: "Terms", route: "/" },
  { id: 10, grp: 2, auth: true, xauth: true, name: "Help", route: "/info" },
  {
    id: 11,
    grp: 2,
    auth: true,
    xauth: false,
    name: "Log Out",
    route: "/auth/logout",
  },
  {
    id: 12,
    grp: 2,
    auth: true,
    xauth: true,
    name: "About",
    route: "/misc/about",
  },
  //Terms and Conditions
];

export default function NavLink() {
  const navitems = navlinks.map((link) => {
    if (link.grp === 1 && (link.auth === true || link.auth === false)) {
      return (
        <Link href={link.route} as={link.as} replace key={link.id}>
          <a className="link-gray mr-5" key={link.id}>
            {link.name}
          </a>
        </Link>
      );
    }
  });

  return <>{navitems}</>;
}
