import React, { Fragment, useState } from "react";
import '../../assets/style/checkOut.scss'
import '../../assets/style/checkOutResponsive.scss'
import {
  CheckoutCartActive,
  CheckoutCartInActive,
  ConformationActive,
  ConformationInActive,
  PaymentCardActive,
  PaymentCardInActive,
  Time,
} from "../../assets/icons";
import { Button, Col, Form, Radio, Row, Steps } from "antd";
import { CheckOutForm } from "../../componets/CheckOutForm";
import PaymentMethodImg1 from "../../assets/images/payment-method-images/payment-img-1.png";
import PaymentMethodImg2 from "../../assets/images/payment-method-images/payment-img-2.png";
import PaymentMethodImg3 from "../../assets/images/payment-method-images/payment-img-3.png";
import PaymentMethodImg4 from "../../assets/images/payment-method-images/payment-img-4.png";
import PaymentMethodImg5 from "../../assets/images/payment-method-images/payment-img-5.png";
import PaymentMethodImg6 from "../../assets/images/payment-method-images/payment-img-6.png";
import PaymentMethodImg7 from "../../assets/images/payment-method-images/payment-img-7.png";
import PaymentMethodImg8 from "../../assets/images/payment-method-images/payment-img-8.png";
import PaymentMethodImg9 from "../../assets/images/payment-method-images/payment-img-9.png";
import PaymentMethodImg10 from "../../assets/images/payment-method-images/payment-img-10.png";
import ConformationImg from "../../assets/images/payment-method-images/conformation-img.png";
import { Truck } from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { PAYMENT_METHOD } from "../../redux/actions/actions";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../StripeCheckout";

export const CheckOut = () => {
  const [current, setCurrent] = useState(0);
  const dispatch = useDispatch();
  const packageValue = useSelector((state) => state.cartreducer.payment_method);
  const cartData = useSelector((state) => state.cartreducer.carts);
  const checkPakage = () => {
    let pakageCout = 0
    cartData.map((obj) => {
      if (obj.package) {
        pakageCout += 1
      }
    })
    return pakageCout * 50
  }
  const next = () => {
    setCurrent(current + 1);
  };

  const getdata = JSON.parse(localStorage.getItem("checkoutData"));
  const getFormData = JSON.parse(localStorage.getItem("checkoutFormData"));
  const grandTotal = (subTotal, shippingCost, packaging) => {
    const total = subTotal + shippingCost + packaging;
    return total.toFixed(2);
  };
  const { Step } = Steps;

  const handleUpdatePackage = (e) => {
    dispatch(PAYMENT_METHOD(e.target.value));
  };
const stripePromise = loadStripe('pk_test_51N9RgcSDdCDk2BWgeahZ8qvKuhF1mfF4RYtdn3qluqSXIGXcryFouWkVSTtrQQAFf9aM3VH1SwQ30zjQ2aRNiwrr00B1x0rRwf');

  // const handleClick = async () => {
  //   const stripe = await stripePromise;
  //   const response = await fetch('/create-checkout-session', { method: 'POST' });
  //   const session = await response.json();

  //   // Redirect to Stripe checkout
  //   const result = await stripe.redirectToCheckout({
  //     sessionId: session.id,
  //   });

  //   if (result.error) {
  //     console.error(result.error.message);
  //   }
  // };

  return (
    <>
      <div className="container">
        <Row justify="center">
          <Col span={12}>
            <Row justify="center">
              <Col span={20}>
                <div className="step-component">
                  <Steps current={current} labelPlacement="vertical">
                    <Step
                      title="1. Checkout"
                      icon={
                        current === 0 ? (
                          <CheckoutCartActive />
                        ) : (
                          <CheckoutCartInActive />
                        )
                      }
                    />
                    <Step
                      title="2. Payment"
                      icon={
                        current === 1 ? (
                          <ConformationActive />
                        ) : (
                          <ConformationInActive />
                        )
                      }
                    />
                    <Step
                      title="3. Confirmation"
                      icon={
                        current === 2 ? (
                          <PaymentCardActive />
                        ) : (
                          <PaymentCardInActive />
                        )
                      }
                    />
                  </Steps>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* Stepper End */}
        {/* Billing Start */}
        <div className="billing-div ">
          <Row gutter={10}>
            <Col xs={24} xl={12}>
              {current === 0 && (
                <div className="billing-left">
                  <h2>Detail Order</h2>

                  <div className="billing-left-content">
                    <div>
                      <p>Subtotal</p>
                      <p>{getdata.sub_total ? `Rp ${getdata.sub_total.toFixed(3)}.000` : ''}</p>
                    </div>
                    <div>
                      <p>Shipping Cost</p>
                      <p>Rp 500.000</p>
                    </div>
                    {getdata.promocode && <div>
                      <p>Promo Code</p>
                      <p>{getdata.promocode}</p>
                    </div>}
                    {checkPakage() > 0 && <div>
                      <p>Packaging</p>
                      <p>{`Rp ${checkPakage()}.000`}</p>
                    </div>}

                    <hr />
                    <div className="grand-total">
                      <p>Grand Total</p>
                      <p>{`Rp ${grandTotal(getdata.sub_total, 500, checkPakage())}.000`}</p>
                    </div>
                  </div>
                </div>
              )}
              {current === 1 && (
                <>
                  <div className="billing-left">
                    <h2>Detail Order</h2>
                    <div className="billing-left-content">
                      <div>
                        <p>Subtotal</p>
                        <p>{getdata.sub_total ? `Rp ${getdata.sub_total.toFixed(3)}.000` : ''}</p>
                      </div>
                      <div>
                        <p>Shipping Cost</p>
                        <p>Rp 500.000</p>
                      </div>
                      {getdata.promocode && <div>
                        <p>Promo Code</p>
                        <p>{getdata.promocode}</p>
                      </div>}

                      {checkPakage() > 0 && <div>
                      <p>Packaging</p>
                      <p>{`Rp ${checkPakage()}.000`}</p>
                    </div>}
                      <hr />
                      <div className="grand-total">
                        <p>Grand Total</p>
                        <p>{`Rp ${grandTotal(getdata.sub_total, 500, 50)}.000`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="payment-left">
                    <div className="payment-time">
                      <h2>Payment Detail</h2>
                      <p>11:55:55</p>
                    </div>
                    <p className="billing-left-txt">Please make a payment according with the limit time specified, starting from now</p>
                  </div>
                </>
              )}
              {current === 2 && (<>
                <div className="conformation-left">
                  <div className="conformation-img">
                    <img src={ConformationImg} alt="conformation immg" />
                  </div>
                  <div className="order-confirm-content">
                    <h2>Order Confirmed</h2>
                    <p>Your order have been confirmed, please wait and track your order</p>
                  </div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    form="checkout-form"
                    className="con-btn-checkout"
                  >
                    Go to track page
                  </Button>
                </div>
              </>)}
            </Col>
            <Col xs={24} xl={12}>
              {current === 0 && (
                <>
                  <div className="billing-right">
                    <h2>Billing Address</h2>
                    <div className="billing-form">
                      <CheckOutForm next={next} />
                    </div>
                  </div>
                  <div className="btn-div">
                    <Form.Item>
                      <Button type="primary" className=" checkout-submit-btn">
                        Continue Shopping
                      </Button>
                    </Form.Item>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        form="checkout-form"
                        className="con-btn-checkout"
                      >
                        Place My Order
                      </Button>
                    </Form.Item>
                  </div>
                </>
              )}
              {current === 1 && (<>
                <div className="billing-right">
                  <h2>Order Detail</h2>
                  <div className="order-detail-main">
                    <div className="order-detail-info">
                      <p className="order-titile">Order Number</p>
                      <div className="order-number-txt">
                        <div>
                          <p>MTAWEB-3A86D4DB</p>
                          <p className="copy-txt">COPY</p>
                        </div>
                        <div>
                          <p className="order-txt-info">Always remember Order Number for easy tracking</p>
                        </div>
                      </div>
                    </div>
                    <div className="order-detail-info">
                      <p className="order-titile">Purchase Date</p>
                      <div className="order-number-txt">
                        <div>
                          <p>{getdata.date}</p>
                        </div>
                      </div>
                    </div>
                    <div className="order-detail-item">
                      <p className="order-titile">Items</p>
                      <div className="order-number-txt">
                        {cartData.map((obj, index) => (
                          <Fragment key={index}>
                            <div>
                              <p>{obj.title}</p>
                            </div>
                            <div>
                              <p className="order-txt-info">{obj.qnty} x  {`${obj.qnty * obj.price}.000`}</p>
                            </div>

                          </Fragment>
                        ))}
                      </div>
                    </div>
                    <div className="order-detail-name">
                      <p className="order-titile">Name</p>
                      <div className="order-number-txt">
                        <div>
                          <p>{getFormData.fullname}</p>
                        </div>
                      </div>
                    </div>
                    <div className="order-detail-name">
                      <p className="order-titile">Phone</p>
                      <div className="order-number-txt">
                        <div>
                          <p>{getFormData.phonenumber}</p>
                        </div>
                      </div>
                    </div>
                    <div className="order-detail-name">
                      <p className="order-titile">Email</p>
                      <div className="order-number-txt">
                        <div>
                          <p>{getFormData.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="order-detail-add">
                      <p className="order-titile">Shipping Address</p>
                      <div className="order-number-txt">
                        <div>
                          <p>{getFormData.shippingaddress}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>)}
              {current === 2 && (<>
                <div className="conformation-right">
                  <div className="days">
                    <div>
                      <Time /><p>10 days delivery</p>
                    </div>
                    <div>
                      <Truck /><p>{getFormData.courier}</p>
                    </div>
                  </div>
                  <div className="conformation-content">
                    {cartData.map((obj, index) => (
                      <Fragment key={index}>
                        <p>{obj.title}</p>
                        <p>{obj.qnty} x IDR {`${obj.qnty * obj.price}.000`}</p>
                      </Fragment>
                    ))}

                  </div>
                  <div className="conformation-shipping">
                    <div>
                      <h2>Subtotal</h2>
                      <h2>Shipping Cost</h2>
                      <h2>Packaging</h2>
                    </div>
                    <div>
                      <h2>{getdata.sub_total ? `Rp ${getdata.sub_total.toFixed(3)}.000` : ''}</h2>
                      <h2>Rp 500.000</h2>
                      <h2>Rp 50.000</h2>
                    </div>
                  </div>
                  <div className="seprator">

                  </div>
                  <div className="total">
                    <h2>Grand Total</h2>
                    <h2>{`Rp ${grandTotal(getdata.sub_total, 500, 50)}.000`}</h2>
                  </div>
                  <div className="seprator">

                  </div>
                  <div className="shipping-detail-add">
                    <p className="shipping-titile">Shipping Address</p>
                    <div className="shipping-number-txt">
                      <div>
                        <p>{getFormData.shippingaddress}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>)}
            </Col>
            {current === 1 && <Col xs={24} xl={24}>
              <div className="payment-method">
                <h2>Payment Method</h2>
                <div className="payment-method-selection">
                  <Radio.Group onChange={handleUpdatePackage} value={packageValue}>
                    <div className="radio-group">
                      <div className="payment-radio-btns">
                        <div className="single-radio">
                          <Radio value={'BNI Cicilan 0%'}>BNI Cicilan 0%</Radio>
                          <img src={PaymentMethodImg1} alt="payment method" />
                        </div>
                        <div className="single-radio">
                          <Radio value={'Mandiri Cicilan 0%'}>Mandiri Cicilan 0%</Radio>
                          <img src={PaymentMethodImg2} alt="payment method" />
                        </div>
                        <div className="single-radio">
                          <Radio value={'Bank Transfer'}>Bank Transfer</Radio>
                          <img src={PaymentMethodImg3} alt="payment method" />
                        </div>
                        <div className="single-radio">
                          <Radio value={'Credit Card'}>Credit Card</Radio>
                          <div className="payment-credit-card-imgs">
                            <img src={PaymentMethodImg4} alt="payment method" />
                            <img src={PaymentMethodImg5} alt="payment method" />
                          </div>

                        </div>

                      </div>
                      <div className="payment-radio-btns">
                        <div>
                          <Radio value={'Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)'} className="single-radio">Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)</Radio>
                          <div className="payment-credit-card-imgs">
                            <img src={PaymentMethodImg6} alt="payment method" />
                            <img src={PaymentMethodImg7} alt="payment method" />
                            <img src={PaymentMethodImg8} alt="payment method" />
                          </div>
                        </div>
                        <div>
                          <Radio className="single-radio" value={'GO-PAY'}>GO-PAY</Radio>
                          <img src={PaymentMethodImg9} alt="payment method" />
                        </div>
                        <div>
                          <Radio className="single-radio" value={'Krdivo'}>Krdivo</Radio>
                          <img src={PaymentMethodImg10} alt="payment method" />
                        </div>

                      </div>
                    </div>
                  </Radio.Group>
                </div>
              </div>
              <div className="payment-btn-div">
                <Button
                  type="primary"
                  className="con-btn-checkout"
                  disabled={packageValue ? false : true}
                  // onClick={() => handleClick()}
                >
                  Place My Order
                </Button>
              </div>
            </Col>}
          </Row>
          <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
        </div>
        {/* Billing End */}
      </div>
    </>
  );
};
