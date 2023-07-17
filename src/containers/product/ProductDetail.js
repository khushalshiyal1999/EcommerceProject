import React, { Fragment, useState } from "react";
import '../../assets/style/product.scss'
import '../../assets/style/productResponsive.scss'
import { Breadcrumb, Button, Col, Image, List, Row, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { ProductContent } from "./ProductContent";
import ModalColor1 from "../../assets/images/product-details/model-color1.png";
import ModalColor2 from "../../assets/images/product-details/model-color2.png";
import Minus from "../../assets/images/product-details/minus-btn.png";
import Plus from "../../assets/images/product-details/plus-btn.png";
import { relateProducts } from "./ProductUtils";
import Watch1Small from "../../assets/images/product-details/product-tabs-images/watch-1-small.png";
import Watch1Large from "../../assets/images/product-details/product-tabs-images/watch-1-large.png";
import Watch2Small from "../../assets/images/product-details/product-tabs-images/watch-2-small.png";
import Watch2Large from "../../assets/images/product-details/product-tabs-images/watch-2-large.png";
import Watch3Small from "../../assets/images/product-details/product-tabs-images/watch-3-small.png";
import Watch3Large from "../../assets/images/product-details/product-tabs-images/watch-3-large.png";
import { AddCartWhite } from "../../assets/icons";

export const ProductDetail = () => {
  const images = [
    { id: 1, small: Watch1Small, large: Watch1Large },
    { id: 2, small: Watch2Small, large: Watch2Large },
    { id: 3, small: Watch3Small, large: Watch3Large },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0].large);

  const handleImageClick = (image) => {
    setSelectedImage(image.large);
  };
  return (
    <>
      <div className="container">
        {/* Breadcrumb start */}
        <div className="breadcrumbs">
          <Breadcrumb>
            <Breadcrumb.Item className="breadcrumbs-item">
              <a href="/">Home</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumbs-item">
              Product
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumbs-item">
              Watches
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumbs-item-active">
              <a href="/"> Way Kambas Mini Ebony</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {/* Breadcrumb end */}
      </div>
      <Row>
        <Col xl={8} xs={24} className="products-tab-col">
          {/* <div className="container"> */}
          <div className="tab-class">
            <List
              dataSource={images}
              renderItem={(item) => (
                <List.Item
                  key={item.id}
                  className={selectedImage === item.large ? "active" : ""}
                  onClick={() => handleImageClick(item)}
                >
                  <img
                    src={item.small}
                    alt={`Small img ${item.id}`}
                    className="small-img"
                  />
                </List.Item>
              )}
            />
            <Image src={selectedImage} alt="Large img" className="large-img" />
          </div>
          {/* </div> */}
        </Col>
        <Col xl={16} xs={24}>
          <div className="product-detail-main">
            <div className="product-title">
              <h2>WAY KAMBAS</h2>
              <h2>MINI EBONY</h2>
            </div>
            <div className="product-price">
              <p>
                <span className="outer">
                  <span className="inner">Rp 1.500.000</span>
                </span>
              </p>
              <p className="discout-price">Rp 1.024.000</p>
            </div>
            <div className="product-color">
              <p>Choose Model</p>
              <div className="modal-color-div">
                <img src={ModalColor1} alt="modal color" />
                <img src={ModalColor2} alt="modal color" />
              </div>
            </div>
            <div className="product-action-btns">
              <div className="plus-minus-div">
                <Button className="mins-btn">
                  <img src={Minus} alt="minus" />
                </Button>
                <p>1</p>
                <Button className="add-btn">
                  <img src={Plus} alt="plus-btn" />
                </Button>
              </div>
              <div>
                <Button type="primary" className="add-cart-btn">
                  <AddCartWhite />
                  <span>Add to cart</span>
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="container">
        {/* Product Deatil Start */}
        <div className="product-section-2">
          <Tabs className="product-tabs">
            <TabPane tab="Detail" key="detail" className="product-tab-item">
              <ProductContent />
            </TabPane>
            <TabPane tab="Warranty" key="warranty" className="product-tab-item">
              <ProductContent />
            </TabPane>
            <TabPane
              tab="Custom Engrave"
              key="custom-engrave"
              className="product-tab-item"
            >
              <ProductContent />
            </TabPane>
            <TabPane
              tab="How to Adjust"
              key="how-to-adjust"
              className="product-tab-item"
            >
              <ProductContent />
            </TabPane>
            <TabPane
              tab="How to Care"
              key="how-to-care"
              className="product-tab-item"
            >
              <ProductContent />
            </TabPane>
            <TabPane tab="Gallery" key="gallery" className="product-tab-item">
              <ProductContent />
            </TabPane>
          </Tabs>
        </div>
        {/* Product Deatil End */}
        {/* Relate Products Start */}
        <div className="product-seaction3">
          <h2 className="underline-heading">Relate Products</h2>
          <Row>
            {relateProducts.map((obj, index) => (
              <Fragment key={index}>
                <Col xs={24} xl={6}>
                  <div className="relate-product-main">
                  <div className="product-main-div">
                    {obj.offer ? (
                      <div className="discount-offer-div">
                        <p>{obj.offer}</p>
                      </div>
                    ) : (
                      ""
                    )}
                    {obj.new ? (
                      <div className="new-product-div">
                        <p>New</p>
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="product-img-div">
                      <img src={obj.image} alt="deal" />
                    </div>
                    <div className="deal-content-div">
                      <h3>{obj.title}</h3>
                      {obj.mrp ? (
                        <span>
                          <span className="outer">
                            <span className="inner">Rp 1.500.000</span>
                          </span>
                        </span>
                      ) : (
                        ""
                      )}

                      <p>{obj.price}</p>
                    </div>
                  </div>  
                  </div>
                  
                </Col>
              </Fragment>
            ))}
          </Row>
        </div>
        {/* Relate Products End */}
      </div>
    </>
  );
};
