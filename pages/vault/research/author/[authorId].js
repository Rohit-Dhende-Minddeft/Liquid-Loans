//import npm packages
import { useEffect, useState } from 'react';
import { AiFillLinkedin } from '@react-icons/all-files/ai/AiFillLinkedin';
import { AiFillTwitterSquare } from '@react-icons/all-files/ai/AiFillTwitterSquare';

//import next js packages
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'

//import styles
import styled from 'styled-components';
import Gs from '../../../../styles/theme.config';
import Media from '../../../../styles/media-breackpoint';
import Masonry from 'react-masonry-css';

//import media
import ShadowBX from '../../../../public/images/banner-shadown.jpg';
import IcoSearch from '../../../../public/images/search-symbol.png';
import UserImg02 from '../../../../public/images/user-img02.png';
import BTMBXico01 from '../../../../public/images/faq-ico.png';
import BTMBXico02 from '../../../../public/images/utube-ico.png';

//import components

//import apis
import { getBlogsByAuthor, getCategories } from '../../../api/blogs';

export const getServerSideProps = async (context) => {
  const authorId = context.params.authorId;
  const authorBlogs =
    authorId === undefined || authorId === 'undefined'
      ? []
      : await getBlogsByAuthor(authorId);
  const allCategories = await getCategories();

  if (authorBlogs.length !== 0) {
    return {
      props: { authorBlogs, allCategories },
    };
  } else {
    return { notFound: true };
  }
};

const Card = dynamic(() => import('../../../../components/Card'))

const AuthorPage = (props) => {
  const [isOpen01, setIsOpen01] = useState(false);
  const { authorBlogs, allCategories, setAllCategories } = props;
  const router = useRouter();

  useEffect(() => {
    // window.scrollTo(0, 10)
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    768: 2,
    600: 1,
  };

  const imagePerRow = 6;

  const [next, setNext] = useState(9);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  const [filter, setFilter] = useState('all');
  const [filteredData, setFilteredData] = useState(authorBlogs);

  //Handle filter function
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  //Filters the blogs according to the option selected
  useEffect(() => {
    const filterD = authorBlogs?.filter((item) => {
      if (filter === 'all') {
        return item;
      } else if (
        item.post_title?.toLowerCase().includes(filter.toLowerCase()) ||
        item.category
          ?.map((cat) => cat.slug?.toLowerCase())
          .includes(filter.toLowerCase()) ||
        item.author.nickname?.toLowerCase().includes(filter.toLowerCase())
      ) {
        return item;
      }
    });
    setFilteredData(filterD);
  }, [filter]);

  //sets categories for the header
  useEffect(() => {
    setAllCategories(allCategories);
  }, [allCategories, setAllCategories]);

  //get current url for canonical tag and og:url
  const [location, setLocation] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLocation(window.location.href);
    }
  }, [location]);

  const { nickname, description, avtar, linkedin, twitter } =
    authorBlogs.length > 0 && authorBlogs[0]?.author;

  return (
    <>
      <Head>
        <title>Author: {nickname}</title>
        <link rel="apple-touch-icon" href="./images/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2.0"
        />
        <meta
          name="keywords"
          content="Liquid Loans. 0% Interest Free Borrowing built for PulseChain. #neverselling "
        />
        <meta name="description" content={description} />
        <link rel="canonical" content={location} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="revisit-after" content="3 days" />
        <meta property="og:title" content={nickname} />
        <meta description="og:description" content={description} />
        <meta
          property="og:image"
          content=" https://liquidloans.io/images/liquidloans.jpg"
        />
        <meta property="og:image:width" content="1440" />
        <meta property="og:image:height" content="640" />

        <meta property="og:url" content={location} />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={nickname} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={twitter} />
        <meta
          name="twitter:image"
          content="https://liquidloans.io/images/liquidloans.jpg"
        />
      </Head>
      <HomeBG>
        <Gs.BContainer>
          <Section1>
            {/* <Fade cascade bottom delay={300} duration={1600}> */}

            <MainHeadBX>
              <HeadSbx>
                <div className="userBX">
                  <i>
                    <Image
                      src={authorBlogs.length > 0 && avtar ? avtar : UserImg02}
                      alt="User"
                      width={UserImg02.width}
                      height={UserImg02.height}
                    />
                  </i>
                  {/* <h2>{authorBlogs.length > 0 && nickname}</h2> */}
                </div>
                <div className="userInfoContent">
                  <h3>About {authorBlogs.length > 0 && nickname}</h3>
                  <p>{authorBlogs.length > 0 && description}</p>
                  <div className="userbioLinkBX">
                    {linkedin && linkedin !== null && (
                      <Link href={linkedin} target="_blank" prefetch={false}>
                        <AiFillLinkedin />
                      </Link>
                    )}
                    {twitter && twitter !== null && (
                      <Link href={twitter} target="_blank" prefetch={false}>
                        <AiFillTwitterSquare />
                      </Link>
                    )}
                  </div>
                </div>
              </HeadSbx>
            </MainHeadBX>

            <BTitle01>
              <BSubbox01>
                <h1> Popular Articles</h1>
              </BSubbox01>
              <BSubbox02>
                <div className="SearchBX ani-1">
                  <div
                    className={
                      'searchInputBX ani-1 ' + (isOpen01 ? 'active' : '')
                    }
                  >
                    <input
                      type="text"
                      placeholder="Search ..."
                      className="searchInput"
                      onChange={handleFilterChange}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.code === 'NumpadEnter') {
                          router.push(
                            `/vault/research/search/${e.target.value}`
                          );
                        }
                      }}
                    />
                    <button
                      aria-label="Close Button"
                      className="closBTN"
                      onClick={() => setIsOpen01((state) => !state)}
                    >
                      X
                    </button>
                  </div>
                  <button
                    aria-label="Search Icon"
                    className="SearchICO"
                    onClick={() => setIsOpen01((state) => !state)}
                  ></button>
                </div>
              </BSubbox02>
            </BTitle01>

            <BodyContent>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {filteredData?.slice(0, next)?.map((blog, index) => {
                  return (
                    <div className="postMbx" key={index}>
                      <Link
                        href={`/vault/research/${blog.category[0].slug}/${blog.slug}`}
                        prefetch={false}
                      >
                        <Card
                          key={index}
                          title={blog.post_title}
                          content={blog.descrption}
                          readingTime={blog.reading_time}
                          categories={blog.category}
                          author={blog.author}
                          bannerImage={blog.banner_img_url}
                        />
                      </Link>
                    </div>
                  );
                })}
              </Masonry>

              <ButtonBar01>
                {next < filteredData?.length ? (
                  <button
                    aria-label="Load More Image"
                    onClick={handleMoreImage}
                    type="button"
                    className="btn01"
                  >
                    Load More +
                  </button>
                ) : filteredData.length > 0 ? (
                  <h1>You have caught up with all the articles </h1>
                ) : (
                  <h1>Oops no articles found</h1>
                )}
              </ButtonBar01>

              <BottomMBX>
                <BtmSbx01>
                  <BtmSSubbx>
                    <div className="ssbxtitle01">
                      How It Works
                      <span>
                        Liquid Loans is the first truly decentralized lending
                        protocol built specifically for PulseChain.
                      </span>
                      <button
                        aria-label="Learn More"
                        onClick={() =>
                          window.open('https://www.liquidloans.io/', '_blank')
                        }
                      >
                        LEARN MORE{' '}
                      </button>
                    </div>
                  </BtmSSubbx>
                </BtmSbx01>

                <BtmSbx02>
                  <button
                    aria-label="Videos"
                    className="BTMSbox01 firstChild"
                    onClick={() =>
                      window.open(
                        'https://www.youtube.com/c/LiquidLoans/videos',
                        '_blank'
                      )
                    }
                  >
                    <Image src={BTMBXico02} alt="Videos" />
                    Videos
                  </button>
                  <button
                    aria-label="Podcasts"
                    className="BTMSbox01 "
                    onClick={() =>
                      window.open(
                        'https://open.spotify.com/show/3HdzYPpRFGJJXuXql2LLyA',
                        '_blank'
                      )
                    }
                  >
                    <Image src={BTMBXico01} alt="Podcasts" /> Podcasts
                  </button>
                </BtmSbx02>
              </BottomMBX>
            </BodyContent>

            {/* </Fade> */}
          </Section1>
        </Gs.BContainer>
      </HomeBG>
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
  background-image: url('${(props) => props.theme.ReserBG01}');
  background-repeat: no-repeat;
  background-position: top center;
`;
const Section1 = styled.div`
  padding: 160px 0px 105px;
  ${Media.sm} {
    padding: 110px 0px 60px;
  }
`;
const MainHeadBX = styled(FlexDiv)`
  width: 100%;
  background: ${(props) => props.theme.BHbxColor};
  padding: 30px;
  -webkit-box-shadow: 0 0 15px 1px ${(props) => props.theme.HeroboxShadow};
  box-shadow: 0 0 15px 1px ${(props) => props.theme.HeroboxShadow};
  border-radius: 30px;
  align-items: center;
  position: relative;
  margin-bottom: 92px;
  min-height: 340px;
  &:after {
    content: '';
    border: none;
    position: absolute;
    top: calc(100% - -2px);
    left: 0;
    right: 0;
    height: 100px;
    display: block;
    background: url(${ShadowBX.src}) center bottom no-repeat;
    background-size: 100%;
    mix-blend-mode: multiply;
  }

  ${Media.md2} {
    &:after {
      top: calc(100% - 27px);
    }
  }
  ${Media.xs} {
    padding: 15px;
  }
`;

const HeadSbx = styled(FlexDiv)`
  width: 100%;
  max-width: 860px;
  padding-left: 20px;

  .userBX {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 26px;
    font-weight: 600;
    letter-spacing: -1px;
    color: #000000;
    i {
      width: 192px;
      height: 192px;
      border-radius: 100px;
      border: 5px solid #ededed;
      overflow: hidden;
      margin-bottom: 8px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .userInfoContent {
    width: calc(100% - 192px);
    padding: 8px 8px 8px 70px;
    h3 {
      font-size: 23px;
      font-weight: 600;
      letter-spacing: -1px;
      color: ${(props) => props.theme.TextWhite};
    }
    p {
      font-size: 18px;
      font-weight: 400;
      color: ${(props) => props.theme.TextWhite02};
      line-height: 24px;
    }
  }
  .userbioLinkBX {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 32px;
    a {
      color: #b097ca;
      margin: 0 9px 0 0;
      :hover {
        color: #7239ae;
      }
    }
  }

  ${Media.sm} {
    flex-direction: column;
    padding: 8px;
    .userBX {
      width: 100%;
      i {
        width: 110px;
        height: 110px;
      }
    }
    .userInfoContent {
      width: 100%;
      padding: 10px;
      text-align: center;
    }
    .userbioLinkBX {
      justify-content: center;
    }
  }
`;

const BTitle01 = styled(FlexDiv)`
  width: 100%;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 40px;
  font-weight: 600;
  color: ${(props) => props.theme.TextWhite};

  ${Media.xs} {
    width: 100%;
    justify-content: center;
  }
`;
const BSubbox01 = styled(FlexDiv)`
  letter-spacing: -1px;
`;
const BSubbox02 = styled(FlexDiv)`
  position: relative;

  .SearchBX {
    position: relative;
    .searchInputBX {
      position: absolute;
      display: flex;
      height: 48px;
      border-radius: 30px;
      background-color: #fff;
      -webkit-box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.05);
      box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.05);
      border: 1px solid #dbdbdb;
      top: -1px;
      right: -2px;
      z-index: 5;
      width: 0;
      opacity: 0;
      visibility: hidden;
      .searchInput {
        text-transform: capitalize;
      }
      &.active {
        width: 380px;
        opacity: 1;
        visibility: visible;
      }
      .closBTN {
        position: absolute;
        right: 8px;
        top: 12px;
        font-size: 16px;
        display: flex;
        width: 25px;
        height: 25px;
        :hover {
          opacity: 0.8;
        }
      }
      input {
        width: 100%;
        padding: 4px 50px 4px 12px;
        background-color: transparent;
        border: none;
        font-size: 16px;
        font-weight: 400;
        border-radius: 30px;
      }
    }
  }
  .SearchICO {
    display: block;
    width: 45px;
    height: 45px;
    border: none;
    background: url(${IcoSearch.src}) 50% 50% no-repeat;
    :hover {
      filter: brightness(1.2);
    }
  }
  .CateBX {
    width: 196px;
    overflow: hidden;
    border: 1px solid #d0d0d0;
    border-radius: 12px;
    height: 44px;
    display: block;
    background-color: #fff;
    position: relative;
    margin: 0 20px 0 0;
    select {
      font-size: 16px;
      font-weight: 600;
      height: 44px;
      border: none;
      width: 110%;
      float: left;
      padding: 0 0 0 10px;
    }
    &:after {
      content: '';
      border-width: 5px;
      border-style: solid;
      border-color: #000 transparent transparent transparent;
      position: absolute;
      right: 12px;
      top: 19px;
    }
  }

  ${Media.xs} {
    width: 100%;
    justify-content: center;
    margin-top: 15px;

    .searchInputBX.active {
      width: calc(100vw - 80px) !important;
    }
  }
`;
const BodyContent = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 50px 0 0 0;
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -40px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 40px; /* gutter size */
    background-clip: padding-box;
  }
  /* Style your items */
  .my-masonry-grid_column > .postMbx {
    background: ${(props) => props.theme.BHbxColor};
    -webkit-box-shadow: 0 0 15px 1px ${(props) => props.theme.HeroboxShadow};
    box-shadow: 0 0 15px 1px ${(props) => props.theme.HeroboxShadow};
    margin-bottom: 40px;
    padding: 10px;
    border-radius: 20px;
    transition: all 400ms ease-in-out;
    transform: translateY(0);
    :hover {
      -webkit-box-shadow: 0 10px 15px 1px
        ${(props) => props.theme.HeroboxShadow};
      box-shadow: 0 10px 15px 1px ${(props) => props.theme.HeroboxShadow};
      transform: translateY(-3px);
      cursor: pointer;
    }
  }
  .BimgBX01 {
    width: 100%;
    height: 204px;
    overflow: hidden;
    border-radius: 20px;
    margin: 0 0 16px 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.v2 {
      height: 244px;
    }
  }
  .blogPostTitle01 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    color: #a7a7a7;
    padding: 0 12px;
    margin-bottom: 28px;
    .readingTime {
      color: #656565;
    }
  }
  .blogPostTitle02 {
    font-size: 21px;
    color: ${(props) => props.theme.TextWhite};
    line-height: 26px;
    font-weight: 600;
    padding: 0 12px;
    margin-bottom: 20px;
  }
  .blogPostText01 {
    padding: 0 12px;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.TextWhite02};
    margin-bottom: 36px;
  }
`;

const ButtonBar01 = styled(FlexDiv)`
  width: 100%;
  margin: 35px 0 100px 0;
  color: ${(props) => props.theme.TextWhite02};
  .btn01 {
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    color: ${(props) => props.theme.TextWhite};
    border: 1px solid ${(props) => props.theme.TransBorder};
    border-radius: 30px;
    background-color: ${(props) => props.theme.TransBg};
    padding: 8px 10px;
    width: 100%;
    max-width: 370px;
    :hover {
      filter: brightness(0.7);
    }
  }
`;
const BottomMBX = styled(FlexDiv)`
  width: 100%;
`;
const BtmSbx01 = styled(FlexDiv)`
  width: 55%;
  min-height: 340px;
  background: url('${(props) => props.theme.HIWBG}') 50% 50% no-repeat
    ${(props) => props.theme.BHbxColor};

  background-size: cover;
  padding: 15px;
  align-items: stretch;
  justify-content: stretch;

  ${Media.md2} {
    width: 100%;
    min-height: 280px;
  }

  ${Media.xs} {
    background-size: 200%;
    background-position: 0 0;
  }
`;

const BtmSSubbx = styled(FlexDiv)`
  width: 100%;
  border: 1px solid ${(props) => props.theme.TransBorder};
  justify-content: flex-start;
  padding: 0 0 0 26px;
  .ssbxtitle01 {
    color: ${(props) => props.theme.TextWhite};
    font-size: 32px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    span {
      font-size: 16px;
      color: ${(props) => props.theme.TextWhite02};
      font-weight: 400;
      max-width: 230px;
      margin: 15px 0;
    }
    button {
      font-size: 19px;
      line-height: 19px;
      padding: 14px 14px;
      border-radius: 30px;
      color: #fff;
      background: linear-gradient(
        90deg,
        ${(props) => props.theme.GColor1},
        ${(props) => props.theme.GColor2}
      );
      max-width: 160px;
      &:hover {
        opacity: 0.9;
      }
    }
  }
`;
const BtmSbx02 = styled(FlexDiv)`
  width: 45%;
  min-height: 340px;
  padding-left: 38px;

  .BTMSbox01 {
    width: 100%;
    background-color: ${(props) => props.theme.BHbxColor02};
    height: 158px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${(props) => props.theme.TextWhite};
    font-size: 32px;
    font-weight: 600;

    img {
      margin: 12px 20px 0 25px;
    }
    :hover {
      opacity: 0.8;
    }
    &.firstChild {
      margin-bottom: 25px;
    }
  }

  ${Media.md2} {
    width: 100%;
    min-height: auto;
    padding: 15px 0 0 0;
    .BTMSbox01 {
      width: 48%;
      &.firstChild {
        margin-bottom: 0;
        margin-right: 4%;
      }
    }
  }

  ${Media.sm} {
    .BTMSbox01 img {
      max-width: 60px;
    }
    .BTMSbox01 {
      font-size: 26px;
    }
  }
  ${Media.xs} {
    .BTMSbox01 {
      font-size: 20px;
      width: 100%;
      height: 100px;
      &.firstChild {
        margin-bottom: 8px;
        margin-right: 0;
      }
    }
  }
`;

export default AuthorPage;
