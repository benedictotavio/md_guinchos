import React from 'react'

const ContainerServices = ({ foto, text, title, direction }) => {

    const dir = direction
    return (
        <div>
            {dir &&
                <div className='row'>
                    <div className='col'>
                        <h1>{title}</h1>
                    </div>
                    <div className='col-md-5'>
                        <img src={foto} alt="" />
                    </div>
                    <div className='col-md-7'>
                        <p>
                            {text}
                        </p>
                    </div>
                </div>}
            {!dir &&
                <div className='row'>
                    <div className="row">
                        <div className="col">
                            <h1>{title}</h1>
                        </div>
                        <div className="col-md-7">
                            <p>
                                {text}
                            </p>
                        </div>
                        <div className="col-md-5">
                            <img src={foto} alt="" />
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default ContainerServices