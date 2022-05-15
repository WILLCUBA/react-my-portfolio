import React, {useState} from 'react';

function Project() {
    const [projects] = useState([
        { 
            name: 'Run Buddy',
            image: 'runbuddy.jpg',
            deployed:'https://willcuba.github.io/run-buddy/',
            github: 'http://localhost:3000'
        },
        { 
            name: 'Horiseon',
            image: 'horiseon.jpg',
            deployed:'https://willcuba.github.io/code-refractor-UMBootCamp/',
            github: 'http://localhost:3000'
        },
        {
            name: 'Recipe Finder',
            image: 'recipeFinder.jpg',
            deployed:'https://willcuba.github.io/recipe-finder/',
            github: 'http://localhost:3000'
        },
        {
            name: 'Find It',
            image: 'findIt.png',
            deployed:'https://limitless-beach-87360.herokuapp.com',
            github: 'http://localhost:3000'
        }
    ])

    return (
        <div className="container mt-5">
            <div className="row">
            {projects.map((project) => (     
                <div className="col-md-4">
                    <div className="thumbnail">
                        <div className="card">
                            <img className="card-img-top" src={require(`../../assets/imgs/${project.image}`)} alt={project.name} key={project.name}/>
                            <div className="card-body">
                                <h5 className="card-title">Run Buddy</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href={project.deployed} className="btn btn-primary">Deployed Link</a></li>
                                    <li className="list-group-item"><a href={project.github} className="btn btn-primary">Go somewhere</a></li>
                                </ul>     
                            </div>
                        </div>
                    </div>    
                </div>
            ))
            }
            </div>
        </div>
    )
}


export default Project