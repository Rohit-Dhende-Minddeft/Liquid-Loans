import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Gs from '../styles/theme.config';
import Link from 'next/link';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import Media from '../styles/media-breackpoint';
// import { Zoom, Fade } from 'react-reveal';
import { Parallax, Background } from 'react-parallax';
import Image from 'next/image';
import Head from 'next/head';

import AuBg from '../public/images/au-bg.jpg';
import Waves2 from '../public/images/waves2.png';
import Client1 from '../public/images/c1.jpg';
import Client2 from '../public/images/c2.jpg';
import Client4 from '../public/images/c4.jpg';
import Client5 from '../public/images/c5.jpg';
import Client7 from '../public/images/c7.jpg';
import Client9 from '../public/images/c9.jpg';
import Client10 from '../public/images/c10.jpg';
import Client11 from '../public/images/c11.jpg';
import Client15 from '../public/images/c15.jpg';
import Client16 from '../public/images/c16.jpg';
import Client17 from '../public/images/c17.jpg';

import Client19 from '../public/images/c19.jpg';
import Client20 from '../public/images/c20.jpg';
import Client21 from '../public/images/c21.png';
import Client22 from '../public/images/c22.jpg';

//import api
import { getCategories } from './api/blogs';

export const getServerSideProps = async () => {
  const allCategories = await getCategories();

  return {
    props: { allCategories },
  };
};

const AboutUs = (props) => {
  const { allCategories, setAllCategories } = props;

  //set categories for header
  useEffect(() => {
    setAllCategories(allCategories);
  }, [allCategories, setAllCategories]);

  useEffect(() => {
    window.scrollTo(0, 10);
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
      <Parallax strength={2800}>
        <Background className="custom-bg02">
          <div
            style={{
              height: 934,
              width: 1920,
            }}
          />
        </Background>
        <AuBG>
          <Gs.Container>
            <Section9>
              <div className="W60 wow fadeInLeft" data-wow-delay="0.1s">
                {/* <Fade cascade left delay={50} duration={600}> */}
                <APtitle
                  className="wow fadeInLeft"
                  data-wow-delay="0.5s"
                  data-wow-duration="0.6s"
                >
                  Our Team
                </APtitle>
                <APdesc
                  className="wow fadeInLeft"
                  data-wow-delay="0.5s"
                  data-wow-duration="0.6s"
                >
                  The Liquid Loans development and support team are all
                  PulseChain community members. As a team, we aim to educate,
                  inspire, create value, and make a difference.
                </APdesc>
                {/* </Fade> */}
              </div>
            </Section9>
          </Gs.Container>

          <Gs.Container>
            <Section12>
              <LeaderBoard>
                <W33>
                  <PartnerOuter
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    <Image src={Client1} alt="" />
                    <div className="poverlay">
                      <p>
                        Cristian has over 20 years experience leading national
                        and international consulting teams across Australia,
                        Asia Pacific, and the United States. A former partner of
                        a major international audit, tax and advisory practice,
                        Cristian has been a cryptocurrency and blockchain
                        investor since 2017, and has substantial positions in
                        Hex and PulseChain.
                      </p>
                    </div>
                  </PartnerOuter>
                  <LeaderName
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Cristian Ulloa
                  </LeaderName>
                  <LeaderDesc
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Co-Founder & Chief Executive Officer
                  </LeaderDesc>
                  <Link
                    href="/"
                    className="Social-icon wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                    prefetch={false}
                  >
                    <FaLinkedinIn />
                  </Link>
                  {/* </Zoom> */}
                </W33>
                <W33>
                  {/* <Zoom delay={100} duration={1200}> */}
                  <PartnerOuter
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    <Image src={Client2} alt="" />
                    <div className="poverlay">
                      <p>
                        For more than two decades, Dave has held successful
                        leadership roles throughout Europe, the Middle East, and
                        Australia. He has extensive experience and knowledge of
                        business operations, and a deep understanding of
                        marketing and brand management. Dave has been a crypto
                        and blockchain investor since 2016, and has substantial
                        positions in Hex and PulseChain.
                      </p>
                    </div>
                  </PartnerOuter>
                  <LeaderName
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Dave Gordon
                  </LeaderName>
                  <LeaderDesc
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Co-Founder & Chief Operating Officer
                  </LeaderDesc>
                  <Link
                    href="/"
                    className="Social-icon wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                    prefetch={false}
                  >
                    <FaLinkedinIn />
                  </Link>{' '}
                  {/* </Zoom> */}
                </W33>
                <W33>
                  {/* <Zoom delay={100} duration={1200}> */}
                  <PartnerOuter
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    <Image src={Client19} alt="" />
                    <div className="poverlay">
                      <p>
                        WaLLrus is a widely respected crypto blockchain expert
                        and commentator, and a leading contributor in the HEX
                        and PulseChain communities. Known for his depth of
                        knowledge and confident demeanour, he is a classy,
                        relationship driven professional and a key member of the
                        Liquid Loans management team, responsible for growth,
                        partnerships and community engagement.
                      </p>
                    </div>
                  </PartnerOuter>
                  <LeaderName
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    {' '}
                    WaLLrus{' '}
                  </LeaderName>
                  <LeaderDesc
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Global Head of Growth & Partnerships{' '}
                  </LeaderDesc>
                  <Link
                    target="_blank"
                    href={{
                      pathname: 'https://www.linkedin.com/in/krunalbsoni/',
                    }}
                    className="Social-icon wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                    prefetch={false}
                  >
                    <FaLinkedinIn />
                  </Link>
                  {/* </Zoom> */}
                </W33>

                {/* <W33> 
                  <PartnerOuter
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    <Image src={Client14} alt="" />
                    <div className="poverlay">
                      <p>
                        Matt has worked within the media industry for well over
                        a decade on a variety of productions in the UK, Europe
                        and Asia. His interest in finance started with precious
                        metals and blue-chip stocks and steadily progressed into
                        the crypto sphere. He’s passionate about creating
                        engaging content on DeFi and blockchain technology, and
                        is a public figure in the Hex and PulseChain community.
                      </p>
                    </div>
                  </PartnerOuter>
                  <LeaderName
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Matt C
                  </LeaderName>
                  <LeaderDesc
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Head of Video, Content & Delivery
                  </LeaderDesc>
                  <Link
                    href="/"
                    className="Social-icon wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                    prefetch={false}
                  >
                    <FaLinkedinIn />
                  </Link> 
                </W33> */}


                <W33>
                  {/* <Zoom delay={50} duration={1200}> */}
                  <PartnerOuter
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    <Image src={Client4} alt="" />
                    <div className="poverlay">
                      <p>
                        Jeff specializes in complex problem solving, and
                        presenting detailed technical information, data and
                        processes in simple, easy-to-understand terms. Jeff has
                        been a highly-motivated and successful crypto investor
                        since 2017, and has extensive experience working in real
                        estate, industrial warehouse management and biomedical
                        research.
                      </p>
                    </div>
                  </PartnerOuter>
                  <LeaderName
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Jeff C
                  </LeaderName>
                  <LeaderDesc
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Head of Technology & Training
                  </LeaderDesc>
                  <Link
                    href="/"
                    className="Social-icon wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                    prefetch={false}
                  >
                    <FaLinkedinIn />
                  </Link>
                  {/* </Zoom> */}
                </W33>

                <W33>
                  {/* <Zoom delay={50} duration={1200}> */}
                  <PartnerOuter
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    <Image src={Client7} alt="" />
                    <div className="poverlay">
                      <p>
                        Connor has been a cryptocurrency and blockchain investor
                        since 2019 and is an active member of the Hex and
                        PulseChain communities. A former fitness industry
                        professional, by day Connor serves as an Aircraft
                        Maintainer and by night he manages Liquid Loans digital
                        marketing strategies and written content.
                      </p>
                    </div>
                  </PartnerOuter>
                  <LeaderName
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Connor R
                  </LeaderName>
                  <LeaderDesc
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Digital Marketer & Writer{' '}
                  </LeaderDesc>
                  <Link
                    href="/"
                    className="Social-icon wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                    prefetch={false}
                  >
                    <FaLinkedinIn />
                  </Link>
                  {/* </Zoom> */}
                </W33>

                <W33>
                  {/* <Zoom delay={100} duration={1200}> */}
                  <PartnerOuter
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    <Image src={Client15} alt="" />
                    <div className="poverlay">
                      <p>
                        John has dedicated more than 20 years serving and
                        supporting people. His passion and enthusiasm for
                        helping others has led him to various account
                        management, customer service, and helpdesk roles in IT,
                        communications and technology. He has been a crypto
                        investor for 5 years, is a highly respected community
                        member, and a proud ambassador of Liquid Loans.{' '}
                      </p>
                    </div>
                  </PartnerOuter>
                  <LeaderName
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    {' '}
                    HEXiCAT{' '}
                  </LeaderName>
                  <LeaderDesc
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Ambassador and Admin Support
                  </LeaderDesc>
                  <Link
                    href="/"
                    className="Social-icon wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                    prefetch={false}
                  >
                    <FaLinkedinIn />
                  </Link>
                  {/* </Zoom> */}
                </W33>
              </LeaderBoard>
            </Section12>
            <Section12 className="ver2">
              <LeaderBoard>
                <W33>
                  {/* <Zoom delay={150} duration={1200}> */}
                  <PartnerOuter
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    <Image src={Client21} alt="" />
                    <div className="poverlay">
                      <p>
                        Darren has professional software development experience
                        working for a number of industries including Banking,
                        Insurance, Telcos, Business Directories as well as
                        Blockchain and FinTech Startups. Darren enjoys
                        researching new technology and solutions in the DeFi and
                        Web3 space.
                      </p>
                    </div>
                  </PartnerOuter>
                  <LeaderName
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Darren J{' '}
                  </LeaderName>
                  <LeaderDesc
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Senior Project Manager
                  </LeaderDesc>
                  <Link
                    target="_blank"
                    href={{
                      pathname: 'https://www.linkedin.com/in/nimish-parekh/',
                    }}
                    className="Social-icon wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                    prefetch={false}
                  >
                    <FaLinkedinIn />
                  </Link>
                  {/* </Zoom> */}
                </W33>
                <W33>
                  {/* <Zoom delay={100} duration={1200}> */}
                  <PartnerOuter
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    <Image src={Client5} alt="" />
                    <div className="poverlay">
                      <p>
                        April started her crypto journey mining bitcoin in 2013.
                        She has had extensive experience with trading
                        cryptocurrency, helping others with crypto-security
                        using hardware wallets, setting up both proof-of-work
                        and proof-of-stake mining, dealing with ERC20 tokens and
                        trading NFTs. She is a former professional game artist,
                        loves mathematics and is a proud Hexican. She is happy
                        to answer any question on Telegram about the PulseChain
                        Network and Liquid Loans!
                      </p>
                    </div>
                  </PartnerOuter>
                  <LeaderName
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Hodpril
                  </LeaderName>
                  <LeaderDesc
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Ambassador and Admin Support
                  </LeaderDesc>
                  <Link
                    href="/"
                    className="Social-icon wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                    prefetch={false}
                  >
                    <FaLinkedinIn />
                  </Link>
                </W33>

                <W33>
                  {/* <Zoom delay={150} duration={1200}> */}
                  <PartnerOuter
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    <Image src={Client22} alt="" />
                    <div className="poverlay">
                      <p>
                        Emanuel is a methodical and structured Quality Assurance
                        engineer and technology enthusiast. He’s spent most of
                        the last 10 years in people-focussed leadership roles.
                        Emanuel is a key member of the Liquid Loans team, and
                        responsible for the QA Documentation and Testing
                        process; including functional, usability, cross-browser,
                        integration, smoke, regression, and automation.
                      </p>
                    </div>
                  </PartnerOuter>
                  <LeaderName
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Emanuel P{' '}
                  </LeaderName>
                  <LeaderDesc
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Quality Assurance Engineer
                  </LeaderDesc>
                  <Link
                    target="_blank"
                    href={{
                      pathname: 'https://www.linkedin.com/in/nimish-parekh/',
                    }}
                    className="Social-icon wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                    prefetch={false}
                  >
                    <FaLinkedinIn />
                  </Link>
                  {/* </Zoom> */}
                </W33>

                <W33>
                  {/* <Zoom delay={150} duration={1200}> */}
                  <PartnerOuter
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    <Image src={Client10} alt="" />
                    <div className="poverlay">
                      <p>
                        Nimish is a professional web designer, expert front-end
                        developer, and experienced brand manager. For more than
                        10 years, he has consistently delivered high quality
                        projects to a broad range of international clients, and
                        is widely respected for his knowledge, creativity,
                        attention to detail, enthusiasm, and leadership.
                      </p>
                    </div>
                  </PartnerOuter>
                  <LeaderName
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Nimish P{' '}
                  </LeaderName>
                  <LeaderDesc
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Head of Design & Brand Management
                  </LeaderDesc>
                  <Link
                    target="_blank"
                    href={{
                      pathname: 'https://www.linkedin.com/in/nimish-parekh/',
                    }}
                    className="Social-icon wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                    prefetch={false}
                  >
                    <FaLinkedinIn />
                  </Link>
                  {/* </Zoom> */}
                </W33>




                <W33>
                  {/* <Zoom delay={100} duration={1200}> */}
                  <PartnerOuter
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    <Image src={Client9} alt="" />
                    <div className="poverlay">
                      <p>
                        Krunal has been working in technology for more than a
                        decade and is firmly focussed on strategic planning,
                        development and growth. He is a highly experienced
                        entrepreneur who has guided from concept to launch many
                        blockchain businesses, decentralized finance protocols,
                        and NFT projects.
                      </p>
                    </div>
                  </PartnerOuter>
                  <LeaderName
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Krunal S{' '}
                  </LeaderName>
                  <LeaderDesc
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Blockchain Consultant & Advisor{' '}
                  </LeaderDesc>
                  <Link
                    target="_blank"
                    href={{
                      pathname: 'https://www.linkedin.com/in/krunalbsoni/',
                    }}
                    className="Social-icon wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                    prefetch={false}
                  >
                    <FaLinkedinIn />
                  </Link>
                  {/* </Zoom> */}
                </W33>











                <W33>
                  {/* <Zoom delay={100} duration={1200}> */}
                  <PartnerOuter
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    <Image src={Client11} alt="" />
                    <div className="poverlay">
                      <p>
                        Jeremy has a unique blend of technological skill and
                        financial acumen obtained over a number of decades spent
                        in the IT sector as a security specialist and business
                        integration advisor. He has been involved in the digital
                        asset space since 2017 as an investor, educator, and
                        advisor for a global crypto currency education provider.
                      </p>
                    </div>
                  </PartnerOuter>
                  <LeaderName
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Jexxa{' '}
                  </LeaderName>
                  <LeaderDesc
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Strategic Advisor & Consultant
                  </LeaderDesc>
                  <Link
                    href="/"
                    className="Social-icon wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                    prefetch={false}
                  >
                    <FaLinkedinIn />
                  </Link>
                  {/* </Zoom> */}
                </W33>

                <W33>
                  {/* <Zoom delay={100} duration={1200}> */}
                  <PartnerOuter
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    <Image src={Client20} alt="" />
                    <div className="poverlay">
                      <p>
                        Logan has been a computer hardware enthusiast for over a
                        decade with academic backgrounds in cyber security and
                        psychology. He also has 15 years experience in
                        management, working for leading national and
                        international companies around Australia. Logan openly
                        admits to caring more for sports than anything else
                        until he came across blockchain in 2017! Today, Logan is
                        a respected Hex and PulseChain community member, and
                        proud ambassador of the Liquid Loans team.
                      </p>
                    </div>
                  </PartnerOuter>
                  <LeaderName
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Logan{' '}
                  </LeaderName>
                  <LeaderDesc
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Ambassador and Admin Support{' '}
                  </LeaderDesc>
                  <Link
                    target="_blank"
                    href={{
                      pathname: 'https://www.linkedin.com/in/krunalbsoni/',
                    }}
                    className="Social-icon wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                    prefetch={false}
                  >
                    <FaLinkedinIn />
                  </Link>
                </W33>
                {/* <W33> 
                  <PartnerOuter
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    <Image src={Client16} alt="" />
                    <div className="poverlay">
                      <p>
                        Over the years, Donellini has gained substantial
                        experience within the real estate sector managing
                        property portfolios for his investors, building a large
                        client base through his ability to network. After
                        dedicating his time to navigating the crypto landscape
                        he has become a successful crypto investor and now
                        shares his knowledge with others helping them to keep
                        their assets secure.
                      </p>
                    </div>
                  </PartnerOuter>
                  <LeaderName
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Donellini
                  </LeaderName>
                  <LeaderDesc
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Ambassador and Admin Support
                  </LeaderDesc>
                  <Link
                    href="/"
                    className="Social-icon wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                    prefetch={false}
                  >
                    <FaLinkedinIn />
                  </Link> 
                </W33> */}

                <W33>
                  {/* <Zoom delay={50} duration={1200}> */}
                  <PartnerOuter
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    <Image src={Client17} alt="" />
                    <div className="poverlay">
                      <p>
                        {' '}
                        Jason has dedicated the majority of his adult life to
                        helping others, in both Private Security & EMS. Since
                        2017 Jason has followed the cryptosphere closely,
                        eventually dipping his feet in and falling in love with
                        DeFi and all it’s possibilities. Today, he is an active
                        and widely respected community member & moderator across
                        the PulseChain ecosystem, and a strong advocate & proud
                        ambassador of the Liquid Loans protocol.
                      </p>
                    </div>
                  </PartnerOuter>
                  <LeaderName
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Hexkult (Jason)
                  </LeaderName>
                  <LeaderDesc
                    className="wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                  >
                    Ambassador and Admin Support
                  </LeaderDesc>
                  <Link
                    href="/"
                    className="Social-icon wow zoomIn"
                    data-wow-delay="0.5s"
                    data-wow-duration="1.2s"
                    prefetch={false}
                  >
                    <FaLinkedinIn />
                  </Link>
                  {/* </Zoom> */}
                </W33>






                {/* 
              <W33><Zoom delay={150} duration={1200}>
                <PartnerOuter>
                  <Image src={Client3} alt="" />
                  <div className="poverlay">
                    <p>A former U.S. Army Special Forces Operator, Jesse has been a proactive crypto and blockchain investor since 2017, and currently manages a multi-million dollar crypto asset portfolio. Jesse is a highly respected and extremely well-liked member of the Hex and PulseChain community, and is frequently consulted publicly for his knowledge, experience and opinion.</p>
                  </div>
                </PartnerOuter>
                <LeaderName>Jesse Askin</LeaderName>
                <LeaderDesc>Strategic Advisor & Consultant</LeaderDesc>
                <Link to='/' className="Social-icon" prefetch={false}>
                  <FaLinkedinIn />
                </Link> </Zoom>
              </W33> */}
              </LeaderBoard>
            </Section12>
          </Gs.Container>

          <Section10>
            {/* <Fade cascade top delay={150} duration={600}> */}
            <LeaderText
              className="Social-icon wow fadeInDown"
              data-wow-delay="0.15s"
              data-wow-duration="0.6s"
            >
              The Protocol
            </LeaderText>
            <Ctext className="Social-icon wow fadeInDown"
              data-wow-delay="0.15s"
              data-wow-duration="0.6s">
              <p>
                “The purpose of Liquid Loans protocol is to support the
                creation, growth and adoption of a more secure, trustless, and
                decentralized financial infrastructure, that is community-owned,
                and brings greater stability and transparency to PulseChain.”
              </p>
            </Ctext>
            {/* </Fade> */}
          </Section10>
        </AuBG>
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

const AuBG = styled.div`
  /* background:url(${AuBg.src}) no-repeat; background-position:top right;
  ${Media.lg}{ background-position:50% 0 ;}
  ${Media.md2}{ background-position:65% 0 ;} */
`;

const Section9 = styled(FlexDiv)`
  padding: 145px 0px 70px;
  justify-content: flex-start;
  .W60 {
    width: 100%;
    max-width: 784px;
    margin: 0 auto;
    text-align: center;
  }
  .W40 {
    width: 100%;
    max-width: 586px;
    &.text-center {
      text-align: center;
    }
  }
  ${Media.md2} {
    .W60 {
      max-width: 510px;
    }
  }
  ${Media.sm} {
    padding: 150px 0px 50px;
  }
`;

const APtitle = styled.div`
  font-size: 81px;
  line-height: 81px;
  letter-spacing: -1px;
  font-weight: bold;
  color: ${(props) => props.theme.TextWhite};
  margin: 0px 0px 30px;
  ${Media.sm} {
    font-size: 50px;
    line-height: 55px;
  }
`;

const APdesc = styled.div`
  font-size: 24px;
  line-height: 40px;
  font-weight: normal;
  color: ${(props) => props.theme.TextWhite};
  margin: 0px auto;
  max-width: 928px;
  ${Media.sm} {
    font-size: 19px;
    line-height: 30px;
  }
`;

const Section10 = styled.div`
  background: url(${Waves2.src}) no-repeat;
  padding: 50px 0px 160px 0px;
  ${Media.sm} {
    padding: 0px 0px 50px;
  }
`;

const Ctext = styled.div`
  p {
    font-size: 24px;
    font-weight: normal;
    color: ${(props) => props.theme.TextWhite};
    line-height: 40px;
    max-width: 1070px;
    margin: 0 auto;
    text-align: center;
  }
  ${Media.xs} {
    p {
      font-size: 22px;
      line-height: 32px;
      padding: 0 20px;
    }
  }
`;

const Section12 = styled.div`
  max-width: 1264px;
  margin: 0 auto;
  &.ver2 {
    margin: 10px auto 40px;
  }
`;

const LeaderText = styled.div`
  font-size: 81px;
  line-height: 81px;
  font-weight: bold;
  color: ${(props) => props.theme.TextWhite};
  margin: 0px auto 30px auto;
  max-width: 800px;
  text-align: center;
  ${Media.sm} {
    font-size: 34px;
    line-height: 40px;
  }
`;

const LeaderBoard = styled(FlexDiv)`
  align-items: flex-start;
  img {
    padding: 10px 0px;
    filter: grayscale(1);
  }
  .Social-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.LinkBg};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.BodyColor};
    margin: 0 auto;
    display: none;
  }
`;

const W33 = styled.div`
  width: calc(33.33% - 120px);
  margin: 0px 60px 55px;
  text-align: center;
  ${Media.md} {
    width: calc(33.33% - 24px);
    margin: 0 auto 12px auto;
  }
  ${Media.md2} {
    width: calc(50% - 40px);
    margin: 0 auto 20px auto;
  }
  ${Media.sm} {
    width: calc(100% - 40px);
    max-width: 300px;
    margin: 0 auto 20px auto;
  }
  ${Media.xs} {
    width: calc(100% - 16px);
    max-width: 300px;
    margin: 0 auto 20px auto;
  }
`;

const PartnerOuter = styled(FlexDiv)`
  position: relative;
  .poverlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.GColor1Medium},
      ${(props) => props.theme.GColor2Medium}
    );
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 600ms;
    p {
      color: #fff;
      font-size: 18px;
      font-weight: 300;
      line-height: 20px;
      margin: 0px;
      padding: 0px 20px;

      ${Media.sm} {
        font-size: 16px;
        padding: 0px 8px;
      }
    }
  }
  :hover {
    cursor: pointer;
    .poverlay {
      opacity: 1;
    }
  }
`;

const LeaderName = styled.div`
  color: ${(props) => props.theme.TextWhite};
  font-size: 22px;
  font-weight: 300;
  margin: 20px 0px 15px;
`;

const LeaderDesc = styled.div`
  color: ${(props) => props.theme.LeadDesc};
  font-size: 18px;
  font-weight: 300;
  line-height: 18px;
  margin: 0px 0px 15px;
`;

export default AboutUs;
