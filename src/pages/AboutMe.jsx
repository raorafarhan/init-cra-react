import { useEffect } from "react";
const AboutMe = () => {
  useEffect(function(){
    document.title = 'Profile'
  },[])
  return (
    <section className="section">
      <h1 className="section-title">
        Perkenalkan cuy nama gw <b>Roraurus</b>
      </h1>
      <p className="section-desc">
        Gw adalah seorang web developer fullstack lulusan harvard university 😎
      </p>
    </section>
  );
};
export default AboutMe;