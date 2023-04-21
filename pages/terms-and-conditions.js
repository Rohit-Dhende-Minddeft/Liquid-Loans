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

const Terms = (props) => {
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
                Website Terms
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
              <h1>Liquid Loans Website Disclaimer</h1>
              <p>
                The content of the website www.LiquidLoans.io, any references
                made within it as well as any accompanying documentation
                (together the “Website”) are of purely informational nature.
              </p>
              <p>
                In particular, none of the content of the Website shall be
                understood as advice provided by Liquid Loans (Australia) Pty
                Ltd., nor does Liquid Loans (Australia) Pty Ltd. warrant the
                actuality and accuracy of the information on the Website.
              </p>
              <p>
                Liquid Loans (Australia) Pty Ltd. is an operator of the Liquid
                Loans Protocol, but does not have any influence on its technical
                functionalities once deployed. Therefore, any use of 'we', 'our'
                etc. within the Website or the accompanying documentation is
                referring to the Liquid Loans Protocol as deployed and not to
                Liquid Loans (Australia) Pty Ltd. or any other members of the
                Liquid Loans project team.
              </p>
              <p>
                The Liquid Loans Protocol is a DeFi application and therefore
                can easily be integrated into third-party projects and/or
                applications. The same applies to USDL or LOAN. Any reference to
                such an integration or use-case within the Website is of
                informational purpose only. Liquid Loans (Australia) Pty Ltd. is
                not involved, does not support, audit, monitor nor is otherwise
                connected to any such third-party project or application.
              </p>
              <p>
                The trustworthiness of Liquid Loans Protocol and Liquid Loans
                (Australia) Pty Ltd. frontend lies in the sole responsibility of
                each user and must be made carefully.
              </p>
              <p>
                Any dispute between a visitor of the Website and Liquid Loans
                (Australia) Pty Ltd. shall be submitted to the exclusive
                jurisdiction of the competent New South Wales, Australia, with
                the exclusion of any other jurisdiction or arbitration.
              </p>
              <p>
                This website disclaimer shall be governed by and construed and
                interpreted in accordance with the substantive laws of
                Australia, excluding the Australian conflict of law rules. The
                United Nations Convention for the International Sales of Goods
                is excluded.
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

export default Terms;
