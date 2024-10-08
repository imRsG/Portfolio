import React from "react";
import { Shss, ShssWrapper, ShssSlide } from 'smooth-horizontal-scroll-slider';
import "./imageGallery.css"

interface GalleryItem {
  name: string;
  iframeUrl: string;
  technology: string;
}

const galleryItems: GalleryItem[] = [
  {
    name: 'Chappan virtual tour with html component',
    iframeUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7207267487644581889?compact=1",
    technology: 'vite framework with react three fiber',
  },
  {
    name: 'Car Modification',
    iframeUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7207360287551721473?compact=1",
    technology: 'vite react fiber',
  },
  {
    name: 'Online food store',
    iframeUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7184490427855618048?compact=1",
    technology: 'wordpress',
  },
  {
    name: 'Modern web sample',
    iframeUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7183288423263195137?compact=1",
    technology: 'html, css, javascript, GreenSock',
  },
  {
    name: 'VFX in blender',
    iframeUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7173943955695370240?compact=1",
    technology: 'vite framework with react three fiber',
  },
  {
    name: 'Car racing game',
    iframeUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7047775707434745856?compact=1",
    technology: 'Unity3d, after-effects, blender',
  },
  {
    name: 'GTA prototype',
    iframeUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7047760339534233600?compact=1",
    technology: 'vite framework with react three fiber',
  },
  {
    name: 'After effects',
    iframeUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7024255583830577152?compact=1",
    technology: 'After effects',
  },
  {
    name: 'Virtual car showroom',
    iframeUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7016970317302521856?compact=1",
    technology: 'unity3d, blender',
  },
  {
    name: 'Virtual architecture showroom',  
    iframeUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7015332957825462272?compact=1",
    technology: 'unity3d, blender',
  },
  {
    name: 'CSS styling',
    iframeUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6969606883313614848?compact=1",
    technology: 'Html, Css, JavaScript',
  },
  {
    name: 'Instagram Ui',
    iframeUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6984498083644489728?compact=1",
    technology: 'react native',
  },
  {
    name: 'Movie trailer streaming website with reactjs & scss',
    iframeUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6980909463633297408?compact=1",
    technology: 'react, 3rd party api integration',
  },
  {
    name: 'Eye detection ',
    iframeUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6970209697186353152?compact=1",
    technology: 'vite framework with react three fiber',
  },
  {
    name: 'Wordpress UI ',
    iframeUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6962588766708379648?compact=1",
    technology: 'Wordpress website sample',
  },
  {
    name: 'Logo Animation',
    iframeUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6960416737972367360?compact=1",
    technology: 'After Effects',
  },
  // Add the remaining items (total 16)
];

// Split gallery items into two halves
const firstHalf = galleryItems.slice(0, 8);
const secondHalf = galleryItems.slice(8, 16);

const Gallery: React.FC = () => {
  return (
    <section className="items-center mt-24">
      <div className="bg-transparent mx-auto items-center  h-3/6 justify-center">
        <Shss speed={2}>
          {/* First slider for items 1 to 8 */}
          <ShssWrapper>
            {firstHalf.map((item, index) => (
              <ShssSlide key={index}>
                <div className=" bg-none ms-4 me-4 mb-6"> {/* Apply className to wrapper div */}
                  <iframe
                    src={item.iframeUrl}
                    title={item.name}
                    className="galleryimg w-full h-auto  hover-iframe"
                    allowFullScreen
                  />
                  <p className="absolute bg-black text-xl leading-none font-medium me-4 ms-4 h-16 bottom-0 left-0 right-0 ps-6 text-primary p-3">
                    {item.name}
                  </p>
                </div>
              </ShssSlide>
            ))}
          </ShssWrapper>
          {/* Second slider for items 9 to 16 */}
          <ShssWrapper direction="rtl">
            {secondHalf.map((item, index) => (
              <ShssSlide key={index}>
                <div className=" bg-none ms-4 me-4  ">
                  <iframe
                    src={item.iframeUrl}
                    title={item.name}
                    className="galleryimg w-full h-auto  hover-iframe"
                    allowFullScreen
                  />
                  <p className="absolute bg-black text-xl leading-none font-medium  me-4 ms-4 h-16 bottom-0 left-0 right-0 ps-6 text-primary p-3">
                    {item.name}
                  </p>
                </div>
              </ShssSlide>
            ))}
          </ShssWrapper>
        </Shss>
      </div>
    </section>
  );
};

export default Gallery;