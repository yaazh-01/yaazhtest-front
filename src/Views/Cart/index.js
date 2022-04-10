import React, { useRef, useState } from "react";
import { Button, Fade, IconButton } from "@mui/material";
import "./Cart.css";
import Products from "../../Utils/Products";
import InputField from "../../Components/Atoms/InputField";
import YButton from "../../Components/Atoms/YButton";

const Cart = () => {
  const [addAddress, setAddAddress] = useState(false);
  const [addCard, setAddCard] = useState(false);
  const addressArray = [
    {
      name: "Bruce Wayne",
      address1: "Wayne Manor",
      street: "Wayne street",
      city: "Gotham City",
      state: "New Jersey",
      country: "United States",
      zipcode: "12345",
    },
    {
      name: "Bruce Wayne",
      address1: "Wayne Industries",
      street: "Wayne street",
      city: "Gotham City",
      state: "New Jersey",
      country: "United States",
      zipcode: "12345",
    },
  ];

  const cardArray = [
    {
      id: 1,
      card_number: "1234567890123214",
      name: "Bruce Wayne",
      cardType: "Visa",
    },
    {
      id: 2,
      card_number: "4321554232411423",
      name: "Bruce Wayne",
      cardType: "Visa",
    },
  ];

  return (
    <div className="crdOtWrpr">
      <div className="cartWrapper container py-4">
        <div className="cartProdctsWrpr w-100">
          {Products.map((data, index) => (
            <>
              <div className="cartCard">
                <div className="pdtImg">
                  <img src={data.image[0]} />
                </div>
                <div className="pdtIfoWrpr">
                  <h3>{data.name}</h3>
                  <p>Oil</p>
                  <div className="qtyPrcWrpr mt-3">
                    <div className="qtyIptWrpr">
                      <Button>-</Button>
                      <input type="text" value={1} />
                      <Button>+</Button>
                    </div>
                    <p className="prcValue text-end">
                      ₹{data.price} <br /> <small>/ 200ml</small>
                    </p>
                  </div>
                  <p className="rmvBtnTxt">
                    <i>
                      <u>Remove</u>
                    </i>
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="crtAdrsWrpr">
          {!addAddress ? (
            <h5 className="m-0 mh-40">Shipping Address</h5>
          ) : (
            <div className="mh-40 d-flex align-items-center justify-content-between">
              <h5 className="m-0">Add Shipping Address</h5>
              <IconButton onClick={() => setAddAddress(false)}>
                <span className="material-icons">clear</span>
              </IconButton>
            </div>
          )}
          <hr />
          {!addAddress ? (
            <>
              {addressArray.map((data, index) => (
                <div className="radWrapper">
                  <input
                    id={`adrs_${index}`}
                    type="radio"
                    hidden
                    name="shipAddress"
                  />
                  <label
                    className="adrsLcnLbl text-start"
                    for={`adrs_${index}`}
                  >
                    <h6>{data.name}</h6>
                    <p>
                      {data.address1},
                      <br />
                      {data.street},
                      <br />
                      {data.city},<br />
                      {data.state}, <br />
                      {data.country}, {data.zipcode}
                    </p>
                  </label>
                </div>
              ))}
              <Button onClick={() => setAddAddress(true)}>
                Add New Address
              </Button>
            </>
          ) : (
            <form>
              <div className="row">
                <div className="col-md-12">
                  <InputField
                    label="Name"
                    placeholder="Enter Name"
                    name="name"
                  />
                </div>
                <div className="col-md-12">
                  <InputField
                    label="Phone Number"
                    placeholder="Enter Phone Number"
                    name="phone"
                  />
                </div>
                <div className="col-md-12">
                  <InputField
                    label="Address"
                    placeholder="Enter Address"
                    name="address"
                  />
                </div>
                <div className="col-md-12">
                  <InputField
                    label="City"
                    placeholder="Enter City"
                    name="city"
                  />
                </div>
                <div className="col-md-12">
                  <InputField
                    label="State"
                    placeholder="Enter State"
                    name="state"
                  />
                </div>
                <div className="col-md-12">
                  <InputField
                    label="Country"
                    placeholder="Enter Country"
                    name="country"
                  />
                </div>
                <div className="col-md-12">
                  <InputField
                    label="Zipcode"
                    placeholder="Enter zipcode"
                    name="zipcode"
                  />
                </div>
                <div className="col-md-12 pb-3">
                  <YButton label="Add" />
                </div>
              </div>
            </form>
          )}
        </div>
        <div className="crtAdrsWrpr">
          {!addCard ? (
            <h5 className="m-0 mh-40">Payment Information</h5>
          ) : (
            <div className="mh-40 d-flex align-items-center justify-content-between">
              <h5 className="m-0">Add New Card</h5>
              <IconButton onClick={() => setAddCard(false)}>
                <span className="material-icons">clear</span>
              </IconButton>
            </div>
          )}
          <hr />
          {!addCard ? (
            <>
              {cardArray.map((data, index) => (
                <div className="radWrapper">
                  <input
                    id={`card_${index}`}
                    type="radio"
                    hidden
                    name="pay_card"
                  />
                  <label
                    className="adrsLcnLbl text-start"
                    for={`card_${index}`}
                  >
                    <h6>
                      {data.card_number.slice(0, 4)} **** ****{" "}
                      {data.card_number.slice(12, 16)}
                    </h6>
                    <div className="d-flex align-items-center justify-content-between">
                      <p>{data.name}</p>
                      <p>{data.cardType}</p>
                    </div>
                  </label>
                </div>
              ))}
              <Button onClick={() => setAddCard(true)}>Add New Card</Button>
            </>
          ) : (
            <form>
              <div className="row">
                <div className="col-md-12">
                  <InputField
                    label="Card Number"
                    placeholder="Enter Card Number"
                    name="card_number"
                  />
                </div>
                <div className="col-md-3">
                  <InputField label="MM" placeholder="MM" name="card_month" />
                </div>
                <div className="col-md-3">
                  <InputField
                    label="YYYY"
                    placeholder="YYYY"
                    name="card_year"
                  />
                </div>
                <div className="col-md-6">
                  <InputField
                    label="CVV"
                    placeholder="Enter CVV"
                    name="card_cvv"
                  />
                </div>
                <div className="col-md-12">
                  <InputField
                    label="Card Holder Name"
                    placeholder="Enter Card Holder Name"
                    name="card_name"
                  />
                </div>
                <div className="col-md-12 pb-3">
                  <YButton label="Add" onClick={() => setAddCard(false)} />
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
      <div className="chckOtWrpr">
        <div className="container d-flex align-items-center justify-content-between">
          <p className="">
            Subtotal:<b>₹4500.00</b>
          </p>
          <YButton label="Proceed to Pay" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
