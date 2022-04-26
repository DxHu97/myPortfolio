import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import {AppWrap} from '../../wrapper'
import {images} from '../../constants'
import { urlFor, client } from '../../client';



/*const abouts = [
  { title: 'Web Development', description: 'I am a good web developer.', imgUrl: images.about01},
  { title: 'Front end', description: 'I am proficient with React.', imgUrl: images.about02},
  { title: 'Back end', description: 'I am proficient with Node.js.', imgUrl: images.about03},
  { title: 'Full stack', description: 'I am a good full stack engineer.', imgUrl: images.about04},
]*/

const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  //<img src = {about.imgUrl} alt = {about.title} />
  return (
      <>
      <h2 className = "head-text"> About <span>Me</span></h2>
      <div className = "app__profiles">
        {console.log(abouts)}
         {abouts.map((about,index) => (
           <motion.div
           whileInView = {{opacity: 1}}
           whileHover= {{scale: 1.1}}
           transition = {{duration: 0.5, type: 'tween'}}
           className = "app__profile-item"
           key = {about.title + index}
           >
           <img src = {urlFor(about.imgUrl)} alt = {about.title} />
           <h2 className = "bold-text" style = {{marginTop: 20}}> {about.title}</h2>
           <p className = "p-text" style = {{marginTop: 10}}> {about.description}</p>
           </motion.div>
         ))}
      </div>
      </>
  )
}

export default AppWrap(About,  'about');
