import React from 'react';
import Section from 'components/common/section/section';
import Logo from 'images/svg/logo.svg';
import Telegram from 'images/svg/footer-telegram.svg';
import Youtube from 'images/svg/footer-youtube.svg';
import Facebook from 'images/svg/footer-facebook.svg';
import Instagram from 'images/svg/footer-instagram.svg';
import CopyRight from 'images/svg/footer-copyright.svg';
import * as s from './footer.module.scss';
const Footer = () => {
  return (
    <footer>
      <Section darkBackground={true} pt={32} pb={16} >
        <div className={`${s.footerWrapper}`}>
          <div className={`${s.mapBox}`}>
          <iframe
             title="Location"
            className={`${s.map}`}
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.1116552967246!2d30.511828315216917!3d50.43902087947373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cefbfd9de6bd%3A0xa7a14e04df77f9e6!2z0LLRg9C7LiDQkNC90YLQvtC90L7QstC40YfQsCwgMywg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1645013340155!5m2!1suk!2sua'
         
         
          // allowfullscreen
          // loading
        ></iframe>
        </div>
        <div>
          <Logo  className={`${s.logo}`}/>
        
        <ul className={ `${s.contactsList} list`}>
          <li className={ `${s.contactItem}`}>
             <a href="tel:+380983446742" className={ 'link'}>
                    + 38 (098) 344 67 42 
                </a>
          </li>
          <li className={ `${s.contactItem}`}>
             <a href="mailto:benefitstudio98@gmal.com" className={'link'}>
                    benefitstudio98@gmal.com
                </a>
          </li>
          <li className={ `${s.contactItem}`}>
            <address className={ 'link'}>
              г. Киев, ул. Антоновича 3, офис 3
            </address>
          </li>
        </ul>
        <div className={`${s.mediaWrapper}`}>
           <ul className={ `${s.mediaList} list`}>
          <li><a href="">
          <Telegram/>
          </a></li>
          <li><a href="">
          <Youtube/>
          </a></li>
          <li><a href="">
          <Facebook/>
          </a></li>
          <li><a href="">
          <Instagram/>
          </a></li>
        </ul>
       </div>
       </div>
       </div>
        
      
       
        <p className={`${s.copyRight}`}>
          <span className={`${s.copyRightSign}`}><CopyRight /></span>2022</p>
      </Section>
    </footer>
  );
};

export default Footer;
