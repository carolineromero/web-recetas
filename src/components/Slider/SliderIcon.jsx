import React from 'react'
import iconitos from '../../exports/images.js'
import { motion } from 'framer-motion'
import { Text, ImgSlider, Item, Slider, SliderContainer } from './SliderIcon.styled'

function SliderIcon() {
  return (
    <SliderContainer>
     <Slider drag='x' dragConstraints = {{right: 0, left:-100}}>
        {iconitos.map(item => (
        <Item>
          <ImgSlider src={item.dibujo} alt=""/>
          <Text>
               {item.title} 
               
          </Text>
         
        </Item> 
        ))}
      
     </Slider>
        
     
    </SliderContainer>

  /*   <motion.div className='sliderContainer'>
        <motion.div className='slider' drag='x' 
        dragConstraints={{right: 0, left:-800}}>
            {images.map(image => (
            <motion.div className='item'>
                <img src={image} alt=""/>
            </motion.div>
             ))}
        </motion.div>
       
    </motion.div> */
  )
}

export default SliderIcon