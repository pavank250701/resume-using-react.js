import React from 'react'
import './Gridtwo.css'

function Gridtwo() {
    return (
        <div className='gridtwo'>
            <h3  style={{letterSpacing:'5px'}}>SUMMARY</h3>
            <section>
                <ul>
                    <li className='justifier'>I am Pavan K, a recent Engineering graduate looking for a Front-End Developer role,
                        I am eager to contribute my foundational skills in HTML, CSS3, and JavaScript to create
                        visually appealing and responsive web applications.
                    </li>
                    <li className='justifier'>I am motivated to learn and grow in
                        responsive design, cross-browser troubleshooting, and grid systems.
                    </li>
                    <li className='justifier'>While I am a fresher,
                        my enthusiasm and willingness to adapt to new challenges make me a valuable addition to any development team.</li>
                </ul>
            </section>

            <section>
                <h3  style={{letterSpacing:'5px'}}>EDUCATION</h3>
                <ul className='justifier'>
                    <li><b>BE: ECE</b><br />
                        7.03 CGPA <br />
                        2023 <br />
                        K S School of Engineering and Management
                    </li>
                    <li><b>PUC: PCMB</b><br />
                        74.16 %<br />
                        2019 <br />
                        Sri Chaitanya PU College
                    </li>
                    <li><b>SSLC</b><br />
                        74.72 %<br />
                        2023 <br />
                        The  Oxford English High School
                    </li>
                </ul>
            </section>

            <section>
                <h3  style={{letterSpacing:'5px'}}>ACADEMIC PROJECTS</h3>
                <ul>
                    <li className='justifier'><b>Implementation of Self-Sealing Smart Dustbin using IoT</b><br />
                        Developed an innovative Smart Dustbin utilizing
                        microcontroller programming, sensor integration, and IoT
                        Technologies to revolutionize waste management
                        practices and promote touchless waste disposal.</li>
                </ul>
            </section>
        </div>
    )
}

export default Gridtwo