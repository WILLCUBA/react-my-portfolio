import React from 'react';

function Resume() {
    return (
        
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 d-flex justify-content-center"><a href={require("../../assets/docs/WilliamPortfolio.pdf")} download="WilliamPortfolio">Download my resume</a></div>
                <div className="col-12 d-flex justify-content-start">
                    <section className="skills">
                        <h3>Skills</h3>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>NODE</li>
                            <li>TDD</li>
                            <li>SQL/MySQL</li>
                            <li>Python</li>
                            <li>MVC</li>
                            <li>GIT</li>
                            <li>MERN</li>
                            <li>NoSql/MongoDB</li>
                        </ul>
                    </section>
                </div>
            </div>    
        </div>

    )   
}


export default Resume;