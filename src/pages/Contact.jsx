import { useEffect } from "react";
const Contact = () => {
  useEffect(function(){
    document.title = 'Contact'
  },[])
  return (
    <section className="section">
    <h1 className="section-title">Contact</h1>
      <p className="section-desc">ini adalah contact gw ya cuy</p>
        <li>WhatsApp</li>
        <li>Twitter</li>
        <li>Tiktok</li>
    </section>
  );
};

export default Contact;
