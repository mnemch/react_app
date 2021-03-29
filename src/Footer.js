import React from "react";

export default function Footer() {
  return (
    <div className="footer">
    <div className="hellohi">
        <a href="https://github.com/mnemch/react_app" target="_blank" rel="noreferrer">
            Open-source code {""}
        </a>
        by Mariia Nemchinova

        <a href="https://www.shecodes.io/users/8831/" target="_blank" rel="noreferrer">👩‍💻 </a>
        <a href="https://www.linkedin.com/in/mariia-nemchinova-693609110/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin">ln</i>
        </a>
        <a href="https://twitter.com/Maria91259872" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"> tw</i>
        </a>
        <br />
        <div className="language">
            <div id="div1">
                <a href="" rel="noreferrer"  onClick="setLanguage('en')"> 🇬🇧English </a>
                <a href="" rel="noreferrer" onClick="setLanguage('es')"> 🇪🇸Español </a>
            </div>
            </div>
        <div className="year">
            © 2021
        </div>
    </div>
    </div>
  );
}
