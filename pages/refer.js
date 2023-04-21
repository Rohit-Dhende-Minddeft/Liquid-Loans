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

import HowWave from './../public/images/refer-wave.png';
import PartiIMG from './../public/images/partici-img.png';
import PartiIMG02 from './../public/images/partici-img-02.png';
import ParArrow01 from './../public/images/bx-Aerrow-01.png';
import ParArrow02 from './../public/images/bx-Aerrow-02.png';
import RewardBXbg from './../public/images/refer-square.png';
import CaseStudyBG from './../public/images/curve-01.png';
import CaseStudyBG02 from './../public/images/curve-02.png';
import Videomockup from './../public/images/thumb-013.jpg';
import PlayBtn from './../public/images/play-btn.png';
import Image from 'next/image';
import Head from 'next/head';

const Refer = (props) => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
    const queryParams = new URLSearchParams(window.location.search);
    const referralCode = queryParams.get('referralCode');
    const refSource = queryParams.get('refSource');
    setReferralCode(referralCode);
    setRefSource(refSource);
  }, []);
  const [open, setOpen] = useState(false);
  const [referralCode, setReferralCode] = useState('');
  const [refSource, setRefSource] = useState('');
  const [popupOn, setpopupOn] = useState(true);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [open01, setopen01] = React.useState(false);
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

  //get current url for canonical tag and og:url
  const [location, setLocation] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLocation(window.location.href);
    }
  }, [location]);

  return (
    <>
      {referralCode !== null ? (
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
          {popupOn ? (
            <PopupINFO>
              <div className="PopMBX">
                <a
                  href="javascript:void(0);"
                  onClick={() => setpopupOn(false)}
                  className="popupClosBTN"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 43 43"
                    width={30}
                    height={30}
                  >
                    <line
                      x1="15"
                      y1="15"
                      x2="30"
                      y2="30"
                      stroke="#000000"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="16"
                    ></line>
                    <line
                      x1="30"
                      y1="15"
                      x2="15"
                      y2="30"
                      stroke="#000000"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="16"
                    ></line>
                  </svg>
                </a>
                <h2>WELCOME!</h2>
                <p>
                  Looks like you’ve landed on this page from a referral link.
                  Please note that to participate and potentially earn rewards
                  from the program, you must join the program. Please watch our
                  video through to the end, then scroll down and click the
                  button to join and secure your own unique referral link to
                  share with others. We thank you for your support and
                  commitment!
                </p>
                <ButtonList02>
                  <a 
                    href="javascript:void(0);"
                    onClick={() => setpopupOn(false)}
                    className="bn-btn"
                  >
                    {' '}
                    ❤️ I UNDERSTAND, CONTINUE
                  </a>
                </ButtonList02>
              </div>
            </PopupINFO>
          ) : null}
        </>
      ) : (
        <>
          {popupOn ? (
            <PopupINFO>
              <div className="PopMBX">
                <a
                  href="javascript:void(0);"
                  onClick={() => setpopupOn(false)}
                  className="popupClosBTN"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 43 43"
                    width={30}
                    height={30}
                  >
                    <line
                      x1="15"
                      y1="15"
                      x2="30"
                      y2="30"
                      stroke="#000000"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="16"
                    ></line>
                    <line
                      x1="30"
                      y1="15"
                      x2="15"
                      y2="30"
                      stroke="#000000"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-miterlimit="16"
                    ></line>
                  </svg>
                </a>
                <h2>IMPORTANT – PLEASE READ</h2>
                <p>
                  The referral program is now closed. Participation after 12 pm
                  UTC on 21st March has no further benefit, and referral and
                  referee bonuses are no longer available to participants.
                </p>
                <ButtonList02>
                  <Link
                    href="javascript:void(0);"
                    onClick={() => setpopupOn(false)}
                    className="bn-btn"
                    prefetch={false}
                  >
                    I UNDERSTAND, CONTINUE
                  </Link>
                </ButtonList02>
              </div>
            </PopupINFO>
          ) : null}
        </>
      )}

      <VideoBG>
        <HowWaves>
          <Gs.Container>
            {/* <Fade delay={50} duration={1200}> */}
            <Section4>
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
                        <div className="overlay">
                          <a
                            onClick={() => setopen01(true)}
                            aria-label="Play Button"
                          >
                            <Image src={PlayBtn} alt="Play Button" />
                          </a>
                        </div>
                      </div>
                      <div className="W60">
                        <BenefitTitle>
                          ‘Love ❤️ Liquid Loans’{' '}
                          <span>Welcome To Our Referral Program</span>
                        </BenefitTitle>
                        <BenefitDesc>
                          We’re thrilled you’ve landed on this page! To
                          participate and potentially earn rewards from the
                          program, you must join the program. Please watch our
                          video through to the end, then scroll down and click
                          the button to join and secure your own unique referral
                          link to share with others. We thank you for your
                          support and commitment!{' '}
                        </BenefitDesc>
                      </div>
                    </div>
                  </Carousel>
                </BlueLayer2>
              </BlueLayer>
            </Section4>
            {/* </Fade> */}
          </Gs.Container>
        </HowWaves>

        <Section13>
          <EcoTitle className="v2">
            Participation
            <HeadDesc>
              This program has been designed to encourage the growth of the
              Liquid Loans community and increase adoption of the protocol. It
              is open for anyone to participate and earn rewards, and as you'll
              see, it's super easy to get set up. Here’s a step-by-step
              breakdown of the process:
            </HeadDesc>
          </EcoTitle>
          <ParMBX>
            <ParSbx01>
              <ParSbx02 className="arrow02">
                Step 1
                <p>
                  Watch the full video at the top of this page, then read these
                  Participation steps, the Rewards list, and the Examples also
                  outlined below.
                </p>
              </ParSbx02>
              <ParSbx02 className="v2 arrow01">
                Step 2
                <p>
                  Once you have completed Step 1, click the purple button to
                  open the form page and secure your own unique referral link.
                </p>
              </ParSbx02>
              <ParSbx02>
                Step 3
                <p>
                  After the form page has opened, connect to MetaMask,
                  authenticate your wallet address, then click the ‘Sign’ button
                  to obtain your referral link.
                </p>
              </ParSbx02>
            </ParSbx01>
            <ParSbx01 className="withIMG">
              <Image src={PartiIMG} alt="" />
            </ParSbx01>
          </ParMBX>
          <ParMBX>
            <ParSbx01 className="">
              <Image src={PartiIMG02} alt="" />
            </ParSbx01>
            <ParSbx01>
              <ParSbx02 className="v2 arrow01">
                Step 4
                <p>
                  Copy your unique referral link and share with family, friends
                  and others across all your social channels, and any other
                  manner you choose.
                </p>
              </ParSbx02>
              <ParSbx02 className="arrow02">
                Step 5
                <p>
                  Keep a note of your unique referral link somewhere safe and
                  bookmark this page so you can return to it at any time to see
                  your referral count –{' '}
                  <Link href="/love" prefetch={false}>liquidloans.io/love</Link>
                </p>
              </ParSbx02>
              <ParSbx02 className="v2">
                Step 6
                <p>
                  Navigate to our Resources page where you can download a
                  collection of graphics, email templates, sms templates, and
                  more to help with your referral efforts –{' '}
                  <Link href="/resources" prefetch={false}>liquidloans.io/resources</Link>
                </p>
              </ParSbx02>
            </ParSbx01>
          </ParMBX>
          {/* <ButtonList>
            <Link href={referralCode !== null ? `/love?referralCode=${referralCode}&refSource=${refSource}` : '/love'} className="bn-btn" > ❤️  JOIN THE REFERRAL PROGRAM HERE</Link>
          </ButtonList> */}
        </Section13>

        <Section13>
          <EcoTitle className="v2">
            Rewards
            <HeadDesc>
              There are three ways to participate and earn rewards – as a
              ‘Referrer’, as a ‘Referee’, and as a ‘Self Referrer’.
            </HeadDesc>
          </EcoTitle>
          <HeadDesc className="v2">
            <p>
              A Referrer is a primary person who shares his/her referral link
              with others so they can join the program... a Referee is a
              secondary person who uses that referral link to join the
              program... and a Self Referrer is a primary person who has a
              minimum of 10 or more Referees, and he/she now qualifies for an
              additional bonus.
            </p>

            <p>
              <span style={{ textDecoration: 'underline' }}>IMPORTANT:</span>{' '}
              Note that you cannot be a Self-Referrer and a Referee at the same
              time. If you have arrived on this page from someone else's link,
              and you want to be a Self-Referrer, you must open a new browser to
              avoid being cookie'd. To do that, simply copy and paste this link
              in a different browser:{' '}
              <Link href="/refer" prefetch={false}>https://www.liquidloans.io/refer</Link>
            </p>
          </HeadDesc>
          <RewarMBX>
            <RewarSbx01>
              <i>1</i>
              <p>
                <span>As a Referrer</span> – earn 5% of your Referees’ sacrifice
                points when they use your link.
              </p>
              <p>
                When a Referee uses your referral link to join the program, you
                as the Referrer will receive a bonus 5% of their total sacrifice
                points.
              </p>
              <p>
                To qualify as a Referrer, a minimum of US $500 must be
                sacrificed from your registered wallet address and your
                Referees’ linked registered wallet address. There is no limit on
                how many Referees a Referrer may have.
              </p>
            </RewarSbx01>
            <RewarSbx01>
              <i>2</i>
              <p>
                <span>As a Referee</span> – earn 5% of your own sacrifice points
                when you use someone else’s link.
              </p>
              <p>
                When you use a Referrer’s referral link to join the program, you
                as the Referee will receive a bonus 5% of your own total
                sacrifice points.
              </p>
              <p>
                To qualify as a Referee, a minimum of US $500 must be sacrificed
                from your registered wallet address and your Referrer’s linked
                registered wallet address.
              </p>
            </RewarSbx01>
            <RewarSbx01>
              <i>3</i>
              <p>
                <span>As a Self-Referrer </span> – earn 10% of your own
                sacrifice points with 10 or more Referees.
              </p>
              <p>
                When 10 or more Referees use your referral link to join the
                program, you will receive a bonus 5% of their total sacrifice
                points. In addition, you will also receive 10% of your own total
                sacrifice points.
              </p>
              <p>
                To qualify as a Self-Referrer, a minimum of US $500 must be
                sacrificed from your registered wallet address and your
                Referees’ linked registered wallet address.
              </p>
              <p>
                Bonus points are calculated at the end of the sacrifice phase
                and will be applied to the total accumulated points.
              </p>
            </RewarSbx01>
          </RewarMBX>
        </Section13>

        <Section13>
          <EcoTitle className="v2">
            Examples
            <HeadDesc>
              Here’s 3 potential examples of how this might work:
            </HeadDesc>
          </EcoTitle>

          <CasStdyMBX>
            <CasStdySbx01>
              <span>Example &nbsp; 1 &nbsp;– &nbsp;As a Referrer</span>
              <p>
                {' '}
                You join the program by registering your wallet address and
                share your referral link with 10 friends. 8 of your 10 friends
                sacrifice a total of US $30,000. 2 of your friends do not
                participate, or are under US $500 in sacrificed amount.
              </p>
              <p>
                As a Referrer, you will receive up to US $1,500 worth of bonus
                points – calculated at the end of the sacrifice phase and based
                on the total points your 8 friends have accumulated from their
                US $30,000 sacrificed.
              </p>
              <p>
                In addition, your 8 friends will also receive up to US $1,500
                worth of bonus points, shared proportional to their individual
                sacrifice points total.
              </p>
            </CasStdySbx01>

            <CasStdySbx01>
              <span>Example &nbsp; 2&nbsp; – &nbsp;As a Referee</span>
              <p>
                You receive a referral link and join the program by registering
                your wallet address. You then sacrifice US $5,000.
              </p>
              <p>
                As a Referee, you will receive up to US $250 worth of bonus
                points – calculated at the end of the sacrifice phase and based
                on the total points you accumulate.
              </p>
              <p>
                In addition, your Referrer will also receive up to US $250 worth
                of bonus points.
              </p>
            </CasStdySbx01>

            <CasStdySbx01>
              <span>Example&nbsp; 3&nbsp; – &nbsp;As a Self-Referrer</span>
              <p>
                You join the program by registering your wallet address and
                share your referral link with 100 people in your network. 85 of
                the 100 people sacrifice a total of US $1,000,000. 15 of these
                people do not participate, or are under US $500 in sacrificed
                amount. You also sacrifice US $25,000 yourself.
              </p>
              <p>
                You will receive up to US $50,000 worth of bonus points –
                calculated at the end of the sacrifice phase and based on the
                total points the 85 people have accumulated from their US
                $1,000,000 sacrificed.
              </p>
              <p>
                In addition, your 85 friends will also receive up to US $50,000
                worth of bonus points, shared proportional to their individual
                sacrifice points total.
              </p>
              <p>
                Plus, because you have 10 or more Referees, and assuming you did
                not join the program from someone else’s referral link, you now
                automatically qualify to be a Self-Referrer and will receive up
                to US $2,500 worth of bonus points – calculated at the end of
                the sacrifice phase and based on the total points you
                accumulate.
              </p>
              <p>
                In this example, you could receive up to US $52,500 worth of
                bonus points from your referral efforts.
              </p>
            </CasStdySbx01>
          </CasStdyMBX>
        </Section13>
        <Section13>
          {/* <ButtonList>
            <Link to={referralCode !== null ? `/love?referralCode=${referralCode}&refSource=${refSource}` : '/love'} className="bn-btn" > ❤️  JOIN THE REFERRAL PROGRAM HERE</Link>
          </ButtonList> */}
          <p className="TelLink">
            Got Questions? Join Over 9,500 Members In Our Telegram – &nbsp;
            <Link
              target="_blank"
              href="https://t.me/liquidloans"
              aria-label="Got Questions? Join Over 9,500 Members In Our Telegram"
            >
              Ask Them Here
            </Link>
          </p>

          {/* <p className="TelLink">Brand New To Liquid Loans? Watch Our 4-Minute Explainer Video&nbsp;
                    <Link  to={{ pathname: '/how-it-works' }} prefetch={false}>Click Here.</Link></p> 

                  <p className="TelLink">To Read More About The Sacrifice – &nbsp;
                    <a target="_blank" href='https://thesacrifice.io/'>Click Here</a></p>*/}
        </Section13>
      </VideoBG>
      <div>
        <Modal
          open={open01}
          onClose={() => setopen01(false)}
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
                src="https://www.youtube.com/embed/at34aB-KG8I?autoplay=1"
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
  &.v2 {
    font-size: 20px;
    line-height: 26px;
    font-weight: 400;
    max-width: 1000px;
  }
  a {
    color: ${(props) => props.theme.DefitxtColor01};
    text-decoration: underline;

    :hover {
      color: ${(props) => props.theme.TextWhite};
    }
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

const BenefitTitle = styled.div`
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  line-height: normal;
  margin: 0px 0px 30px;
  color: #fff;

  span {
    display: block;
    text-align: center;
    width: 100%;
    font-size: 30px;
  }

  ${Media.md2} {
    font-size: 22px;
    margin: 0px 0px 15px;
  }
`;

const BenefitDesc = styled.div`
  justify-content: flex-start;
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
  color: #fff;

  span {
    display: inline-block;
    margin-left: 5px;
  }
`;

const RewarMBX = styled(FlexDiv)`
  width: 100%;
  max-width: 960px;
  margin: 0 auto 0 auto;
`;
const RewarSbx01 = styled(FlexDiv)`
  width: 100%;
  padding: 10px 0 10px 65px;
  line-height: 26px;
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.TextWhite};
  justify-content: flex-start;
  position: relative;
  i {
    background: url(${RewardBXbg.src}) 50% 50% no-repeat;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    width: 37px;
    height: 37px;
    font-style: normal;
    position: absolute;
    left: 8px;
    top: 23px;
  }
  span {
    font-weight: 400;
    color: ${(props) => props.theme.DefitxtColor01};
  }

  span.liner {
    font-weight: 400;
    color: ${(props) => props.theme.TextWhite};
    text-decoration: underline;
  }
  p {
    text-align: left;
    margin-bottom: 0;
  }
`;
const CasStdyMBX = styled(FlexDiv)`
  width: 100%;
  padding: 0 0 25px 0;
  background: url(${CaseStudyBG.src}) left bottom no-repeat;

  &.v2 {
    background: url(${CaseStudyBG02.src}) right bottom no-repeat;
  }

  ${Media.md} {
    background-size: 75%;
  }
`;
const CasStdySbx01 = styled(FlexDiv)`
  width: 100%;
  max-width: 1000px;
  font-size: 20px;
  font-weight: 300;
  margin: 0 auto 22px auto;
  padding: 35px;
  color: ${(props) => props.theme.TextWhite};
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.CasStdyBG01};
  -webkit-box-shadow: 0 0 20px 1px rgba(15, 15, 15, 0.4);
  box-shadow: 0 0 20px 1px rgba(15, 15, 15, 0.4);

  a {
    color: ${(props) => props.theme.DefitxtColor01};
    text-decoration: underline;

    :hover {
      color: ${(props) => props.theme.TextWhite};
    }
  }

  p {
    text-align: left;
    margin-bottom: 0;
  }
  span {
    font-size: 27px;
    font-weight: 700;
    letter-spacing: -1px;
  }
  ${Media.md} {
    width: 95%;
  }
`;

const Section4 = styled.div`
  padding: 116px 0px 40px 0;
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
    padding: 100px 0px 90px;
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

const HowWaves = styled.div`
  /* background:url(${HowWave.src}) no-repeat; background-size: contain; background-position: center; */
`;

const DefiMbx = styled(FlexDiv)`
  width: 100%;
  flex-direction: column;
`;
const DefiSbx01 = styled(FlexDiv)`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  line-height: 28px;
  font-size: 20px;
  font-weight: 300;
  color: ${(props) => props.theme.TextWhite};
  padding: 20px 0;
  border-bottom: 1px solid ${(props) => props.theme.DefiBordr01};

  span {
    font-weight: 700;
    margin-right: 6px;
    color: ${(props) => props.theme.DefitxtColor01};
  }
`;
const ParMBX = styled(FlexDiv)`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: flex-start;
  ${Media.sm} {
    flex-wrap: wrap-reverse;
  }
`;
const ParSbx01 = styled(FlexDiv)`
  width: 50%;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 60px;

  &.withIMG {
    align-items: flex-end;
    padding: 30px;
  }

  ${Media.md} {
    &:nth-child(1) {
      width: 59%;
    }
    &:nth-child(2) {
      width: 41%;
    }
  }

  ${Media.sm} {
    &:nth-child(1) {
      width: 100%;
    }
    &:nth-child(2) {
      width: 100%;
    }
  }
`;
const ParSbx02 = styled(FlexDiv)`
  width: 100%;
  max-width: 420px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.GColor3Light},
    ${(props) => props.theme.GColor4Light}
  );
  color: ${(props) => props.theme.TextWhite};
  font-size: 27px;
  font-weight: 700;
  position: relative;
  margin: 0 12px 50px auto;
  a {
    color: ${(props) => props.theme.TextWhite};
    text-decoration: underline;
    :hover {
      text-decoration: none;
    }
  }

  p {
    text-align: left;
    margin-bottom: 0;
    margin-top: 10px;
    font-size: 18px;
    line-height: 20px;
    font-weight: 300;
  }
  &.v2 {
    margin: 0 auto 50px 12px;
  }
  &.arrow01:after {
    content: '';
    width: 43px;
    height: 68px;
    display: block;
    border: none;
    position: absolute;
    left: 114px;
    bottom: -67px;
    background: url(${ParArrow01.src}) left bottom no-repeat;
    z-index: 2;
    filter: brightness(${(props) => props.theme.ImgFilter});
  }
  &.arrow02:after {
    content: '';
    width: 95px;
    height: 67px;
    display: block;
    border: none;
    position: absolute;
    right: 62px;
    bottom: -66px;
    background: url(${ParArrow02.src}) left bottom no-repeat;
    z-index: 2;
    filter: brightness(${(props) => props.theme.ImgFilter});
  }
  ${Media.md2} {
    &.arrow01:after {
      height: 59px;
      left: 120px;
      bottom: -51px;
    }
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
  margin: 0px auto 90px auto;
  max-width: 1000px;
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

  &.v2 {
    margin: 110px auto 50px auto;
  }

  ${Media.xs} {
    &.v2 {
      margin: 70px auto 0px auto;
    }
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
    padding: 20px 80px;
    color: #fff;
    text-transform: uppercase;
    margin: 0px 10px;
    font-size: 24px;
    line-height: 24px;
    border-radius: 30px;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.GColor1},
      ${(props) => props.theme.GColor2}
    );
    display: flex;
    align-items: center;
    justify-content: center;
    ${Media.sm} {
      padding: 17px 30px;
      width: 100%;
      font-size: 18px;
    }
    ${Media.xs} {
      padding: 17px 10px;
      width: 100%;
      font-size: 15px;
      img {
        margin-right: 0px;
      }
    }
    :hover {
      filter: brightness(1.3);
    }
    img {
      margin-right: 6px;
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

const PopupINFO = styled(FlexDiv)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  text-align: center;

  .popupClosBTN {
    position: absolute;
    right: 12px;
    top: 12px;
    width: 34px;
    height: 34px;
    border: 2px solid #000;
    border-radius: 20px;
  }
  .PopMBX {
    width: 100%;
    max-width: 480px;
    background-color: #fff;
    padding: 24px;
    position: relative;

    h2 {
      color: #000;
      font-size: 30px;
    }
    h3 {
      color: #000;
      font-size: 22px;
    }
    p {
      font-size: 18px;
      font-weight: 400;
      color: #000;
    }

    a {
      text-decoration: underline;
      color: ${(props) => props.theme.DefitxtColor01};
    }
  }
`;

const ButtonList02 = styled(FlexDiv)`
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
    padding: 20px 30px;
    color: #fff !important;
    text-transform: uppercase;
    margin: 0px 10px;
    font-size: 20px;
    line-height: 24px;
    border-radius: 50px;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.GColor1},
      ${(props) => props.theme.GColor2}
    );
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none !important;
    ${Media.sm} {
      padding: 17px 30px;
      width: 100%;
      font-size: 18px;
    }
    ${Media.xs} {
      padding: 17px 10px;
      width: 100%;
      font-size: 15px;
      img {
        margin-right: 0px;
      }
    }
    :hover {
      filter: brightness(1.3);
    }
    img {
      margin-right: 6px;
    }
  }
`;

export default Refer;
