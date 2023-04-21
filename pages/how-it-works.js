import React, {  useEffect, useState } from 'react';
import styled from 'styled-components';
import Gs from '../styles/theme.config';
import 'react-tabs/style/react-tabs.css';
import Media from '../styles/media-breackpoint';
// import { Zoom, Fade } from 'react-reveal';
import Link from 'next/link';
import 'react-multi-carousel/lib/styles.css';

import HowWave from '../public/images/how-wave.png';
import Graph2 from '../public/images/graph-2.png';
import Graph3 from '../public/images/graph-2-sm.png';
import InfoBook from '../public/images/info-book.png';
import BorrowArrow from '../public/images/borrrow-arrow.png';
import Image from 'next/image';

//import api
import { getCategories } from './api/blogs';
import Head from 'next/head';

export const getServerSideProps = async () => {
  const allCategories = await getCategories();

  return {
    props: { allCategories },
  };
};

const Video = (props) => {
  const { allCategories, setAllCategories } = props;

  //set categories for header
  useEffect(() => {
    setAllCategories(allCategories);
  }, [allCategories, setAllCategories]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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
      <VideoBG>
        <HowWaves>
          <Gs.Container>
            {/* <Fade delay={50} duration={1200}> */}
            <Section4
              className="wow fadeIn"
              data-wow-delay="0.5s"
              data-wow-duration="1.2s"
            >
              <BlueLayer>
                <BlueLayer2>
                  <div className="youtube-embed">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com//embed/9cpa1v8AC68"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer;  clipboard-write; encrypted-media; gyroscope;"
                      allowFullScreen
                    ></iframe>
                  </div>
                </BlueLayer2>
              </BlueLayer>
            </Section4>
            {/* </Fade> */}
          </Gs.Container>
        </HowWaves>
        <Section13>
          <EcoTitle>
            The Ecosystem
            <HeadDesc>
              Here is a detailed break-down of how the ecosystem works.
            </HeadDesc>
          </EcoTitle>
          <Image src={Graph2} className="LG-only" alt="" />
          <Image src={Graph3} className="SM-only" alt="" />
        </Section13>
        <Section14>
          <EcoTitle>The Whitepaper</EcoTitle>
          <Image src={InfoBook} alt="" />
          <ButtonList>
            <Link href="/whitepaper" className="bn-btn" prefetch={false}>
              <Image src={BorrowArrow} alt="" /> Read The Whitepaper
            </Link>
          </ButtonList>
        </Section14>
        <HowWaves>
          <Gs.Container>
            <EcoTitle style={{ textAlign: 'center' }}>
              FAQs
              <HeadDesc>
                CEO Cristian and COO Dave answer 35 questions about the
                protocol.
              </HeadDesc>
            </EcoTitle>
            {/* <Fade delay={50} duration={1200}> */}
            <Section4
              style={{ paddingTop: '0' }}
              className="wow fadeIn"
              data-wow-delay="0.5s"
              data-wow-duration="1.2s"
            >
              <BlueLayer>
                <BlueLayer2>
                  <div className="youtube-embed">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com//embed/f_fwKGPgCJo"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </BlueLayer2>
              </BlueLayer>
            </Section4>
            {/* </Fade> */}
            <Section13 className="v3">
              <p className="TelLink">
                Got Questions? Join Over 9,500 Members In Our Telegram – &nbsp;
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/liquidloans"
                >
                  Ask Them Here
                </a>
              </p>
            </Section13>
          </Gs.Container>
        </HowWaves>
      </VideoBG>
    </>
  );
};

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const VideoBG = styled.div`
  background-image: url('${(props) => props.theme.BodyBg}');
  background-repeat: no-repeat;
  background-position: center top;
`;
const HeadDesc = styled.div`
  font-size: 24px;
  line-height: 40px;
  font-weight: normal;
  color: ${(props) => props.theme.TextWhite};
  margin: 0px auto 55px;
  max-width: 1160px;

  b {
    font-weight: 600;
  }

  i {
    font-style: normal;
    text-decoration: underline;
  }
  ${Media.xs} {
    font-size: 19px;
    line-height: 30px;
  }
`;

const Section4 = styled.div`
  padding: 164px 0px 100px 0;
  @media (max-width: 1300px) {
    padding: 118px 0px 100px;
  }

  ${Media.md2} {
    padding: 100px 0px 90px;
  }
  ${Media.sm} {
    padding: 100px 0px 50px;
  }
`;

const BlueLayer = styled.div`
  max-width: 1058px;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.GColor1Light},
    ${(props) => props.theme.GColor2Light}
  );
  position: relative;
  transform: scaleY(0.9);

  @media (max-width: 1300px) {
    max-width: 900px;
  }
`;

const BlueLayer2 = styled.div`
  justify-content: space-between;
  max-width: 962px;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.GColor1},
    ${(props) => props.theme.GColor2}
  );
  padding: 20px;
  box-shadow: 0px 0px 40px 0px ${(props) => props.theme.BG1Shadow};
  transform: scaleY(1.1);
  ${Media.lg} {
    max-width: 900px;
  }
  ${Media.sm} {
    padding: 10px;
  }

  @media (max-width: 1300px) {
    max-width: 800px;
  }
`;

const HowWaves = styled.div`
  background: url(${HowWave.src}) no-repeat;
  background-size: contain;
  background-position: center;
`;

const Section13 = styled.div`
  margin: 100px 0px;
  text-align: center;
  .SM-only {
    display: none;
  }
  img {
    ${Media.lg} {
      padding: 0px 15px;
    }
  }
  ${Media.sm} {
    margin: 50px 0px;
  }

  .SM-only {
    ${Media.sm} {
      display: block;
      margin: 0 auto;
    }
  }
  .LG-only {
    ${Media.sm} {
      display: none;
    }
  }

  &.v3 {
    margin-top: 0;
  }

  .TelLink {
    font-size: 20px;
    color: ${(props) => props.theme.TextWhite};
    a {
      text-decoration: underline;
      color: ${(props) => props.theme.DefitxtColor01};
      :hover {
        color: ${(props) => props.theme.TextWhite};
      }
    }
  }
`;

const Section14 = styled.div`
  margin: 200px 0px 150px;
  text-align: center;
  img {
    ${Media.lg} {
      padding: 0px 15px;
    }
  }
  ${Media.sm} {
    margin: 100px 0px 50px;
  }
`;

const EcoTitle = styled.div`
  font-size: 81px;
  font-weight: bold;
  color: ${(props) => props.theme.TextWhite};
  margin: 0px 0px 90px;
  ${Media.lg} {
    font-size: 60px;
  }
  ${Media.md} {
    font-size: 45px;
  }
  ${Media.sm} {
    font-size: 36px;
    margin: 0px 0px 40px;
  }
`;

const ButtonList = styled(FlexDiv)`
  margin-top: 55px;
  .wv-btn {
    padding: 17px 100px;
    color: ${(props) => props.theme.TextWhite};
    text-transform: uppercase;
    margin: 0px 10px;
    font-size: 20px;
    line-height: 20px;
    border: 1px solid ${(props) => props.theme.TransBorder};
    border-radius: 30px;
    background-color: ${(props) => props.theme.TransBg};
    display: flex;
    align-items: center;
    justify-content: center;
    ${Media.sm} {
      margin-bottom: 10px;
    }
    ${Media.xs} {
      padding: 17px 30px;
      width: 100%;
    }
    :hover {
      filter: brightness(0.7);
    }
    svg {
      margin-right: 4px;
    }
  }
  .bn-btn {
    padding: 17px 80px;
    color: #fff;
    text-transform: uppercase;
    margin: 0px 10px;
    font-size: 20px;
    line-height: 20px;
    border-radius: 30px;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.GColor1},
      ${(props) => props.theme.GColor2}
    );
    display: flex;
    align-items: center;
    justify-content: center;
    ${Media.xs} {
      padding: 17px 30px;
      width: 100%;
      font-size: 18px;
    }
    :hover {
      filter: brightness(1.3);
    }
    img {
      margin-right: 10px;
    }
  }
`;

export default Video;
