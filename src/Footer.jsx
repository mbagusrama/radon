import telephoneLogo from './img/telephone.png';
import emailLogo from './img/email.png';
import './Footer.css';

function Footer() {
  return(
    <section className="Footer">
      <footer>
        <div className="logo-container">
          <img className='telephone-logo' src={telephoneLogo} alt="telephone logo" />
          <p className='telephone-number'>+62 888 9999 0000</p>
        </div>
        <div className="logo-container">
          <img className='email-logo' src={emailLogo} alt="email logo" />
          <p className='email-address'>Lorem.ipsum@gmail.com</p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;