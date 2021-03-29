import React from "react";

export default function Footer() {
  return (
    <div className="footer">
    <div className="hellohi">
        <a href="https://github.com/mnemch/weather-app/tree/a05d51c3a921451f012f47579c9baec700f1410e" target="_blank">
            Open-source code {""}
        </a>
        by Mariia Nemchinova

        <a href="https://www.shecodes.io/users/8831/" target="_blank">👩‍💻 </a>
        <a href="https://www.linkedin.com/in/mariia-nemchinova-693609110/" target="_blank">
            <i className="fab fa-linkedin">ln</i>
        </a>
        <a href="https://twitter.com/Maria91259872" target="_blank">
            <i className="fab fa-twitter"> tw</i>
        </a>
        <br />
        <div className="language">
            <div id="div1">
                <a href="https://practical-johnson-7e7b99.netlify.app/" onclick="setLanguage('en')"> 🇬🇧English </a>
                <a href="#" onclick="setLanguage('es')"> 🇪🇸Español </a>
            </div>
            </div>
        <div className="year">
            © 2021
        </div>
    </div>
    </div>
  );
}
