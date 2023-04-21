import React from 'react'
import styled from 'styled-components'   
import Media from '../styles/media-breackpoint' 
import HTMLFlipBook from 'react-pageflip'; 
import Link  from 'next/link';

import NextbtnImg from '../public/images/nextBTN.png'
import BackbtnImg from '../public/images/prevBTN.png'
import CloseBTN from '../public/images/faq-plus2.png'

import Wimg01 from '../public/images/whitepaper-img/01.jpg'
import Wimg02 from '../public/images/whitepaper-img/02.jpg'
import Wimg03 from '../public/images/whitepaper-img/03.jpg'
import Wimg04 from '../public/images/whitepaper-img/04.jpg' 
import Wimg05 from '../public/images/whitepaper-img/05.jpg'
import Wimg06 from '../public/images/whitepaper-img/06.jpg'
import Wimg07 from '../public/images/whitepaper-img/07.jpg'
import Wimg08 from '../public/images/whitepaper-img/08.jpg'
import Wimg09 from '../public/images/whitepaper-img/09.jpg'
import Wimg010 from '../public/images/whitepaper-img/010.jpg'
import Wimg011 from '../public/images/whitepaper-img/011.jpg'
import Wimg012 from '../public/images/whitepaper-img/012.jpg'
import Wimg013 from '../public/images/whitepaper-img/013.jpg'
import Wimg014 from '../public/images/whitepaper-img/014.jpg'
import Wimg015 from '../public/images/whitepaper-img/015.jpg'
import Wimg016 from '../public/images/whitepaper-img/016.jpg'
import Wimg017 from '../public/images/whitepaper-img/017.jpg'
import Wimg018 from '../public/images/whitepaper-img/018.jpg'
import Wimg019 from '../public/images/whitepaper-img/019.jpg'
import Wimg020 from '../public/images/whitepaper-img/020.jpg'
import Wimg021 from '../public/images/whitepaper-img/021.jpg'
import Wimg022 from '../public/images/whitepaper-img/022.jpg'
import Wimg023 from '../public/images/whitepaper-img/023.jpg'
import Wimg024 from '../public/images/whitepaper-img/024.jpg'
import Wimg025 from '../public/images/whitepaper-img/025.jpg'
import Image from 'next/image';


class DemoBook extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        page: 0,
        totalPage:25,
      }; 
    }
 
  
    nextButtonClick = () => {
        if (this.flipBook && this.flipBook.pageFlip()) {
            this.flipBook.pageFlip().flipNext()
        }
    };
    prevButtonClick = () => {
        if (this.flipBook && this.flipBook.pageFlip()) {
            this.flipBook.pageFlip().flipPrev()
        }
    }; 
    onPage = (e) => {
      this.setState({
        page: e.data,
      });
    }; 

    render() {
      function goBack() {
        window.history.back();
    }
      return (
        <WhitpaperBX>
        <WPSection>
          <HTMLFlipBook
            width={554} 
            height={800} 
            size="stretch"
            minWidth={300}
            maxWidth={554}
            minHeight={200}
            maxHeight={800}
            maxShadowOpacity={0.5}
            // showCover={true}
            mobileScrollSupport={true}
            onFlip={this.onPage}
            onChangeOrientation={this.onChangeOrientation}
            onChangeState={this.onChangeState}
            className="demo-book"
            ref={(el) => (this.flipBook = el)}
          >
  
            <div className="demoPage" number={1}><Image   src= {Wimg01} alt={''} /></div>
            <div className="demoPage"  number={2}><Image  src={Wimg02} alt={''} /></div>
            <div className="demoPage"  number={3}><Image  src={Wimg03} alt={''} /></div>
            <div className="demoPage"  number={4}><Image src={Wimg04} alt={''} /></div>  
            <div className="demoPage"  number={5}><Image src={Wimg05} alt={''} /></div> 
            <div className="demoPage"  number={6}><Image src={Wimg06} alt={''} /></div> 
            <div className="demoPage"  number={7}><Image src={Wimg07} alt={''} /></div> 
            <div className="demoPage"  number={8}><Image src={Wimg08} alt={''} /></div> 
            <div className="demoPage"  number={9}><Image src={Wimg09} alt={''} /></div> 
            <div className="demoPage"  number={10}><Image src={Wimg010} alt={''} /></div> 
            <div className="demoPage"  number={11}><Image src={Wimg011} alt={''} /></div> 
            <div className="demoPage"  number={12}><Image src={Wimg012} alt={''} /></div> 
            <div className="demoPage"  number={13}><Image src={Wimg013} alt={''} /></div> 
            <div className="demoPage"  number={14}><Image src={Wimg014} alt={''} /></div> 
            <div className="demoPage"  number={15}><Image src={Wimg015} alt={''} /></div> 
            <div className="demoPage"  number={16}><Image src={Wimg016} alt={''} /></div> 
            <div className="demoPage"  number={17}><Image src={Wimg017} alt={''} /></div> 
            <div className="demoPage"  number={18}><Image src={Wimg018} alt={''} /></div> 
            <div className="demoPage"  number={19}><Image src={Wimg019} alt={''} /></div> 
            <div className="demoPage"  number={20}><Image src={Wimg020} alt={''} /></div> 
            <div className="demoPage"  number={21}><Image src={Wimg021} alt={''} /></div> 
            <div className="demoPage"  number={22}><Image src={Wimg022} alt={''} /></div> 
            <div className="demoPage"  number={23}><Image src={Wimg023} alt={''} /></div> 
            <div className="demoPage"  number={24}><Image src={Wimg024} alt={''} /></div> 
            <div className="demoPage"  number={25}><Image src={Wimg025} alt={''} /></div>   
          </HTMLFlipBook> 
            <BTNBAR01> 
                {/* <Link onClick={()=>window.history.back()} className="closeBTN" prefetch={false} ></Link> */}
                <Link href='/'  className="closeBTN" prefetch={false}></Link>
              <button className="backBTN" onClick={this.prevButtonClick} id="prev-button" aria-label='Previous Button'> </button>  
              <button className="nextBTN" onClick={this.nextButtonClick} id="next-button" aria-label='Next Button'> </button> 
          </BTNBAR01> 
        </WPSection>
    </WhitpaperBX>
      );
    }
  }

const FlexDiv = styled.div`
  display: flex; align-items: center; justify-content:center; flex-wrap:wrap;
`;
  
const WhitpaperBX = styled.div`
  position:fixed; left:0; top:0; right:0; bottom:0; background-color:rgba(0,0,0,0.9); display:block;
  z-index:100000; 
`
const BTNBAR01 = styled(FlexDiv)`
    width:100%; max-width:1108px; margin:0 auto;  

    .closeBTN{width:28px; height:28px; z-index:111; display:block; background:url(${CloseBTN.src}) no-repeat; position:fixed; 
    right:13px; top:12px; z-index:111111;  }

    .backBTN{ width:38px; height:38px; z-index:111; display:block; background:url(${BackbtnImg.src}) no-repeat; position:absolute; left:-40px; top:50%; }
    .nextBTN{ width:38px; height:38px; z-index:111; display:block; background:url(${NextbtnImg.src}) no-repeat; position:absolute; right:-40px; top:50%;}
    
    ${Media.xs}{ 
        .backBTN{left:0;  }
    .nextBTN{  right:0px; }    
    }
`
const WPSection = styled(FlexDiv)`
    width: 100%; max-width:1108px; margin:50px auto;  position:relative;

    ${Media.lg}{ max-width:850px; }
    ${Media.md2}{ max-width:750px; }
    ${Media.sm}{ max-width:260px;     }
    ${Media.xs}{ max-width:260px;     }

` 
export default DemoBook;