import { useEffect } from "react";
const TermsRightNavigation = ({ currentpage }) => {
  //Use props to get the current page and use the data to select the menu active menue item and style it accordingly
  let myclass = "myclass";
  let navigationlinks = [
    { active: true, key: 3, class: "terms", text: "Terms of Service", href: "/terms" },
    {
      active: true,
      key: 1,
      class: "privacy",
      text: "Privacy",
      href: "/terms/privacy",
    },
    {
      active: false,
      key: 2,
      class: "payments",
      text: "Payments",
      href: "/terms/payments",
    },
    {
      active: false,
      key: 4,
      class: "cookie",
      text: "Cookie Policy",
      href: "/terms/cookies",
    },
    {
      active: false,
      key: 5,
      class: "planning",
      text: "Travel Planning",
      href: "/help/trips",
    },
    {
      active: false,
      key: 6,
      class: "cancelations",
      text: "Cancellations",
      href: "/terms/cancelations",
    },
    {
      active: false,
      key: 7,
      class: "club",
      text: "Travel Club",
      href: "/help/club",
    },
    {
      active: false,
      key: 8,
      class: "safety",
      text: "Safety",
      href: "/help/safety",
    },
    {
      active: false,
      key: 9,
      class: "partners",
      text: "Partners",
      href: "/help/partners",
    },
    {
      active: false,
      key: 10,
      class: "affiliate",
      text: "Affiliate Program",
      href: "/help/affiliate",
    },
  ];
  useEffect(() => {
    let link = document.getElementsByClassName(currentpage);
    link[0].className += " font-weight-bold";
    console.log(link, currentpage);
  });
  //Find an element and append the required class

  return (
    <div className="hide-sm position-sticky col-md-3 col-lg-2" style={{ top: "102px", height: "100%", borderRight: "2px solid #e8e8e8" }}>
      <ul id="terms" className={`sidenav-list ${myclass} list-unstyled`} role="navigation" aria-label="Terms of service menu">
        {navigationlinks.map((link) => {
          return (
            <li key={link.key} className="mb-2">
              <a className={`sidenav-item ${link.class}`} href={link.href} aria-selected="page">
                <strong>{link.text}</strong>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TermsRightNavigation;
