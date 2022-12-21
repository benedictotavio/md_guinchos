import Carousel from 'react-bootstrap/Carousel';
import img1 from '../galeria-fotos/foto-1.png'
import img2 from '../galeria-fotos/foto-2.png'
import img3 from '../galeria-fotos/foto-3.png'

function Carrousel() {
    return (
        <section className='p-5' style={{ position: "static"}}>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-50 mx-auto"
                        src={img3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 className='text-white'>Segurança</h5>
                        <p className='text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 mx-auto"
                        src={img1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5 className='text-white'>Agilidade</h5>
                        <p className='text-white' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50 mx-auto"
                        src={img2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5 className='text-white'>24 Horas</h5>
                        <p className='text-white'>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default Carrousel;