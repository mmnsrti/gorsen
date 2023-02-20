import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';


import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section_padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img alt='chef' src={images.chef}/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title='chef’s Word'/>
    <h1 className='headtext__cormorant'>What We Believe In</h1>
    <div className='app__chef-content'>
      <div className='app__chef-content_quote'>
        <img alt='quote' src={images.quote}/>
        <p className='p__opensans'>Lorem ipsum dolor sit  facete, nec at recteque assueverit. An usu quas harum, quaeque deleniti.</p>
      </div>
      <p className='p__opensans'> Lorem ipsum dolor sit amet, qui altu quas harum, quaeque deleniti appellantur est an. Ex has dissentiet delicatissimi, omnes scripta lobortis at duo. No pri habeo etiam utroque. Ut probo populo debitis mea.appellantur est an. Ex has dissentiet delicatissimi, omnes scripta lobortis at duo. No pri habeo etiam utroque. Ut probo populo debitis mea.</p>
    </div>
    <div className='app__chef-sign'>
      <p>Kevin Lua</p>
      <p className='p__opensans'>Chef & Founder</p>
      <img alt='sign' src={images.sign}/>
    </div>
    </div>
  </div>
);

export default Chef;
