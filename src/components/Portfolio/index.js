import React from 'react';

function Portfolio () {
    return (
        <div className="container mt-5">
            <div className="row">
            <div className="col-md-4">
                    <div className="thumbnail">
                        <div className="card">
                            <img className="card-img-top" src={require('../../assets/imgs/runbuddy.jpg')} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Run Buddy</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="https://willcuba.github.io/run-buddy/" className="btn btn-primary">Deployed Link</a></li>
                                    <li className="list-group-item"><a href="#asd" className="btn btn-primary">Go somewhere</a></li>
                                </ul>     
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="thumbnail">
                        <div className="card">
                            <img className="card-img-top" src={require('../../assets/imgs/horiseon.jpg')} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Horiseon</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="https://willcuba.github.io/code-refractor-UMBootCamp/" className="btn btn-primary">Deployed Link</a></li>
                                    <li className="list-group-item"><a href="#asd" className="btn btn-primary">Go somewhere</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="thumbnail">
                        <div className="card">
                            <img className="card-img-top" src={require('../../assets/imgs/recipeFinder.jpg')} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Recipe Finder</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="https://willcuba.github.io/recipe-finder/" className="btn btn-primary">Deployed Link</a></li>
                                    <li className="list-group-item"><a href="#asd" className="btn btn-primary">Go somewhere</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="thumbnail">
                        <div className="card">
                            <img className="card-img-top" src={require('../../assets/imgs/findIt.png')} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Find It</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="https://limitless-beach-87360.herokuapp.com/" className="btn btn-primary">Deployed Link</a></li>
                                    <li className="list-group-item"><a href="#asd" className="btn btn-primary">Go somewhere</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="thumbnail">
                        <div className="card">
                            <img className="card-img-top" src={'http://placehold.jp/479x383.png'} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">MERN PROJECT !placeholder</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="#asd" className="btn btn-primary">Go somewhere</a></li>
                                    <li className="list-group-item"><a href="#asd" className="btn btn-primary">Go somewhere</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
