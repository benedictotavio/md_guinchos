import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Categories = ({ categories, filterItems }) => {
  return (
    <>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => {
                filterItems(category)
              }}
            >
              {category}
            </button>
          )
        })}
      </div>
      <div className='btn-container-dropdown d-flex justify-content-center'>
        <div className="dropdown ">
          <button className="btn btn-secondary dropdown-toggle my-4" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Filtrar por Zona
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {
              categories.map((category, index) => (
                <li key={index} className="dropdown-item" onClick={() => {
                  filterItems(category)
                }}>
                  {category}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Categories