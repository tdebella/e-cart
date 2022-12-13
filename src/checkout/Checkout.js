import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

function Checkout() {
  const history = useNavigate();
    // if (!localStorage.getItem("auth_token")) {
    //     history.push("/");
    //     swal("warning", "Login to goto shoppingcart page", "error");
    // }
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  var Total = 0;

  //useEffect
  useEffect(() => {
    let isMounted = true;

    axios.get("/api/shoppingcart").then((res) => {
      if (isMounted) {
        if (res.data.status === 1800) {
          setCartItems(res.data.shoppingcart);
          setLoading(false);
        } else if (res.data.status === 401) {
          history.pushState("/");
          swal("warning", res.data.message, "error");
        }
      }
    });

    return () => {
      isMounted = false;
    };
  }, [history]);

  if (loading) {
    return <h4>Loading Checkout...</h4>;
  }

  return (
    <div>
      <div className="py-3 bg-warning">
        <div className="container">
          <h6>Home / Checkout</h6>
        </div>
      </div>

      <div className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="card">
                <div className="card-header">
                  <h4>basic information</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>First Name</label>
                        <input
                          type="text"
                          name="firstname"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>Last Name</label>
                        <input
                          type="text"
                          name="lastname"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>Email Address</label>
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <label>Full Address</label>
                        <textarea rows="3" className="form-control"></textarea>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label>City</label>
                        <input
                          type="text"
                          name="city"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label>State</label>
                        <input
                          type="text"
                          name="state"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label>Zip Code</label>
                        <input
                          type="text"
                          name="zipcode"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group text-end">
                        <button type="button" className="btn btn-primary">
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th width="50%">Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="5">
                    <td>iphone 12 pro</td>
                    <td>1800</td>
                    <td>3</td>
                    <td>5400</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

// swal - showing an alert: "warning" , "error" , "success" and "info".
// Sweet Alert is a way to customize alerts in your websites. It allows you to change from a standard JS button. We can add buttons, change the color text, and even add additional alerts that change depending on user click

// const SweetAlert = require("react-swal");
// <SweetAlert
//   isOpen={true}
//   type="warning"
//   confirmButtonText="Yup"
//   cancelButtonText="Nope"
// />;

// const axios = require("axios");