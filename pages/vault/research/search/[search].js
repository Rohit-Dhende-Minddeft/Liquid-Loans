//import npm packages
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from '@react-icons/all-files/ai/AiOutlineSearch';

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
import BTMBXico01 from '../../../../public/images/faq-ico.png';
import BTMBXico02 from '../../../../public/images/utube-ico.png';

//import components

//import apis
import {
  getCategories,
  getBlogsBySearch,
  getBlogs,
} from '../../../../pages/api/blogs';

export const getServerSideProps = async (context) => {
  const { search } = context.query;
  const allBlogs = await getBlogs();

  const blogs = await getBlogsBySearch(search);
  const allCategories = await getCategories();

  return {
    props: { blogs, allCategories, search, allBlogs },
  };
};


const Card = dynamic(() => import('../../../../components/Card'))

const Search = (props) => {
  const { blogs, setAllCategories, allCategories, search, allBlogs } = props;
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

  const [filter, setFilter] = useState(search);
  const [filteredData, setFilteredData] = useState(
    filter === '' ? allBlogs : blogs
  );

  //Handle filter function
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  //Filters the blogs according to the option selected
  useEffect(() => {
    const filterData = allBlogs?.filter((item) => {
      if (filter === '') {
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
    setFilteredData(filterData);
  }, [filter, allBlogs]);

  //sets the categories for header
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

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" href="./images/favicon.png" />
        <title>Search: {router.query.search}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2.0"
        />
        <meta
          name="keywords"
          content="Liquid Loans. 0% Interest Free Borrowing built for PulseChain. #neverselling "
        />
        <meta
          property="og:title"
          content={`Liquid Loans. Search: ${router.query.search}`}
        />
        <meta
          name="description"
          content="✓ 0% Interest-Free ✓ Algorithmic Stablecoin ✓ Immutable ✓ Governance-Free ✓ No Admin Keys"
        />
        <meta
          name="google-site-verification"
          content="tFM5T7kMGqGaqNMe8Cs6EvJ8PZrT45_9bncFeILmOKA"
        />
        <link rel="canonical" content={location} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="revisit-after" content="3 days" />

        <meta property="og:url" content={location} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="✓ 0% Interest-Free ✓ Algorithmic Stablecoin ✓ Immutable ✓ Governance-Free ✓ No Admin Keys"
        />
        <meta
          property="og:image"
          content=" https://liquidloans.io/images/liquidloans.jpg"
        />
        <meta property="og:image:width" content="1440" />
        <meta property="og:image:height" content="640" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Liquid Loans. Search: ${router.query.search}`}
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
        <Gs.BContainer>
          <Section1>
            {/* <Fade cascade bottom delay={300} duration={1600}> */}

            <MainHeadBX>
              <HeadSbx>
                <h4>SEARCH RESULTS FOR</h4>
                <div className="SearchInputMBX">
                  <i>
                    <AiOutlineSearch />
                  </i>
                  <input
                    type="text"
                    className="searchInput"
                    defaultValue={search}
                    onChange={handleFilterChange}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.code === 'NumpadEnter') {
                        if (e.target.value !== '') {
                          router.push(
                            `/vault/research/search/${e.target.value}`
                          );
                        }
                      }
                    }}
                  />
                </div>
              </HeadSbx>
            </MainHeadBX>

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
                    aria-label="Load More"
                    onClick={handleMoreImage}
                    type="button"
                    className="btn01"
                  >
                    Load More +
                  </button>
                ) : filteredData?.length > 0 ? (
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
  min-height: 176px;
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

    &:after {
      top: calc(100% - 67px);
    }
  }
`;

const HeadSbx = styled(FlexDiv)`
  width: 100%;
  padding: 0 20px;

  h4 {
    font-size: 18px;
    color: ${(props) => props.theme.TextWhite02};
    font-weight: 600;
  }
  .SearchInputMBX {
    width: 100%;
    margin-top: 15px;
    position: relative;
    .searchInput {
      text-transform: capitalize;
    }
    i {
      position: absolute;
      right: 15px;
      top: 20px;
      font-size: 30px;
    }
    input {
      width: 100%;
      height: 62px;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.TransBorder};
      text-align: center;
      font-size: 32px;
      color: ${(props) => props.theme.TextWhite};
      font-weight: 600;
      letter-spacing: -1px;
      padding: 0 42px;
      background-color: transparent;
    }
  }
  ${Media.sm} {
    .SearchInputMBX {
      input {
        font-size: 20px;
      }
      i {
        right: 15px;
        top: 20px;
        font-size: 22px;
      }
    }
  }
  ${Media.xs} {
    padding: 0;
    .SearchInputMBX {
      input {
        font-size: 18px;
        padding: 0 20px;
      }
      i {
        right: 5px;
        top: 26px;
        font-size: 18px;
      }
    }
  }
`;
const HeroTitle02 = styled(FlexDiv)`
  width: 100%;
  font-size: 26px;
  font-weight: 600;
  color: #000000;
  letter-spacing: -1px;
  margin: 35px 0 28px 0;
  span {
    color: #8224e9;
  }
`;

const BTitle01 = styled(FlexDiv)`
  width: 100%;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 40px;
  font-weight: 600;
  color: #000;

  ${Media.xs} {
    width: 100%;
    justify-content: center;
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

export default Search;
