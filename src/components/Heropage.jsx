import React from 'react'


function Heropage() {
return (
<div className="landing">
    <div className="texts">
        <div className="small-text"> Hey, </div>
        <div className="bigtext">I'm <span className="lol"> Philip </span>I'm a Software Developer, YouTuber and
            Designer.</div>
        <div className="btnclip">
            <a href="https://www.instagram.com/juneoflagos/" className="litbtn"> Instagram <i
                    className="fa-brands fa-instagram"></i></a>
            <a href="https://web.facebook.com/Juneoflagos" className="darkbtn">facebook <i
                    className="fa-brands fa-facebook"></i></a>
        </div>
    </div>

    <div className="profileimg">
        <img src="./images/IMG-20220412-WA0037.png" alt=""/>


    </div>
</div>
)
}

export default Heropage