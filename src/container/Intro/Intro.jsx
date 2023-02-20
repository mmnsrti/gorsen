import React,{useRef,useState} from 'react';
import {BsPlayFill ,BsPauseFill} from 'react-icons/bs'
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
const [playvideo, setPlayvideo] = useState(false)
const videoRef = useRef()
const handlevideo =() =>{ setPlayvideo ((prevplayvid)=>!prevplayvid)
if (playvideo){
  videoRef.current.pause()
}else{
  videoRef.current.play()
}
}
  return(
  <div className='app__video'>
    <video
      src={meal}
      ref={videoRef}
      type='video/mp4'
      loop
      controls={false}
      muted
    />
    <div className='app__video-overlay flex__center'>
      <div className='app__video-overlay_circle flex__center'
      onClick={handlevideo}
      >
        {playvideo ? (
          <BsPauseFill className='btn' color='#fff' fontSize={30}/>
        ):(
          <BsPlayFill className='btn' color='#fff' fontSize={30}/>
        )}
      </div>  
    </div>
  </div>
)
};

export default Intro;
