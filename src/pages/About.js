import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div className="container my-4 ml-4">
                <div className="row">
                <div className="col mx-3">
                    <h1 className="title-italic">Welcome to Pinch of Salt</h1>
                <p>
                    Pinch of Salt is your ultimate culinary companion, dedicated to enriching your cooking experience with a diverse array of recipes, culinary insights, and inspirations.
                    </p>
                    <h2 className="title-head">Our Mission</h2>
                <p>
                    At Pinch of Salt, we are passionate about sharing our love for food and empowering food enthusiasts of all levels. Whether you're a seasoned chef or just starting out, our goal is to provide you with quality recipes that inspire and delight.
                </p>
                    <h2 className="title-head">What We Offer</h2>
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
                    <h2 className="title-head">Why Choose Pinch of Salt?</h2>
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
                    <h2 className="title-head">Get Started Today</h2>
                <p>
                    Explore our diverse collection of recipes, create delicious meals, and share your culinary creations with friends and family. With Pinch of Salt, every dish is an opportunity to create lasting memories.
                </p>
                <p>
                    Join us in celebrating the art of cooking and the joy of sharing delicious food. Discover, create, and enjoy with Pinch of Salt where every recipe tells a story.
                </p>
                </div>
                <div className="col mx-3">
                
                    </div>
                </div>
            </div>
        );
    };
}