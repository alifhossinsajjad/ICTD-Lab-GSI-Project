import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../../Contact/Contact';
import Vendor from '../Vendor/Vendor';
import Goals from '../Goals/Goals';


const Home = () => {
    return (
        <div>
            <section>
          <Banner/>
            </section>
            <section>
                <Goals/>
            </section>
            <section>
               <Vendor/>
            </section>
            <section>
                <Contact/>
            </section>
           
        </div>
    );
};

export default Home