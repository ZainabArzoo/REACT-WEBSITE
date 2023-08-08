import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactStars from 'react-stars'
import Swal from 'sweetalert2'
import { GlobalContext } from '../context/context'
import Cart from '../components/Cart'



export default function ProductPage() {

    const { state, dispatch } = useContext(GlobalContext)
    const { productID } = useParams()
    const [product, setproduct] = useState({})
    const [review, setReview] = useState("")
    const [ratingstar, setratingStar] = useState(0)
    const [productQuantity, setproductQuantity] = useState(1)



    const ratingChanged = (newRating) => {
        setratingStar(newRating)
    }

    const submitReview = () => {
        const payload = {
            productID: productID,
            review: review,
            rating: ratingstar
        }
        console.log(payload)


        Swal.fire({
            title: 'Successfully Submitted!',
            text: 'Thanks for reviewing our product',
            icon: 'success',
            confirmButtonText: 'Continue Shopping'
        })

    }

    const addToCart = () => {

        const payload = {
            ...product,
            productQuantity,
            totalPrice: product.price * productQuantity
        }

        // console.log(payload)


        const rep = dispatch({
            type: "ADD_TO_CART",
            payload: payload
        })

        // console.log(rep)



        Swal.fire({
            title: 'Added to Cart!',
            text: 'Check your Cart for Check Out',
            icon: 'success',
            confirmButtonText: 'Continue Shopping'
        })
    }






    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productID}`).then(json => setproduct(json.data))

    }, [])





    return (
        <>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={product.image} alt="image" />
                    </div>

                    <div className="col-md-6">

                        <div className="my-5">
                            <h1 className='fw-bold'>{product.title} - {product.price}$</h1>
                            <p>{product.description}</p>


                            <div className='d-flex'>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    edit={false}
                                    value={product.rating && product.rating.rate}
                                    color2={'#ff2828'} />
                            </div>

                            <div className="my-3">
                                <button className="btn btn-outline-dark mx-1 fw-bold" disabled={productQuantity > 1 ? false : true} onClick={() => setproductQuantity(productQuantity - 1)}>-</button>
                                {productQuantity}
                                <button className="btn btn-outline-dark mx-1 fw-bold" onClick={() => setproductQuantity(productQuantity + 1)}>+</button>
                            </div>


                            <button className='btn btn-outline-dark mx-1 fw-bold' onClick={addToCart}>Add to cart</button>
                            <Cart />

                            
                        </div>
                    </div>




                    <div className="container">
                        <div className='mb-5'>
                            <h2 className="text-center fw-bold"><span style={{color:"#ff2828"}}>R</span>eview <span style={{color:"#ff2828"}}>U</span>s</h2>
                        </div>

                        <div>

                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea2"
                                    style={{ height: 100 }}
                                    defaultValue={review}
                                    onChange={(e) => setReview(e.target.value)}
                                />
                                <label htmlFor="floatingTextarea2" className='fw-bold'>Comments</label>
                            </div>

                            <div className='mt-3'>

                            <p className='fw-bold'>Rate Us :</p>
                                <div className="d-flex align-items-center">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={ratingstar}
                                        onChange={ratingChanged}
                                        color2={'#ff2828'}
                                    />
                                    <span className='ms-3'>({ratingstar})</span>
                                </div>
                            </div>
                            <button className='my-3 btn btn-outline-dark fw-bold' onClick={submitReview}>Submit Review</button>

                        </div>
                    </div>
                </div>

            </div>



        </>

    )
}
