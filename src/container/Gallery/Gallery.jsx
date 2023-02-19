import React ,{useState , useRef} from 'react';
import { images } from '../../constants';
import { SubHeading} from '../../components'
import { BsInstagram,BsArrowLeftShort,BsArrowRightShort } from "react-icons/bs";
import './Gallery.css';

const Gallery = () => {
const scrollRef = useRef(null)

const scroll = (direction)=>{
  const {current} = scrollRef
  if (direction==='left'){
    current.scrollLeft-= 300
  }else{
    current.scrollLeft +=300
  }
}
const image =[images.gallery01,images.gallery02,images.gallery03,images.gallery04]
return( 
   <div className=' app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading title='Instagram'/>
      <h1 className='headtext__cormorant'>Photo Gallery </h1>
      <p className='p__opensans' style={{color:'#AAA' , marginTop:'2rem'}}>Lorem ipsum odor amet, consectetuer adipiscing elit. Maecenas vitae</p>
      <button type='button' className='custom__button' >View More</button>
    </div>
    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollRef}>
       {image.map((image,index) =>(
        <div className='app__gallery-images_card flex__center' key={`gallery_image-${index}`}>
          <img alt='gallery' src={image}/>
          <BsInstagram className='app__gallery-images_icon'/>
        </div>
       ) )}
      </div>
      <div className='app__gallery-images_arrow'>
        <BsArrowLeftShort className='app__gallery-icon' onClick={()=>scroll('left')}/>
        <BsArrowRightShort className='app__gallery-icon' onClick={()=>scroll('right')}/>
      </div>
    </div>
  
  </div>)
};

export default Gallery;
