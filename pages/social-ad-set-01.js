import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Media from '../styles/media-breackpoint';
// import { Zoom, Fade } from 'react-reveal';
import Aerow from '../public/images/arrow-002.png';

import DownloadICO from '../public/images/download-ico.png';

import Setimg01 from '../public/images/resources/set02/facebook.jpg';
import Setimg02 from '../public/images/resources/set02/Linkedin.jpg';
import Setimg03 from '../public/images/resources/set02/redit.jpg';
import Setimg04 from '../public/images/resources/set02/redit-v2.jpg';
import Setimg05 from '../public/images/resources/set02/Twitter.jpg';
import Setimg06 from '../public/images/resources/set02/youtube.jpg';
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

const SocialAdSet01 = (props) => {
  const { allCategories, setAllCategories } = props;

  //set categories for header
  useEffect(() => {
    setAllCategories(allCategories);
  }, [allCategories, setAllCategories]);
  useEffect(() => {
    window.scrollTo(0, 0);
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
      <FaqBG>
        <FaqTop>
          {/* <Fade cascade bottom delay={100} duration={1200}> */}
          <FAqTitle
            className="wow fadeInUp"
            data-wow-delay="0.1s"
            data-wow-duration="1.2s"
          >
            Social AD Set 01
          </FAqTitle>

          {/* </Fade> */}
        </FaqTop>
        <VideoMBX>
          <BlueBelt>
            <Link href="/resources" className="link01" prefetch={false}>
              Back
            </Link>
            <a
              href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/Social-ad01.zip"
              download
              className="link02"
              aria-label='Download Image'
            >
              Download Set
            </a>
          </BlueBelt>

          <ResourMBX>
            <DwnlMBX className="v3">
              <DwnlSbx01 className="v2">
                <Image src={Setimg01} alt="Download Icon" />
                <a href={Setimg01.src + '?force=true'} download={true} aria-label='Download Image'>
                  Facebook 851px X 315px <Image src={DownloadICO} alt="Download Icon" />
                </a>
              </DwnlSbx01>
              <DwnlSbx01 className="v2">
                <Image src={Setimg02} alt="Download Icon" />
                <a href={Setimg02.src + '?force=true'} download={true} aria-label='Download Image'>
                  Linkedin 1128px X 191px <Image src={DownloadICO} alt="Download Icon" />
                </a>
              </DwnlSbx01>

              <DwnlSbx01 className="v2">
                <Image src={Setimg05} alt="Download Icon" />
                <a href={Setimg05.src + '?force=true'} download={true} aria-label='Download Image'>
                  Twitter 1500px X 500px <Image src={DownloadICO} alt="Download Icon" />
                </a>
              </DwnlSbx01>
              <DwnlSbx01 className="v2">
                <Image src={Setimg06} alt="Download Icon" />
                <a href={Setimg06.src + '?force=true'} download={true} aria-label='Download Image'>
                  YouTube 2560px X 1440px <Image src={DownloadICO} alt="Download Icon" />
                </a>
              </DwnlSbx01>
              <DwnlSbx01 className="v2">
                <Image src={Setimg03} alt="Download Icon" />
                <a href={Setimg03.src + '?force=true'} download={true} aria-label='Download Image'>
                  Reddit 1920px X 384px <Image src={DownloadICO} alt="Download Icon" />
                </a>
              </DwnlSbx01>
              <DwnlSbx01 className="v2">
                <Image src={Setimg04} alt="Download Icon" />
                <a href={Setimg04.src + '?force=true'} download={true} aria-label='Download Image'>
                  Reddit 4850px X 206px <Image src={DownloadICO} alt="Download Icon" />
                </a>
              </DwnlSbx01>
            </DwnlMBX>
          </ResourMBX>

          <BlueBelt
            style={{ background: 'transparent', justifyContent: 'center' }}
          >
            <a
              href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/Social-ad01.zip"
              download
              className="link02"
              aria-label='Download Image'
            >
              Download Set
            </a>
          </BlueBelt>
        </VideoMBX>
      </FaqBG>
    </>
  );
};

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const DwnlMBX = styled(FlexDiv)`
  margin: 30px 0 30px 0;
  align-items: stretch;
  width: 100%;
  border-radius: 8px;
  background-color: ${(props) => props.theme.DownlBXBG};
  padding: 25px;
  -webkit-box-shadow: 0 11px 18px 1px rgba(65, 30, 114, 0.4);
  box-shadow: 0 11px 18px 1px rgba(65, 30, 114, 0.4);
  transition: all 600ms;
  position: relative;

  &.v2 {
    width: calc(50% - 15px);
    margin-right: 15px;
    align-items: flex-start;
  }
  &.v2:nth-child(3) {
    margin-right: 0;
    margin-left: 15px;
  }
  &.v3 {
    width: calc(100% - 30px);
    margin: 0 15px;
    align-items: flex-start;
  }

  ${Media.md2} {
    &.v2 {
      width: 100%;
      margin-right: 0;
      align-items: flex-start;
    }
    &.v2:nth-child(3) {
      margin-right: 0;
      margin-left: 0;
    }
  }

  ${Media.xs} {
    padding: 0;
  }
`;
const DwnlSbx01 = styled(FlexDiv)`
  padding: 16px;
  width: 25%;
  flex-direction: column;
  justify-content: flex-end;

  img {
    margin-bottom: 15px;
  }
  a {
    color: ${(props) => props.theme.TextWhite};
    display: inline-flex;
    img {
      margin-left: 6px;
    }
  }

  &.v2 {
    width: 100%;
    margin-right: 15px;
    align-items: center;
  }
  &.v3 {
    width: calc(50% - 15px);
    margin-right: 15px;
    align-items: center;
    justify-content: flex-end;
  }

  ${Media.md2} {
    width: 50%;
  }
`;

const FaqBG = styled.div`
  background: url('${(props) => props.theme.ResoBG}') no-repeat;
  background-repeat: no-repeat;
  background-position: 50% -50px;
  ${Media.md2} {
    padding: 0 20px;
  }
`;

const FaqTop = styled.div`
  padding-top: 145px;
  padding-bottom: 50px;
  text-align: center;
`;

const FAqTitle = styled.div`
  font-size: 81px;
  line-height: 81px;
  letter-spacing: -1px;
  font-weight: bold;
  margin: 0px 0px 35px;
  color: ${(props) => props.theme.TextWhite};
  ${Media.sm} {
    font-size: 50px;
    line-height: 55px;
  }
`;

const VideoMBX = styled.div`
  max-width: 1356px;
  margin: 0px auto 0 auto;
  padding: 0px 0px 90px;

  ${Media.lg} {
    max-width: 1150px;
  }
  ${Media.md} {
    max-width: 920px;
  }
`;

const BlueBelt = styled(FlexDiv)`
  width: 100%;
  min-height: 99px;
  justify-content: space-between;
  align-items: center;
  padding: 22px;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.GColor1LightW},
    ${(props) => props.theme.GColor2LightW}
  );

  .link01 {
    font-size: 20px;
    font-weight: 300;
    color: ${(props) => props.theme.TextMilkWhite};
    text-decoration: none;
    padding: 0 0 0 20px;
    background: url(${Aerow.src}) 1px 5px no-repeat;
    :hover {
      text-decoration: underline;
    }
  }

  .link02 {
    font-size: 20px;
    font-weight: 400;
    background-color: ${(props) => props.theme.TextMilkWhite};
    text-decoration: none;
    padding: 10px 32px;
    border-radius: 30px;
    color: ${(props) => props.theme.TextBlack};
    :hover {
      opacity: 0.8;
    }
  }

  ${Media.xs} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .link01 {
      margin-bottom: 8px;
    }
  }
`;
const ResourMBX = styled(FlexDiv)`
  padding: 55px 0 0 0;
  align-items: stretch;
`;

export default SocialAdSet01;
