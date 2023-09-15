import React from 'react'
import './Gridone.css'
import {PhoneFilled} from '@ant-design/icons'
import {MailFilled} from '@ant-design/icons'
import { EnvironmentFilled } from '@ant-design/icons/lib/icons'

function Gridone() {
    return (<div className='gridone'>
        <h1 style={{letterSpacing:'8px'}}>PAVAN K</h1>
        <p style={{fontSize:'20px', marginTop:'-20px'}}><i>Front-End Web Developer</i></p> <br />
        <section>
            <h3 style={{letterSpacing:'5px'}}>CONTACT</h3>
            <p className='justifier'><PhoneFilled /> <b>8217728719</b></p>
            <p className='justifier'><MailFilled /> <b>pavan.k250701@gmail.com</b></p>
            <p className='justifier'><EnvironmentFilled /> <b>J P Nagar, Bengaluru</b></p>
        </section>
        <section>
            <h3 style={{letterSpacing:'5px'}}>SKILLS</h3>
            <ul className='justifier'>
                <li>HTML/HTML5</li>
                <li>CSS (Cascading Styling Sheets)</li>
                <li>JavaScript</li>
                <li>React.js</li>
            </ul>
        </section>
        <section>
            <h3 style={{letterSpacing:'5px'}}>CERTIFICATIONS & TRAINING</h3>
            <ul className='justifier'>
                <li><b>Front-End Web Development</b><br />- Rooman Technologies</li>
            </ul>
        </section>
        <section>
            <h3 style={{letterSpacing:'5px'}}>LANGUAGES</h3>
            <ul className='justifier'> 
                <li>English</li>
                <li>Kannada</li>
                <li>Telugu</li>
                <li>Hindi</li>
            </ul>
        </section>
    </div>
    )
}

export default Gridone