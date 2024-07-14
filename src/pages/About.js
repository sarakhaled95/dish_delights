import React, { Component } from 'react';
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default class About extends Component {
    render() {
        return (
            <div className="container my-4 ml-4">
                <div className="row">
                    <div className="col-md-6">
                    <h2 className="title-italic">Welcome to Pinch of Salt</h2>
                <p>
                    Pinch of Salt is your ultimate culinary companion, dedicated to enriching your cooking experience with a diverse array of recipes, culinary insights, and inspirations.
                    </p>
                    <h4 className="title-head">Our Mission</h4>
                <p>
                    At Pinch of Salt, we are passionate about sharing our love for food and empowering food enthusiasts of all levels. Whether you're a seasoned chef or just starting out, our goal is to provide you with quality recipes that inspire and delight.
                </p>
                    </div>
                    <div className="col-md-6">
                        <img src={process.env.PUBLIC_URL + '/about.jpg'} alt="food" style={{ width: '100%', height: '100%' } }></img>
                    </div>
                    <h4 className="title-head my-3">What We Offer</h4>
                <ul>
                    <li>
                        <strong>Variety:</strong> Explore a wide range of recipes from around the world, curated for their taste, nutrition, and simplicity.
                    </li>
                    <li>
                        <strong>Quality:</strong> Our recipes are carefully selected and tested to ensure exceptional flavor and ease of preparation.
                    </li>
                    <li>
                        <strong>Accessibility:</strong> Find recipes easily with our user-friendly interface and search features tailored to your needs.
                    </li>
                </ul>
                    <h4 className="title-head">Why Choose Pinch of Salt?</h4>
                <ul>
                    <li>
                        <strong>Community:</strong> Join a vibrant community of food lovers to share ideas, tips, and culinary adventures.
                    </li>
                    <li>
                        <strong>Expertise:</strong> Benefit from expert tips and techniques to enhance your cooking skills and knowledge.
                    </li>
                    <li>
                        <strong>Innovation:</strong> Stay informed about food trends and sustainable practices to enrich your culinary journey.
                    </li>
                </ul>
                    <h4 className="title-head">Get Started Today</h4>
                <p>
                    Explore our diverse collection of recipes, create delicious meals, and share your culinary creations with friends and family. With Pinch of Salt, every dish is an opportunity to create lasting memories.
                </p>
                <p>
                    Join us in celebrating the art of cooking and the joy of sharing delicious food. Discover, create, and enjoy with Pinch of Salt where every recipe tells a story.
                </p>
                </div>
                <div>
                    <p className="ppp secondary-title">check our links down here</p>
                </div>
                <div className="footer" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                
                    <a className="aaa" href="https://github.com/sarakhaled95" target="_blank" rel="noopener noreferrer">
                        <FaSquareGithub size="md" style={{ color: 'black' }} />
                    </a>
                    <a className="aaa" href="https://www.linkedin.com/in/sara-khaled95/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size="md" style={{ color: 'black' }} />
                    </a>
                    <a className="aaa" href="https://x.com/Sarakhaled95se" target="_blank" rel="noopener noreferrer">
                        <FaSquareXTwitter size="md" style={{ color: 'black' }} />
                    </a>
                </div>
                </div>
        );
    };
}