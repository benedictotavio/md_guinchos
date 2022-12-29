import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css'
import Map from 'react-map-gl';

function MyMap() {
  return (
    <section className='bg-dark py-md-2 d-flex justify-content-center'>
      <div className='text-white text-center'>
        <div>
          <h3>Serviço de Guincho 24 Horas em São Paulo</h3>
        </div>
        <div>
          <p>Dispomos de profissionais especializados 24 horas por dia.</p>
        </div>
        <div className="d-flex justify-content-center">
          <Map
            initialViewState={{
              longitude: -46.7987336,
              latitude: -23.5811086,
              zoom: 14,
              padding:0
            }}
            style={{ width: 700, height: 450 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken='pk.eyJ1IjoiYmVuZWRpY3RvdGF2aW8iLCJhIjoiY2xjNzJtZDhvMGthcjNvcGtieWN6NzNocyJ9.lwDRS1WQCPJh-ldK4Rx9fg'
          />
        </div>

        <div>
          <p>Nós trabalhamos com foco total. Nossos veículos estão sempre revisados para poder atender nossos clientes com 100% de segurança.</p>
        </div>
      </div>
    </section>
  );
}

export default MyMap