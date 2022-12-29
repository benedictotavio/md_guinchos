import React, { useState } from 'react'
import MenuRegion from './MenuRegion'
import CategoriesRegion from './CategoriesRegion'
import items from '../data/data'
import './Regions.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map from 'react-map-gl';

const allCategories = ['Todas', ...new Set(items.map((item) => item.category))]

function Regions() {
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
              Serviço de Guincho 24 Horas em São Paulo
            </h4>
            <div className="underline"></div><br />
            <Map
              initialViewState={{
                longitude: -46.7987336,
                latitude: -23.5811086,
                zoom: 14,
                padding: 10
              }}
              style={{ width: 900, height: 300 }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              mapboxAccessToken='pk.eyJ1IjoiYmVuZWRpY3RvdGF2aW8iLCJhIjoiY2xjNzJtZDhvMGthcjNvcGtieWN6NzNocyJ9.lwDRS1WQCPJh-ldK4Rx9fg'
            />
            <br />
            <h3>Regiões Atendidas</h3>
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