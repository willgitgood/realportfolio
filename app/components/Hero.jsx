'use client'

import Image from "next/image";
import "./Hero.css";
import Facepic from '../../public/face pic.jpg';
import useTypingEffect from "../hooks/usetypingeffect";

// icons
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';

const Hero = () => {
    const phrases = ['Portfolio Page.' ,'Resume Page.' ]
    const text =useTypingEffect(phrases)
    return (
        <div className="hero">
            <div className="hero-container">
                <div className="hero-heading">
                    <h1>
                        Greetings, I'm Will <br /> I'm an IT professional and this is my <span>{text}</span>
                    </h1>
                    <div className="hero-buttons">
                        <button>Contact</button>
                        <button>Projects</button>
                    </div>
                        <div className="hero-socials">
                            <a href="/">
                                <AiFillGithub />
                            </a>
                            <a href="/">
                                <AiFillYoutube />
                            </a>
                            <a href="/">
                                <AiFillLinkedin />
                            </a>
                        </div>
                        </div>
                        <div className="hero-image">
                            <Image src={Facepic} height={0} width={0}/>
                </div>
            </div>
        </div>
    )
}

export default Hero
