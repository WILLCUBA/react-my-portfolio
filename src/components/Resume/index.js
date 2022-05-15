import React from 'react';

function Resume() {
    return (
        
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 btn btn-outline-secondary w-50 m-auto"><a href={require("../../assets/docs/WilliamPortfolio.pdf")} download="WilliamPortfolio">Download my resume</a></div>
                <div className="col-12 d-flex justify-content-start mt-5">
                    <section className="skills m-auto">
                        <h3 className="dark-color">Skills</h3>
                        <ul className="list-group">
                            <li className="list-group-item">HTML5</li>
                            <li className="list-group-item">CSS</li>
                            <li className="list-group-item">JavaScript</li>
                            <li className="list-group-item">NODE</li>
                            <li className="list-group-item">TDD</li>
                            <li className="list-group-item">SQL/MySQL</li>
                            <li className="list-group-item">Python</li>
                            <li className="list-group-item">MVC</li>
                            <li className="list-group-item">GIT</li>
                            <li className="list-group-item">MERN</li>
                            <li className="list-group-item">NoSql/MongoDB</li>
                        </ul>
                    </section>
                </div>
            </div>    
        </div>

    )   
}


export default Resume;