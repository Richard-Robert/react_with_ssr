import React, { Suspense } from 'react';
import AboutModule from '../components/AboutModule';

// const AboutModule = React.lazy(() => {
//   return new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
//     import('./components/AboutModule')
//   );
// });

const About = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AboutModule />
    </Suspense>
  );
};
export default About;
