import { useEffect } from "react";

const Home = () => {
  useEffect(function(){
    document.title = 'Home'
  },[])

  return (
    <section className="section">
      <h1 className="section-title">Halo cuy, selamat datang di website ala-ala ✨</h1>
      <p className="section-desc">
        Ini adalah website dengan tech React Js pertama gw, maapin ya cuy kalo
        masih jelek 
      </p>
    </section>
  );
};

export default Home;
