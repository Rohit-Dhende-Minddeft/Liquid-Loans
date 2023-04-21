import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Gs from '../styles/theme.config';
// import { Zoom, Fade } from 'react-reveal';
import Link from 'next/link';
import Media from '../styles/media-breackpoint';
import Image from 'next/image';
import Head from 'next/head';

import MobileMockup2 from '../public/images/mobile-mockup-2.png';
import Pipe from '../public/images/contact-pipe.png';
import SpriteIMG from '../public/images/sprite.png';

//import api
import { getCategories } from './api/blogs';

export const getServerSideProps = async () => {
  const allCategories = await getCategories();

  return {
    props: { allCategories },
  };
};

const Connect = (props) => {
  const { allCategories, setAllCategories } = props;

  //set categories for header
  useEffect(() => {
    setAllCategories(allCategories);
  }, [allCategories, setAllCategories]);

  useEffect(() => {
    window.scrollTo(0, 10);
  }, []);

  //get current url for canonical tag and og:url
  const [location, setLocation] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLocation(window.location.href);
    }
  }, [location]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <link rel="apple-touch-icon" href="./images/favicon.png" />
        <title>Liquid Loans – 0% DeFi lending on PulseChain</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2.0"
        />
        <meta
          name="keywords"
          content="Liquid Loans. 0% Interest Free Borrowing built for PulseChain. #neverselling "
        />
        <meta
          name="description"
          content="✓ 0% Interest-Free ✓ Algorithmic Stablecoin ✓ Immutable ✓ Governance-Free ✓ No Admin Keys"
        />
        <meta
          name="google-site-verification"
          content="tFM5T7kMGqGaqNMe8Cs6EvJ8PZrT45_9bncFeILmOKA"
        />
        <link rel="canonical" href={location} />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="3 days" />

        <meta property="og:url" content={location} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Liquid Loans. 0% Interest Free Borrowing built for PulseChain. #neverselling"
        />
        <meta
          property="og:description"
          content="✓ 0% Interest-Free ✓ Algorithmic Stablecoin ✓ Immutable ✓ Governance-Free ✓ No Admin Keys"
        />
        <meta
          property="og:image"
          content=" https://liquidloans.io/images/liquidloans.jpg"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Liquid Loans. 0% Interest Free Borrowing built for PulseChain. #neverselling"
        />
        <meta name="twitter:url" content={location} />
        <meta
          name="twitter:description"
          content="✓ 0% Interest-Free ✓ Algorithmic Stablecoin ✓ Immutable ✓ Governance-Free ✓ No Admin Keys"
        />
        <meta
          name="twitter:image"
          content="https://liquidloans.io/images/liquidloans.jpg"
        />
      </Head>
      <ContactSection>
        <Gs.Container>
          {/* <Fade cascade bottom   duration={1200}> 
          <ContactTitle>Contact Us</ContactTitle>
         
          <ContactDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ContactDesc>
          </Fade> */}
          <ContactOuter>
            <ContactRow> 
              <Link
                target="_blank"
                href={{ pathname: 'https://t.me/liquidloans' }}
                prefetch={false}
              >
                <BOxRow1
                  className="ccolor1 wow fadeInLeft"
                  data-wow-delay="0.6s"
                  data-wow-duration="1.2s"
                >
                  <BoxInner>
                    <div className="socialimg si1"></div>
                    <BOXText>Telegram</BOXText>
                  </BoxInner>
                </BOxRow1>
              </Link> 
              <Link
                target="_blank"
                href={{ pathname: 'https://twitter.com/liquidloansio/' }}
                prefetch={false}
              >
                <BOxRow1
                  className="ccolor2 wow fadeInRight"
                  data-wow-delay="0.6s"
                  data-wow-duration="1.2s"
                >
                  <BoxInner>
                    <div className="socialimg si3"></div>
                    <BOXText>Twitter</BOXText>
                  </BoxInner>
                </BOxRow1>
              </Link>
              {/* </Fade> */}
            </ContactRow>
            <ContactRow className="second">
              {/* <Fade left delay={600} duration={1200}> */}
              <Link
                target="_blank"
                href={{
                  pathname:
                    'https://www.youtube.com/channel/UCN6FyFBHf4s4Nxibz3brE8g',
                }}
                prefetch={false}
              >
                <BOxRow1
                  className="ccolor3 wow fadeInLeft"
                  data-wow-delay="0.6s"
                  data-wow-duration="1.2s"
                >
                  <BoxInner>
                    <div className="socialimg si5"></div>
                    <BOXText>YouTube</BOXText>
                  </BoxInner>
                </BOxRow1>
              </Link>
              {/* </Fade> */}
              {/* <Fade right delay={700} duration={1200}> */}
              <Link
                target="_blank"
                href={{ pathname: 'https://weighinwithwallrus.com/spotify' }}
                prefetch={false}
              >
                <BOxRow1
                  className="ccolor4 wow fadeInRight"
                  data-wow-delay="0.6s"
                  data-wow-duration="1.2s"
                >
                  <BoxInner>
                    <div className="socialimg si2"></div>
                    <BOXText>Spotify</BOXText>
                  </BoxInner>
                </BOxRow1>
              </Link>
              {/* </Fade> */}
            </ContactRow>
            <ContactRow>
              {/* <Fade left delay={800} duration={1200}> */}
              <Link
                target="_blank"
                href={{ pathname: 'https://liquidloans.medium.com/' }}
                prefetch={false}
              >
                <BOxRow1
                  className="ccolor5 wow fadeInLeft"
                  data-wow-delay="0.6s"
                  data-wow-duration="1.2s"
                >
                  <BoxInner>
                    <div className="socialimg si4"></div>
                    <BOXText>Medium</BOXText>
                  </BoxInner>
                </BOxRow1>
              </Link>
              {/* </Fade> */}
              {/* <Fade right delay={800} duration={1200}> */}
              <Link
                target="_blank"
                href={{ pathname: 'https://www.reddit.com/r/LiquidLoans/' }}
                prefetch={false}
              >
                <BOxRow1
                  className="ccolor6 wow fadeInRight"
                  data-wow-delay="0.6s"
                  data-wow-duration="1.2s"
                >
                  <BoxInner>
                    <div className="socialimg si6"></div>
                    <BOXText>Reddit</BOXText>
                  </BoxInner>
                </BOxRow1>
              </Link>
              {/* </Fade> */}
            </ContactRow>
            {/* <Fade cascade delay={300} duration={1600}> */}
            <Image
              src={MobileMockup2}
              alt=""
              className="Cmockup wow fadeIn"
              data-wow-delay="0.6s"
              data-wow-duration="1.2s"
            />
            {/* </Fade> */}
          </ContactOuter>
        </Gs.Container>
      </ContactSection>
    </>
  );
};

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const ContactSection = styled.div`
  background: url('${(props) => props.theme.CONbg}') no-repeat;
  background-size: cover;
  padding: 170px 0px;
`;

const ContactTitle = styled.div`
  font-size: 64px;
  font-weight: bold;
  line-height: normal;
  margin: 0px;
  color: ${(props) => props.theme.TextWhite};
  text-align: center;
`;

const ContactDesc = styled.div`
  font-size: 20px;
  font-weight: 300;
  line-height: 40px;
  margin: 0px 0px 100px;
  color: ${(props) => props.theme.TextWhite};
  text-align: center;
`;

const ContactOuter = styled.div`
  position: relative;

  @media (max-width: 1290px) and (min-width: 767px) {
    transform: scale(0.85);
  }

  .Cmockup {
    position: absolute;
    top: 0px;
    left: calc(50% - 288px);
    ${Media.sm} {
      max-width: 220px;
      left: calc(50% - 110px);
      top: 150px;
    }
    ${Media.xs} {
      display: none;
    }
  }
`;

const ContactRow = styled(FlexDiv)`
  justify-content: space-between;
  max-width: 776px;
  margin: 0 auto;
  ${Media.xs} {
    justify-content: center;
  }
  &.second {
    max-width: 1150px;
  }
`;

const BOxRow1 = styled(FlexDiv)`
  width: 156px;
  height: 138px;
  position: relative;
  margin-bottom: 40px;
  transition: all 300ms;
  :hover {
    transform: scale(1.1);
  }
  :after {
    content: '';
    background: url(${Pipe.src}) no-repeat;
    width: 1px;
    height: 200px;
    position: absolute;
    top: calc(50% - 100px);
    right: 0px;
  }
  &.ccolor1 {
    background-color: ${(props) => props.theme.CColor1};
    box-shadow: -5px 0px 10px 0px ${(props) => props.theme.CBshadow} inset;
  }
  &.ccolor2 {
    background-color: ${(props) => props.theme.CColor2};
    box-shadow: 5px 0px 10px 0px ${(props) => props.theme.CBshadow} inset;
    :after {
      left: 0px;
      right: auto;
    }
  }
  &.ccolor3 {
    background-color: ${(props) => props.theme.CColor3};
    box-shadow: -5px 0px 10px 0px ${(props) => props.theme.CBshadow} inset;
  }
  &.ccolor4 {
    background-color: ${(props) => props.theme.CColor4};
    box-shadow: -5px 0px 10px 0px ${(props) => props.theme.CBshadow} inset;
    :after {
      left: 0px;
      right: auto;
    }
  }
  &.ccolor5 {
    background-color: ${(props) => props.theme.CColor5};
    box-shadow: -5px 0px 10px 0px ${(props) => props.theme.CBshadow} inset;
  }
  &.ccolor6 {
    background-color: ${(props) => props.theme.CColor6};
    box-shadow: -5px 0px 10px 0px ${(props) => props.theme.CBshadow} inset;
    :after {
      left: 0px;
      right: auto;
    }
  }
`;

const BoxInner = styled.div`
  .socialimg {
    width: 52px;
    height: 52px;
    background: url(${SpriteIMG.src}) no-repeat;
    margin: 0 auto 15px;
    &.si1 {
      background-position: -6px -7px;
    }
    &.si2 {
      background-position: -426px -7px;
    }
    &.si3 {
      background-position: -141px -7px;
    }
    &.si4 {
      background-position: -213px -7px;
    }
    &.si5 {
      background-position: -283px -7px;
    }
    &.si6 {
      background-position: -360px -7px;
    }
  }
`;

const BOXText = styled.div`
  font-size: 17px;
  font-weight: 300;
  margin: 0px;
  color: #fff;
`;

export default Connect;
