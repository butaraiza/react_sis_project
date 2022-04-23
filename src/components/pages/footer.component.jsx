import React from "react";


import './pages.style.css';
class Footer extends React.Component{

    render() {
        return(
            <div className="footer">
               <footer>
                   <div className="footer-left">
                       <span>@ 2022 Butaraiz.info</span>
                   </div>
                   <div className="footer-right">
                       <span><a href="/" className="footer-span-home">Home</a></span>
                       <span><a href="/" className="footer-span-home">About</a></span>
                       <span><a href="/add-student" className="footer-span-home">Create</a></span>
                       <span><a href="/" className="footer-span-home">Privacy</a></span>
                   </div>
               </footer>
            </div>

        );
    }
}

export default Footer;