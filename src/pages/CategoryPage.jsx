import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import axios from 'axios';


export default function CategoryPage() {

    const { categoryName } = useParams()
    const [products, setProducts] = useState([])




    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${categoryName}`).then(json => setProducts(json.data))

    }, [categoryName])

 
    return (
        <div className="container">
            <div className="my-5 text-center">
                <h1>{categoryName.toUpperCase()}</h1>
            </div>

            <div className="row">
                {
                    products.map((val, key) =>

                        <div className="col-md-6 my-4" key={key}>
                            <Link className='text-decoration-none' to={`/products/${val.id}`}>
                                <Card>
                                    <Card.Img style={{
                            width: '100%',
                            height: '250px',
                            objectFit: 'contain'
                        }}variant="top" src={val.image} />
                                    <Card.Body>
                                        <Card.Title>{val.title.length > 30 ? val.title.slice(0,30) + '...' : val.title}</Card.Title>
                                        <p>{val.price}$</p>
                                        <Card.Text>{val.description.length > 50 ? val.title.slice(0,50) + '...' : val.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>

                    )
                }
            </div>
        </div>
    )
}
