import Footer from '@/components/home/Main-footer';
import TeamSection from '@/components/newsletters/TeamSection';
import React from 'react'

const Newsletters = () => {
  return (<>
   <div className="lg:px-40 py-40">
      <TeamSection/>
    </div>
    <div>
      <Footer/>
    </div>
  </>
   
  );
}

export default Newsletters