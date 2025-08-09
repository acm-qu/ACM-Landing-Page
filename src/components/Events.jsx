import '../styles/events.css'

export default function Events() {

  const events = [{
    date: "2025 - 01",
    title: "Winterbyte",
    link: "https://www.instagram.com/p/DD2SHf7ggZj/?img_index=1",
    description: "The ACM Winter Camp by Qatar University’s ACM Student Chapter runs from January 5–16, 2025, offering hands-on programming experience through:",
    bullets: [
      "Three skill levels: Beginner to advanced tracks tailored for all experience levels",
      "Expert mentorship: Guided by ICPC finalists and experienced SWEs from the JPC",
      "Practical learning: Workshops and solving sessions using Codeforces, CSES and more",
    ]},
    {
      date: "2024 - 05",
      title: "Cyber Awareness 101",
      link: "http://instagram.com/p/DCySlRmgMie/"
    },
    {
      date: "2024 - 01",
      title: "Road to Big Tech",
      link: "https://www.instagram.com/p/DDrT0fVA-ZK/"
    }
  ];

  return ( 
    <div className='eventContainer'>
      <div className='eventContainerLeft'>

      <div></div> 
      <div className='line'>
        <div className='diamondTop'></div>
      </div> 
      <h2 className='eventHeading'>Latest Events</h2>
        
        {events.map(event => <>
          <div className='date'>{event.date}</div>
          <div className='line'>
            <div className='dot'></div>
          </div>
          <div className='eventCard'>
            <div className='eventTitle'><a target='_blank' href={event.link}>{event.title}</a></div>
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
          </div>
        </>)}
        <div></div> 
      <div className='line'>
        <div className='diamondTop'></div>
      </div>
      </div>
      <div className='eventContainerRight'>
        <div className='eventImageContainer'>
          <img src="/events-pointing.jpg" alt='Image of person pointing at screen' className='pointingPic'/>
          <img src="/events-teaching.jpg" alt='Image of drawing on whiteboard' className='teachingPic'/>
          <img src="/events-discussion.jpg" alt='Image of people talking at a table' className='discussionPic'/>
        </div>
      </div>
    

    </div>
  )
}
