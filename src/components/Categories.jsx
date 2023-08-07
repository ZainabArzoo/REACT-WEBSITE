import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Products from '../pages/Products';

export default function Categories() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories').then(json => setCategories(json.data))

  }, [])

  return (
    <>
    <div className="container">
      <div className="my-4 text-center">
        <h1><span style={{color:"#ff2828"}}>C</span>ATEGORIES</h1>
      </div>

      <div className="row">
        {
          categories.map((val, key) =>
            <div className="col-md-3 my-3" key={key}>
              <Link className='text-decoration-none text-center' to={`/products/category/${val}`}>
                <Card>
                  <Card.Body>
                    <Card.Title>{val.toUpperCase()}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
         
          )
        }

      </div>
      <Products/>

    </div>
    </>
  )
} 
