import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import Loader from '../components/Loader';




export default function Products() {

  const [products, setProducts] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(json => {
      setProducts(json.data);
      setLoader(false)
    })
  }, [])

  return (
    <>
      {
        loader
          ?
          <Loader />
          :
          <div className='container'>

            <div className="row">
              <div className="col-md-12">
              <h1 className='text-center'><span style={{color:"#ff2828"}}>O</span>ur <span style={{color:"#ff2828"}}>P</span>roducts</h1>
              
                <div className="row">
                  {
                    products.map((val, key) =>

                      <div className="col-md-3 my-4" key={key}>

                        <Link className='text-decoration-none' to={`/products/${val.id}`}>
                          <Card>
                            <Card.Img style={{
                              width: '100%',
                              height: '300px',
                              objectFit: 'contain'
                            }} src={val.image} />
                            <Card.Body>
                              <Card.Title>{val.title.length > 12 ? val.title.slice(0, 12) + '...' : val.title}</Card.Title>
                              <Card.Text>{val.price}$
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Link>
                      </div>

                    )
                  }
                </div>
              </div>
            </div>
          </div>
      }
    </>
  )
}


