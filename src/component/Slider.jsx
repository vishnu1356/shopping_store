import React from 'react'

function Slider({url, name}) {
    return (
        <div>
            <div
                className={`item `}
                style={{ backgroundImage: `url(${url})` }}
            >
                <div className="content">
                    <div className="name">{name}</div>
                    <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                    <div className="btn">
                        <button>See More</button>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
