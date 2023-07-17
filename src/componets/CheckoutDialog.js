import { Button, Col, Form, Modal, Row, Select, notification } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import Minus from "../assets/images/product-details/minus-btn.png";
import EmptyCart from "../assets/images/emptyCart.png";
import Plus from "../assets/images/product-details/plus-btn.png";
import { Delete } from '../assets/icons';
import Input from 'antd/es/input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { ADD, CHECKOUT, DLT, REMOVE } from '../redux/actions/actions';
import { useNavigate } from 'react-router-dom';
import { loginUser, userRole } from '../containers/homepage/HomePageUtils';
import { formattedDate, formattedTime } from '../containers/product/ProductUtils';

export const CheckoutDialog = ({ open, onClose }) => {
    const getdata = useSelector((state) => state.cartreducer.carts);
    const cartData = getdata.filter(obj => obj.username === loginUser.username)
    const [price, setPrice] = useState();
    const [promoCode, setPromoCode] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const dlt = (id) => {
        dispatch(DLT(id));
    };

    const total = () => {
        let totalPrice = 0;
        cartData.forEach((ele) => {
            totalPrice += parseFloat(ele.price) * ele.qnty;
        });

        if (promoCode.toUpperCase() === 'INDONESIA') {
            totalPrice *= 35 / 100
        }

        setPrice(totalPrice);
    };

    const getTotalPrice = (price, qty) => {
        return `${parseFloat(price) * qty}.000`;
    };

    const handleClick = () => {
        if (cartData.length === 0) {
            notification.warning({
                message: 'Please add atleast one product on cart!',
            });
            return
        }
        if (userRole) {
            navigate('/checkout');
            onClose();
            dispatch(CHECKOUT({ subTotal: price, promocode: promoCode, date: `${formattedDate} ${formattedTime}` }))
        } else {
            onClose();
            notification.warning({
                message: 'Please login first',
            });
        }
    };

    const handleIncreaseQty = (id) => {
        dispatch(ADD({ id }));
    };

    const handleDecreaseQty = (id) => {
        const item = getdata.find((obj) => obj.id === id);
        if (item && item.qnty > 1) {
            dispatch(REMOVE({ id }));
        } else {
            dispatch(DLT(id));
        }
    };

    const handlePromoCodeChange = (e) => {
        setPromoCode(e.target.value);
    };

    useEffect(() => {
        total();
    }, [getdata, promoCode,total]);

    return (
        <>
            <Modal open={open} onCancel={onClose} width={1110} className='checkout-modal' footer={null}>
                <Row className='checkout-modal-row'>
                    {cartData.length === 0 && (
                        <div className='empty-state-cart'>
                            <img src={EmptyCart} alt='Emty Cart' height={300} width={300} />
                            <h2>You have no products in the cart</h2>
                            <h3>Please add some products to checkout!</h3>
                        </div>
                    )}
                    {cartData.map(
                        (obj, index) => (
                            <Fragment key={index}>
                                <Col xl={12} xs={24}>
                                    <div className='cart-left-side'>
                                        <Row>
                                            <Col xl={12} xs={24}>
                                                <div className='cart-img'>
                                                    <img src={obj.image} alt='cart-product-img' />
                                                </div>
                                            </Col>
                                            <Col xl={12} xs={24}>
                                                <div className='product-content'>
                                                    <h2>{obj.title}</h2>
                                                    {obj.mrp && (
                                                        <p>
                                                            <span className="outer">
                                                                <span className="inner">{`Rp ${obj.mrp}.000`}</span>
                                                            </span>
                                                        </p>
                                                    )}
                                                    <h3>{`Rp ${obj.price}.000`}</h3>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col xl={12} xs={24}>
                                    <div className='cart-right-side'>
                                        <p>Select Packaging</p>
                                        <Form.Item
                                            rules={[
                                                { required: true, message: 'Please select your country' },
                                            ]}
                                        >
                                            <Select defaultValue={'Default Packaging (Free)'} onChange={() => dispatch(ADD({ id: obj.id, package: true }))}>
                                                <Select.Option value="Wooden Packaging (Rp 50.000)">Wooden Packaging (Rp 50.000)</Select.Option>
                                                <Select.Option value="Default Packaging (Free)">Default Packaging (Free)</Select.Option>
                                            </Select>
                                        </Form.Item>
                                        <div className='priceing-div'>
                                            <div className="plus-minus-div">
                                                <Button className="mins-btn" onClick={() => handleDecreaseQty(obj.id)}>
                                                    <img src={Minus} alt="minus" />
                                                </Button>
                                                <p>{obj.qnty}</p>
                                                <Button className="add-btn" onClick={() => handleIncreaseQty(obj.id)}>
                                                    <img src={Plus} alt="plus-btn" />
                                                </Button>
                                            </div>
                                            <h2>{getTotalPrice(obj.price, obj.qnty)}</h2>
                                            <Button className='delete-btn' onClick={() => dlt(obj.id)}>
                                                <Delete />
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                            </Fragment>
                        ))}
                </Row>
                <div className='seprator'></div>
                <div className='subtotal-div'>
                    <Row>
                        <Col xl={12} xs={24}>
                            <div className='promo-div'>
                                <p>Kode Promo</p>
                                <Form.Item>
                                    <Input placeholder='Promo Code' name='promo-code-input' style={{ boxShadow: 'none' }} value={promoCode} onChange={handlePromoCodeChange} />
                                </Form.Item>
                            </div>
                        </Col>
                        <Col xl={12} xs={24}>
                            <div className='sub-total'>
                                <p>Subtotal</p>
                                <div>
                                    <p>
                                        <span className="outer">
                                            <span className="inner">{promoCode === 'INDONESIA' ? price.toFixed(2) : ''}</span>
                                        </span>
                                    </p>
                                    <h3>{`Rp ${price ? price.toFixed(3) : price}.000`}</h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Button className='checkout-btn' onClick={handleClick}>Checkout</Button>
            </Modal>
        </>
    );
};