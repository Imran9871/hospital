// import React from 'react'
// import AboutHero from '../components/About/AboutHero'
// import WhatWeDo from '../components/About/WhatWeDo'

// const About = () => {
//   return (
//     <div>
//       <AboutHero/>
//       <WhatWeDo/>
//     </div>
//   )
// }

// export default About




import React from "react";

import AboutHero from "../components/About/AboutHero";
import OwnerSection from "../components/About/OwnerSection";
import WhatWeDo from "../components/About/WhatWeDo";

const About = () => {
  return (
    <div>
      <AboutHero />
      <OwnerSection />
      <WhatWeDo />
    </div>
  );
};

export default About;
