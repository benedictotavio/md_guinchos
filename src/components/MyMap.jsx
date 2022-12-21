import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css'
import Map from 'react-map-gl';

function MyMap() {

  const [viewport, setViewport] = useState({
    latitude: 66,
    longitude: -34,
    width: '100vw',
    height: '100vw',
    zoom: 10
  })
  return (
    <section className='bg-dark'>
      <div className='text-white text-center'>
        <div>
          <h3>Serviço de Guincho 24 Horas em São Paulo</h3>
        </div>
        <div>
          <p>Dispomos de profissionais especializados 24 horas por dia.</p>
        </div>
        <div>
          <p>Nós trabalhamos com foco total. Nossos veículos estão sempre revisados para poder atender nossos clientes com 100% de segurança.</p>
        </div>
      </div>
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken=''
      />
    </section>
  );
}

export default MyMap