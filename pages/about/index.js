import Metas from "../../components/Metas";
import { Suspense, useEffect, useState } from "react";

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const desktopDevice = window.innerWidth;
    if (desktopDevice > 767) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

  return (
    <>
      <Metas
        metatitle="Day One Software - Quick and Professional Web Services"
        metadesc="We create web applications fast and seamlessly"
        metakeys="web development, web applications, quick service"
        metaurl="https://dayonesoftware.com"
      />
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-12">
            <h1>Welcome to Day One Software</h1>
            <p>
              We specialize in creating quick and professional web services
              to help businesses thrive in the digital world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;