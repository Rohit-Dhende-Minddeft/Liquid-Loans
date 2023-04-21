// import npm packages
import React, { useState } from 'react';

//import next js packages
import Image from 'next/image';


//import styles
import styled from 'styled-components';
import Media from '../styles/media-breackpoint';

//import media
import UpArrow from '../public/images/upArrow.png';
import UpArrowW from '../public/images/upArrow-w.png';
import BadgeImg from '../public/images/badge-01.png';
import Link from 'next/link';

const ScrollButton = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      // You now have access to `window`
      window?.scrollTo({
        top: 0,
        behavior: 'smooth',
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    }
  };
  if (typeof window !== 'undefined') {
    // You now have access to `window`
    window?.addEventListener('scroll', toggleVisible);
  }

  return (
    <>
      <BadgeLayer className={' ' + (visible ? 'fly' : '')}>
        <Link href="/how-it-works" prefetch={false}></Link>
      </BadgeLayer>
      <Button className={' ' + (visible ? 'fly' : '')} id="scroll-to-top" aria-label='Scroll to Top'>
        <Arrow onClick={scrollToTop}>
          <Image
            src={props.isDarkTheme ? UpArrow.src : UpArrowW}
            alt="arrow"
            width={UpArrow.width}
            height={UpArrow.height}
          />
        </Arrow>
      </Button>
    </>
  );
};

const Button = styled.div`
  position: fixed;
  width: 48px;
  height: 48px;
  right: -50px;
  bottom: 40px;
  font-size: 3rem;
  z-index: 111111;
  cursor: pointer;
  color: green;
  transition: all 600ms;
  visibility: hidden;
  opacity: 0;

  &.fly {
    visibility: visible;
    opacity: 1;
    right: 20px;
  }
`;
const Arrow = styled.div`
  img {
    width: 48px;
    height: 48px;
  }
`;

const BadgeLayer = styled.div`
  width: 186px;
  height: 136px;
  display: inline-block;
  position: fixed;
  left: -50px;
  bottom: 0px;
  z-index: 10000;
  background: url(${BadgeImg.src}) 50% 50% no-repeat;
  transition: all 600ms;
  visibility: hidden;
  opacity: 0;

  &.fly {
    visibility: visible;
    opacity: 1;
    left: 0px;
  }

  :hover {
    filter: brightness(1.2);
  }

  a {
    display: block;
    width: 186px;
    height: 136px;
  }

  ${Media.sm} {
   display:none;
  }

`;

export default ScrollButton;
