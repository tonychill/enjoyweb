//Homes
//Yachts
//Experiences
//Car Rental
//Services/Amenities
import Link from "next/link";

const links = [
  {
    id: 1,
    name: "Homes",
    route: "/plan",
    as: "homes",
    class: "navdisc",
    icon: "../static/media/home.svg",
    active: true
  },
  {
    id: 3,
    name: "Yachts",
    route: "/plan",
    as: "yachts",
    class: "navexp",
    icon: "../static/media/boat.svg",
    active: true
  },

  {
    id: 2,
    name: "Experiences",
    route: "/plan",
    as: "experiences",
    class: "navmes",
    icon: "../static/media/luggage.svg",
    active: true
  },

  {
    id: 4,
    name: "Car Rental",
    route: "/plan",
    as: "rentals",
    class: "navsvc",
    icon: "../static/media/suv-car.svg",
    active: true
  },
  {
    id: 5,
    name: "Services",
    route: "/plan",
    as: "services",
    class: "navmes",
    icon: "../static/media/bell.svg",
    active: true
  }
];

const plinks = links.map(plink => {
  if (plink.active === true) {
    return (
      <li key={plink.id}>
        <Link href={plink.route.toString()} as={`${plink.as.toString()}`}>
          <a className="d-lx" key={plink.id}>
            <div className="d-lx-mk"></div>

            <span>
              <img width="24px" src={plink.icon}></img>
            </span>
            <span>{plink.name}</span>
          </a>
        </Link>
      </li>
    );
  }
});

const PlannerNav = () => (
  <nav className="nv-ct nav d-none d-md-flex">
    <div className="mt-4 ml-4">
      <h4>Plan</h4>
      <ul className="nav flex-column">{plinks}</ul>
    </div>
    <div className="sn-mk"></div>
  </nav>
);

export default PlannerNav;
