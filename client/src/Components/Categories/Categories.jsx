import React from 'react';
import { Link } from 'react-router-dom';
import "./Categories.scss";

const Categories = () => {
    return (
        <div className='categories'>

            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&w=600" alt="sale" />
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="women" />
                    <button>
                        <Link className="link" to="/products/1">Women</Link>
                    </button>
                </div>
            </div>

            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/9218397/pexels-photo-9218397.jpeg?auto=compress&cs=tinysrgb&w=600" alt="newSeason" />
                    <button>
                        <Link className="link" to="/products/1">New Season</Link>
                    </button>
                </div>
            </div>

            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=600" alt="men" />
                            <button>
                                <Link className="link" to="/products/1">Men</Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=600" alt="accessories" />
                            <button>
                                <Link className="link" to="/products/1">Accessories</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" alt="shoes" />
                    <button>
                        <Link className="link" to="/products/1">Shoes</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories