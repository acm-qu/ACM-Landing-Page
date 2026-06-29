// @ts-ignore
import './events.css'
import { EVENTS } from './content';
import { useState, Fragment } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import { imagesTransition } from './transitions';

export default function Events() {

  const [selectedEvent, setSelectedEvent] = useState(1);
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

        {EVENTS.map((event, index) => <Fragment key={`event-${index}`}>
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
                {event.bullets?.map((bullet, bulletIndex) => {
                  const [highlight, rest] = bullet.split(/:(.+)/); // split at first colon
                  return (
                    <li className='eventListItem' key={`event-${index}-bullet-${bulletIndex}`}>
                      <span className="highlight">{highlight}:</span>{rest}
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          </div>
        </Fragment>)}
        <div></div>
        <div className='line'>
          <div className='diamondTop'></div>
        </div>
      </div>
      <div className='eventContainerRight'>
        <div className='eventImageContainer'>
          <AnimatePresence mode='wait'>
            <motion.div key={selectedEvent} className='eventImageGroup'>
              {/* In case you are about to puke at this code for not using loops */}
              {/* For some reason the exit animations dont work when I use images.map(=> ...) */}
              {/* And a safe way to guarantee the exit animation working is to have: { Boolean && Component } which is what I did repeatedly */}
              {EVENTS[selectedEvent].images?.[0] && (
                <motion.img
                  key={EVENTS[selectedEvent].alts[0]}
                  src={EVENTS[selectedEvent].images[0]}
                  alt={EVENTS[selectedEvent].alts[0]}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{
                    ...imagesTransition,
                    delay: 0.2 * 0
                  }}
                  className={classNames[0]}
                />
              )}
              {EVENTS[selectedEvent].images?.[1] && (
                <motion.img
                  key={EVENTS[selectedEvent].alts[1]}
                  src={EVENTS[selectedEvent].images[1]}
                  alt={EVENTS[selectedEvent].alts[1]}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{
                    ...imagesTransition,
                    delay: 0.2 * 1
                  }}
                  className={classNames[1]}
                />
              )}
              {EVENTS[selectedEvent].images?.[2] && (
                <motion.img
                  key={EVENTS[selectedEvent].alts[2]}
                  src={EVENTS[selectedEvent].images[2]}
                  alt={EVENTS[selectedEvent].alts[2]}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{
                    ...imagesTransition,
                    delay: 0.2 * 2
                  }}
                  className={classNames[2]}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>


    </div>
  )
}
