import { useContext, useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GlobalContext } from "../context/context";

function Cart() {
  const { state, dispatch } = useContext(GlobalContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log(state);
  }, [show]);

  return (
    <>
      <button
        onClick={handleShow}
        type="button"
        className="btn btn-dark position-relative"
      >
        <AiOutlineShoppingCart />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {state.cart.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>

      <Offcanvas show={show} onHide={handleClose} placement="end" name="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart
          <button
              className="btn btn-outline-dark fw-bold my-5 mx-2"
              onClick={() =>
                dispatch({
                  type: "CLEAR_CART",
                })
              }
            >
              Clear Cart
            </button>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            state.cart.map((val, key) => (

              <div className="container" key={key}>
                <div className="row">
                  <div className="col-md-3">
                    <img className="img-fluid" src={val.image} alt="image" />
                  </div>
                  <div className="col-md-9">
                  <h5>{val.title}</h5>
                  <button className="btn btn-outline-dark fw-bold">
                    {val.price}$
                  </button>
                  <button className="btn btn-outline-dark fw-bold mx-2">
                    {val.productQuantity}
                  </button>
                </div>
              </div>

            </div>
            ))
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;






























