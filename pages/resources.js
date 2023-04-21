import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Media from '../styles/media-breackpoint';
// import { Zoom, Fade } from 'react-reveal';
import FAqplus1 from '../public/images/faq-plus1.png';
import FAqplus2 from '../public/images/faq-plus2.png';
import Aerow from '../public/images/arrow-001.png';

import SideIMG01 from '../public/images/s-img-01.jpg';
import SideIMG02 from '../public/images/s-img-02.jpg';
import SideIMG03 from '../public/images/s-img-03.jpg';
import SideIMG04 from '../public/images/s-img-04.jpg';
import SideIMG05 from '../public/images/s-img-05.jpg';
import ADMIMG01 from '../public/images/ad-img01.jpg';
import ADMIMG02 from '../public/images/ad-img02.jpg';
import ADMIMG03 from '../public/images/ad-img03.jpg';
import ADMIMG04 from '../public/images/ad-img04.png';
import ADMIMG05 from '../public/images/ad-img05.jpg';
import ADMIMG06 from '../public/images/resources/set04/add03.gif';

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

const Resources = (props) => {
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
            Resources
          </FAqTitle>
          <FAqDesc
            className="wow fadeInUp"
            data-wow-delay="0.1s"
            data-wow-duration="1.2s"
          >
            On this page you will find a collection of downloadable and
            shareable graphics and documents which you can use to introduce your
            family, friends and network to Liquid Loans. The entire community is
            grateful to you for your support and contribution.
          </FAqDesc>
          {/* </Fade> */}
        </FaqTop>
        <VideoMBX>
          <BlueBelt>
            {/* <a href="javascript:void();" className="link01">How to use the page ?</a> */}
            <Link
              href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/All-Ad-set.zip"
              download
              className="link02"
              prefetch={false}
            >
              Download All Graphics
            </Link>
          </BlueBelt>

          <ResourMBX>
            <ResourLBX>
              <ResourSBX01>
                <Link href="/animated-display-ad-set-01" className="imgBX" prefetch={false}>
                  {' '}
                  <Image src={ADMIMG06} alt="" />{' '}
                </Link>
                Animated Display Ad Set 01
                <Link
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/Ad-set03.zip"
                  download
                  className="resDownBTN"
                  prefetch={false}
                >
                  DOWNLOAD SET
                </Link>
              </ResourSBX01>

              <ResourSBX01>
                <Link href="/display-ad-set-01" className="imgBX" prefetch={false}>
                  {' '}
                  <Image src={ADMIMG01} alt="" />{' '}
                </Link>
                Display Ad Set 01
                <Link
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/Ad-set01.zip"
                  download
                  className="resDownBTN"
                  prefetch={false}
                >
                  DOWNLOAD SET
                </Link>
              </ResourSBX01>

              <ResourSBX01>
                <Link href="/display-ad-set-02" className="imgBX" prefetch={false}>
                  {' '}
                  <Image src={ADMIMG05} alt="" />{' '}
                </Link>
                Display Ad Set 02
                <Link
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/Ad-set02.zip"
                  download
                  className="resDownBTN"
                  prefetch={false}
                >
                  DOWNLOAD SET
                </Link>
              </ResourSBX01>

              <ResourSBX01>
                <Link href="/social-ad-set-01" className="imgBX" prefetch={false}>
                  {' '}
                  <Image src={ADMIMG02} alt="" />{' '}
                </Link>
                Social AD Set 01
                <Link
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/Social-ad01.zip"
                  download
                  className="resDownBTN"
                  prefetch={false}
                >
                  DOWNLOAD SET
                </Link>
              </ResourSBX01>

              <ResourSBX01>
                <Link
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/Liquid-Loans-Whitepaper-V1.0.pdf"
                  download
                  className="imgBX"
                  prefetch={false}
                >
                  {' '}
                  <Image src={ADMIMG04} alt="" />{' '}
                </Link>
                Whitepaper
                <Link
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/Liquid-Loans-Whitepaper-V1.0.pdf"
                  download
                  className="resDownBTN"
                  prefetch={false}
                >
                  DOWNLOAD
                </Link>
              </ResourSBX01>
              <ResourSBX01>
                <Link href="javascript:void();" className="imgBX" prefetch={false}>
                  {' '}
                  <Image src={ADMIMG03} alt="" />{' '}
                </Link>
              </ResourSBX01>
            </ResourLBX>
            <ResourRBX>
              <LinkMBx>
                {' '}
                <Link href="https://bit.ly/LLTemplatesEmail" target="_blank" prefetch={false}>
                  {' '}
                  <Image src={SideIMG01} alt="" />{' '}
                </Link>{' '}
              </LinkMBx>
              <LinkMBx>
                {' '}
                <Link href="https://bit.ly/LLTemplatesSMS" target="_blank" prefetch={false}>
                  {' '}
                  <Image src={SideIMG02} alt="" />{' '}
                </Link>{' '}
              </LinkMBx>
              <LinkMBx>
                {' '}
                <Link href="https://bit.ly/LLTemplatesPR" target="_blank" prefetch={false}>
                  {' '}
                  <Image src={SideIMG03} alt="" />{' '}
                </Link>{' '}
              </LinkMBx>
              <LinkMBx>
                {' '}
                <Link href="javascript:void();" prefetch={false}>
                  {' '}
                  <Image src={SideIMG04} alt="" />{' '}
                </Link>{' '}
              </LinkMBx>
              <LinkMBx>
                {' '}
                <Link href="javascript:void();" prefetch={false}>
                  {' '}
                  <Image src={SideIMG05} alt="" />{' '}
                </Link>{' '}
              </LinkMBx>
            </ResourRBX>
          </ResourMBX>
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
  margin: 30px -25px 30px -25px;
  justify-content: flex-start;
`;

const DwnSBX01 = styled.a`
  width: calc(25% - 50px);
  border-radius: 8px;
  background-color: ${(props) => props.theme.DownlBXBG};
  padding: 25px;
  -webkit-box-shadow: 0 0 13px 1px rgba(23, 9, 37, 1);
  box-shadow: 0 0 13px 1px rgba(23, 9, 37, 1);
  margin: 25px 25px 60px 25px;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 600ms;
  position: relative;

  .thumTitle {
    font-size: 16px;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0px;
    top: calc(100% + 10px);
    color: ${(props) => props.theme.TextWhite};
    span {
      display: block;
      width: 100%;
      color: ${(props) => props.theme.DownlTitletext};
    }
  }

  :hover {
    -webkit-box-shadow: 0 0 30px rgba(254, 0, 231, 0.3);
    box-shadow: 0 0 30px rgba(254, 0, 231, 0.3);
    transform: translateY(-6px);
  }

  ${Media.md} {
    width: calc(33.33% - 50px);
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
  padding-bottom: 100px;
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

const FAqDesc = styled.div`
  font-size: 24px;
  font-weight: 300;
  line-height: 40px;
  margin: 0px;
  color: ${(props) => props.theme.TextWhite};
  position: relative;
  max-width: 832px;
  margin: 0 auto;

  ${Media.sm} {
    font-size: 19px;
    line-height: 30px;
  }
`;

const FaqBottom = styled.div`
  .Collapsible {
    .Collapsible__trigger {
      font-size: 26px;
      font-weight: 400;
      margin: 0px;
      color: ${(props) => props.theme.TextMilkWhite};
      position: relative;
      display: flex;
      align-items: center;
      border-bottom: 1px solid ${(props) => props.theme.FaqTborder2};
      padding: 30px 0px;
      ${Media.sm} {
        padding-right: 45px;
        font-size: 19px;
      }

      :after {
        content: '';
        background: url(${FAqplus1.src}) no-repeat;
        width: 28px;
        height: 28px;
        position: absolute;
        right: 0px;
        cursor: pointer;
      }
      &.is-open {
        :after {
          background: url(${FAqplus2.src}) no-repeat;
        }
      }
    }
    .Collapsible__contentInner {
      padding: 30px 0px;
      p {
        font-size: 20px;
        line-height: 26px;
        color: ${(props) => props.theme.FaqText};
        margin: 0px 0px 30px;
        :last-child {
          margin-bottom: 0px;
        }
        a {
          color: ${(props) => props.theme.FaqTLink};
        }
      }
      ol {
        margin: 0px;
      }
      ol li {
        font-size: 20px;
        line-height: 26px;
        color: ${(props) => props.theme.FaqText};
        margin: 15px 0px;
      }
    }
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
  justify-content: center;
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
const ResourLBX = styled(FlexDiv)`
  align-items: flex-start;
  justify-content: flex-start;
  width: 73%;
  padding: 0 30px 0 0;
  align-content: flex-start;

  ${Media.sm} {
    width: 100%;
    padding: 0;
  }
`;
const ResourSBX01 = styled(FlexDiv)`
  flex-direction: column;
  width: 50%;
  padding: 0 36px 36px 36px;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.TextMilkWhite};

  .imgBX {
    min-height: 310px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    background-color: ${(props) => props.theme.AdBXBG};
    border-radius: 8px;
    margin: 0 0 15px 0;
    position: relative;
    top: 0;
    transition: all 400ms;
    border: 1px solid transparent;
    :hover {
      -webkit-box-shadow: 0 11px 18px 1px rgba(65, 30, 114, 0.4);
      box-shadow: 0 11px 18px 1px rgba(65, 30, 114, 0.4);
      border: 1px solid ${(props) => props.theme.AdBXBOR};
      top: -3px;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .resDownBTN {
    padding: 8px 18px;
    color: #fff;
    text-transform: uppercase;
    margin: 10px 6px;
    font-size: 15px;
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
      font-size: 14px;
    }
    :hover {
      filter: brightness(1.3);
    }
    img {
      margin-right: 10px;
    }
  }

  ${Media.md} {
    padding: 0 20px 20px 20px;
  }
  ${Media.md2} {
    .imgBX {
      min-height: 200px;
    }
  }
  ${Media.xs} {
    width: 100%;
    padding: 0;
    margin-bottom: 20px;
  }
`;

const ResourRBX = styled(FlexDiv)`
  align-items: flex-start;
  justify-content: flex-start;
  width: 27%;
  padding: 0 25px;
  border-left: 1px solid ${(props) => props.theme.AdBXBOR};

  ${Media.md} {
    padding: 0 0 0 20px;
  }
  ${Media.sm} {
    width: 100%;
    padding: 30px 0 0 0;
    border-left: none;
    border-top: 1px solid ${(props) => props.theme.AdBXBOR};
  }
`;

const LinkMBx = styled.div`
  display: block;
  margin: 0 0 25px 0;

  a {
    border: 1px solid transparent;
    transition: all 400ms;
    position: relative;
    top: 0;
    display: inline-flex;
    :hover {
      -webkit-box-shadow: 0 11px 12px 1px rgba(65, 30, 114, 0.4);
      box-shadow: 0 11px 12px 1px rgba(65, 30, 114, 0.4);
      border: 1px solid #411e72;
      top: -3px;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }

  ${Media.md2} {
    margin: 0 0 15px 0;
  }
  ${Media.sm} {
    display: flex;
    padding: 8px 16px;
    width: 50%;
  }
  ${Media.xs} {
    width: 100%;
  }
`;

export default Resources;
