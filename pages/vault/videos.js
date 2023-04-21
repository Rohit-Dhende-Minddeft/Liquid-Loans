import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Gs from '../../styles/theme.config';
import { Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Media from '../../styles/media-breackpoint';
// import { Zoom, Fade } from 'react-reveal';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Modal } from 'react-responsive-modal';
import { FaRegPlayCircle } from '@react-icons/all-files/fa/FaRegPlayCircle';

//import next js packages
import Head from 'next/head';
import Image from 'next/image';

import Videomockup from '../../public/images/heroIMG.jpg';
import PlayBtn from '../../public/images/play-btn.png';
import Video1 from '../../public/images/vr_02.jpg';
import Video2 from '../../public/images/vr_01.jpg';
import Video4 from '../../public/images/vr_04.jpg';
import Video5 from '../../public/images/vr_06.jpg';
import Video7 from '../../public/images/vr_03.jpg';
import Video9 from '../../public/images/thumb-04.jpg';
import Video10 from '../../public/images/thumb-05.jpg';
import Video11 from '../../public/images/thumb-06.jpg';
import Video12 from '../../public/images/thumb-07.jpg';
import Video13 from '../../public/images/thumb-08.jpg';
import Video14 from '../../public/images/thumb-09.jpg';
import Video15 from '../../public/images/thumb-010.jpg';
import Video16 from '../../public/images/thumb-011.jpg';
import Video17 from '../../public/images/thumb-012.jpg';

import Episo10 from '../../public/images/vr_07.jpg';
import Episo11 from '../../public/images/vr_08.jpg';
import Episo12 from '../../public/images/vr_09.jpg';
import Episo13 from '../../public/images/vr_010.jpg';
import Episo14 from '../../public/images/vr_011.jpg';
import Episo15 from '../../public/images/vr_012.jpg';
import Episo16 from '../../public/images/vr_016.jpg';
import Episo17 from '../../public/images/vr_017.jpg';
import Episo18 from '../../public/images/vr_018.jpg';
import Episo19 from '../../public/images/vr_019.jpg';
import Episo20 from '../../public/images/vr_020.jpg';

//import apis
import { getCategories } from '../api/blogs';


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

const Video = (props) => {
  const { setAllCategories, allCategories } = props;
  //sets the categories for header
  useEffect(() => {
    setAllCategories(allCategories);
  }, [allCategories, setAllCategories]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const [open, setOpen] = useState(false);
  // const onOpenModal = () => setOpen(true);
  // const onCloseModal = () => setOpen(false);

  const [open01, setopen01] = useState(false);
  const [open02, setopen02] = useState(false);
  const [open03, setopen03] = useState(false);
  const [open04, setopen04] = useState(false);
  const [open05, setopen05] = useState(false);
  const [open06, setopen06] = useState(false);
  const [open07, setopen07] = useState(false);
  const [open08, setopen08] = useState(false);
  const [open09, setopen09] = useState(false);
  const [open010, setopen010] = useState(false);
  const [open011, setopen011] = useState(false);
  const [open012, setopen012] = useState(false);
  const [open013, setopen013] = useState(false);
  const [open014, setopen014] = useState(false);
  const [open015, setopen015] = useState(false);
  const [open016, setopen016] = useState(false);

  const [episod010, setepisod010] = useState(false);
  const [episod011, setepisod011] = useState(false);
  const [episod012, setepisod012] = useState(false);
  const [episod013, setepisod013] = useState(false);
  const [episod014, setepisod014] = useState(false);
  const [episod015, setepisod015] = useState(false);

  const [episod016, setepisod016] = useState(false);
  const [episod017, setepisod017] = useState(false);
  const [episod018, setepisod018] = useState(false);
  const [episod019, setepisod019] = useState(false);

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
          <Section4 className="wow fadeInUp" data-wow-duration="0.6s">
            <FAqTitle>
              Videos On YouTube
              <BorrowBtn>
                <Link
                  target="_blank"
                  href={{ pathname: 'https://www.youtube.com/@LiquidLoans' }}
                  style={{ color: 'white' }}
                  prefetch={false}
                >
                  <FaRegPlayCircle />
                  WATCH & SUBSCRIBE
                </Link>
              </BorrowBtn>
            </FAqTitle>

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
                        <Link href="/video" className="Fixer01" prefetch={false}>
                          <Image src={PlayBtn} alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="W60">
                      <BenefitTitle>*NEW* April 2023 Dev Update</BenefitTitle>
                      <BenefitDesc>
                      In this video, Liquid Loans CEO 'Crypto Crazy' shares the latest development team updates including dapp enhancements, a status report for testnet v4, progress report on the new decentralized oracle technology that is being created natively for PulseChain, plus insights into broader macro and TradFi topics that people should be paying close attention to right now.

                      </BenefitDesc>
                    </div>
                  </div>
                </Carousel>
              </BlueLayer2>
            </BlueLayer>
          </Section4>
          <Section8>
            <Tabs>
              <VideoRow style={{ marginTop: '60px' }}>
                <W33 className="wow zoomIn" data-wow-delay="0.1s">
                  <div className="SOouter" onClick={() => setopen03(true)}>
                    <Image src={Video2} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                  *5-minute news* PulseChain + PulseX Live Updates [important]
                  </VText>
                </W33>

                <W33 className="wow zoomIn" data-wow-delay="0.2s">
                  <div className="SOouter" onClick={() => setopen05(true)}>
                    <Image src={Video4} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                  PULSEX: INC Token Farming vs Single Sided Staking [yield explained]
                  </VText>
                </W33>
                <W33 className="wow zoomIn" data-wow-delay="0.3s">
                  <div className="SOouter" onClick={() => setopen02(true)}>
                    <Image src={Video1} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                  [NEW] DeFi, Stablecoins, TradFi, & the Future of Money, with CC & Adam
                  </VText>
                </W33>

                <W33 className="wow zoomIn" data-wow-delay="0.1s">
                  <div className="SOouter" onClick={() => setopen01(true)}>
                    <Image src={Episo20} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                  PulseChain's Funding Gym & Wallrus discuss "True Value In Crypto"
                  </VText>
                </W33>

                <W33 className="wow zoomIn" data-wow-delay="0.2s">
                  <div className="SOouter" onClick={() => setopen04(true)}>
                    <Image src={Video7} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                  PULSECHAIN Special Live ETHDenver Update
                  </VText>
                </W33>
                <W33 className="wow zoomIn" data-wow-delay="0.3s">
                  <div className="SOouter" onClick={() => setopen07(true)}>
                    <Image src={Video5} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                  *UPDATE* on NEW Oracle launching on PulseChain SOON!
                  </VText>
                </W33>
              </VideoRow>
              <LeaderText>Behind The Scenes</LeaderText>

              <VideoRow>
                <W33 className="wow zoomIn">
                  <div className="SOouter" onClick={() => setepisod019(true)}>
                    <Image src={Episo19} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                    Behind the Scenes with Liquid Loans E19 Validator
                    Considerations
                  </VText>
                </W33>

                <W33 className="wow zoomIn">
                  <div className="SOouter" onClick={() => setepisod018(true)}>
                    <Image src={Episo18} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                    Behind the Scenes with Liquid Loans E18 LL Validator Node
                    Staking
                  </VText>
                </W33>

                <W33 className="wow zoomIn">
                  <div className="SOouter" onClick={() => setepisod017(true)}>
                    <Image src={Episo17} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                    Behind the Scenes with Liquid Loans E17 Zero Fee Lending??
                  </VText>
                </W33>

                <W33 className="wow zoomIn">
                  <div className="SOouter" onClick={() => setepisod016(true)}>
                    <Image src={Episo16} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                    Behind the Scenes with Liquid Loans E16 Testnet Frontend
                    Demo
                  </VText>
                </W33>

                <W33 className="wow zoomIn">
                  <div className="SOouter" onClick={() => setepisod015(true)}>
                    <Image src={Episo15} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                    Behind the Scenes with Liquid Loans E15 Sacrifice How To
                  </VText>
                </W33>
                <W33 className="wow zoomIn">
                  <div className="SOouter" onClick={() => setepisod014(true)}>
                    <Image src={Episo14} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                    Behind the Scenes with Liquid Loans E14 Frontend Operation
                  </VText>
                </W33>

                <W33 className="wow zoomIn">
                  <div className="SOouter" onClick={() => setepisod013(true)}>
                    <Image src={Episo13} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                    Behind the Scenes with Liquid Loans E13 How to get a
                    Referral Link
                  </VText>
                </W33>

                <W33 className="wow zoomIn">
                  <div className="SOouter" onClick={() => setepisod012(true)}>
                    <Image src={Episo12} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                    Behind the Scenes with Liquid Loans E12 How to Stake PLS
                  </VText>
                </W33>

                <W33 className="wow zoomIn">
                  <div className="SOouter" onClick={() => setepisod011(true)}>
                    <Image src={Episo11} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                    Behind the Scenes with Liquid Loans E11 Which Strategy to
                    Use
                  </VText>
                </W33>
                <W33 className="wow zoomIn">
                  <div className="SOouter" onClick={() => setepisod010(true)}>
                    <Image src={Episo10} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                    Behind the Scenes with Liquid Loans E10 Haunted Strategy in
                    10mins
                  </VText>
                </W33>
                <W33 className="wow zoomIn">
                  <div className="SOouter" onClick={() => setopen08(true)}>
                    <Image src={Video9} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>Behind the Scenes with Liquid Loans E09 WonDeFi</VText>
                </W33>

                <W33 className="wow zoomIn">
                  <div className="SOouter" onClick={() => setopen09(true)}>
                    <Image src={Video10} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                    Behind the Scenes with Liquid Loans E08 Recovery Mode
                  </VText>
                </W33>
                <W33 className="wow zoomIn">
                  <div className="SOouter" onClick={() => setopen010(true)}>
                    <Image src={Video11} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                    Behind the Scenes with Liquid Loans E07 R.T.F.M.
                  </VText>
                </W33>

                <W33 className="wow zoomIn">
                  <div className="SOouter" onClick={() => setopen011(true)}>
                    <Image src={Video12} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                    Behind the Scenes with Liquid Loans E06 Collateral Ratios
                  </VText>
                </W33>

                <W33 className="wow zoomIn">
                  <div className="SOouter" onClick={() => setopen012(true)}>
                    <Image src={Video13} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                    Behind the Scenes with Liquid Loans E05 Stability Pool
                  </VText>
                </W33>

                <W33 className="wow zoomIn">
                  <div className="SOouter" onClick={() => setopen013(true)}>
                    <Image src={Video14} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                    Behind the Scenes with Liquid Loans E04 LOAN Staking
                  </VText>
                </W33>

                <W33 className="wow zoomIn">
                  <div className="SOouter" onClick={() => setopen014(true)}>
                    <Image src={Video15} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>Behind the Scenes with Liquid Loans E03 Vaults</VText>
                </W33>

                <W33 className="wow zoomIn">
                  <div className="SOouter" onClick={() => setopen015(true)}>
                    <Image src={Video16} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>
                    Behind the Scenes with Liquid Loans E02 LOAN USDL
                  </VText>
                </W33>

                <W33 className="wow zoomIn">
                  <div className="SOouter" onClick={() => setopen016(true)}>
                    <Image src={Video17} alt="" />
                    <div className="SOoverlay">
                      <p>
                        <Image src={PlayBtn} alt="" />
                      </p>
                    </div>
                  </div>
                  <VText>Behind the Scenes with Liquid Loans E01 Meet LL</VText>
                </W33>
              </VideoRow>
            </Tabs>
          </Section8>
        </Gs.Container>
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
                src="https://www.youtube.com/embed/tMm6aWNCt10?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={open02}
          onClose={() => setopen02(false)}
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
                src="https://www.youtube.com/embed/5WRF0EaHqe0?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={open03}
          onClose={() => setopen03(false)}
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
                src="https://www.youtube.com/embed/HLZm4BmjFMs?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={open04}
          onClose={() => setopen04(false)}
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
                src="https://www.youtube.com/embed/cP0Ia7-SSaM?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={open05}
          onClose={() => setopen05(false)}
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
                src="https://www.youtube.com/embed/DOu1rzs4_wU?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>
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
                src="https://www.youtube.com/embed/-NC4khRiYL4?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>
        <Modal
          open={open07}
          onClose={() => setopen07(false)}
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
                src="https://www.youtube.com/embed/XB5W574dLtg?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={open08}
          onClose={() => setopen08(false)}
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
                src="https://www.youtube.com/embed/YUgi_GtBoXI?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={open09}
          onClose={() => setopen09(false)}
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
                src="https://www.youtube.com/embed/xDSdfLezEbo?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>
        {/*   */}

        <Modal
          open={open010}
          onClose={() => setopen010(false)}
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
                src="https://www.youtube.com/embed/3ceyiEUu0is?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={open011}
          onClose={() => setopen011(false)}
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
                src="https://www.youtube.com/embed/eX0e-ME6BZw?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={open012}
          onClose={() => setopen012(false)}
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
                src="https://www.youtube.com/embed/R4c_Kgo4s6o?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={open013}
          onClose={() => setopen013(false)}
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
                src="https://www.youtube.com/embed/2za1bbmJb2w?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={open014}
          onClose={() => setopen014(false)}
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
                src="https://www.youtube.com/embed/dHbPMnyu05I?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={open015}
          onClose={() => setopen015(false)}
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
                src="https://www.youtube.com/embed/BZSm2KrYWeg?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={open016}
          onClose={() => setopen016(false)}
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
                src="https://www.youtube.com/embed/krcu0_2-yYI?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={episod010}
          onClose={() => setepisod010(false)}
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
                src="https://www.youtube.com/embed/AxBDV4ULGss?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={episod011}
          onClose={() => setepisod011(false)}
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
                src="https://www.youtube.com/embed/VfW7lJ-5gbo?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={episod012}
          onClose={() => setepisod012(false)}
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
                src="https://www.youtube.com/embed/PwumVtG1Veo?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={episod013}
          onClose={() => setepisod013(false)}
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
                src="https://www.youtube.com/embed/iur6A56WyfY?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={episod014}
          onClose={() => setepisod014(false)}
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
                src="https://www.youtube.com/embed/c4Fo2RFiYy4?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={episod015}
          onClose={() => setepisod015(false)}
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
                src="https://www.youtube.com/embed/9iKqBPFTZmo?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={episod016}
          onClose={() => setepisod016(false)}
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
                src="https://www.youtube.com/embed/0pHx0MBD_Ac?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={episod017}
          onClose={() => setepisod017(false)}
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
                src="https://www.youtube.com/embed/txaEpMsVE_Q?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={episod018}
          onClose={() => setepisod018(false)}
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
                src="https://www.youtube.com/embed/YEjdaFZeOY0?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </ModalContent>
        </Modal>

        <Modal
          open={episod019}
          onClose={() => setepisod019(false)}
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
                src="https://www.youtube.com/embed/1BSMGi95NyI?autoplay=1"
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
const LeaderText = styled.div`
  font-size: 81px;
  line-height: 81px;
  font-weight: bold;
  color: ${(props) => props.theme.TextWhite};
  margin: 70px auto 60px auto;
  max-width: 1200px;
  text-align: center;
  ${Media.sm} {
    font-size: 34px;
    line-height: 40px;
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

        .Fixer01 {
          pointer-events: none;
        }
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

const Section8 = styled.div`
  max-width: 1288px;
  margin: 0 auto;
  padding: 0px 0px 90px;
  .react-tabs__tab-list {
    border-bottom: none;
    margin: 0px 0px 50px;
    text-align: center;
  }
  .react-tabs__tab {
    background-color: ${(props) => props.theme.TabColor};
    border: none;
    border-radius: 5px;
    margin-right: 23px;
    padding: 10px 20px;
    color: ${(props) => props.theme.TextWhite};
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 300;

    :hover {
      filter: brightness(1.5);
    }
  }
  .react-tabs__tab--selected {
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.GColor3},
      ${(props) => props.theme.GColor4}
    );
    box-shadow: 0px 3px 6px 0px ${(props) => props.theme.BoxShadow3};
    border: none;
    :hover {
      filter: none;
    }
  }
  .react-tabs__tab:focus {
    box-shadow: none;
  }
  .react-tabs__tab:focus:after {
    display: none;
  }

  ${Media.xs} {
    .react-tabs__tab {
      margin-bottom: 15px;
    }
  }
`;

const VideoRow = styled(FlexDiv)`
  align-items: flex-start;
  margin: 0px -27px;

  ${Media.lg} {
    padding: 0 25px;
  }
`;

const W33 = styled.div`
  width: calc(33.33% - 54px);
  margin: 0px 27px;
  padding-bottom: 60px;

  ${Media.md2} {
    width: calc(33.33% - 32px);
    margin: 0px 16px;
    padding-bottom: 30px;
  }
  ${Media.sm} {
    width: calc(100% - 32px);
    margin: 0px 16px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .SOouter {
    position: relative;
    overflow: hidden;
    display: flex;
    cursor: pointer;
    transition: all 600ms;
    img {
      transition: all 600ms;
    }
    :hover img {
      transform: scale(1.1);
    }
    .SOoverlay {
      position: absolute;
      bottom: -100px;
      left: -100px;
      background-color: ${(props) => props.theme.SOoverlay};
      width: 200px;
      height: 200px;
      transform: rotate(45deg);
      display: flex;
      align-items: flex-start;
      justify-content: center;
      p {
        transform: rotate(-45deg);
        margin-left: 10px;
        margin-top: 15px;
      }
    }
  }
`;

const VText = styled.div`
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
  color: ${(props) => props.theme.TextWhite};
  padding: 15px 13px;
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

const FAqTitle = styled(FlexDiv)`
  font-size: 81px;
  line-height: 81px;
  text-align: center;
  letter-spacing: -1px;
  font-weight: bold;
  margin: 0px 0px 35px;
  color: ${(props) => props.theme.TextWhite};
  flex-direction: column;
  width: 100%;
  ${Media.sm} {
    font-size: 50px;
    line-height: 55px;
  }
`;
const BorrowBtn = styled.button`
  font-size: 19px;
  line-height: 19px;
  padding: 17px 28px;
  border-radius: 30px;
  margin: 12px 0 0 0;
  color: #fff;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.GColor1},
    ${(props) => props.theme.GColor2}
  );
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 6px;
  }

  a {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.grayBTN {
    background: linear-gradient(90deg, #a2a2a2, #707070);
  }

  &:hover {
    opacity: 0.8;
  }
  ${Media.md} {
    font-size: 16px;
  }
  ${Media.md2} {
    font-size: 16px;
    padding: 17px 8px;
    display: none;
  }
  ${Media.sm} {
    display: block;
  }
`;

export default Video;
