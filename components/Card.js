//import npm packges
import parse from 'react-html-parser';

//import next js packages
import Image from 'next/image';

//import styles
import styles from '../styles/Card.module.css';
import styled from 'styled-components';

//import media
import BlogImg01 from '../public/images/bimg-01.jpg';
import UserImg01 from '../public/images/user-ico.jpg';

const Card = (props) => {
  const { title, content, author, readingTime, categories, bannerImage } =
    props;
  const categoryNames = categories.map((cat) => cat.name);

  return (
    <>
      <div className="BimgBX01">
        <Image
          src={bannerImage ? bannerImage : BlogImg01.src}
          alt={title}
          width={BlogImg01.width}
          height={BlogImg01.height}
        />
      </div>
      <div className="blogPostTitle01">
        <div className={`${styles.blogPostTitle01CatContainer}`}>
          {categoryNames.map((category, index) => {
            return (
              <span key={index}>
                {category}
                {categoryNames?.length - 1 === index ? '' : ', '}
              </span>
            );
          })}
        </div>
        {readingTime && (
          <span className="readingTime">
            {readingTime} {readingTime <= '1' ? 'min' : 'mins'}
          </span>
        )}
      </div>
      {title && <div className="blogPostTitle02">{title}</div>}
      {content && (
        <div className={`blogPostText01 ${styles.lineClamp}`}>
          {parse(content)}
        </div>
      )}
      <UserInfoBX className="v2">
        <div className="ImgBX">
          <Image
            src={author.avtar ? author.avtar : UserImg01}
            alt="User"
            width={29}
            height={29}
          />
        </div>
        {author && (
          <>
            By
            <span>{author.nickname}</span>
          </>
        )}
      </UserInfoBX>
    </>
  );
};

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const UserInfoBX = styled(FlexDiv)`
  width: 100%; color:#000;
  justify-content: flex-start;
  margin: 40px 0 0 0; color: ${(props) => props.theme.TextWhite};
  &.v2 {
    padding: 0 12px 8px 12px;
    margin: 0;
  }
  span {
    color: ${(props) => props.theme.TextWhite};
    font-weight: 600;
    margin: 0 6px 0 3px;
  }
  .ImgBX {
    width: 29px;
    border-radius: 50%;
    overflow: hidden;
    height: 29px;
    margin: 0 6px 0 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .secondSBX {
    margin: 0 0 0 25px;
    position: relative;
    &:after {
      content: '●';
      border: none;
      position: absolute;
      left: -15px;
    }
  }
`;

export default Card;
