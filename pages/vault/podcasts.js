import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Gs from '../../styles/theme.config';
import 'react-tabs/style/react-tabs.css';
import Media from '../../styles/media-breackpoint';
import Link from 'next/link';
// import 'react-multi-carousel/lib/styles.css'
import { FaRegPlayCircle } from '@react-icons/all-files/fa/FaRegPlayCircle';

//import next js packages
import Head from 'next/head';
import Image from 'next/image';

import PodcstThub01 from '../../public/images/hexicat-thumb-05.jpg';
import PodcstThub02 from '../../public/images/hexicat-thumb-02.jpg';
import PodcstThub03 from '../../public/images/hexicat-thumb-03.jpg';
import PodcstThub04 from '../../public/images/hexicat-thumb-04.jpg';
import PodcstThub05 from '../../public/images/hexicat-thumb-06.jpg';

import PodcstTiIMG01 from '../../public/images/pod-title.png';
import PodcstTiIMG02_w from '../../public/images/mobile-white.png';
import PodcstTiIMG02 from '../../public/images/mobile.png';
import PodcstTiIMG03 from '../../public/images/podkastIMG-01.jpg';

//import apis
import { getCategories } from '../api/blogs';

export const getServerSideProps = async () => {
  const allCategories = await getCategories();

  return {
    props: { allCategories },
  };
};

const Podcast = (props) => {
  const { setAllCategories, allCategories } = props;
  //sets the categories for header
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
      <VideoBG className="clearfix">
        <Gs.Container>
          {/* <FAqTitle>The Weigh In With WaLLrus 
          <span>Powered by LiquidLoans .io</span>  
          </FAqTitle> */}

          <HeroMBX>
            <HeroSBX01 className="wow fadeInLeft" data-wow-delay="0.6s">
              {' '}
              <Image src={PodcstTiIMG01} alt="" />
              <SubscrbBX>
                <span>subscribe with</span>

                <div className="btnBOX">
                  <Link
                    className="btn03"
                    target="_blank"
                    href="https://open.spotify.com/show/3HdzYPpRFGJJXuXql2LLyA"
                    prefetch={false}
                  ></Link>
                  <Link
                    className="btn01"
                    target="_blank"
                    href="https://podcasts.apple.com/us/podcast/the-weigh-in-with-wallrus/id1664095241"
                    prefetch={false}
                  ></Link>
                  <Link
                    className="btn04"
                    target="_blank"
                    href="https://music.amazon.co.uk/podcasts/09fe971f-d71b-4bbb-8006-f345b6a447ed/the-weigh-in-with-wallrus"
                    prefetch={false}
                  ></Link>
                  <Link
                    className="btn02"
                    target="_blank"
                    href="https://podcasts.google.com/search/weigh%20in%20with%20wallrus"
                    prefetch={false}
                  ></Link>
                  <Link
                    className="btn05"
                    target="_blank"
                    href="https://www.buzzsprout.com/2112715"
                    prefetch={false}
                  ></Link>
                </div>
              </SubscrbBX>
            </HeroSBX01>

            <HeroSBX02 className="wow fadeInRight" data-wow-delay="0.6s">
              <Link
                target="_blank"
                href="https://open.spotify.com/episode/6PfnvfZnYmB7Owsxi0vwvj"
                prefetch={false}
              >
                {' '}
                <Image
                  src={props.isDarkTheme ? PodcstTiIMG02 : PodcstTiIMG02_w}
                  alt=""
                />
              </Link>{' '}
            </HeroSBX02>
          </HeroMBX>

          

          <EpisodMBX className="wow fadeInUp" data-wow-delay="0.6s">
            <EpisodImgBx>
              <Link
                target="_blank"
                href="https://open.spotify.com/episode/6PfnvfZnYmB7Owsxi0vwvj"
                prefetch={false}
              >
                {' '}
                <Image
                  src={PodcstTiIMG03}
                  alt="Ep. #1 Jack Levin with WaLLrus"
                />{' '}
              </Link>
            </EpisodImgBx>
            <EpisodCntBX>
              <div className="episodTitle">
                Ep. #1 Jack Levin with WaLLrus
                <span>Dec 25, 2022</span>
              </div>
              <p>
                On anonymity & deception, cheating in drag racing, blockchain
                copycats, decentralization, being a vampire, the Kelly
                Criterion, predicting markets, AI, and more!
              </p>

              <Link
                target="_blank"
                href="https://open.spotify.com/episode/6PfnvfZnYmB7Owsxi0vwvj"
                className="bn-btn"
                prefetch={false}
              >
                <FaRegPlayCircle /> Watch Video Podcast on Spotify
              </Link>
            </EpisodCntBX>
          </EpisodMBX>

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
  background-image: url('${(props) => props.theme.PodcstBg}');
  background-repeat: no-repeat;
  background-position: center top;
  .xsOnly {
    display: none;
    ${Media.md2} {
      display: block;
    }
  }
`;

const PodcstBX = styled(FlexDiv)`
  width: 100%;
  max-width: 1292px;
  margin: 0 auto 40px auto;
  background-color: ${(props) => props.theme.CasStdyBG01};
  padding: 22px 20px;
  justify-content: flex-start;
  align-items: flex-start;
  direction: row;
  &.playing {
    background: ${(props) => props.theme.AdBXBORACT};
  }
  .pdcst-IMGbx {
    width: 248px;
    height: 248px;
    display: flex;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .pdcst-SUBbx {
    width: calc(100% - 248px);
    padding-left: 48px;
  }
  ${Media.md2} {
    .pdcst-IMGbx {
      width: 150px;
      height: 150px;
    }
    .pdcst-SUBbx {
      width: calc(100% - 150px);
      padding-left: 36px;
    }
  }
  ${Media.sm} {
    flex-direction: column;
    .pdcst-SUBbx {
      width: 100%;
      padding-left: 0px;
      padding-top: 20px;
    }
  }
`;
const PodcstSbx01 = styled(FlexDiv)`
  width: 100%;
  justify-content: flex-start;
  margin: 8px 0 12px 0;
  span {
    font-size: 20px;
    font-weight: 400;
    color: ${(props) => props.theme.TextWhite};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: 15px;
    svg {
      margin-right: 8px;
    }
  }
`;
const PodcstSTitle01 = styled(FlexDiv)`
  width: 100%;
  justify-content: flex-start;
  margin: 0 0 6px 0;
  font-size: 32px;
  font-weight: 700;
  color: ${(props) => props.theme.TextWhite};
`;
const PodcstStext01 = styled(PodcstSTitle01)`
  font-size: 20px;
  font-weight: 400;
`;
const PodcstVidBX = styled.div`
  width: 100%;
  justify-content: flex-start;
  margin: 20px 0 0 0;
  audio {
    width: 100%;
  }
  audio::-webkit-media-controls-panel {
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.GColor1},
      ${(props) => props.theme.GColorV2}
    );
  }
  audio::-webkit-media-controls-volume-slider {
    background-color: #fff;
    border-radius: 25px;
    padding-left: 8px;
    padding-right: 8px;
  }
  audio::-webkit-media-controls-play-button,
  audio::-webkit-media-controls-mute-button {
    background-color: #fff;
    border-radius: 50%;
  }
  audio::-webkit-media-controls-play-button:hover,
  audio::-webkit-media-controls-mute-button:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
  audio::-webkit-media-controls-current-time-display,
  audio::-webkit-media-controls-time-remaining-display,
  audio::-webkit-media-controls-timeline {
    color: #fff;
  }
`;
const HeroImg = styled(FlexDiv)`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 150px 0 0 0;
  text-align: center;
  img {
    max-width: 100%;
    height: auto;
  }
`;
const PodcstTitle01 = styled(FlexDiv)`
  width: 100%;
  max-width: 1300px;
  margin: 30px auto 30px auto;
  font-size: 64px;
  font-weight: 700;
  flex-direction: column;
  text-align: center;
  color: ${(props) => props.theme.TextWhite};
  text-transform: uppercase;
  span {
    font-size: 16px;
    font-weight: 300;
    color: ${(props) => props.theme.PDCText};
    letter-spacing: 4px;
    display: block;
    margin: 8px auto 0 auto;
    padding: 14px 0 0 0;
    min-width: 600px;
    border-top: 1px solid #475099;
  }
  ${Media.sm} {
    span {
      min-width: 95%;
      width: 95%;
    }
  }
`;

const PodcstTitle02 = styled.div`
  letter-spacing: -1px;
  font-weight: 300;
  text-transform: none;
  font-size: 56px;
  color: ${(props) => props.theme.TextWhite};
  width: 100%;
  max-width: 1300px;
  margin: 100px auto 80px auto;
  text-align: center;
  span {
    display: inline-block;
    &.colorful {
      background: -webkit-linear-gradient(0deg, #7049ff, #fc0af6, #fbedab);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  ${Media.sm} {
    font-size: 38px;
  }
`;

const FAqTitle = styled(FlexDiv)`
  font-size: 64px;
  line-height: 60px;
  letter-spacing: -1px;
  font-weight: bold;
  margin: 160px 0px 80px 0;
  color: ${(props) => props.theme.TextWhite};
  span {
    font-size: 16px;
    width: 100%;
    font-weight: 300;
    color: ${(props) => props.theme.PDCText};
    display: block;
    margin: 0 auto 40px auto;
    padding: 0 0 0 0;
    min-width: 600px;
    text-align: center;
    letter-spacing: 0;
  }

  ${Media.sm} {
    font-size: 40px;
    line-height: 40px;
  }
`;

const SubscrbBX = styled(FlexDiv)`
  width: 100%;
  margin: 40px auto 60px auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  span {
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme.PDCText};
    letter-spacing: 8px;
    display: block;
    margin: 0 auto 16px auto;
    padding: 0 0 0 0;
    min-width: 530px;
    padding-left: 25px;
    text-transform: uppercase;
  }

  ${Media.sm} {
    span {
      min-width: 100%;
      text-align: center;
    }
  }

  ${Media.md2} {
    align-items: center;
    justify-content: center;
  }

  .btnBOX {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 300px;
    button,
    a {
      width: 68px;
      height: 102px;
      border: none;
      background: transparent;
      transition: all 0.3s ease;
      margin: 0 15px;
      &.btn01 {
        background-image: url('${(props) => props.theme.pdstICO01}');
        background-position: 50% 50%;
        background-repeat: no-repeat;
      }
      &.btn02 {
        background-image: url('${(props) => props.theme.pdstICO02}');
        background-position: 50% 50%;
        background-repeat: no-repeat;
      }
      &.btn03 {
        background-image: url('${(props) => props.theme.pdstICO03}');
        background-position: 50% 50%;
        background-repeat: no-repeat;
      }
      &.btn04 {
        background-image: url('${(props) => props.theme.pdstICO04}');
        background-position: 50% 50%;
        background-repeat: no-repeat;
      }
      &.btn05 {
        background-image: url('${(props) => props.theme.pdstICO05}');
        background-position: 50% 50%;
        background-repeat: no-repeat;
      }
      :hover {
        filter: brightness(1.2);
        position: relative;
        transform: translateY(-6px);
      }
    }
    ${Media.md2} {
      flex-wrap: wrap;
    }

    ${Media.sm} {
      justify-content: center;
    }
    ${Media.xs} {
      min-width: 266px;

      button,
      a {
        margin: 0 10px;
      }
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
    margin-top: 100px;
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

const IframeBX = styled(FlexDiv)`
  width: 100%;
  max-width: 1134px;
  margin: 0 auto;
`;

const HeroMBX = styled(FlexDiv)`
  width: 100%;
  max-width: 1134px;
  margin: 160px auto 30px auto;
  ${Media.md2} {
    flex-direction: column-reverse;
    margin: 80px auto 30px auto;
  }
`;

const HeroSBX01 = styled(FlexDiv)`
  width: 50%;
  padding: 0 20px;

  ${Media.md2} {
    width: 100%;
    padding: 0 10px 20px 10px;
  }
`;
const HeroSBX02 = styled(FlexDiv)`
  width: 50%;
  padding: 0 20px;
  ${Media.md2} {
    width: 100%;
    padding: 0 10px 20px 10px;
  }
`;
const EpisodMBX = styled(FlexDiv)`
  width: 100%;
  justify-content: flex-start;
  max-width: 1120px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.PodcstBG04};
  border-radius: 10px;
  padding: 26px;
  box-shadow: 0px 0px 14px 2px rgba(52, 37, 68, 0.4);
`;
const EpisodImgBx = styled(FlexDiv)`
  width: 23%;
  justify-content: flex-start;
  align-items: flex-start;

  ${Media.sm} {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
const EpisodCntBX = styled(FlexDiv)`
  width: 77%;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 0 0 20px;

  .episodTitle {
    font-size: 32px;
    font-weight: 700;
    color: ${(props) => props.theme.TextWhite};
  }
  span {
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    color: ${(props) => props.theme.LeadDesc};
    display: block;
  }
  p {
    font-size: 22px;
    font-weight: 400;
    color: ${(props) => props.theme.TextWhite};
  }

  .bn-btn {
    padding: 17px 25px;
    color: #fff;
    text-transform: uppercase;
    margin: 0px 10px 0 0;
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
    svg {
      margin-right: 8px;
    }
    ${Media.xs} {
      padding: 17px 20px;
      width: 100%;
    }
    :hover {
      filter: brightness(1.3);
    }
    img {
      margin-right: 10px;
    }
  }

  ${Media.sm} {
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px 0 0 0;
  }
`;

export default Podcast;
