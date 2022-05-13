import React from 'react'

function Mentors() {
  return (
    <div className="mentor" data-aos="fade-left" data-aos-duration="2000">
    <div className="meet">
        <h2>Meet My mentors</h2>
    </div>
    <div className="them">
        <div className="bigbro bro-1">
            <img src="./images/big bruh.jpg" alt=""/>
            <div className="thrword">
                <h2 className="w-1">
                    Akinsuyi Joshua
                </h2>
                <p className="work">
                    I am a Software Engineer, Automation is everything to me, I love learning new things
                    everyday from programming languages, programming tools, and automation tools.
                </p>
                <div className="likw">
                    <a href="https://www.linkedin.com/in/joshua-akinsuyi/"> Linkedin</a>
                </div>
            </div>
        </div>


        <div className="bigbro2">
            <img src="./images/ebenezer.jpg" alt=""/>
            <div className="thrword">
                <h2 className="w-1">
                    Ebenezer Don
                </h2>
                <p className="work wrk2">
                    I'm a Software Engineer, Developer Advocate at JetBrains and Technical Content Creator.
                    I have an excellent skill of breaking down complex topics into their simplest forms and
                    a deep passion for sharing my knowledge with developers.
                </p>
                <div className="likw">
                    <a href="https://www.linkedin.com/in/ebenezerdon/"> Linkedin</a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Mentors