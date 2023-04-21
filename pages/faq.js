import React, { useEffect, useState } from 'react';
import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components';
import Gs from '../styles/theme.config';
import Link from 'next/link';
import Collapsible from 'react-collapsible';
import Media from '../styles/media-breackpoint';
// import { Zoom, Fade } from 'react-reveal';
import FaqBg from '../public/images/faq-bg.jpg';
import FAqplus1 from '../public/images/faq-plus1.png';
import FAqplus2 from '../public/images/faq-plus2.png';
import BorrowArrow from '../public/images/borrrow-arrow.png';

//import api
import { getCategories } from './api/blogs';
import Head from 'next/head';
import Image from 'next/image';

export const getServerSideProps = async () => {
  const allCategories = await getCategories();

  return {
    props: { allCategories },
  };
};

const Faq = (props) => {
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
      <Parallax strength={900}>
        <Background className="custom-bg">
          <div
            style={{
              height: 729,
              width: 1920,
            }}
          />
        </Background>
        <FaqBG>
          <Gs.Container style={{ maxWidth: '1000px' }}>
            <FaqTop>
              {/* <Fade cascade bottom delay={100} duration={1200}> */}
              <FAqTitle
                className="wow fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1.2s"
              >
                FAQ’s
              </FAqTitle>
              <FAqDesc
                className="wow fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1.2s"
              >
                Here are answers to some of the most popular asked questions.
              </FAqDesc>
              {/* </Fade> */}
            </FaqTop>
            {/* <Fade cascade right delay={200} duration={1200}> */}
            <FaqBottom
              className="wow fadeInRight"
              data-wow-delay="0.2s"
              data-wow-duration="1.2s"
            >
              <Collapsible trigger="What is Liquid Loans?">
                <p>
                  Liquid Loans is the first truly decentralized lending protocol
                  built specifically and exclusively for PulseChain.
                </p>

                <p>
                  Liquid Loans allows you to draw 0% interest-free loans using
                  the PulseChain native token (PLS) as collateral.
                </p>

                <p>
                  Loans are paid out in USDL – a USD value pegged stablecoin –
                  with a minimum collateral ratio required for a loan of 110%.
                  <br />
                  The repayment schedule is timeless.
                </p>

                <p>
                  Loans are secured by a Stability Pool containing USDL and by
                  fellow borrowers collectively acting as guarantors of last
                  resort.
                </p>

                <p>
                  Liquid Loans as a protocol is a non-custodial, immutable, and
                  governance-free lending protocol. The protocol is a finished
                  product with no admin keys.
                </p>
              </Collapsible>

              <Collapsible trigger="Why develop Liquid Loans?">
                <p>
                  The Liquid Loans protocol was developed to allow owners of PLS
                  a method of extracting value from their holdings, without the
                  need to ever sell.
                </p>

                <p>
                  By locking up PLS and minting USDL, a PLS holder can take a 0%
                  interest-free loan against their holdings, on a timeless
                  repayment schedule.
                </p>
              </Collapsible>
              <Collapsible trigger="Is the protocol owned?">
                <p>
                  The protocol smart contract code is completely immutable and
                  therefore has no owner or operator. There are no admin keys,
                  and nobody can alter the rules of the system in any way once
                  deployed.
                </p>
              </Collapsible>
              <Collapsible trigger="What is USDL and LOAN?">
                <p>
                  USDL is the USD value pegged stablecoin used to pay out loans
                  on the protocol. It is an algorithmic stablecoin that aims to
                  always be worth one US dollar and at any time it can be
                  redeemed against the underlying collateral at face value.
                </p>

                <p>
                  LOAN captures the fee revenue that is generated by the system
                  and incentivizes early adopters. You earn LOAN by providing
                  USDL stablecoin to the Stability Pool in exchange for rewards.
                  You can also stake your LOAN tokens to earn the revenue paid
                  for borrowing or redeeming USDL.
                </p>
              </Collapsible>
              <Collapsible trigger="What are the key benefits?">
                <p>
                  0% interest rate – as a borrower, there’s no need to worry
                  about constantly accruing debt
                </p>

                <p>
                  110% MCR – a low Minimum Collateral Ratio means more efficient
                  usage of your deposited PLS
                </p>

                <p>
                  Governance free – all operations are algorithmic and fully
                  automated, and protocol parameters are set at time of
                  deployment
                </p>

                <p>
                  Directly redeemable – the protocol allows you to exchange 1
                  USDL stablecoin for USD $1 worth of PLS at any time
                </p>

                <p>
                  Fully decentralized – the contracts have no admin keys and can
                  be accessible via other front ends, making it censorship
                  resistant
                </p>
              </Collapsible>
              <Collapsible trigger="What are the main use cases?">
                <p>
                  {' '}
                  BORROW <br /> As a borrower, you can take a loan against your
                  existing PLS. To do this, you deposit your PLS into a contract
                  called a Vault, which in turn mints the USDL stablecoin. Use
                  your USDL for a variety of personal uses, or reinvest into the
                  system to provide stability and take advantage of another
                  journey on the ecosystem.
                </p>

                <p>
                  {' '}
                  EARN <br /> As a holder of USDL, you can earn income by
                  providing stability to the Liquid Loans ecosystem. Invest and
                  achieve a return on your USDL using gains earned through
                  liquidation events plus incentives provided in the form of
                  LOAN tokens.
                </p>

                <p>
                  {' '}
                  STAKE <br /> As a holder of LOAN, these tokens can be staked
                  for rewards. Earnings are generated from the borrowing and
                  redemption fees, and are provided in the same proportion as
                  the amount you have staked in the staking pool.
                </p>

                <p>
                  {' '}
                  REDEEM <br /> To redeem PLS, you simply provide the
                  appropriate amount of USDL. The protocol allows you to
                  exchange 1 USDL stablecoin for USD $1 worth of PLS.
                </p>
              </Collapsible>

              <Collapsible trigger="Are there any fees?">
                <p>
                  There is a one-off fee whenever you borrow and redeem using
                  the system. Fee range is between 0.5% and 5.0% depending on
                  demand for loans.
                </p>
              </Collapsible>
              <Collapsible trigger="When do I pay back my loan?">
                <p>
                  Loans issued by the protocol are timeless, and have no
                  repayment schedule. You can leave your Vault open and repay
                  your debt at any time, as long as you maintain a minimum
                  collateral ratio of at least 110%.
                </p>
              </Collapsible>

              <Collapsible trigger="Is Liquid Loans on testnet?">
                <p>
                  Yes, Liquid Loans is currently on the PulseChain testnet and
                  you can access the front end dapp{' '}
                  <Link
                    target="_blank"
                    href={{ pathname: 'https://testnet.liquidloans.io/' }}
                    prefetch={false}
                  >
                    here.
                  </Link>
                </p>
              </Collapsible>

              <ButtonList>
                <Link
                  target="_blank"
                  href={{ pathname: 'https://docs.liquidloans.io/' }}
                  className="borrow-btn"
                  prefetch={false}
                >
                  <Image src={BorrowArrow} alt="" /> READ THE FULL KNOWLEDGE BASE
                </Link>
              </ButtonList>

              <Section13 className="v3">
                <p className="TelLink">
                  Got Questions? Join Over 9,500 Members In Our Telegram –
                  &nbsp;
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://t.me/liquidloans"
                  >
                    Ask Them Here
                  </a>
                </p>
              </Section13>
            </FaqBottom>
            {/* </Fade> */}
          </Gs.Container>
        </FaqBG>
      </Parallax>
    </>
  );
};

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const FaqBG = styled.div`
  /* background:url(${FaqBg.src}) no-repeat;  background-repeat:no-repeat; background-position:top left; */
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
  max-width: 662px;
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
          filter: brightness(${(props) => props.theme.ImgFilter});
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

const ButtonList = styled(FlexDiv)`
  margin: 50px 0px 100px;
  .borrow-btn {
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.GColor1},
      ${(props) => props.theme.GColor2}
    );
    color: #fff;
    font-size: 20px;
    line-height: 20px;
    border-radius: 30px;
    padding: 18px 30px;
    margin: 0px 18px;

    img {
      margin-right: 10px;
    }
    :hover {
      background: linear-gradient(
        90deg,
        ${(props) => props.theme.GColor1Medium},
        ${(props) => props.theme.GColor2Medium}
      );
    }

    ${Media.sm} {
      text-align: center;
      img {
        display: none;
      }
    }
  }
  .knowledge-btn {
    border: 1px solid ${(props) => props.theme.TransBorder2};
    border-radius: 30px;
    background-color: ${(props) => props.theme.TransBg};
    color: ${(props) => props.theme.TextWhite};
    font-size: 20px;
    line-height: 20px;
    font-weight: 500;
    padding: 18px 45px;
    :hover {
      background-color: ${(props) => props.theme.TransBorder};
    }
  }
`;

const Section13 = styled.div`
  margin: 0 0px 100px 0px;
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

export default Faq;
