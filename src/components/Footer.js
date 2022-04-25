import React from 'react'
import '../components/Homecss.css'

const Footer = () => {
  return (
    <footer>
    <div class="footer-content">
        <h3>Codeisready</h3>
        <p>We provide both project and documentation .Our team will explain a piece of information about the project presentation and many more , feel free to contact us.</p>
        <ul class="socials">
            <li><a href="#"><i class="fa-brands fa-facebook fa-2x"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-instagram fa-2x"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-youtube fa-2x"></i></a></li>
           
         </ul>
    </div>
    <div class="footer-bottom">
        <p>copyright &copy; <a href="#">Codeisready</a> All Rights Reserved  </p>
     </div>
</footer> 
  )
}

export default Footer