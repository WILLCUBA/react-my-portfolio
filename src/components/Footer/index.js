import React from 'react';
import img from '../../assets/imgs/linkedin-brands.png'


function Footer() {
    return (
        
        <footer className="footer mt-5">
            <ul class="nav nav-tabs d-flex justify-content-center h-100">
                <li class="nav-item">
                    <a class="nav-link active" href="#"><img src={require('../../assets/imgs/linkedin-brands.png')}/></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#"><img src={require('../../assets/imgs/GitHub-Mark.png')}/></a>
                </li>
            </ul>
        </footer>
    )
}


export default Footer;