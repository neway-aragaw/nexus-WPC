import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './Homepage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="header-txt">
        <div className="image-container">
          <div className="high">
            {/* Add any additional content or components here */}
          </div>
          <img className="home-img" src="https://media.gettyimages.com/id/1001366642/photo/crowd-of-people-with-luggage-at-international-airport.jpg?s=612x612&w=gi&k=20&c=ZXDhTFJ0XINhs5dwl09SDu2G9q_OAHKyUpUfW5Uz1nw=" alt="Airport Assist" />
          <div className="image-overlay"></div>
        </div>
      </div>

      <div className="about-section">
        <p className='about'>ABOUT</p>
        <div className="about-content">
          <h3>Helping New PSA Trainees with Quick and Reliable Information</h3>
          <p>
            Our application is designed to provide comprehensive support to new PSA trainees, ensuring they have access to crucial information both during and after their training sessions. We focus on delivering accurate and up-to-date guidance to facilitate smooth operations and enhance passenger service experience.
          </p>
          <p>
            With a user-friendly interface and intuitive navigation, PSA trainees can quickly learn essential tasks and procedures, from customer interactions to operational protocols. Our goal is to empower trainees with the knowledge and skills needed to excel in their roles, contributing to efficient airport operations and exceptional customer service.
          </p>
          <p>
            Join us in revolutionizing the PSA training experience, making learning more accessible, effective, and enjoyable for all trainees.
          </p>
          <button className='learn_button' >Learn More</button>
        </div>
        <div className="h6-container">
          {/* You can add additional content or components here if needed */}
        </div>
        <img className="home-img1" src="https://www.stuttgart-airport.com/media/306637/str_prm_support_01.jpg?width=1200&slimmage=true" alt="PRM c" />
      </div>

      {/* Footer section */}
    </div>
  );
}

export default HomePage;
