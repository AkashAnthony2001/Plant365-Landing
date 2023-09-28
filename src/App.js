import React, { useState, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/bootstrap.css";
import "./assets/css/maicons.css";
import "./assets/vendor/animate/animate.css";
import "./assets/css/theme.css";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import loader from "./assets/img/Progress-animation/Meyi_medium_animation.gif";
const Nav = React.lazy(() => import("./components/Nav"));
const Home = React.lazy(() => import("./components/Home"));
const Buyer = React.lazy(() => import("./components/Buyer"));
const Supplier = React.lazy(() => import("./components/Supplier"));
const Products = React.lazy(() => import("./components/Products"));
const Orders = React.lazy(() => import("./components/Orders"));
const Contact = React.lazy(() => import("./components/Contact"));
const Website = React.lazy(() => import("./components/Website"));
const Footer = React.lazy(() => import("./components/Footer"));
const AccessError = React.lazy(() => import("./components/AccessError"));
const TermsAndConditions = React.lazy(() =>
  import("./components/TermsAndConditions")
);
const PrivacyPolicy = React.lazy(() =>
  import("./components/PrivacyPolicy")
);
Amplify.configure(awsExports);

function App() {
  const [showSignin, setShowSignin] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <div className="back-to-top"></div>

      <Suspense
        fallback={
          <div className="global-loader">
            <img src={loader} alt="" />
          </div>
        }
      >
        <Nav
          showSignin={showSignin}
          setShowSignin={setShowSignin}
          isUserLogin={isUserLogin}
          setIsUserLogin={setIsUserLogin}
          user={user}
          setUser={setUser}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<AccessError />} />

          <Route path="/buyers" element={<Buyer />} />
          <Route path="/suppliers" element={<Supplier />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/order"
            element={
              <Orders
                showSignin={showSignin}
                setShowSignin={setShowSignin}
                isUserLogin={isUserLogin}
                setIsUserLogin={setIsUserLogin}
                user={user}
              />
            }
          />
          <Route path="/contactus" element={<Contact />} />
          <Route
            path="/supplier/:website"
            element={
              <Website
                setShowSignin={setShowSignin}
                isUserLogin={isUserLogin}
              />
            }
          />
          <Route path="/terms&conditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
