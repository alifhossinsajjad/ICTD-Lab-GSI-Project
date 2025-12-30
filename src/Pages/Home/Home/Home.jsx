import React from "react";
import Banner from '../Banner/Banner';
<<<<<<< HEAD
import Contact from '../../Contact/Contact';
import Vendor from '../Vendor/Vendor';
import Goals from '../Goals/Goals';
import About from '../About/About';
import AllNotice from '../../AllNotice/AllNotice';

const Home = () => {
    return (
        <div className="bg-white">
            <section>
                <Banner />
            </section>
            <section>
                <AllNotice />
            </section>
            <section>
                <About />
            </section>
            <section className="bg-gray-50">
                <Goals />
            </section>
            <section>
                <Vendor />
            </section>
            <section>
                <Contact />
            </section>
        </div>
    );
};

export default Home;
=======
import AllNotice from "../../../Pages/AllNotice/AllNotice";
import Goals from "../Goals/Goals";
import Vendor from "../Vendor/Vendor";
import Contact from "../../Contact/Contact";


const Home = () => {
  return (
    <div>
      <section id="home">
        <Banner/>
      </section>

      <section id="notice">
        <AllNotice/>
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
>>>>>>> main
