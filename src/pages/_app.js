// import SideNav from "../components/navigation/sidenav";
import { useState, useEffect } from "react";
import Amplify, { Auth } from "aws-amplify";
import PrimaryNavigation from "../components/navigation";
import Join from "../components/join/index";
import "../../public/scss/main.scss";
import "../../public/scss/test.scss";
import config from "../../config";

function Tony({ Component, pageProps, meta }) {
  Amplify.configure({
    Auth: {
      manditorySignId: true,
      region: config.cognito.REGION,
      userPoolId: config.cognito.USER_POOL_ID,
      userPoolWebClientId: config.cognito.APP_CLIENT_ID,
    },
  });

  const [user, setUser] = useState(null);
  const [session, setSession] = useState(); //Delete???
  const [show, setModalShow] = useState(false);
  const handleLogOut = async (event) => {
    event.preventDefault();
    try {
      await Auth.signOut();
      setAuthStatus(false);
      setUserObj({ user: null });
      localStorage.setItem("currentUserSession", "");
    } catch (err) {
      console.log(err.message);
    }
  };

  const authProps = {
    user,
    session,
    setUser,
    setSession,
    handleLogOut,
  };

  useEffect(() => {
    (async () => {
      try {
        if (!session) {
          if (localStorage.getItem("currentUserSession")) {
            setSession(localStorage.getItem("currentUserSession"));
          } else {
            const session = await Auth.currentSession();
            const user = await Auth.currentAuthenticatedUser();
            if (session) {
              setSession(session);
              localStorage.setItem("currentUserSession", JSON.stringify(session)); //Local storage
            }
            // if (user) setUser(JSON.parse(user)); // Add the user object to local storage???
          }
        }
      } catch (err) {
        console.log(err);
      }
    })();

    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", process.env.G_TAG_MANAGER_KEY);
  });
  return (
    <div className="tony">
      {/* <MainPageHead props={meta} /> */}
      <PrimaryNavigation auth={authProps} />
      {/* <SideNav /> */}
      <Component auth={authProps} {...pageProps} setModalShow={setModalShow} Auth={Auth} />
      <Join auth={authProps} show={show} setModalShow={setModalShow} />
    </div>
  );
}
export default Tony;
