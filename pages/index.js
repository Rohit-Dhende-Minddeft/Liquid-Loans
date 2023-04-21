import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Gs from '../styles/theme.config';
import Link from 'next/link';
// import {Zoom, Fade } from 'react-reveal';
import { AiFillCaretRight } from '@react-icons/all-files/ai/AiFillCaretRight';
import Typewriter from 'typewriter-effect';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Media from '../styles/media-breackpoint';
import { Modal } from 'react-responsive-modal';

import BorrowArrow from '../public/images/borrrow-arrow.png';
import Waves from '../public/images/waves-3.png';
import DappScreen from '../public/images/dapp-screen.png';
import DappScreenW from '../public/images/dapp-screen-w.png';
import PurplePatchImg from '../public/images/purplep-img.png';
import FeatureImg1 from '../public/images/f1.png';
import FeatureImg2 from '../public/images/f2.png';
import FeatureImg3 from '../public/images/f3.png';
import MobileMockup from '../public/images/mobile-mockup.png';
import GreenTip from '../public/images/green-tip.png';

import USDLTKN from '../public/images/usdlTKN.png';
import LOANTKN from '../public/images/loanTKN.png';
import PLSTKN from '../public/images/plsTKN.png';
import AROV from '../public/images/graphArrow.png';
import AROV03 from '../public/images/graphArrow-2.png';
import AROV2 from '../public/images/graphArrowM.png';

import DappGrp01 from '../public/images/D-usdl-icon.jpg';
import DappGrp02 from '../public/images/D-loan-icon.jpg';
import DappGrp01L from '../public/images/D-usdl-icon-l.jpg';
import DappGrp02L from '../public/images/D-loan-icon-l.jpg';

import Image from 'next/image';

//import api
import { getCategories } from './api/blogs';
import Head from 'next/head';

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

export const getServerSideProps = async () => {
  const allCategories = await getCategories();

  return {
    props: { allCategories },
  };
};
const Home = (props) => {
  const { allCategories, setAllCategories } = props;
  const [languageData, setLanguageData] = useState([]);

  //set categories for header
  useEffect(() => {
    setAllCategories(allCategories);
  }, [allCategories, setAllCategories]);

  const translationCallback = () => {
    // console.log('lang change');
    collectData();
  };

  useEffect(() => {
    window.scrollTo(0, 10);

    // const googleTranslateElementInit = async () => {
    //   await new window.google.translate.TranslateElement(
    //     { pageLanguage: 'en' },
    //     'google_translate_element'
    //   );
    // }
    // setTimeout(() => {
    //   window.googleTranslateElementInit = googleTranslateElementInit()  ;
    //   collectData();

    // }, 300);

    document
      .getElementById('lannguage_ul')
      ?.addEventListener('DOMSubtreeModified', translationCallback, false);
    translationCallback();
  }, []);

  const collectData = () => {
    let ulData = document.getElementById('lannguage_ul');

    let tempLang = [];
    for (let i = 0; i < ulData?.children.length; i++) {
      tempLang.push(ulData.children[i].innerText);
    }
    setLanguageData(tempLang);
  };

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [play, setPlay] = React.useState(true);

  const typeWriterData = [
    'everyone, 24x7…',
    'Pulse holders...',
    'crypto investors...',
    'hodlers...',
    'businesses...',
    'home buyers...',
    'car buyers...',
    'students...',
    'emergencies...',
    'debt consolidation...',
    '... YOU, right now!',
  ];

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
      <HomeBG>
        <div className="aniMContainer">
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>
        <Gs.Container className="hmFix01">
          <Section1 className="wow fadeInUp" data-wow-duration="1.6s">
            {/* <Fade cascade bottom delay={300} duration={1600}> */}
            <HeadText>
              <span>
                {' '}
                0% <span className="colorful">interest-free</span>
              </span>
              <br />

              <OneRow>
                <div className="dlf">DeFi liquidity for</div>
                <i
                  className="notranslate"
                  style={{
                    display: 'inline-flex',
                    whiteSpace: 'nowrap',
                    fontStyle: 'normal',
                  }}
                >
                  <Typewriter
                    options={{
                      strings: typeWriterData,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </i>
              </OneRow>
            </HeadText>
            <ButtonList className="Show-sm" style={{ marginBottom: '15px' }}>
              <button className="wv-btn" onClick={onOpenModal} id="watch-video" aria-label='Watch Video'>
                <AiFillCaretRight />
                WATCH VIDEO
              </button>
            </ButtonList>
            <HeadDesc>
              <h1>
                Liquid Loans is the first truly decentralized lending protocol
                built specifically for PulseChain. <br />
                Algorithmic Stablecoin. Low 110% Collateral Ratio. No Repayment
                Schedule. Immutable. Governance-Free. No Admin Keys.{' '}
              </h1>
            </HeadDesc>
            <ButtonList>
              <a className="wv-btn Show-lg" onClick={onOpenModal} aria-label="Watch Video">
                <AiFillCaretRight />
                WATCH VIDEO
              </a>
              <Link href="/whitepaper" className="bn-btn" prefetch={false}>
                <Image src={BorrowArrow} alt="BorrowArrow" /> Read The Whitepaper
              </Link>
            </ButtonList>
            {/* </Fade> */}
          </Section1>
          <Section2>
            {/* <Fade cascade left delay={300}> */}
            <div className="Dapp-section wow fadeInLeft" data-wow-delay="0.3s">
              {props.isDarkTheme ? (
                <Image src={DappScreen} alt="DappScreen" />
              ) : (
                <Image src={DappScreenW} alt="DappScreenW" />
              )}

              <PurplePatch>
                <p>
                  With Liquid Loans, you never have to sell your Pulse.
                  #neverselling
                </p>
              </PurplePatch>
            </div>
            {/* </Fade> */}
          </Section2>
          <Section3>
            {/* <Zoom cascade> */}

            <div className="W33">
              <div className="wow zoomIn" data-wow-delay="0.2s">
                {' '}
                <Image src={FeatureImg3} alt="" />
                <DapTitle01 className="v2 sm">
                  {' '}
                  <p>
                    <span>0% Interest Rate</span>
                  </p>
                </DapTitle01>
                <FeatureDesc>
                  Liquid Loans charges a small, one-time fee to borrow USDL
                  instead of highly variable interest rates often found when
                  borrowing.
                </FeatureDesc>
              </div>
            </div>
            <div className="W33">
              <div className="wow zoomIn" data-wow-delay="0.2s">
                <Image src={FeatureImg2} alt="" />
                <DapTitle01 className="v2 sm">
                  {' '}
                  <p>
                    <span>1 USDL = 1 USD</span>
                  </p>
                </DapTitle01>
                <FeatureDesc>
                  Borrow USDL, a fully backed stablecoin pegged to the US Dollar
                  that’s maintained by an algorithmic monetary policy.
                </FeatureDesc>
              </div>
            </div>
            <div className="W33">
              <div className="wow zoomIn" data-wow-delay="0.2s">
                <Image src={FeatureImg1} alt="" />
                <DapTitle01 className="v2 sm">
                  {' '}
                  <p>
                    <span>110% Collateral Ratio</span>
                  </p>
                </DapTitle01>
                <FeatureDesc>
                  Liquid Loans efficient and fully autonomous liquidation
                  mechanism allows users to get the most liquidity for their
                  PLS.
                </FeatureDesc>
              </div>
            </div>
            {/* </Zoom> */}
          </Section3>
          <Section4>
            <RowMBX>
              <RowSbx01 className="v3">
                <Image
                  src={props.isDarkTheme ? DappGrp01 : DappGrp01L}
                  alt=""
                />
                <DapTitle01 className="v2">
                  {' '}
                  <span>USDL</span>{' '}
                </DapTitle01>
                <DapText02>
                  USDL is an algorithmic stablecoin that aims to always be worth
                  one US dollar. Many stablecoins today are fiat-backed. But
                  USDL is different. It doesn’t rely on dollars in a bank
                  account. Instead, USDL is minted when users deposit PLS
                  (PulseChain coin) as collateral that has been locked into
                  individual smart contracts called Vaults.
                </DapText02>
              </RowSbx01>
              <RowSbx01 className="v4">
                <Image
                  src={props.isDarkTheme ? DappGrp02 : DappGrp02L}
                  alt=""
                />
                <DapTitle01 className="v2">
                  <span>LOAN</span>{' '}
                </DapTitle01>
                <DapText02>
                  LOAN is the secondary token issued by the protocol. It
                  captures the fee revenue that is generated by the system and
                  incentivizes early adopters. You earn LOAN by providing USDL
                  to the Stability Pool in exchange for rewards. You can also
                  stake your LOAN tokens to earn the revenue paid for borrowing
                  or redeeming USDL.
                </DapText02>
              </RowSbx01>
            </RowMBX>

            <BlueLayer className="wow fadeInUp">
              <BlueLayer2>
                <div className="W50">
                  <Image
                    src={MobileMockup}
                    alt=""
                    className="mm-img  wow fadeInLeft"
                    data-wow-delay="0.6s"
                  />
                </div>

                <div className="W40 wow fadeInRight" data-wow-delay="0.6s">
                  <BenefitTitle
                    className="wow fadeInRight"
                    data-wow-delay="0.1s"
                  >
                    Key Benefits
                  </BenefitTitle>
                  <BenefitDesc
                    className="wow fadeInRight"
                    data-wow-delay="0.2s"
                  >
                    <Image src={GreenTip} alt="" />{' '}
                    <h3> Interest-free borrowing</h3>
                  </BenefitDesc>
                  <BenefitDesc
                    className="wow fadeInRight"
                    data-wow-delay="0.3s"
                  >
                    <Image src={GreenTip} alt="" />{' '}
                    <h3> Low collateral ratio (110%)</h3>
                  </BenefitDesc>
                  <BenefitDesc
                    className="wow fadeInRight"
                    data-wow-delay="0.4s"
                  >
                    <Image src={GreenTip} alt="" /> <h3> Immutable</h3>
                  </BenefitDesc>
                  <BenefitDesc
                    className="wow fadeInRight"
                    data-wow-delay="0.5s"
                  >
                    <Image src={GreenTip} alt="" /> <h3> Non-custodial</h3>
                  </BenefitDesc>
                  <BenefitDesc
                    className="wow fadeInRight"
                    data-wow-delay="0.6s"
                  >
                    <Image src={GreenTip} alt="" /> <h3> No admin keys</h3>
                  </BenefitDesc>
                  <BenefitDesc
                    className="wow fadeInRight"
                    data-wow-delay="0.7s"
                  >
                    <Image src={GreenTip} alt="" /> <h3> Governance-free</h3>
                  </BenefitDesc>
                  <BenefitDesc
                    className="wow fadeInRight"
                    data-wow-delay="0.8s"
                  >
                    <Image src={GreenTip} alt="" />{' '}
                    <h3> Algorithmic monetary policy</h3>
                  </BenefitDesc>
                  <BenefitDesc
                    className="wow fadeInRight"
                    data-wow-delay="0.9s"
                  >
                    <Image src={GreenTip} alt="" />{' '}
                    <h3> Censorship resistance</h3>
                  </BenefitDesc>
                  <BenefitDesc className="wow fadeInRight" data-wow-delay="1s">
                    <Image src={GreenTip} alt="" /> <h3> Hard price floor</h3>
                  </BenefitDesc>
                  <BenefitDesc
                    className="wow fadeInRight"
                    data-wow-delay="1.1s"
                  >
                    <Image src={GreenTip} alt="" /> <h3> Growth incentives</h3>
                  </BenefitDesc>
                  {/* </Fade> */}
                </div>
              </BlueLayer2>
            </BlueLayer>
            {/* </Fade> */}
          </Section4>
          <Section5>
            {/* <Fade right cascade> */}
            <DapTitle01 className="v2 wow fadeInRight">
              <span>Main Use Cases</span>
            </DapTitle01>
            <HeadDesc className="wow fadeInRight">
              There are many ways you can use Liquid Loans, including:{' '}
            </HeadDesc>
            {/* </Fade> */}
            <RoundBlockOuter>
              {/* <Zoom delay={300} cascade> */}
              <RoundBlock className="color1 wow zoomIn" data-wow-delay="0.3s">
                <RoundBlockInner>
                  <RoundTitle>BORROW</RoundTitle>
                  <RoundDesc>
                    Lock up your existing PLS and mint your USDL loan
                  </RoundDesc>
                </RoundBlockInner>
              </RoundBlock>
              <RoundBlock className="color2 wow zoomIn" data-wow-delay="0.3s">
                <RoundBlockInner>
                  <RoundTitle>REDEEM</RoundTitle>
                  <RoundDesc>
                    Unlock 1 USD worth of PLS for 1 USDL in the future, if you
                    choose
                  </RoundDesc>
                </RoundBlockInner>
              </RoundBlock>
              <RoundBlock className="color3 wow zoomIn" data-wow-delay="0.3s">
                <RoundBlockInner>
                  <RoundTitle>STAKE </RoundTitle>
                  <RoundDesc>
                    Stake LOAN to earn USDL and PLS from the borrowing fee
                    revenue
                  </RoundDesc>
                </RoundBlockInner>
              </RoundBlock>
              <RoundBlock className="color4 wow zoomIn" data-wow-delay="0.3s">
                <RoundBlockInner>
                  <RoundTitle>EARN</RoundTitle>
                  <RoundDesc>
                    Provide USDL to the stability pool for LOAN and PLS rewards
                  </RoundDesc>
                </RoundBlockInner>
              </RoundBlock>
              {/* </Zoom> */}
            </RoundBlockOuter>
          </Section5>
          <Section6>
            {/* <Zoom delay={300} cascade> */}
            <DapTitle01 className="v2 wow zoomIn" data-wow-delay="0.3s">
              <span>How It Works</span>
            </DapTitle01>
            <HeadDesc className="v2 wow zoomIn" data-wow-delay="0.3s">
              Here is a simple break-down of how the ecosystem works.{' '}
            </HeadDesc>

            <GraphMBX className="v2 wow zoomIn" data-wow-delay="0.3s">
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
            {/* </Zoom> */}
          </Section6>

          <Section7 className="for-LG">
            {/* <Fade top delay={300} cascade> */}
            <DapTitle01 className="v2 wow fadeInDown" data-wow-delay="0.3s">
              <span style={{ paddingBottom: '20px' }}>Our Community</span>
            </DapTitle01>
            <Carousel
              responsive={responsive}
              autoPlay={true}
              autoPlaySpeed={10000}
              infinite={true}
              showDots={true}
              arrows={false}
            >
              <div className="item">
                <UserReview>
                  “At 0% interest, the team has truly built this to benefit the
                  community and I for one am very grateful. It’s like a dream!”
                </UserReview>
                <UserAuthor>- LY</UserAuthor>
                <UserReview>
                  “A brilliant and responsible way to use an asset that you no
                  longer have to worry about selling. So many ways to diversify
                  your investment and be community driven at the same time.”
                </UserReview>
                <UserAuthor>- GL</UserAuthor>
              </div>
              <div className="item">
                <UserReview>
                  “I'm incredibly excited that this protocol exists. I think
                  it's one of the final cogs needed for a truly sovereign
                  financial portfolio!”
                </UserReview>
                <UserAuthor>- ES</UserAuthor>
                <UserReview>
                  “Liquid Loans is an excellent opportunity to access the value
                  locked in PLS that I want to hold long-term without having to
                  sell. It's a win/win!”
                </UserReview>
                <UserAuthor>- LV</UserAuthor>
              </div>
            </Carousel>
            {/* </Fade> */}
          </Section7>

          <Section7 className="for-SM">
            {/* <Fade top delay={300} cascade> */}
            <BenefitTitle className="v2" style={{ marginBottom: '65px' }}>
              What our community is saying!
            </BenefitTitle>
            <Carousel
              responsive={responsive}
              autoPlay={true}
              autoPlaySpeed={10000}
              infinite={true}
              showDots={true}
              arrows={false}
            >
              <div className="item">
                <UserReview>
                  “At 0% interest, the team has truly built this to benefit the
                  community and I for one am very grateful. It’s like a dream!”
                </UserReview>
                <UserAuthor>- LY</UserAuthor>
              </div>
              <div className="item">
                <UserReview>
                  “A brilliant and responsible way to use an asset that you no
                  longer have to worry about selling. So many ways to diversify
                  your investment and be community driven at the same time.”
                </UserReview>
                <UserAuthor>- GL</UserAuthor>
              </div>
              <div className="item">
                <UserReview>
                  “I'm incredibly excited that this protocol exists. I think
                  it's one of the final cogs needed for a truly sovereign
                  financial portfolio!”
                </UserReview>
                <UserAuthor>- ES</UserAuthor>
              </div>
              <div className="item">
                <UserReview>
                  “Liquid Loans is an excellent opportunity to access the value
                  locked in PLS that I want to hold long-term without having to
                  sell. It's a win/win!”
                </UserReview>
                <UserAuthor>- LV</UserAuthor>
              </div>
            </Carousel>
            {/* </Fade> */}
          </Section7>
          <Section13>
            {/* <ButtonList>
            <Link to={referralCode !== null ? `/love?referralCode=${referralCode}&refSource=${refSource}` : '/love'} className="bn-btn" > ❤️  JOIN THE REFERRAL PROGRAM HERE</Link>
          </ButtonList> */}
            <p className="TelLink">
              Got Questions? Join Over 9,500 Members In Our Telegram – &nbsp;
              <a target="_blank" href="https://t.me/liquidloans" aria-label="Got Questions? Join Over 9,500 Members In Our Telegram">
                Ask Them Here
              </a>
            </p>

            {/* <p className="TelLink">Brand New To Liquid Loans? Watch Our 4-Minute Explainer Video&nbsp;
                    <Link  to={{ pathname: '/how-it-works' }}>Click Here.</Link></p> 

                  <p className="TelLink">To Read More About The Sacrifice – &nbsp;
                    <a target="_blank" href='https://thesacrifice.io/'>Click Here</a></p>*/}
          </Section13>
        </Gs.Container>
      </HomeBG>
      <div>
        <Modal
          open={open}
          onClose={onCloseModal}
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
                src="https://www.youtube.com/embed/iNKMhHub64o?autoplay=1"
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

const HomeBG = styled.div`
  background-image: url('${(props) => props.theme.BodyBg}');
  background-repeat: no-repeat;
  background-position: top center;

  #lannguage_ul {
    opacity: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;
    left: 0;
    top: 0;
  }
`;

const Section1 = styled.div`
  padding: 160px 0px 165px;
  text-align: center;
  ${Media.xs} {
    padding: 110px 0px 60px;
  }
`;

const HeadText = styled.div`
  span {
    font-size: 110px;
    line-height: 110px;
    ${Media.md} {
      font-size: 80px;
      line-height: 80px;
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

const ButtonList = styled(FlexDiv)`
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
    cursor: pointer;
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
    }
    :hover {
      filter: brightness(1.3);
    }
    img {
      margin-right: 10px;
    }
  }
`;

const Section2 = styled.div`
  padding-bottom: 315px;
  ${Media.sm} {
    padding-bottom: 35px;
  }
  ${Media.xs} {
    padding-bottom: 60px;
  }
  .Dapp-section {
    max-width: 1277px;
    margin: 0 auto;
    position: relative;
    ${Media.lg} {
      max-width: 1180px;
    }
    ${Media.md} {
      max-width: 960px;
    }

    img {
      box-shadow: 0px 0px 34px 0px ${(props) => props.theme.DappBShadow};
    }
    :before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 0px;
      background: url('${(props) => props.theme.SaidBG}') left top no-repeat;
      background-size: contain;
      width: 1059px;
      height: 1124px;
    }
  }
`;

const PurplePatch = styled(FlexDiv)`
  position: absolute;
  z-index: 1;
  bottom: -255px;
  right: -32px;
  background: url(${PurplePatchImg.src}) no-repeat;
  background-size: contain;
  width: 432px;
  height: 394px;

  ${Media.lg} {
    bottom: -205px;
    right: -42px;
    width: 402px;
    height: 364px;
  }
  ${Media.md} {
    width: 342px;
    height: 314px;
    bottom: -145px;
    right: -52px;
  }
  p {
    color: #fff;
    font-size: 32px;
    font-weight: 300;
    text-align: center;
    max-width: 230px;
    ${Media.md} {
      font-size: 24px;
    }
  }
  ${Media.sm} {
    width: 300px;
    height: 274px;
    position: relative;
    bottom: auto;
    right: auto;
    margin: 0 auto;
    p {
      font-size: 21px;
      max-width: 160px;
    }
  }
`;

const Section3 = styled(FlexDiv)`
  max-width: 1276px;
  margin: 0 auto;
  align-items: flex-start;
  padding-bottom: 60px;

  ${Media.sm} {
    padding-bottom: 0;
  }

  .W33 {
    width: 33.33%;
    padding: 0px 72px;
    text-align: center;
    border-right: 1px solid ${(props) => props.theme.FBorderRight};
    ${Media.md} {
      padding: 0px 40px;
    }
    ${Media.md2} {
      padding: 0px 15px;
    }
    img {
      margin: 25px 0px 20px;
      filter: brightness(${(props) => props.theme.ImgFilter});
    }
    :last-child {
      border-right: none;
    }

    ${Media.sm} {
      width: 100%;
      padding: 0px 20px 30px 20px;
      border: none;
    }
  }
`;

const FeatureTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
  line-height: normal;
  margin: 0px 0px 20px;
  background: -webkit-linear-gradient(0deg, #7049ff, #fc0af6, #fbedab);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${Media.md2} {
    font-size: 22px;
  }
`;

const FeatureDesc = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin: 0px 0px 20px;
  color: ${(props) => props.theme.TextMilkWhite};
`;

const Section4 = styled.div`
  max-width: 1276px;
  margin: 0 auto;
  padding-bottom: 250px;
  ${Media.xs} {
    padding-bottom: 100px;
  }
`;

const BlueLayer = styled.div`
  max-width: 1196px;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.GColor1Light},
    ${(props) => props.theme.GColor2Light}
  );
  position: relative;
  transform: scaleY(0.9);
`;

const BlueLayer2 = styled(FlexDiv)`
  justify-content: space-between;
  max-width: 1108px;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.GColor1},
    ${(props) => props.theme.GColor2}
  );
  padding: 30px;
  box-shadow: 0px 0px 40px 0px ${(props) => props.theme.BG1Shadow};
  transform: scaleY(1.1);
  .W50 {
    width: 60%;
    .mm-img {
      position: absolute;
      top: -25px;
      left: -44px;
      ${Media.md2} {
        top: 49px;
        left: -48px;
        max-width: 450px;
      }
    }
    ${Media.sm} {
      width: 100%;
      .mm-img {
        position: relative;
        top: auto;
        left: auto;
      }
    }
    ${Media.sm} {
      .mm-img {
        max-width: 100%;
      }
    }
  }
  .W40 {
    width: 40%;
    ${Media.sm} {
      width: 100%;
    }
  }
`;

const BenefitTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  line-height: 36px;
  margin: 0px 0px 30px;
  color: #fff;
  ${Media.md2} {
    br {
      display: none;
    }
  }

  &.v2 {
    color: ${(props) => props.theme.TextWhite};
  }
`;

const BenefitDesc = styled(FlexDiv)`
  justify-content: flex-start;
  font-size: 21px;
  font-weight: 500;
  line-height: 34px;
  color: #fff;
  ${Media.xs} {
    font-size: 16px;
  }
  img {
    margin-right: 20px;
  }
`;

const Section5 = styled.div`
  text-align: center;
  min-height: 800px;
  margin-bottom: 90px;
  background: url(${Waves.src}) no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  ${Media.sm} {
    margin-bottom: 20px;
    background: none;
  }
`;

const RoundBlockOuter = styled.div`
  max-width: 618px;
  margin: 0 auto;
  position: relative;
`;

const RoundBlock = styled(FlexDiv)`
  width: 266px;
  height: 266px;
  border-radius: 50%;
  box-shadow: 0px 0px 30px 0px ${(props) => props.theme.MenuBoxShadow};
  text-align: left;
  margin: 0 auto;
  &.color1 {
    background-color: ${(props) => props.theme.Rcolor1};
  }
  &.color2 {
    background-color: ${(props) => props.theme.Rcolor2};
    position: absolute;
    top: 167px;
    right: 0px;
  }
  &.color3 {
    background-color: ${(props) => props.theme.Rcolor3};
    position: absolute;
    top: 336px;
    left: calc(50% - 133px);
  }
  &.color4 {
    background-color: ${(props) => props.theme.Rcolor4};
    position: absolute;
    top: 167px;
    left: 0px;
  }

  ${Media.sm} {
    &.color2 {
      position: relative;
      left: auto;
      top: -40px;
      right: auto;
    }
    &.color3 {
      position: relative;
      left: auto;
      top: -80px;
      right: auto;
    }
    &.color4 {
      position: relative;
      left: auto;
      top: -120px;
      right: auto;
    }
  }
`;

const RoundBlockInner = styled.div`
  max-width: 168px;
  margin: 0 auto;
  text-align: center;
`;

const RoundTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
  line-height: normal;
  margin: 0px 0px 6px;
  color: #fff;
`;

const RoundDesc = styled.div`
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  margin: 0px;
  color: #fff;
`;

const Section6 = styled.div`
  text-align: center;
  padding-bottom: 90px;
  ${Media.sm} {
    padding-bottom: 55px;
  }
`;

const Section7 = styled.div`
  text-align: center;
  padding-bottom: 70px;
  max-width: 1222px;
  margin: 0 auto 70px;
  background: url('${(props) => props.theme.TestiBG}') left top no-repeat;
  background-size: cover;
  ${Media.sm} {
    margin: 0 auto 0px;
  }
  .item {
    img {
      margin: 30px 0px;
      box-shadow: 0px 0px 20px 0px ${(props) => props.theme.WhiteShadow};
      border-radius: 50%;
    }
  }
  .react-multi-carousel-dot button {
    background-color: ${(props) => props.theme.TextMilkWhiteLight};
    border: none;
    margin: 0px 8px;
  }
  .react-multi-carousel-dot--active button {
    background-color: ${(props) => props.theme.TextMilkWhite};
  }

  &.for-LG {
    ${Media.sm} {
      display: none !important;
    }
  }
  &.for-SM {
    display: none !important;
    ${Media.sm} {
      display: block !important;
    }
  }
`;
const UserReview = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 36px;
  color: ${(props) => props.theme.TextMilkWhite};
  max-width: 686px;
  width: 100%;
  margin: 0 auto 15px;
`;
const UserAuthor = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  color: ${(props) => props.theme.TextMilkWhite};
  margin: 0px 0px 65px;
`;

const GraphMBX = styled(FlexDiv)`
  width: 100%;
  margin: 50px auto;
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
    right: -122px;
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
    padding: 10px;
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

const WhitpaperBX = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: block;
  z-index: 100000;
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
    padding-left: 20px;
    padding-right: 20px;
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

  .TelLink {
    font-size: 20px;
    color: ${(props) => props.theme.TextWhite};
    margin-top: 95px;
    a {
      text-decoration: underline;
      color: ${(props) => props.theme.DefitxtColor01};
      :hover {
        color: ${(props) => props.theme.TextWhite};
      }
    }
  }
`;

const RowMBX = styled(FlexDiv)`
  justify-content: flex-start;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 120px auto;
  align-items: flex-start;

  &.v2 {
    margin-top: 190px;
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
    font-size: 39px;
    line-height: 30px;
  }
  &.v2 {
    align-items: center;
    justify-content: center;
    width: 100%;
    background-position: center top;

    &.sm {
      margin-bottom: 3px;
      p {
        margin: 0;
        padding: 0;
        font-size: 30px;
        line-height: 30px;
      }
    }
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

export default Home;
