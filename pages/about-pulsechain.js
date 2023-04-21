import React, {  useEffect, useState } from 'react';
import styled from 'styled-components';
import Gs from '../styles/theme.config';

//import next js packages
import Head from 'next/head';
import Image from 'next/image';

import Apright from '../public/images/ap-right.png';
import Waves from '../public/images/waves.png';
import Man from '../public/images/man.png';
import Logo1 from '../public/images/logo-1.png';
import Logo2 from '../public/images/logo-2.png';
import Logo3 from '../public/images/logo-3.png';
import Logo4 from '../public/images/logo-4.png';
import Logo5 from '../public/images/logo-5.png';
// import { Zoom, Fade } from 'react-reveal';
import Media from '../styles/media-breackpoint';

//import api
import { getCategories } from './api/blogs';


export const getServerSideProps = async () => {
  const allCategories = await getCategories();

  return {
    props: { allCategories },
  };
};
const AboutPulse = (props) => {
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
      <ApBG>
        <Gs.Container>
          <Section9>
            <div className="W60">
              {/* <Fade cascade bottom delay={50} duration={600}> */}

              <APtitle
                className="wow fadeInUp"
                data-wow-delay="0.5s"
                data-wow-duration="0.6s"
              >
                About PulseChain
              </APtitle>
              <APdesc
                className="wow fadeInUp"
                data-wow-delay="0.5s"
                data-wow-duration="0.6s"
              >
                PulseChain is an energy-efficient, cheaper, faster, fee-burning
                hard-fork of the legacy Ethereum blockchain. With delegated
                Proof-of-Stake validators, shorter 3-second blocks, no mining,
                and no inflation, its launch will feature the world’s largest
                airdrop in cryptocurrency history.
              </APdesc>
              <Image
                src={Apright}
                alt=""
                className="wow fadeInUp"
                data-wow-delay="0.5s"
                data-wow-duration="0.6s"
              />
              {/* </Fade> */}
            </div>
          </Section9>
        </Gs.Container>
        <Section10>
          {/* <Fade cascade bottom delay={100} duration={1100}> */}
          <LeaderText
            className="wow fadeInUp"
            data-wow-delay="0.5s"
            data-wow-duration="0.6s"
          >
            About Richard Heart
          </LeaderText>
          <div
            className="person-img wow fadeInUp"
            data-wow-delay="0.5s"
            data-wow-duration="0.6s"
          >
            <Image src={Man} alt="" />
          </div>
          <Ctext className="wow fadeInUp" data-wow-delay="0.5s">
            <p>
              The creator of PulseChain is Richard Heart, a serial entrepreneur,
              author, influencer, and philanthropist.
            </p>

            <p>
              Heart is also the founder of Hex, the world’s first decentralized
              high-interest blockchain certificate of deposit, and the author of
              SciVive, a personal development book.
            </p>
            <p>
              {' '}
              In 2021, Heart gained global recognition for raising more than US
              $27 million for medical research for the SENS Foundation, in less
              than 21 days.
            </p>
            <p>
              He is a renowned keynote speaker and is often seen on various talk
              shows, podcasts, and video interviews sharing his expertise on the
              topics of cryptocurrency and blockchain, entrepreneurship,
              marketing, and finance.
            </p>
            <p>
              Richard Heart has been positively featured in many media channels
              and publications including...
            </p>
          </Ctext>
          {/* </Fade> */}
        </Section10>
        <Gs.Container>
          <Section11>
            <LogoSection>
              {/* <Zoom cascade delay={100} duration={1100}> */}
              <div
                className="Logo-list wow fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1.1s"
              >
                <Image src={Logo1} alt="" />
              </div>
              <div
                className="Logo-list wow fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1.1s"
              >
                <Image src={Logo2} alt="" />
              </div>
              <div
                className="Logo-lis wow fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1.1s"
              >
                <Image src={Logo3} alt="" />
              </div>
              <div
                className="Logo-list wow fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1.1s"
              >
                <Image src={Logo4} alt="" />
              </div>
              <div
                className="Logo-list wow fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1.1s"
              >
                <Image src={Logo5} alt="" />
              </div>
              {/* </Zoom> */}
            </LogoSection>
            <p className="many-more">and many others.</p>
          </Section11>
        </Gs.Container>
      </ApBG>
    </>
  );
};

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const ApBG = styled.div`
  background: url('${(props) => props.theme.AbtPlBg}') no-repeat;
  background-position: center top;
`;

const Section9 = styled(FlexDiv)`
  padding: 145px 0px 100px;
  .W60 {
    width: 100%;
    max-width: 878px;
    margin: 0 auto;
    text-align: center;
    img {
      ${Media.sm} {
        max-width: 50%;
      }
    }
  }
  ${Media.md2} {
    flex-wrap: wrap-reverse;
    padding-top: 150px;
    .W60,
    .W40 {
      width: 100%;
      text-align: center;
    }
  }
  ${Media.sm} {
    padding: 150px 0px 50px;
  }
`;

const APtitle = styled.div`
  font-size: 81px;
  line-height: 81px;
  letter-spacing: -1px;
  font-weight: bold;
  margin: 0px 0px 40px;
  color: ${(props) => props.theme.TextWhite};
  text-align: center;
  ${Media.sm} {
    font-size: 50px;
    line-height: 55px;
  }
`;

const APdesc = styled.div`
  font-size: 24px;
  line-height: 40px;
  font-weight: normal;
  color: ${(props) => props.theme.TextWhite};
  margin: 0px auto 55px;
  ${Media.sm} {
    font-size: 19px;
    line-height: 30px;
  }
`;

const Section10 = styled.div`
  background: url(${Waves.src}) no-repeat;
  background-position: center 160px;
  .person-img {
    padding: 80px 0px;
    text-align: center;
    ${Media.sm} {
      padding: 10px 0px 40px;
    }
  }
`;

const Ctext = styled.div`
  p {
    font-size: 24px;
    font-weight: 300;
    color: ${(props) => props.theme.TextWhite};
    line-height: 32px;
    max-width: 1070px;
    margin: 0 auto 30px auto;
    text-align: center;
    span {
      color: ${(props) => props.theme.Aptext};
    }
    &.mb-100 {
      margin-bottom: 100px;
    }
    ${Media.sm} {
      font-size: 19px;
      line-height: 30px;
      padding: 0 15px;
    }
  }
`;

const Section11 = styled.div`
  padding: 70px 0px 150px;
  .many-more {
    font-size: 16px;
    font-weight: 300;
    text-align: right;
    color: ${(props) => props.theme.MMcolor};
    margin: 25px 0px 0px;
    padding-right: 75px;
  }
`;

const LogoSection = styled(FlexDiv)`
  .Logo-list {
    width: calc(20% - 30px);
    margin: 0px auto 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
      filter: brightness(${(props) => props.theme.ImgFilter});
    }
    ${Media.md2} {
      width: calc(33.33% - 30px);
      margin: 0 0 30px 0;
      &:nth-child(03):after {
        display: none;
      }
    }
    ${Media.sm} {
      width: calc(50% - 15px);
      padding: 15px;
      &:nth-child(03):after {
        display: block;
      }
      &:nth-child(02):after,
      &:nth-child(04):after {
        display: none;
      }
    }
    :after {
      content: '';
      width: 1px;
      height: 100px;
      background-color: ${(props) => props.theme.Logoborder};
      position: absolute;
      right: -15px;
      ${Media.sm} {
        right: 0;
      }
    }
    :last-child {
      :after {
        display: none;
      }
    }
  }
`;

const LeaderText = styled.div`
  font-size: 81px;
  line-height: 81px;
  font-weight: bold;
  color: ${(props) => props.theme.TextWhite};
  margin: 0px auto 30px auto;
  max-width: 800px;
  text-align: center;
  ${Media.sm} {
    font-size: 34px;
    line-height: 40px;
  }
`;

export default AboutPulse;
