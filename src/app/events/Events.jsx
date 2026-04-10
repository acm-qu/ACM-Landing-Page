// @ts-ignore
import './events.css'
import { EVENTS } from './content';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import { imagesTransition } from './transitions';

export default function Events() {

  const [selectedEvent, setSelectedEvent] = useState(0);
  const handleSelectEvent = (index) => setSelectedEvent(index);

  const classNames= ['pointingPic', 'teachingPic', 'discussionPic'];

  return (
    <div className='eventContainer' id='events'>
      <div className='eventContainerLeft'>
        <div></div>
        <div className='line'>
          <div className='diamondTop'></div>
        </div>
        <h2 className='eventHeading'>Latest Events</h2>

        {EVENTS.map((event, index) => <>
          <div className='date'>{event.date}</div>
          <div className='line'>
            <div className='dot'></div>
          </div>
          <div className='eventCard'>
            <div className='eventTitle'><button onClick={() => handleSelectEvent(index)}>{event.title}</button></div>
            <motion.div
              className='eventMetadata'
              initial={{ height: 0 }}
              animate={{ height: selectedEvent === index ? 'auto' : 0 }}
            >
              <div className='eventDesc'>{event.description}</div>
              <ul className='eventList'>
                {event.bullets?.map((bullet) => {
                  const [highlight, rest] = bullet.split(/:(.+)/); // split at first colon
                  return (
                    <li className='eventListItem'>
                      <span className="highlight">{highlight}:</span>{rest}
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          </div>
        </>)}
        <div></div>
        <div className='line'>
          <div className='diamondTop'></div>
        </div>
      </div>
      <div className='eventContainerRight'>
        <div className='eventImageContainer'>
            {EVENTS[selectedEvent].images.map((image, index) => (
              <AnimatePresence>
                <motion.img
                  key={`${image}-${index}`}
                  src={image}
                  alt={EVENTS[selectedEvent].alts[index]}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{
                    ...imagesTransition,
                    delay: 0.2 * index
                  }}
                  className={classNames[index]}
                />
              </AnimatePresence>
            ))}
        </div>
      </div>


    </div>
  )
}
