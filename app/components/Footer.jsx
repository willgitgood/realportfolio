import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <ul className="footer-menu">
                <a href="#home">
                    <li>Home</li>
                    </a> 
                    <a href="#projects">
                    <li>Projects</li>
                    </a> 
                    <a href="#contact">
                    <li>Contact</li>
                    </a> 
                    <a href="#about">
                    <li>About</li>
                    </a> 
            </ul>

            <div className="footer-socials">
                <span>
                    <AiFillGithub size={30}/>
                </span>
                <span>
                    <AiFillYoutube size={30}/>
                </span>
                <span>
                    <AiFillLinkedin size={30}/>
                </span>
             
            </div>
        </div>
    </div>
  )
}

export default Footer
