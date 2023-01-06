import React, { useState } from 'react'
import MenuRegion from './MenuRegion'
import CategoriesRegion from './CategoriesRegion'
import items from '../data/data'
import './Regions.css'
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const allCategories = ['Todas', ...new Set(items.map((item) => item.category))]

function Regions() {
  const [viewState, setViewState] = React.useState({
    longitude: -46.7987336,
    latitude: -23.5811086,
    zoom: 14,
    pitch: 50,
    width: "fit"
  });
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'Todas') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <section id='region'>
      <div className="container-fluid section">
        <div className="title d-flex justify-content-center">
          <div>
            <h4>
              Serviço de guincho 24 horas em São Paulo
            </h4>
            <div className="underline"></div><br />
            <div className='d-sm-flex justify-content-center'>
              <div id='mapbox' className='mx-auto'>
                <Map
                {...viewState}

                style={{
                  width: "88vw",
                  height: "60vh"
                }}
                onMove={evt => setViewState(evt.viewState)}
                onViewportChange={nextViewport =>
                  setViewState({ ...nextViewport, width: "fit" })
                }
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken='pk.eyJ1IjoiYmVuZWRpY3RvdGF2aW8iLCJhIjoiY2xjNzJtZDhvMGthcjNvcGtieWN6NzNocyJ9.lwDRS1WQCPJh-ldK4Rx9fg'
              >
                <Marker longitude={-46.7987336} latitude={-23.5811086} offsetLeft={-200} color="red" />
              </Map>
              </div> 
            </div>
            <br />
            <h3>Regiões atendidas</h3>
            <div className="underline"></div>
          </div>
        </div>
        <CategoriesRegion categories={categories} filterItems={filterItems} />
        <MenuRegion items={menuItems} />
      </div>
    </section>
  )
}

export default Regions