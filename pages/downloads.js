import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Media from '../styles/media-breackpoint';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import { Zoom, Fade } from 'react-reveal';

import FAqplus1 from '../public/images/faq-plus1.png';
import FAqplus2 from '../public/images/faq-plus2.png';

import DwlThumb01 from '../public/images/dwl-thu-01.png';
import DwlThumb02 from '../public/images/dwl-thu-02.png';
import DwlThumb03 from '../public/images/dwl-thu-03.png';
import DwlThumb04 from '../public/images/dwl-thu-04.png';
import DwlThumb05 from '../public/images/dwl-thu-05.png';
import DwlThumb06 from '../public/images/dwl-thu-06.png';
import DwlThumb07 from '../public/images/dwl-thu-07.png';
import DwlThumb08 from '../public/images/dwl-thu-08.png';
import DwlThumb09 from '../public/images/dwl-thu-09.png';
import DwlThumb010 from '../public/images/dwl-thu-010.png';
import DwlThumb011 from '../public/images/loan-dwl-thu-01.png';
import DwlThumb012 from '../public/images/loan-dwl-thu-02.png';
import DwlThumb013 from '../public/images/loan-dwl-thu-03.png';
import DwlThumb014 from '../public/images/loan-dwl-thu-04.png';
import DwlThumb015 from '../public/images/loan-dwl-thu-05.png';

import DwlThumb016 from '../public/images/usdl-dwl-thu-01.png';
import DwlThumb017 from '../public/images/usdl-dwl-thu-02.png';
import DwlThumb018 from '../public/images/usdl-dwl-thu-03.png';
import DwlThumb019 from '../public/images/usdl-dwl-thu-04.png';
import DwlThumb020 from '../public/images/usdl-dwl-thu-05.png';
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
const Downloads = (props) => {
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
            Downloads
          </FAqTitle>
          <FAqDesc
            className="wow fadeInUp"
            data-wow-delay="0.1s"
            data-wow-duration="1.2s"
          >
            Click each image to open and download direct to your desktop or
            mobile device.
          </FAqDesc>
          {/* </Fade> */}
        </FaqTop>
        <VideoMBX>
          <Tabs>
            <TabList>
              <Tab>Liquid Loans</Tab>
              <Tab>LOAN Token</Tab>
              <Tab>USDL Token</Tab>
            </TabList>
            <TabPanel>
              <TabTitle>Liquid Loans Assets</TabTitle>
              <DwnlMBX>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/liquid-loans-assets/liquidloans-logo-01.png"
                  download={true}
                >
                  <Image src={DwlThumb01} alt="" />
                  <div className="thumTitle">
                    {' '}
                    Liquid Loans Logo <span>(PNG)</span>{' '}
                  </div>
                </DwnSBX01>

                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/liquid-loans-assets/liquidloans-logo-02.png"
                  download={true}
                >
                  <Image src={DwlThumb02} alt="" />
                  <div className="thumTitle">
                    {' '}
                    Liquid Loans Logo <span>(White - PNG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/liquid-loans-assets/liquidloans-logo-03.png"
                  download={true}
                >
                  <Image src={DwlThumb03} alt="" />
                  <div className="thumTitle">
                    {' '}
                    Liquid Loans Logo <span>(Black - PNG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/liquid-loans-assets/liquidloans-logo.svg"
                  download={true}
                >
                  <Image src={DwlThumb01} alt="" />
                  <div className="thumTitle">
                    {' '}
                    Liquid Loans Logo <span>(SVG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/liquid-loans-assets/liquidloans-symbol-01.png"
                  download={true}
                >
                  <Image src={DwlThumb04} alt="" />
                  <div className="thumTitle">
                    Liquid Loans Symbol <span>(PNG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/liquid-loans-assets/liquidloans-symbol.svg"
                  download={true}
                >
                  <Image src={DwlThumb04} alt="" />
                  <div className="thumTitle">
                    Liquid Loans Symbol <span>(SVG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/liquid-loans-assets/liquid-loans-bg01.jpg"
                  download={true}
                >
                  <Image src={DwlThumb05} alt="" />
                  <div className="thumTitle">
                    Liquid Loans Wide Background <span>(1920X926 JPG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/liquid-loans-assets/liquid-loans-bg02.jpg"
                  download={true}
                >
                  <Image src={DwlThumb06} alt="" />
                  <div className="thumTitle">
                    Liquid Loans Wide Background 2 <span>(1920X1078 JPG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/liquid-loans-assets/liquid-loans-bg03.jpg"
                  download={true}
                >
                  <Image src={DwlThumb07} alt="" />
                  <div className="thumTitle">
                    Liquid Loans Wide Background 3 <span>(1920X1052 JPG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/liquid-loans-assets/liquid-loans-bg04.jpg"
                  download={true}
                >
                  <Image src={DwlThumb08} alt="" />
                  <div className="thumTitle">
                    Liquid Loans Wide Background 4 <span>(1920X934 JPG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/liquid-loans-assets/liquid-loans-bg05.png"
                  download={true}
                >
                  <Image src={DwlThumb09} alt="" />
                  <div className="thumTitle">
                    Liquid Loans DAPP <span>(Mobile PNG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/liquid-loans-assets/liquid-loans-all-assets.zip"
                  download={true}
                >
                  <Image src={DwlThumb010} alt="" />
                  <div className="thumTitle">
                    Liquid Loans All Assets{' '}
                    <span>(PNG + SVG + Background)</span>{' '}
                  </div>
                </DwnSBX01>
              </DwnlMBX>
            </TabPanel>
            <TabPanel>
              <TabTitle>LOAN Token Assets</TabTitle>
              <DwnlMBX>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/loan-token-assets/loan-500X500.png"
                  download={true}
                >
                  <Image src={DwlThumb011} alt="" />
                  <div className="thumTitle">
                    {' '}
                    LOAN Token <span>(500X500 PNG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/loan-token-assets/loan-250X250.png"
                  download={true}
                >
                  <Image src={DwlThumb011} alt="" />
                  <div className="thumTitle">
                    {' '}
                    LOAN Token <span>(250X250 PNG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/loan-token-assets/loan-90X90.png"
                  download={true}
                >
                  <Image src={DwlThumb012} alt="" />
                  <div className="thumTitle">
                    {' '}
                    LOAN Token <span>(90X90 PNG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/loan-token-assets/loan-32X32.png"
                  download={true}
                >
                  <Image src={DwlThumb013} alt="" />
                  <div className="thumTitle">
                    LOAN Token <span>(32X32 PNG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/loan-token-assets/loan.svg"
                  download={true}
                >
                  <Image src={DwlThumb011} alt="" />
                  <div className="thumTitle">
                    LOAN Token <span>(SVG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/loan-token-assets/loan-concept.jpg"
                  download={true}
                >
                  <Image src={DwlThumb014} alt="" />
                  <div className="thumTitle">
                    LOAN Design Concept <span>(JPG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/loan-token-assets/loan-3dcoin.png"
                  download={true}
                >
                  <Image src={DwlThumb015} alt="" />
                  <div className="thumTitle">
                    LOAN 3d Coin <span>(PNG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/loan-token-assets/loan-token-assets.zip"
                  download={true}
                >
                  <Image src={DwlThumb010} alt="" />
                  <div className="thumTitle">
                    LOAN Token All Assets <span>(PNG + SVG + Background)</span>{' '}
                  </div>
                </DwnSBX01>
              </DwnlMBX>
            </TabPanel>
            <TabPanel>
              <TabTitle>USDL Token Assets</TabTitle>
              <DwnlMBX>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/usdl-token-assets/usdl-500X500.png"
                  download={true}
                >
                  <Image src={DwlThumb016} alt="" />
                  <div className="thumTitle">
                    {' '}
                    USDL Token <span>(500X500 PNG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/usdl-token-assets/usdl-250X250.png"
                  download={true}
                >
                  <Image src={DwlThumb016} alt="" />
                  <div className="thumTitle">
                    {' '}
                    USDL Token <span>(250X250 PNG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/usdl-token-assets/usdl-90X90.png"
                  download={true}
                >
                  <Image src={DwlThumb017} alt="" />
                  <div className="thumTitle">
                    {' '}
                    USDL Token <span>(90X90 PNG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/usdl-token-assets/usdl-32X32.png"
                  download={true}
                >
                  <Image src={DwlThumb018} alt="" />
                  <div className="thumTitle">
                    USDL Token <span>(32X32 PNG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/usdl-token-assets/usdl.svg"
                  download={true}
                >
                  <Image src={DwlThumb016} alt="" />
                  <div className="thumTitle">
                    USDL Token <span>(SVG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/usdl-token-assets/concept.jpg"
                  download={true}
                >
                  <Image src={DwlThumb019} alt="" />
                  <div className="thumTitle">
                    USDL Design Concept <span>(JPG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/usdl-token-assets/3dcoin.png"
                  download={true}
                >
                  <Image src={DwlThumb020} alt="" />
                  <div className="thumTitle">
                    USDL 3d Coin <span>(PNG)</span>{' '}
                  </div>
                </DwnSBX01>
                <DwnSBX01
                  href="https://llprod-resource.s3.ap-southeast-2.amazonaws.com/usdl-token-assets/usdl-token-assets.zip"
                  download={true}
                >
                  <Image src={DwlThumb010} alt="" />
                  <div className="thumTitle">
                    USDL Token All Assets <span>(PNG + SVG + Background)</span>{' '}
                  </div>
                </DwnSBX01>
              </DwnlMBX>
            </TabPanel>
          </Tabs>
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
  margin: 25px 25px 60px 25px;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 600ms;
  position: relative;
  border: 1px solid transparent;

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
    -webkit-box-shadow: 0 11px 18px 1px rgba(65, 30, 114, 0.4);
    box-shadow: 0 11px 18px 1px rgba(65, 30, 114, 0.4);
    border: 1px solid ${(props) => props.theme.AdBXBOR};
    transform: translateY(-6px);
  }

  ${Media.md} {
    width: calc(33.33% - 50px);
  }

  ${Media.md2} {
    width: calc(50% - 50px);
  }

  ${Media.sm} {
    width: calc(50% - 30px);
    margin: 25px 15px 60px 15px;
  }
  ${Media.xs} {
    width: calc(100% - 30px);
    margin: 25px 15px 60px 15px;
  }
`;

const FaqBG = styled.div`
  background: url(${(props) => props.theme.DownlBG}) no-repeat;
  background-repeat: no-repeat;
  background-position: 50% -50px;

  ${Media.md2} {
    padding: 0 30px;
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
  font-weight: normal;
  margin: 0px;
  color: ${(props) => props.theme.TextWhite};
  position: relative;
  max-width: 832px;
  margin: 0 auto;
  :after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.FaqTborder};
    position: absolute;
    bottom: -30px;
    left: 0px;
    right: 0px;
  }
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
  max-width: 1280px;
  margin: 60px auto 0 auto;
  padding: 0px 0px 90px;
  .react-tabs__tab-list {
    border-bottom: none;
    margin: 0px 0px 50px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .react-tabs__tab {
    border: none;
    border-radius: 0;
    margin-right: 0;
    padding: 10px 20px;
    color: ${(props) => props.theme.DownldBTNC};
    font-size: 18px;
    font-weight: 300;
    flex: 1;
    font-size: 30px;
    font-weight: 700;
    border-bottom: 2px solid ${(props) => props.theme.DownldBTNC};
    :hover {
      filter: brightness(1.5);
    }
  }
  .react-tabs__tab--selected {
    background-color: transparent;
    color: ${(props) => props.theme.TextWhite};
    border-bottom: 2px solid ${(props) => props.theme.TextWhite};
  }
  .react-tabs__tab:focus {
    box-shadow: none;
  }
  .react-tabs__tab:focus:after {
    display: none;
  }
  ${Media.lg} {
    max-width: 1200px;
  }
  ${Media.md} {
    max-width: 920px;
  }
  ${Media.sm} {
    .react-tabs__tab {
      font-size: 22px;
      padding: 10px;
    }
  }
  ${Media.xs} {
    .react-tabs__tab {
      margin-bottom: 15px;
      width: 100%;
    }
    .react-tabs__tab-list {
      flex-direction: column;
    }
  }
`;

const TabTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  line-height: 65px;
  color: ${(props) => props.theme.TextWhite};
  position: relative;
  max-width: 700px;
  margin: 0 auto 60px auto;

  ${Media.sm} {
    font-size: 34px;
  }
  ${Media.xs} {
    font-size: 28px;
    line-height: 38px;
  }

  :after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.FaqTborder};
    position: absolute;
    bottom: -30px;
    left: 0px;
    right: 0px;
  }
`;

export default Downloads;
