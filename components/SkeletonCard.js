//import npm packges
import Skeleton from 'react-loading-skeleton';

//import styles
import styled from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonCard = (props) => {
  return (
    <>
      <Skeleton className="BimgBX01"></Skeleton>
      <Skeleton className="blogPostTitle01"></Skeleton>
      <Skeleton className="blogPostTitle02"></Skeleton>
      <Skeleton className={`blogPostText01`} />
      <UserInfoBX className="v2">
        <Skeleton className="ImgBX" />
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
  width: 100%;
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

export default SkeletonCard;
