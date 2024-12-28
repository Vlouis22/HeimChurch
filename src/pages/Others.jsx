import React from 'react';
import Footer from '../components/Footer';

export default function Others() {
  return (
    <>
    <div className='maximum-height'>
      <div className="others--ministry--container">
        <div className="header-text blue-text bold">
          Other Groups/Ministries at HEIM Church
        </div>

        <div className="others-introduction">
          <h3 className="others-introduction-title">Find Your Community at HEIM Church</h3>
          <p className="others-introduction-text">
            At HEIM Church, we offer a wide variety of ministries and groups designed to welcome everyone. 
            No matter your stage in life or the skills you bring, there’s a place for you here. These groups 
            are opportunities to build friendships, grow in faith, and make a difference. Whether you’re seeking 
            support, meaningful connections, or ways to serve, you’ll find something just right for you. 
            We invite you to join us and be a part of the vibrant HEIM Church community.
          </p>
        </div>

        <div className="faq-section">
          <div className="faq-title bold montserrat">Frequently Asked Questions</div>
          <div className="faq-container">
            <div className="faq-item">
              <p className="faq-question">
                <b>1. What groups are available besides Youth, Women's, and Kids?</b>
              </p>
              <p className="faq-answer">
                In addition to these groups, we also have Men's Ministry, the Tech and Media Team, 
                the Musicians' Group, and the Worship Team.
              </p>
            </div>
            <div className="faq-item">
              <p className="faq-question">
                <b>2. Can I join more than one group?</b>
              </p>
              <p className="faq-answer">
                Yes, if you have multiple talents or interests, you're welcome to join more than one group.
              </p>
            </div>
            <div className="faq-item">
              <p className="faq-question">
                <b>3. Can I join a group if I’m not baptized?</b>
              </p>
              <p className="faq-answer">
                While we encourage everyone to consider baptism, it is not a requirement to join a group. 
                However, there may be some limitations on your involvement in certain activities if you are not baptized. 
                If you’re interested in learning more about baptism, please visit our <a href="/Baptizing">baptism page</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}