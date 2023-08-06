import React from 'react';
import {ReactComponent as GITHUB} from '../resources/icons/github.svg'
import {ReactComponent as INSTAGRAM} from '../resources/icons/instagram.svg'
import {ReactComponent as TWITTER} from '../resources/icons/twitter.svg'
import {ReactComponent as LINKEDIN} from '../resources/icons/linkedin.svg'
import 'bulma/css/bulma.min.css';

const Footer = () => {
  const socialLinks = [
    {
      link: 'https://github.com/spzweifel',
      icon: <GITHUB />,
    },
    {
      link: 'https://www.instagram.com/sean.zweifel/',
      icon: <INSTAGRAM />,
    },
    {
      link: 'https://twitter.com/',
      icon: <TWITTER />,
    },
    {
      link: 'https://www.linkedin.com/in/sean-zweifel-161768144/',
      icon: <LINKEDIN />,
    },
  ];

  return (
    <div>
      {socialLinks.map((socialLink, index) => (
        <a key={index} href={socialLink.link}>
          {socialLink.icon}
        </a>
      ))}
    </div>
  );
};

export default Footer;