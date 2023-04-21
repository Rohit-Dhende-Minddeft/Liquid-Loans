import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Gs from '../styles/theme.config';
import 'react-tabs/style/react-tabs.css';
import Media from '../styles/media-breackpoint';
// import { Zoom, Fade } from 'react-reveal';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Modal } from 'react-responsive-modal';
import Graph01 from '../public/images/graph-01.png';
import Videomockup from '../public/images/heroIMG-02.jpg';
import PlayBtn from '../public/images/play-btn.png';
import DappGrp01 from '../public/images/D-usdl-icon.jpg';
import DappGrp02 from '../public/images/D-loan-icon.jpg';
import DappGrp01L from '../public/images/D-usdl-icon-l.jpg';
import DappGrp02L from '../public/images/D-loan-icon-l.jpg';

import DappGrp03 from '../public/images/graph-002.jpg';
import DappGrp04 from '../public/images/graph-003.jpg';
import DappGrp03L from '../public/images/graph-002-l.jpg';
import DappGrp04L from '../public/images/graph-003-l.jpg';

import USDLTKN from '../public/images/usdlTKN.png';
import LOANTKN from '../public/images/loanTKN.png';
import PLSTKN from '../public/images/plsTKN.png';
import AROV from '../public/images/graphArrow.png';
import AROV03 from '../public/images/graphArrow-2.png';
import AROV2 from '../public/images/graphArrowM.png';

import HIWico01 from '../public/images/roundICO01.png';
import HIWico02 from '../public/images/roundICO02.png';
import HIWico03 from '../public/images/roundICO03.png';

import HIWico01_l from '../public/images/HIWico01Light.png';
import HIWico02_l from '../public/images/HIWico02Light.png';
import HIWico03_l from '../public/images/HIWico03Light.png';

import LaptopD from '../public/images/dapp-laptop-dark.jpg';
import LaptopL from '../public/images/dapp-laptop-light.jpg';
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

const closeIcon = (
  <svg fill="currentColor" viewBox="0 0 43 43" width={30} height={30}>
    <line
      x1="15"
      y1="15"
      x2="30"
      y2="30"
      stroke="#ffffff"
      stroke-width="3"
      stroke-linecap="round"
      stroke-miterlimit="16"
    ></line>
    <line
      x1="30"
      y1="15"
      x2="15"
      y2="30"
      stroke="#ffffff"
      stroke-width="3"
      stroke-linecap="round"
      stroke-miterlimit="16"
    ></line>
  </svg>
);

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


const Dapp = (props) => {
  const [languageData, setLanguageData] = useState([]);
  const { allCategories, setAllCategories } = props;

  //set categories for header
  useEffect(() => {
    setAllCategories(allCategories);
  }, [allCategories, setAllCategories]);

  useEffect(() => {
    window.scrollTo(0, 0);

    document
      .getElementById('lannguage_ul')
      ?.addEventListener('DOMSubtreeModified', translationCallback, false);
    translationCallback();
  }, []);

  const translationCallback = () => {
    // console.log('lang change');
    collectData();
  };
  const collectData = () => {
    let ulData = document.getElementById('lannguage_ul');
    let tempLang = [];
    for (let i = 0; i < ulData?.children.length; i++) {
      tempLang.push(ulData.children[i].innerText);
    }
    setLanguageData(tempLang);
  };

  // const [open, setOpen] = useState(false);
  // const onOpenModal = () => setOpen(true);
  // const onCloseModal = () => setOpen(false);

  const [open06, setopen06] = React.useState(false);

  
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
        <Gs.Container>
          {/* <Fade delay={50} duration={1200}> */}
          <Section4
            className="wow fadeIn"
            data-wow-delay="0.5s"
            data-wow-duration="1.2s"
          >
            <BlueLayer>
              <BlueLayer2>
                <Carousel
                  responsive={responsive}
                  showDots={true}
                  arrows={false}
                >
                  <div className="item">
                    <div className="W40">
                      <Image src={Videomockup} alt="" />
                      <div className="overlay" onClick={() => setopen06(true)}>
                        <Link href="/dapp" prefetch={false}>
                          <Image src={PlayBtn} alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="W60">
                      <BenefitTitle>[NEW] Dapp Live on Testnet!</BenefitTitle>
                      <BenefitDesc>
                        In this video, Matt shares a comprehensive walkthrough
                        of the Liquid Loans frontend Dapp and how it interacts
                        with the DeFi protocol on PulseChain testnet – from
                        borrowing USDL to becoming a stablilty provider, staking
                        LOAN to redemptions and liquidations – plus insights
                        into the Liquid Loans anonymous ticketing system and how
                        you can provide feedback and enhancement requests.
                      </BenefitDesc>
                    </div>
                  </div>
                </Carousel>
              </BlueLayer2>
            </BlueLayer>
          </Section4>
          {/* </Fade> */}

          <Section1>
            {/* <Fade cascade bottom delay={300} duration={1600}> */}
            <HeadText
              className="wow fadeInUp"
              data-wow-delay="0.3s"
              data-wow-duration="1.6s"
            >
              <span
                className="wow fadeInUp"
                data-wow-delay="0.3s"
                data-wow-duration="1.6s"
              >
                {' '}
                0% <span className="colorful">Interest-Free</span> Borrowing
              </span>
              <br />
            </HeadText>
            <HeadDesc>
              <h1>
                Liquid Loans is the first truly decentralized lending protocol
                built specifically for PulseChain. <br />
                Algorithmic Stablecoin. Low 110% Collateral Ratio. No Repayment
                Schedule. Immutable. Governance-Free. No Admin Keys.{' '}
              </h1>
            </HeadDesc>
            {/* </Fade> */}
          </Section1>

          <RowMBX className="reverce ">
            <RowSbx01>
              <DapTitle01>
                <p>
                  <span>Main</span>
                </p>
                <span>Use Cases</span>
              </DapTitle01>
              <DapText01>
                <p>
                  Liquid Loans core purpose is to support the{' '}
                  <span className="cPerle">creation</span>,{' '}
                  <span className="cPerle">growth</span> and{' '}
                  <span className="cPerle">adoption</span> of a more secure,{' '}
                  <span className="cPerle">trustless</span>, and{' '}
                  <span className="cPerle">
                    decentralized financial infrastructure
                  </span>
                  , that is community-owned, and brings{' '}
                  <span className="cOrang">greater stability</span> and{' '}
                  <span className="cOrang">transparency</span> to the PulseChain
                  ecosystem.
                </p>
              </DapText01>
            </RowSbx01>
            <RowSbx01 className="v2">
              <Image src={Graph01} alt="" />
            </RowSbx01>
          </RowMBX>
          {/* <BtnBar>
            <Link target="_blank" to={{ pathname: 'https://testnet.liquidloans.io/' }} className="Btn01 ani-1">LAUNCH TESTNET</Link>
          </BtnBar> */}

          <RowMBX className="extraMRGN">
            <RowSbx02>
              <div className="subContent">
                <Image
                  src={props.isDarkTheme ? HIWico01 : HIWico01_l}
                  className="icoIMG"
                  alt=""
                />
                <DapTitle01 className="v4">
                  {' '}
                  <p>
                    <span>0% Interest Rate</span>
                  </p>
                </DapTitle01>
                <DapText02 className="v2">
                  Liquid Loans charges a small, one-time fee to borrow USDL
                  instead of highly variable interest rates often found when
                  borrowing.
                </DapText02>
              </div>
            </RowSbx02>
            <RowSbx02>
              <div className="subContent">
                <Image
                  src={props.isDarkTheme ? HIWico02 : HIWico02_l}
                  className="icoIMG"
                  alt=""
                />
                <DapTitle01 className="v4">
                  {' '}
                  <p>
                    <span>1 USDL = 1 USD</span>
                  </p>
                </DapTitle01>
                <DapText02 className="v2">
                  Borrow USDL, a fully backed stablecoin pegged to the US Dollar
                  that’s maintained by an algorithmic monetary policy.
                </DapText02>
              </div>
            </RowSbx02>
            <RowSbx02>
              <div className="subContent">
                <Image
                  src={props.isDarkTheme ? HIWico03 : HIWico03_l}
                  className="icoIMG"
                  alt=""
                />
                <DapTitle01 className="v4">
                  {' '}
                  <p>
                    <span>110% Collateral Ratio</span>
                  </p>
                </DapTitle01>
                <DapText02 className="v2">
                  Liquid Loans efficient and fully autonomous liquidation
                  mechanism allows users to get the most liquidity for their
                  PLS.
                </DapText02>
              </div>
            </RowSbx02>
          </RowMBX>

          <RowMBX>
            <DapTitle01 className="v2">
              {' '}
              <p>
                <span>The Protocol Has Two</span>
              </p>{' '}
              <span>Native Tokens</span>{' '}
            </DapTitle01>
          </RowMBX>

          <RowMBX>
            <RowSbx01 className="v3">
              <Image src={props.isDarkTheme ? DappGrp01 : DappGrp01L}  alt=""/>
              <DapTitle01 className="v2">
                {' '}
                <span>USDL</span>{' '}
              </DapTitle01>
              <DapText02>
                USDL is an algorithmic stablecoin that aims to always be worth
                one US dollar. Many stablecoins today are fiat-backed. But USDL
                is different. It doesn’t rely on dollars in a bank account.
                Instead, USDL is minted when users deposit PLS (PulseChain coin)
                as collateral that has been locked into individual smart
                contracts called Vaults.
              </DapText02>
            </RowSbx01>
            <RowSbx01 className="v4">
              <Image src={props.isDarkTheme ? DappGrp02 : DappGrp02L} alt=""/>
              <DapTitle01 className="v2">
                <span>LOAN</span>{' '}
              </DapTitle01>
              <DapText02>
                LOAN is the secondary token issued by the protocol. It captures
                the fee revenue that is generated by the system and incentivizes
                early adopters. You earn LOAN by providing USDL to the Stability
                Pool in exchange for rewards. You can also stake your LOAN
                tokens to earn the revenue paid for borrowing or redeeming USDL.
              </DapText02>
            </RowSbx01>
          </RowMBX>

          <RowMBX className="v2">
            <RowSbx01>
              <Image src={props.isDarkTheme ? DappGrp03 : DappGrp03L} alt=""/>
            </RowSbx01>
            <RowSbx01 className="v2">
              <DapTitle01 className="v3">
                <span>Borrow USDL</span>
              </DapTitle01>
              <DapText01 className="v22">
                <p>
                  The protocol was developed to allow owners of PLS a method of
                  extracting value from their holdings, without the need to ever
                  sell. By locking up PLS and minting USDL, a PLS holder can
                  take a 0% interest-free loan against their holdings, on a
                  timeless repayment schedule.
                </p>

                <p>
                  To do this, you deposit your PLS into a smart contract called
                  a Vault, which in turn mints the USDL stablecoin. The minimum
                  collateral ratio you can lock up is 110%, however a ratio of
                  150% or more is strongly recommended. Use your USDL for a
                  variety of personal uses, or reinvest into the system to
                  provide stability and take advantage of another journey on the
                  ecosystem.
                </p>
              </DapText01>
            </RowSbx01>
          </RowMBX>

          <RowMBX className="v2 reverce">
            <RowSbx01>
              <DapTitle01>
                <span>Earn Rewards</span>
              </DapTitle01>
              <DapText01 className="v22">
                <p>
                  USDL – as a holder of USDL, you can earn income by providing
                  stability to the Liquid Loans ecosystem. Invest and achieve a
                  return on your USDL using gains earned through liquidation
                  events plus incentives provided in the form of LOAN tokens.
                </p>

                <p>
                  LOAN – holders of LOAN tokens can then stake their tokens in
                  the ecosystem to earn USDL and PLS. Earnings are generated
                  from borrowing and redemption fees, and are provided in the
                  same proportion as the amount you have staked in the staking
                  pool.
                </p>
              </DapText01>
            </RowSbx01>
            <RowSbx01 className="v2">
              <Image src={props.isDarkTheme ? DappGrp04 : DappGrp04L} alt="" />
            </RowSbx01>
          </RowMBX>

          <BtnBar>
            <Link
              target="_blank"
              href={{ pathname: 'https://testnet.liquidloans.io/' }}
              className="Btn01 ani-1"
              prefetch={false}
            >
              LAUNCH TESTNET
            </Link>
          </BtnBar>

          <RowMBX style={{ maxWidth: '1280px' }}>
            <DapTitle01 className="v2">
              <span>How It Works</span>
              <i className="type01">
                Here is a simple break-down of how the ecosystem works.
              </i>
            </DapTitle01>

            <GraphMBX>
              <GraphSBX01>
                <GraphSBX02 className="arov01">
                  <GraphTitle01>To Create A Loan</GraphTitle01>
                  <GraphTitle02>
                    <h4>OPEN A VAULT</h4>
                  </GraphTitle02>
                  <GraphTitle03>
                    Deposit PLS <Image className="ico" src={PLSTKN} alt="" />
                  </GraphTitle03>
                  <GraphTitle03 className="withIMG">
                    <Image src={AROV} alt="" />
                  </GraphTitle03>
                  <GraphTitle03>
                    Receive USDL <Image className="ico" src={USDLTKN} alt="" />
                  </GraphTitle03>
                </GraphSBX02>
              </GraphSBX01>

              <GraphSBX01>
                <GraphSBX02 className="arov02">
                  <GraphTitle01>Earn PLS and LOAN</GraphTitle01>
                  <GraphTitle02>
                    <h4>STABILITY POOL</h4>
                  </GraphTitle02>

                  <GraphTitle03>
                    Deposit USDL <Image className="ico" src={USDLTKN} alt="" />
                  </GraphTitle03>
                  <GraphTitle03>
                    Receive PLS <Image className="ico" src={PLSTKN} alt="" />
                  </GraphTitle03>
                  <GraphTitle03>
                    Receive LOAN <Image className="ico" src={LOANTKN} alt="" />
                  </GraphTitle03>
                </GraphSBX02>
              </GraphSBX01>

              <GraphSBX01>
                <GraphSBX02>
                  <GraphTitle01>Earn PLS and USDL</GraphTitle01>
                  <GraphTitle02>
                    <h4>LOAN STAKING</h4>
                  </GraphTitle02>
                  <GraphTitle03>
                    Deposit LOAN <Image className="ico" src={LOANTKN} alt="" />
                  </GraphTitle03>
                  <GraphTitle03>
                    Receive PLS <Image className="ico" src={PLSTKN} alt="" />
                  </GraphTitle03>
                  <GraphTitle03>
                    Receive USDL <Image className="ico" src={USDLTKN} alt="" />
                  </GraphTitle03>
                </GraphSBX02>
              </GraphSBX01>
            </GraphMBX>
          </RowMBX>

          <BtnBar>
            <Link
              target="_blank"
              href={{ pathname: 'https://testnet.liquidloans.io/' }}
              className="Btn01 ani-1"
              prefetch={false}
            >
              LAUNCH TESTNET
            </Link>
          </BtnBar>

          <RowMBX className="imgbx">
            <Image src={props.isDarkTheme ? LaptopD : LaptopL} alt=""/>
          </RowMBX>

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
      </VideoBG>
      <div>
        <Modal
          open={open06}
          onClose={() => setopen06(false)}
          center
          classNames={{
            overlay: 'customOverlay',
            modal: 'customModal v2',
          }}
          closeIcon={closeIcon}
        >
          <ModalContent>
            <div className="youtube-embed">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/kxQyLaxAXi0?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>
      </div>
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
  background-image: url('${(props) => props.theme.DappBG}');
  background-repeat: no-repeat;
  background-position:center top;
`;
const RowMBX = styled(FlexDiv)`
  justify-content: flex-start;
  width: 100%;
  max-width: 1100px;
  margin: 40px auto 40px auto;
  align-items: flex-start;

  &.v2 {
    margin-top: 100px;
  }
  &.imgbx {
    justify-content: center;
    margin: 70px auto 50px auto;
  }

  &.extraMRGN {
    margin-top: 100px;
    margin-bottom: 150px;
  }

  ${Media.lg} {
    max-width: 1200px;
  }

  ${Media.sm} {
    &.v2 {
      margin-top: 50px;
    }
    &.reverce {
      flex-direction: column-reverse;
    }
  }
`;
const RowSbx01 = styled(FlexDiv)`
  width: 50%;
  justify-content: flex-start;
  padding-right: 20px;
  &.v2 {
    padding-right: 0;
    padding-left: 20px;
    justify-content: flex-end;
  }

  &.v3 {
    justify-content: center;
    align-items: flex-start;
    padding-right: 30px;
  }
  &.v4 {
    justify-content: center;
    align-items: flex-start;
    padding-right: 0;
    padding-left: 30px;
  }

  ${Media.sm} {
    width: 100%;
    padding: 20px;
    justify-content: center;
    text-align: center;
    &.v2,
    &.v3,
    &.v4 {
      padding-right: 0;
      padding-left: 0;
    }
  }
`;
const RowSbx02 = styled(FlexDiv)`
  width: calc(33.33% - 30px);
  margin: 0 15px;
  background: linear-gradient(
    160deg,
    ${(props) => props.theme.DGColor1},
    ${(props) => props.theme.DGColor2}
  );
  border-radius: 15px;
  position: relative;

  .subContent {
    width: calc(100% - 2px);
    min-height: 250px;
    margin: 1px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${(props) => props.theme.SubCColor01};
  }

  .icoIMG {
    margin: 30px auto;
  }

  ${Media.sm} {
    width: calc(100% - 30px);
    margin: 10px 15px;
    .subContent {
      min-height: 200px;
    }
  }
`;

const DapTitle01 = styled(FlexDiv)`
  font-family: var(--montserrat-font), arial, sans-serif;
  font-size: 75px;
  font-weight: 700;
  letter-spacing: -3px;
  line-height: 58px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  background: url(${(props) => props.theme.GLowTxt}) left top no-repeat;
  padding-bottom: 20px;
  margin-bottom: 30px;
  background-size: contain;
  span {
    background: -webkit-linear-gradient(0deg, #7049ff, #fc0af6, #fbedab);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-right: 10px;
    padding-top: 7px;
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 35px;
    line-height: 30px;
  }
  &.v2 {
    align-items: center;
    justify-content: center;
    width: 100%;
    background-position: center top;
  }
  &.v3 {
    margin-right: auto;
  }
  &.v4 {
    align-items: center;
    justify-content: center;
    width: 100%;
    background-position: center top;
    margin-bottom: 10px;
  }
  .type01 {
    font-size: 24px;
    font-family: var(--alegreya-font), sans-serif;
    color: ${(props) => props.theme.TextWhite};
    line-height: 40px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0;
    margin: 15px auto 20px auto;
  }

  ${Media.md} {
    font-size: 60px;
    line-height: 50px;
    p {
      font-size: 28px;
      line-height: 26px;
      text-align: center;
    }
  }
  ${Media.sm} {
    justify-content: center;
    text-align: center;
    align-items: center;
    &.v3 {
      width: 100%;
    }
  }
`;

const DapText01 = styled(FlexDiv)`
  font-size: 30px;
  font-weight: 300;
  line-height: 42px;
  color: ${(props) => props.theme.TextWhite};
  p {
    margin: 0;
    padding: 0;
    max-width: 534px;
  }
  .cPerle {
    color: ${(props) => props.theme.CPerle};
  }
  .cOrang {
    color: ${(props) => props.theme.COrange};
  }

  &.v22 {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    p {
      margin-bottom: 12px;
      max-width: none;
    }
  }
`;
const BtnBar = styled(FlexDiv)`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto 95px auto;
  .Btn01 {
    font-size: 30px;
    line-height: 30px;
    color: ${(props) => props.theme.TextWhite};
    border: 3px solid #62b5da;
    background-color: transparent;
    padding: 18px 48px;
    border-radius: 50px;
    position: relative;
    top: 0;
    :hover {
      border-color: #7646ff;
      position: relative;
      top: -3px;
      transform: scale(1.02);
    }
  }
`;
const DapText02 = styled(FlexDiv)`
  text-align: center;
  width: 100%;
  max-width: 475px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 30px;
  color: ${(props) => props.theme.TextWhite};

  &.v2 {
    max-width: 286px;
    padding-bottom: 14px;
  }
`;

const GraphMBX = styled(FlexDiv)`
  width: 100%;
  margin: 50px auto;

  ${Media.sm} {
    margin-top: 0;
  }
`;
const GraphSBX01 = styled(FlexDiv)`
  width: 33.33%;
  padding: 0 14px;

  ${Media.sm} {
    width: 100%;
    margin-bottom: 15px;
  }
`;
const GraphSBX02 = styled(FlexDiv)`
  width: 100%;
  margin: 0 auto;
  max-width: 320px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.gboxC01};
  position: relative;

  &.arov01:after,
  &.arov02:after {
    content: '';
    width: 114px;
    height: 169px;
    border: none;
    display: block;
    background: url(${AROV03.src}) 50% 50% no-repeat;
    position: absolute;
    right: -96px;
    bottom: 42px;
  }

  @media (max-width: 1280px) {
    max-width: 290px;
  }

  ${Media.md} {
    max-width: 240px;
    &.arov02:after,
    &.arov01:after {
      transform: scale(0.7);
      right: -95px;
      bottom: 20px;
    }
  }
  ${Media.md2} {
    &.arov02:after,
    &.arov01:after {
      transform: scale(0.65);
      z-index: 1;
      transform-origin: center center;
      right: -70px;
      bottom: 27px;
    }
  }
  ${Media.sm} {
    max-width: 300px;
    &.arov01:after {
      background: url(${AROV2.src}) 50% 50% no-repeat;
      width: 33px;
      height: 364px;
      transform: scale(1) rotate(0deg);
      bottom: -260px;
      right: -16px;
    }
    &.arov02:after {
      background: url(${AROV2.src}) 50% 50% no-repeat;
      width: 33px;
      height: 364px;
      transform: scale(1) rotate(0deg);
      top: 244px;
      right: -28px;
    }
  }
  ${Media.xs} {
    max-width: 250px;
  }
`;
const GraphTitle01 = styled(FlexDiv)`
  font-size: 24px;
  line-height: 30px;
  padding: 17px 28px;
  width: 100%;
  color: #fff;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.GColor1},
    ${(props) => props.theme.GColor2}
  );
  flex-direction: column;
  border-radius: 8px 8px 0 0;
  margin: 0 0 12px 0;

  ${Media.md} {
    font-size: 18px;
  }
`;
const GraphTitle02 = styled(FlexDiv)`
  font-size: 24px;
  line-height: 30px;
  padding: 17px 28px;
  width: 100%;
  color: ${(props) => props.theme.TextWhite};
  flex-direction: column;
  margin: 0 0 12px 0;
  text-transform: uppercase;
`;

const GraphTitle03 = styled(FlexDiv)`
  font-size: 18px;
  line-height: 30px;
  padding: 10px 20px;
  width: 100%;
  color: #fff;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 15px 15px 15px;
  border-radius: 10px;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.ProtoBC01};
  &.withIMG {
    justify-content: center;
    background-color: transparent;
    margin: -32px 15px -6px 15px;
  }

  ${Media.md} {
    &.withIMG {
      margin: -32px 15px -6px 15px;
    }
  }

  ${Media.md} {
    img {
      max-width: 46px;
    }
    .ico {
      max-width: 30px;
    }
    &.withIMG {
      max-width: 100%;
      margin: -32px 15px 0 15px;
    }
  }
`;

const Section4 = styled.div`
  padding: 136px 0px 40px 0;
  .react-multi-carousel-dot-list {
    bottom: 20px;
    display: none;
  }
  .react-multi-carousel-dot button {
    background-color: ${(props) => props.theme.TextMilkWhiteLight};
    border: none;
    margin: 0px 8px;
  }
  .react-multi-carousel-dot--active button {
    background-color: ${(props) => props.theme.TextMilkWhite};
  }

  ${Media.md2} {
    padding: 100px 0px 20px;
  }
`;
const BlueLayer = styled.div`
  max-width: 1370px;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.GColor1Light},
    ${(props) => props.theme.GColor2Light}
  );
  position: relative;
  transform: scaleY(0.9);
`;
const BlueLayer2 = styled.div`
  justify-content: space-between;
  max-width: 1292px;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.GColor1},
    ${(props) => props.theme.GColor2}
  );
  padding: 65px 65px 0px;
  box-shadow: 0px 0px 40px 0px ${(props) => props.theme.BG1Shadow};
  transform: scaleY(1.1);

  ${Media.lg} {
    max-width: 1186px;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 75px;
    .W40 {
      width: 100%;
      max-width: 560px;
      position: relative;
      display: flex;
      .overlay {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: ${(props) => props.theme.Overlay};
        display: flex;
        align-items: flex-end;
        cursor: pointer;
        a {
          margin-left: 12px;
        }
      }
    }
    .W60 {
      width: 100%;
      max-width: 500px;
    }
  }
  ${Media.lg} {
    .item {
      .W40 {
        max-width: 520px;
      }
    }
  }
  ${Media.md} {
    padding: 30px 30px 0px;
    .item {
      .W60 {
        padding-left: 30px;
      }
    }
  }
  ${Media.sm} {
    .item {
      flex-direction: column;
      .W60 {
        padding: 15px 0 0 0;
      }
    }
  }
`;
const BenefitTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  line-height: normal;
  margin: 0px 0px 30px;
  color: #fff;

  ${Media.md2} {
    font-size: 22px;
    margin: 0px 0px 15px;
  }
`;
const BenefitDesc = styled(FlexDiv)`
  justify-content: flex-start;
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
  color: #fff;
`;
const ModalHeader = styled.div`
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.GColor1},
    ${(props) => props.theme.GColor2}
  );
  padding: 20px;
  color: ${(props) => props.theme.TextWhite};
  font-size: 26px;
  font-weight: 500;
`;
const ModalContent = styled.div`
  padding: 0;

  @media (max-width: 1290px) {
    padding: 0;
  }
  iframe {
    ${Media.md} {
      /* height:400px; */
    }
    ${Media.sm} {
      height: auto;
    }
  }
`;
const Section1 = styled.div`
  padding: 70px 0px 35px;
  text-align: center;
  ${Media.sm} {
    padding: 80px 0px 10px;
  }
`;

const HeadText = styled.div`
  span {
    font-size: 81px;
    line-height: 81px;
    ${Media.md} {
      font-size: 70px;
      line-height: 70px;
    }
  }
  font-size: 81px;
  line-height: 81px;
  font-weight: bold;
  color: ${(props) => props.theme.TextWhite};
  margin: 0px 0px 45px;
  .colorful {
    background: -webkit-linear-gradient(0deg, #7049ff, #fc0af6, #fbedab);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .Typewriter {
    display: inline-block;
    width: 52%;
    text-align: left;
    padding-left: 10px;
    font-size: 81px;
    line-height: 81px;
    span {
      font-size: 81px;
      line-height: 81px;
      ${Media.xl} {
        font-size: 66px;
        line-height: 85px;
      }
    }
    ${Media.md2} {
      width: 100%;
      text-align: center;
    }
    ${Media.lg} {
      span {
        font-size: 66px;
        line-height: 81px;
      }
    }
  }

  ${Media.xl} {
    font-size: 66px;
  }
  ${Media.md} {
    font-size: 56px;
    line-height: 60px;
  }
  ${Media.sm} {
    font-size: 40px;
    line-height: 42px;
    span,
    .Typewriter,
    .Typewriter span {
      font-size: 40px;
      line-height: 42px;
    }
  }
  ${Media.xs} {
    font-size: 30px;
    line-height: 36px;
    span,
    .Typewriter,
    .Typewriter span {
      font-size: 30px;
      line-height: 36px;
    }
  }
`;

const OneRow = styled(FlexDiv)`
  .dlf {
    width: 43%;
    text-align: right;
  }

  ${Media.md} {
    flex-direction: column;
    .dlf {
      width: 100%;
      text-align: center;
    }
  }
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

export default Dapp;
