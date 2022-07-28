import React, { useEffect } from "react";
import GalerySection from "../../component/GalerySection/GalerySection";
import Header from "../../component/Header/Header";
import NewExperience from "../../component/NewExperience/NewExperience";
import PreviewLast from "../../component/PreviewLast/PreviewLast";
import Shop from "../../component/Shop/Shop";
import TimeLine from "../../component/TimeLine/TimeLine";
function Home() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Header />
      <TimeLine />
      <PreviewLast />
      <NewExperience />
      <Shop />
      <GalerySection />
    </>
  );
}

export default Home;
