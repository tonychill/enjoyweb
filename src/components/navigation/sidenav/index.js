import styled from "styled-components";

import Link from "next/link";
import { useRouter } from "next/router";
import "../nav.scss";

const SideLink = styled.a`
  margin-right: 15px;
`;
const catlinks = [
  {
    id: 9,
    name: "",
    route: "",
    as: "",
    class: "",
    icon: "/media/active-icons/trips.svg",
    active: false
  },
  {
    id: 1,
    name: "",
    route: "/",
    as: "/",
    class: "navdisc",
    icon: "/media/active-icons/discover.svg",
    active: true
  },
  {
    id: 2,
    name: "",
    route: "/plan",
    as: "/plan",
    class: "navplan",
    icon: "/media/active-icons/plan.svg",
    active: true
  },
  {
    id: 3,
    name: "",
    route: "/[scat]",
    as: "saved",
    class: "navexp",
    icon: "/media/active-icons/trips.svg",
    active: false
  },

  {
    id: 4,
    name: "",
    route: "/[scat]",
    as: "Places",
    class: "navsvc",
    icon: "/media/active-icons/events.svg",
    active: false
  },
  {
    id: 5,
    name: "",
    route: "/[events]",
    as: "shopping",
    class: "navmes",
    icon: "/media/active-icons/shop-happy.svg",
    active: false
  },
  {
    id: 6,
    name: "Friends",
    route: "/[scat]",
    as: "Friends",
    class: "navplan",
    active: false
  },
  {
    id: 6,
    name: "Groups",
    route: "/[scat]",
    as: "Groups",
    class: "navplan",
    active: false
  },
  {
    id: 7,
    name: "",
    route: "/[scat]",
    as: "Settings",
    class: "navmes",
    icon: "/media/active-icons/settings.svg",
    active: false
  },
  {
    id: 8,
    name: "",
    route: "/events/[events]",
    as: "Events",
    class: "navmes",
    icon: "/media/active-icons/profile.svg",
    active: false
  }
];

const cats = catlinks.map(cat => {
  if (cat.active === true && cat.as !== "Settings") {
    return (
      <li className="mt-4" key={cat.id}>
        <Link href={cat.route.toString()} as={`${cat.as.toString()}`}>
          <a className="d-lx">
            <div className="d-lx-mk"></div>
            <span>
              <img width="24px" src={cat.icon}></img>
            </span>
            <span>{cat.name}</span>
          </a>
        </Link>
      </li>
    );
  }
  if (cat.active === true && cat.as === "Settings") {
    return (
      <div key={cat.id} className="mx-4 mt-4">
        <Link href={cat.route.toString()} as={`${cat.as.toString()}`}>
          <a className="d-lx">
            <div className="d-lx-mk"></div>
            <span>
              <img width="24px" src={cat.icon}></img>
            </span>
            <span>{cat.name}</span>
          </a>
        </Link>
      </div>
    );
  }
});

const MainNav = ({ path }) => {
  const asRoute = useRouter();
  const as = asRoute.asPath;

  return (
    <nav className="d-none fixed-top d-md-flex nv-ct nav sd-nv mt-5 pt-3 ">
      <div className="mx-auto">
        <div>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="17">
              <path
                d="M1.5 14h13a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3zm0-7h25a1.5 1.5 0 010 3h-25a1.5 1.5 0 010-3zm0-7h22a1.5 1.5 0 010 3h-22a1.5 1.5 0 010-3z"
                fill="#26292C"
                fillRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <ul className="list-unstyled mb-0 pl-0 ">{cats}</ul>
      </div>
    </nav>
  );
};

export default MainNav;
//<h4>{path === "/" ? "Discover" : as}</h4>
/*

<nav className="nv-ct  bx-sdw nav ">
      <div className="mt-sm-5 mx-auto">
        <ul className="nav flex-sm-column">{cats}</ul>
      </div>
    </nav>
*/
