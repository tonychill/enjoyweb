import React from "react";
import { useRouter } from "next/router";
//import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const SideLink = styled.a`
  margin-right: 15px;
  display: block;
  margin: 15px 30px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  outline: none;
  letter-spacing: 0.0107142857em;
  text-transform: none;
`;
const catlinks = [
  {
    id: 1,
    name: "Experiences",
    route: "/[scat]",
    as: "/Experiences",
    class: "navdisc"
  },
  {
    id: 2,
    name: "Homes",
    route: "/plan",
    as: "",
    class: "navplan"
  },
  {
    id: 3,
    name: "Experiences",
    route: "/experiences",
    as: "",
    class: "navexp"
  },
  {
    id: 4,
    name: "Services",
    route: "/services",
    as: "",
    class: "navsvc"
  },
  {
    id: 5,
    name: "Messages",
    route: "/messages",
    as: "",
    class: "navmes"
  },
  {
    id: 6,
    name: "Shopping",
    route: "/shopping",
    as: "",
    class: "navmes"
  },
  {
    id: 7,
    name: "Events",
    route: "/events",
    as: "",
    class: "navmes"
  },
  {
    id: 8,
    name: "Places",
    route: "/places",
    as: "",
    class: "navmes"
  },
  {
    id: 9,
    name: "Groups",
    route: "/packages",
    as: "",
    class: "navmes"
  },
  {
    id: 10,
    name: "Food",
    route: "/packages",
    as: "",
    class: "navmes"
  },
  {
    id: 11,
    name: "Packages",
    route: "/packages",
    as: "",
    class: "navmes"
  },
  {
    id: 12,
    name: "Tripcasts",
    route: "/packages",
    as: "",
    class: "navmes"
  }

  //{ id: 2, Side: 1, name: "Flights", route: "/flghts" }
];

export default function SideLinks() {
  const cats = catlinks.map(cat => {
    return (
      <Link href={cat.route.toString()} as={`${cat.as.toString()}`}>
        <SideLink className="" key={cat.id}>
          <span>{cat.name}</span>
        </SideLink>
      </Link>
    );
  });

  return <>{cats}</>;
}
