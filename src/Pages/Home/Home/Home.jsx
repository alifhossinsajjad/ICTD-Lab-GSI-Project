import React from 'react';
import Banner from '../Banner/Banner';
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