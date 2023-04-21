import React, { useEffect, useState } from 'react';
import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components';
import Gs from '../styles/theme.config';
import Link from 'next/link';
import Media from '../styles/media-breackpoint';
// import { Zoom, Fade } from 'react-reveal';
import FaqBg from './../public/images/faq-bg.jpg';
import FAqplus1 from './../public/images/faq-plus1.png';
import FAqplus2 from './../public/images/faq-plus2.png';
import Head from 'next/head';

const Privacy = (props) => {
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
                Privacy Policy
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
              <h1>General Information</h1>
              <p>Welcome to the website of Liquid Loans (Australia) Pty Ltd.</p>
              <p>
                Based on the data protection regulations of Australia, every
                person is entitled to the protection of his or her privacy and
                against misuse of personal data. We take the protection of your
                personal data very seriously. We treat your personal data
                confidentiality, and in accordance with the legal data
                protection regulations as well as this privacy policy.
              </p>
              <p>
                In collaboration with our hosting provider, we make every effort
                to protect the databases against unauthorized access, data loss,
                data misuse or forgery. We would like to point out that data
                transmission on the internet can have security gaps. A complete
                protection of data against access by third parties is
                impossible.
              </p>
              <p className="mb-50">
                By using this website, which can be done without registration,
                you agree to the collection, processing and use of data in
                accordance with this privacy policy. Data such as pages visited
                or the name of an accessed file, date and time are stored on the
                server for statistical purposes without being directly related
                to your person. Personal data, in particular your name, address
                or e-mail address are collected on a voluntary basis as far as
                possible. The data will not be passed on to third parties
                without your consent.
              </p>
              <h1>Processing of Personal Data</h1>
              <p>
                Personal data is all information that relates to an identified
                or identifiable person. A data subject is a person about whom
                personal data is processed. Processing includes any handling of
                personal data, irrespective of the means and procedures applied,
                in particular the retention, disclosure, acquisition, deletion,
                storage, modification, destruction and use of personal data.
              </p>
              <p className="mb-50">
                We process personal data in accordance with Australian data
                protection law and legal principles.
              </p>
              <h1>Cookie Policy</h1>
              <p>
                This website uses cookies. These are small text files, which
                make it possible to store specific information relating to the
                user on the user’s terminal device while using the website.
                Cookies make it possible to determine the frequency of use and
                the number of users of different pages, to analyze user behavior
                and to make our offer more customer friendly. Cookies remain
                stored at the end of a browser session and can be called up
                again when the site is revisited. If you don’t wish this to
                happen, you can adapt the settings of your internet browser to
                block or delete cookies. Please note that deleting or blocking
                cookies might prevent you from using all functions and features
                of this website. To find out more on how to manage and delete
                cookies, visit{' '}
                <Link
                  href={{ pathname: 'https://www.allaboutcookies.org/verify' }}
                  target="blank"
                  prefetch={false}
                >
                  allaboutcookies.org
                </Link>
                .
              </p>
              <p className="mb-50">
                A general objection to the use of cookies used for online
                marketing purposes can be declared for a large number of
                services, especially in the case of tracking, via the US site{' '}
                <Link
                  target="blank"
                  href={{
                    pathname: 'https://optout.aboutads.info/?c=2&lang=EN',
                  }}
                  prefetch={false}
                >
                  aboutads.info
                </Link>{' '}
                or the EU site{' '}
                <Link
                  target="blank"
                  href={{ pathname: 'https://www.youronlinechoices.com/' }}
                  prefetch={false}
                >
                  youronlinechoices.com
                </Link>
                .
              </p>
              <h1>SSL/TLS Encryption</h1>
              <p>
                This website uses SSL/TLS encryption for security reasons and to
                protect the transmission of confidential content, such as
                requests you send to us. You can recognize an encrypted
                connection based on the lock symbol displayed by your browser
                next to the URL and the fact that the URL starts with “https://”
                instead of “http://”.
              </p>
              <p className="mb-50">
                If SSL/TLS encryption is activated, the data you transmit to us
                is better protected against being read by third parties.
              </p>
              <h1>Server Log Files</h1>
              <p>
                The provider of this website automatically collects and stores
                the following data, which your browser automatically transmits
                to us, in log files:{' '}
              </p>
              <ul>
                <li>Browser type and browser version</li>
                <li>Operating system used</li>
                <li>Referrer URL</li>
                <li>Host name of the accessing computer</li>
                <li>Time of the server request</li>
              </ul>
              <p className="mb-50">
                This data cannot be assigned to specific persons and is not
                consolidated with other data sources. We reserve the right to
                subsequently check this data, if we become aware of concrete
                indications of illegal use.
              </p>
              <h1>Links to Other Websites</h1>
              <p className="mb-50">
                Please note that this privacy policy does not apply to websites
                provided by third parties, which you might visit based on links
                provided by us on our pages. Please refer to the data privacy
                policies provided directly on those pages to find out more about
                how they protect your data.
              </p>
              <h1>Notice Concerning Data Transfers to the USA</h1>
              <p>
                This website may use Google Maps for embedding maps and Google
                Invisible reCAPTCHA for protection against bots and spam,
                YouTube to embed videos and Google Analytics to analyze user
                behavior. These services of the American Google LLC use cookies,
                among other things, and as a result, data is transferred to
                Google in the USA, whereby we assume that in this context no
                personal tracking takes place solely by using our website.
              </p>
              <p className="mb-50">
                Google is committed to ensuring an appropriate level of data
                protection in accordance with the American-European and the
                American-Swiss Privacy Shield. Further information can be found
                in the{' '}
                <Link
                  target="blank"
                  href={{
                    pathname: 'https://policies.google.com/privacy?hl=en',
                  }}
                  prefetch={false}
                >
                  Google Privacy Policy
                </Link>
                .
              </p>
              <h1>Newsletter – MailChimp</h1>
              <p>
                If you would like to receive the newsletter offered on this
                website, we require and e-mail address from you as well as
                information that allows us to verify that you are the owner of
                the provided e-mail address and that you agree to receive the
                newsletter. Further data will not be collected. We use this data
                exclusively for sending the requested information.
              </p>
              <p>
                You can revoke your consent to the storage of the data, the
                e-mail address and its use for sending the newsletter at any
                time, for example by clicking on the “unsubscribe” link in the
                newsletter.
              </p>
              <p>
                Our newsletter is sent via the dispatch service provider
                “MailChimp”, a platform of the US supplier Rocket Science Group
                LLC, 675 Ponce De Leon Ave NE #5000, Atlanta, GA 30308, USA. You
                can view the data protection regulations of the mailing service
                provided{' '}
                <Link
                  target="blank"
                  href={{ pathname: 'https://www.intuit.com/privacy/statement/' }}
                  prefetch={false}
                >
                  here
                </Link>
                . The Rocket Science Group LLC d/b/a MailChimp is certified
                under the{' '}
                <Link
                  target="blank"
                  href={{
                    pathname:
                      'https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG&status=Active&t=1',
                  }}
                  prefetch={false}
                >
                  Privacy-Shield Agreement
                </Link>{' '}
                and thus offers a guarantee to comply with the European data
                protection level. This dispatch service provider is used based
                on our legitimate interests according to Art.6 Para.1 lit.f
                DSGVO and an order processing contract according to Art.28
                Para.3 S.1 DSGVO.
              </p>
              <p className="mb-50">
                The mail dispatch service provider may use the recipient’s data
                in pseudonymous form, i.e.without allocation to a user, to
                optimize or improve its own services, e.g.for technical
                optimization of the dispatch and presentation of the newsletters
                or for statistical purposes. However, the dispatch service
                provider does not use the data of our newsletter recipients to
                write to them itself or to pass the data on to third parties.
              </p>
              <h1>Google Analytics</h1>
              <p>
                This website uses Google Analytics, a web analytics service
                provided by Google Inc, 1600 Amphitheatre Parkway, Mountain
                View, CA 94043, USA. You can deactivate Google Analytics with a
                browser plug-in, which can be found{' '}
                <Link
                  href={{
                    pathname: 'https://tools.google.com/dlpage/gaoptout?hl=en',
                  }}
                  prefetch={false}
                >
                  here
                </Link>
                .
              </p>
              <p>
                Google Analytics uses cookies. These are small text files, which
                make it possible to store specific information relating to the
                user on the user’s terminal device while using the website.
                These allow Google Analytics to analyze the use of our website.
                The information collected based on cookies about the use of our
                website (including your IP address) is usually transferred to a
                Google server in the USA and stored there. We would like to
                point out that on this website Google Analytics has been
                extended by the code “gat._anonymizeIp(); ” in order to ensure
                an anonymized recording of IP addresses (so-called IP-Masking).
                If anonymization is active, Google will shorten IP addresses
                within member states of the European Union or other states that
                belong to the European Economic Area. This prevents drawing
                conclusions about your identity. Only in exceptional cases the
                full IP address is first transferred to a Google server in the
                USA and shortened there. Google observes the data protection
                regulations of the “Privacy Shield” agreement and is registered
                with the “Privacy Shield program of the US Department of
                Commerce.
              </p>
              <p className="mb-50">
                Google uses the collected information to evaluate the use of our
                website, to write reports for us in this regard and to provide
                other related services to us. You can learn more at{' '}
                <Link
                  href={{
                    pathname:
                      'https://support.google.com/analytics/answer/6004245?hl=en',
                  }}
                  prefetch={false}
                >
                  support.google.com/analytics
                </Link>
                .
              </p>
              <h1>Changes To This Data Privacy Policy</h1>
              <p className="mb-0">
                We may change this privacy policy at any time without notice.
                The version currently published on our website applies.
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

export default Privacy;
