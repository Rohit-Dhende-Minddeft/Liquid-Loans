import React, { useEffect, useState } from 'react';
import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components';
import Gs from '../styles/theme.config';
import Media from '../styles/media-breackpoint';
// import { Zoom, Fade } from 'react-reveal';
import FaqBg from './../public/images/faq-bg.jpg';
import FAqplus1 from './../public/images/faq-plus1.png';
import FAqplus2 from './../public/images/faq-plus2.png';
import Head from 'next/head';

const Protocol = (props) => {
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
                Protocol Disclaimer
              </FAqTitle>
              {/* <FAqDesc>Here are answers to some of the most popular asked questions.</FAqDesc> */}
              {/* </Fade> */}
            </FaqTop>
            {/* <Fade cascade right delay={200} duration={1200}> */}
            <PageContent
              className="wow fadeInRight"
              data-wow-delay="0.1s"
              data-wow-duration="1.2s"
            >
              <h1>Introduction</h1>
              <p>
                This disclaimer relates to the use of the Liquid Loans Protocol
                Software.
              </p>
              <p>
                Please read this disclaimer carefully before accessing,
                interacting with, or using the Liquid Loans Protocol Software.
              </p>
              <p>
                The Liquid Loans Protocol Software consists of the Liquid Loans
                Protocol technology stack (in particular its smart contracts),
                as well as any other Liquid Loans technology (together the
                “Liquid Loans Protocol Software”).
              </p>
              <p>
                The Liquid Loans Protocol Software enables its users (“User”) to
                create interest-free liquidity in USDL (a USD pegged stablecoin)
                by depositing PLS towards autonomous smart contracts.
              </p>
              <p>
                The USDL is stabilized by a liquidation mechanism and a
                Stability Pool which both are fully decentralized and smart
                contract based as well.
              </p>
              <p>
                For the use of the functions of the Liquid Loans Protocol
                Software, the involved smart contracts automatically and
                autonomously deduct technical fees which can be claimed by the
                LOAN holders (if any).
              </p>
              <p>
                Any and all functionalities of the Liquid Loans Protocol
                Software are of purely technical nature and there is no claim
                towards any private individual or legal entity in this regard.
              </p>
              <h1>
                No Relationship to Liquid Loans (Australia) Pty Ltd. <br /> /
                Usage of Liquid Loans Protocol Software at Own Risk.
              </h1>
              <p>
                The Liquid Loans Protocol Software runs in a fully decentralized
                and autonomous manner on the PulseChain network. Liquid Loans
                (Australia) Pty Ltd. is not in any way responsible for the
                operation, running or functioning of the Liquid Loans Protocol
                Software and/or any of the interactions, collaborations or
                factual relationships between Users and the smart contracts of
                the Liquid Loans Protocol Software.
              </p>
              <p>
                Liquid Loans (Australia) Pty Ltd. has neither access to nor any
                other possibility to control and/or influence the corresponding
                transactions, deposits and/or allocations made by the Users and
                the involved smart contracts using the Liquid Loans Protocol
                Software.
              </p>
              <p>
                In particular, Liquid Loans (Australia) Pty Ltd. has not and
                will not enter into any legal or factual relationship with any
                User of the Liquid Loans Protocol Software.
              </p>
              <p>
                Consequently, Liquid Loans (Australia) Pty Ltd. IS NOT LIABLE TO
                ANY USER FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL
                OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE, IN CONNECTION
                WITH THE USE OR INABILITY TO USE THE LIQUID LOANS PROTOCOL
                SOFTWARE (INCLUDING BUT NOT LIMITED TO LOSS OF PLS, USDL OR
                LOAN, NON-ALLOCATION OF TECHNICAL FEES TO LOAN HOLDERS, LOSS OF
                DATA, BUSINESS INTERRUPTION, DATA BEING RENDERED INACCURATE OR
                OTHER LOSSES SUSTAINED BY A USER OR THIRD PARTIES RELATED TO THE
                LIQUID LOANS PROTOCOL SOFTWARE OR A FAILURE OF THE LIQUID LOANS
                PROTOCOL SOFTWARE TO OPERATE WITH ANYOTHER SOFTWARE).
              </p>
              <p>
                The Liquid Loans Protocol Software has been developed and
                published under the GNU GPL v3 open-source license, which forms
                an integral part of this Disclaimer.
              </p>
              <p>
                As the Liquid Loans Protocol Software is of experimental nature
                it may contain bugs, defects, or errors (including any bug,
                defect, or error relating to or resulting from the display,
                manipulation, processing, storage, transmission, or use of data)
                that may materially and adversely affect the use, functionality,
                or performance of the Liquid Loans Protocol Software or any
                product or system containing or used in conjunction with the
                Liquid Loans Protocol Software.
              </p>
              <p>
                THE LIQUID LOANS PROTOCOL SOFTWARE HAS BEEN PROVIDED "AS IS",
                WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
                NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE AND NONINFRINGEMENT.
              </p>
              <p>
                THE LIQUID LOANS PROTOCOL SOFTWARE IS HIGHLY EXPERIMENTAL AND
                ANY REAL PLS AND/OR USDL AND/OR LOAN SENT, STAKED OR DEPOSITED
                TO THE LIQUID LOANS PROTOCOL SOFTWARE ARE AT RISK OF BEING LOST
                INDEFINITELY, WITHOUT ANY KIND OF CONSIDERATION.
              </p>
              <p>
                There are no official frontend operators, and the use of any
                frontend is made by User at its own risk. To assess the
                trustworthiness of a frontend operator lies in the sole
                responsibility of the User and must be made carefully.
              </p>
              <p>
                Further, as the Liquid Loans Protocol Software is built on the
                PulseChain network its proper functioning is dependent on the
                PulseChain network and any transaction including USDL or LOAN
                requires PLS as gas.
              </p>
              <h1>
                Assumption of Risks of Cryptographic Token, Currencies and
                Systems
              </h1>
              <p>
                There are also general risks associated with purchasing, owning
                and using cryptographic Token (hereinafter “Token”) In order to
                access and make use of certain features of the Liquid Loans
                Protocol Software, a User may need Token (in particular, PLS,
                USDL and/or LOAN).{' '}
              </p>
              <p>
                Token such as PLS, USDL and LOAN are highly volatile due to many
                factors including but not limited to adoption, speculation,
                technology, and security risks. The cost of transacting on the
                PulseChain network or related blockchain technologies is
                variable and may increase at any time causing impact to any
                activities taking place on the PulseChain network.{' '}
              </p>
              <p>
                User is solely responsible for transacting and holding Token
                like PLS, USDL and/or LOAN while accessing and/or interacting
                with the Liquid Loans Protocol Software.{' '}
              </p>
              <p>
                Neither USDL nor LOAN do represent or constitute any ownership
                rights or stake, shares or security or equivalent rights nor any
                rights to receive future revenues or shares or any other form of
                participation or governance rights in or relating to any private
                individual or legal entity.
              </p>
              <p>
                In particular, both USDL and LOAN do not represent or confer any
                ownership right or stake, share, security, or equivalent rights,
                or any right to receive future revenue shares, intellectual
                property rights or any other form of participation in or
                relating to any private individual or legal entity.{' '}
              </p>
              <p>
                User is responsible for implementing reasonable measures for
                securing the wallet, vault or other storage mechanism used to
                receive and hold PLS, USDL and LOAN or any other Token,
                including any requisite private key(s) or other credentials
                necessary to access such storage mechanism(s). If User’s private
                key(s) or other access credentials are lost, User may lose
                access to its Token.{' '}
              </p>
              <h1>Risk of Regulatory Actions and Compliance with Laws</h1>
              <p>
                The Liquid Loans Protocol Software could be impacted by one or
                more regulatory inquiries or regulatory actions, which could
                impede or limit User’s ability to access or use the Liquid Loans
                Protocol Software.
              </p>
              <p className="mb-0">
                User is solely responsible for complying with applicable law
                when interacting (in particular, when using PLS, USDL, LOAN or
                other Token) with the Liquid Loans Protocol Software whatsoever.
              </p>
            </PageContent>
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
  margin: 50px 0px 200px;
  .borrow-btn {
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.GColor1},
      ${(props) => props.theme.GColor2}
    );
    color: ${(props) => props.theme.TextWhite};
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

const PageContent = styled.div`
  padding: 0 25px 80px 25px;
  h1 {
    font-size: 26px;
    font-weight: bold;
    color: ${(props) => props.theme.TextWhite};
    margin: 0px 0px 30px;
  }
  p,
  li {
    font-size: 19px;
    font-weight: 300;
    color: ${(props) => props.theme.TextWhite};
    margin: 0px 0px 30px;
    &.mb-50 {
      margin-bottom: 50px;
    }
    &.mb-0 {
      margin-bottom: 0px;
    }
    a {
      color: ${(props) => props.theme.FaqTLink};
    }
  }
`;

export default Protocol;
