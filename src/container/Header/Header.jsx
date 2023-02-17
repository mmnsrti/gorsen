import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants'

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding ' id='home'>
    <div className='app__wrapper_info'>
     <SubHeading title='Chase the Flavour'/>
     <h1 className='app__header-h1'>
        The key to Fine Dining
     </h1>
     <p className='p__opensans ' style={{margin:'2rem 0'}}>Lorem ipsum odor amet, consectetuer adipiscing elit. Maecenas vitae semper. Maximus mus euismod tempor sem.

Integer class tincidunt. Aenean vehicula pharetra accumsan cubilia. Massa aliquam ligula commodo. Morbi mus aliquam elit. Aliquam lacinia nascetur convallis.

Dictum auctor parturient donec eros. Volutpat bibendum vehicula. Nostra lobortis velit litora velit. 
</p>
<button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
        <img alt='welcome' src={images.welcome}/> 
    </div>
  </div>
);

export default Header;
