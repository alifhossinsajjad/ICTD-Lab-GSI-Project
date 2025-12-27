import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../../Contact/Contact';
import Vendor from '../Vendor/Vendor';


const Home = () => {
    return (
        <div>
            <section>
          <Banner/>
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