import React from 'react';
import './ContactBanner.scss';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

interface ContactBannerProps {
  title: string;            // Ex: "Nous serions ravis\nde vous entendre"
  paragraph: string;        // Texte libre
  showSocialIcons?: boolean;
}

const ContactBanner: React.FC<ContactBannerProps> = ({
  title,
  paragraph,
  showSocialIcons = false,
}) => {
  return (
    <section className="contact-banner">
      <div className="contact-banner__left">
        <h1>
          {title.split('\n').map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </h1>

        {showSocialIcons && (
          <div className="contact-banner__socials">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        )}
      </div>

      <div className="contact-banner__right">
        <p>{paragraph}</p>
      </div>
    </section>
  );
};

export default ContactBanner;
