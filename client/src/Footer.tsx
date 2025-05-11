import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Stay updated with MediScan's latest features and health tips.
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button className='subscribe-button'>Subscribe</button>
          </form>
        </div>
      </section>

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h3>About MediScan</h3>
            <Link to='/how-it-works'>How it Works</Link>
            <Link to='/ai-explained'>AI Explained</Link>
            <Link to='/careers'>Careers</Link>
            <Link to='/privacy'>Privacy Policy</Link>
            <Link to='/terms'>Terms of Use</Link>
          </div>
          <div className='footer-link-items'>
            <h3>Support</h3>
            <Link to='/contact'>Contact</Link>
            <Link to='/faq'>FAQs</Link>
            <Link to='/upload-guide'>Uploading Reports</Link>
            <Link to='/security'>Security</Link>
          </div>
        </div>

        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h3>Resources</h3>
            <Link to='/blog'>Health Blog</Link>
            <Link to='/guides'>Diagnosis Guides</Link>
            <Link to='/community'>Community Stories</Link>
            <Link to='/partners'>Our Partners</Link>
          </div>
          <div className='footer-link-items'>
            <h3>Follow Us</h3>
            <Link to='/'>Instagram</Link>
            <Link to='/'>LinkedIn</Link>
            <Link to='/'>YouTube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <h2 className='social-logo'>
              MediScan AI
            </h2>
          </div>
          <small className='website-rights'>MediScan AI © 2025</small>
          <div className='social-icons'>
            <Link className='social-icon-link facebook' to='/' aria-label='Facebook'>
              <i className='fab fa-facebook-f' />
            </Link>
            <Link className='social-icon-link instagram' to='/' aria-label='Instagram'>
              <i className='fab fa-instagram' />
            </Link>
            <Link className='social-icon-link youtube' to='/' aria-label='YouTube'>
              <i className='fab fa-youtube' />
            </Link>
            <Link className='social-icon-link twitter' to='/' aria-label='Twitter'>
              <i className='fab fa-twitter' />
            </Link>
            <Link className='social-icon-link linkedin' to='/' aria-label='LinkedIn'>
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
