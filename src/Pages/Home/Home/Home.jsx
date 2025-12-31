import React from "react";
import Banner from '../Banner/Banner';
import AllNotice from "../../../Pages/AllNotice/AllNotice";
import Goals from "../Goals/Goals";
import Vendor from "../Vendor/Vendor";
import Contact from "../../Contact/Contact";
import About from "../About/About";


const Home = () => {
  return (
    <div>
      <section id="home">
        <Banner />
      </section>

      <section id="notice">
        <AllNotice />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="goals">
        <Goals />
      </section>

      <section id="vendor">
        <Vendor />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
