import React, { Fragment, useState } from 'react'
import SliderImage from '../../assets/images/sliderWatch.png'
import TestimonialsImg from '../../assets/images/testimonials-img.png'
import TestimonialsSvg from '../../assets/images/testimonials-svg.svg'
import EyeWearImage from '../../assets/images/eyeWearImage.png'
import EyeWearImage2 from '../../assets/images/eyeWearImage.png'
import NewsSvg1 from '../../assets/images/recent-news/svg-group-1.svg'
import NewsSvg2 from '../../assets/images/recent-news/svg-group-2.svg'
import NewsImage from '../../assets/images/recent-news/Recent-News.png'
import { Button, Image, notification } from 'antd';
import { Row, Col, Carousel } from 'antd'
import { AddCartWhite, HeartIcon, LogoOrange } from '../../assets/icons';
import { cartProductData, instagram, productData, productData2, productData3, settings, testimonialSettings } from './HomePageUtils';
import { useDispatch } from 'react-redux'
import { ADD } from '../../redux/actions/actions'
import LoginDialog from '../../componets/LoginDialog'


export const HomePage = () => {
  const [openLogin, setLogin] = useState(false);
  const dispatch = useDispatch()
  const openNotification = () => {
    notification.open({
      message: 'Product added successfully on cart',
      duration: 4, // Number of seconds the notification stays open
      placement: 'bottomLeft',
      icon: <i className="fa fa-check success-icon"></i>
    });
  };
  const handleAddProduct = (product) => {
    const userData = localStorage.getItem('userData')
    // console.log(data)
    if (!userData) {
      setLogin(true);
      notification.warning({
        message: 'Please login first',
      });
      return
    }
    dispatch(ADD(product))
    openNotification()
  }


  return (
    <>
      <div className='container'>
        {/* Slider Start */}
        <Row justify="center" className='bottom'>
          <Col span={24}>
            <Carousel arrows {...settings} className='slider' dotPosition="none">
              <div>
                <Row>
                  <Col xs={24} xl={7}>
                    <div className='slider-img'>
                      <img src={SliderImage} alt='slider ' />
                    </div>
                  </Col>
                  <Col xs={24} xl={15}>
                    <div className='slider-content'>
                      <div className='heading'>
                        <h1>WAY KAMBAS</h1>
                        <h1>MINI EBONY</h1>
                        <div className='slider-line'></div>
                      </div>
                      <div>
                        <p>MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin.</p>
                        <a href='/' className='discover-link'>Discover</a>
                      </div>
                      <div className='slider-btns'>
                        <Button type="primary" className='add-cart-btn'>
                          <AddCartWhite />
                          <span>Add to cart</span>
                        </Button>
                        <Button type="primary" ghost className='logo-btn'>
                          <LogoOrange />
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col xs={24} xl={7}>
                    <div className='slider-img'>
                      <img src={SliderImage} alt='slider' />
                    </div>
                  </Col>
                  <Col xs={24} xl={15}>
                    <div className='slider-content'>
                      <div className='heading'>
                        <h1>WAY KAMBAS</h1>
                        <h1>MINI EBONY</h1>
                        <div className='slider-line'></div>
                      </div>
                      <div>
                        <p>MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin.</p>
                        <a href='/' className='discover-link'>Discover</a>
                      </div>
                      <div className='slider-btns'>
                        <Button type="primary" className='add-cart-btn'>
                          <AddCartWhite />
                          <span>Add to cart</span>
                        </Button>
                        <Button type="primary" ghost className='logo-btn'>
                          <LogoOrange />
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col xs={24} xl={7}>
                    <div className='slider-img'>
                      <img src={SliderImage} alt='slider' />
                    </div>
                  </Col>
                  <Col xs={24} xl={15}>
                    <div className='slider-content'>
                      <div className='heading'>
                        <h1>WAY KAMBAS</h1>
                        <h1>MINI EBONY</h1>
                        <div className='slider-line'></div>
                      </div>
                      <div>
                        <p>MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin.</p>
                        <a href='/' className='discover-link'>Discover</a>
                      </div>
                      <div className='slider-btns'>
                        <Button type="primary" className='add-cart-btn'>
                          <AddCartWhite />
                          <span>Add to cart</span>
                        </Button>
                        <Button type="primary" ghost className='logo-btn'>
                          <LogoOrange />
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Carousel>
          </Col>
        </Row>
        {/* Slider End */}
        {/* Eye Wear Shart */}
        <Row className='seaction1'>
          <Col xs={24} xl={12} >
            <div className='eyewear-div'>
              <div>
                <h2><span>Luxurious</span> <span>Eyewear</span></h2>
                <p>See the beauty of exotic world with the luxurious glasses</p>
                <a href='/' className='discover-link'>Discover Now</a>
              </div>
              <div className='eyewear-img'>
                <img src={EyeWearImage} alt='Eye wear' />
              </div>
            </div>
          </Col>
          <Col xs={24} xl={12} >
            <div className='eyewear-div'>
              <div>
                <h2><span>Comfortable</span> <span>Watches</span></h2>
                <p>See the beauty of exotic world with the luxurious glasses</p>
                <a href='/' className='discover-link'>Discover Now</a>
              </div>
              <div className='eyewear-img'>
                <img src={EyeWearImage2} alt='Eye wear' />
              </div>
            </div>
          </Col>
        </Row>
        {/* Eye Wear End */}
        {/* Monthly Deals Start */}
        <div className='seaction2'>
          <h2 className='underline-heading'>Monthly Deals</h2>
          <Row>
            {cartProductData?.map((obj, index) => (
              <Fragment key={index}>
                <Col xs={24} xl={6} className={obj.offer === 10 ? 'deal-col' : ''}>
                  <div className='deal-main-div'>
                    <div className='deal-img-div'>
                      <img src={obj.image} alt='deal' />
                    </div>
                    <div className='deal-content-div'>
                      <h3>{obj.title}</h3>
                      <p>{`${obj.offer}% Off`}</p>
                      <p><span className="outer">
                        <span className="inner">{`Rp ${obj.mrp}.000`}</span>
                      </span>
                      </p>
                      <p>{`Rp ${obj.price}.000`}</p>
                    </div>
                    <div className='deal-addBtn'>
                      <Button type="primary" >
                        <HeartIcon></HeartIcon>
                      </Button>
                      <Button type="primary" className='add-cart-btn' onClick={() => handleAddProduct(obj)}>
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </Col>
              </Fragment>
            ))}
          </Row>
        </div>
        {/* Monthly Deals End */}
      </div>
      {/* Recent News Start */}
      <div className='seaction3'>
        <Row>
          <Col xs={24} xl={10}>
            <div className='news-left-side'>
              <h2 className='underline-heading'>Recent News</h2>
              <div className='news-content'>
                <h3>Where To Travel</h3>
                <h2>Matoa Where To </h2>
                <h2>Travel? Yogyakarta</h2>
                <Button><a href='/'>Discover</a></Button>
              </div>
            </div>
          </Col>
          <Col xs={24} xl={14}>
            <div className='news-class'>
              <div className='news-right-side'>
                <img src={NewsImage} alt='news-img' />
                <img src={NewsSvg2} alt='news-svg' />
                <img src={NewsSvg1} alt='news-svg' />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {/* Recent News End */}
      {/* Products Start */}
      <div className='seaction4 container'>
        <Row>
          <Col xs={24} xl={8}>
            <h2 className='underline-heading'>Maple Series</h2>
            <div className='rows'>
              {productData.map((obj, index) =>
                <Fragment key={index}>
                  <div className='col-div'>
                    <div className='product-img'>
                      <img src={obj.image} alt='Product-img' />
                    </div>
                    <div className='product-contect'>
                      <h3>{obj.title}</h3>
                      <h2>{obj.price}</h2>
                    </div>
                  </div>
                </Fragment>
              )}
            </div>
          </Col>
          <Col xs={24} xl={8}>
            <h2 className='underline-heading'>Ebony Series</h2>
            <div className='rows'>
              {productData2.map((obj, index) =>
                <Fragment key={index}>
                  <div className='col-div'>
                    <div className='product-img'>
                      <img src={obj.image} alt='Product-img' />
                    </div>
                    <div className='product-contect'>
                      <h3>{obj.title}</h3>
                      {obj.mrpPrice ?
                        <p><span className="outer">
                          <span className="inner">{obj.mrpPrice}</span>
                        </span>
                        </p>
                        : ''}
                      <h2>{obj.price}</h2>
                    </div>
                  </div>
                </Fragment>
              )}
            </div>
          </Col>
          <Col xs={24} xl={8}>
            <h2 className='underline-heading'>Featured</h2>
            <div className='rows'>
              {productData3.map((obj, index) =>
                <Fragment key={index}>
                  <div className='col-div'>
                    <div className='product-img'>
                      <img src={obj.image} alt='Product-img' />
                    </div>
                    <div className='product-contect'>
                      <h3>{obj.title}</h3>
                      <h2>{obj.price}</h2>
                    </div>
                  </div>
                </Fragment>
              )}
            </div>
          </Col>
          <div className='see-more-class'>
            <div className='see-more-line'></div>
            <Button className='see-more-btn'>See More</Button>
            <div className='see-more-line'></div>
          </div>

        </Row>
      </div>
      {/* Products End */}
      {/* Testimonials Start*/}
      <div className='seaction5'>
        <Carousel arrows {...testimonialSettings}>
          <div>
            <Row className='test-slider'>
              <Col xs={24} xl={12}>
                <div className='testimonials-class'>
                  <div className='testimonials-left-side'>
                    <img src={TestimonialsImg} alt='testimonial-img' />
                    <img src={TestimonialsSvg} alt='news-svg' />
                  </div>
                </div>
              </Col>
              <Col xs={24} xl={12}>
                <div className='testimonials-right-side'>
                  <h2 className='underline-heading'>Testimonials</h2>
                  <div className='testimonials-content'>
                    <p>Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.</p>
                    <h3 className='author-name'>Gita Savitri</h3>
                    <h3 className='authour-designation'>Content Creator/Influencer</h3>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row className='test-slider'>
              <Col xs={24} xl={12}>
                <div className='testimonials-class'>
                  <div className='testimonials-left-side'>
                    <img src={TestimonialsImg} alt='testimonial-img' />
                    <img src={TestimonialsSvg} alt='news-svg' />
                  </div>
                </div>
              </Col>
              <Col xs={24} xl={12}>
                <div className='testimonials-right-side'>
                  <h2 className='underline-heading'>Testimonials</h2>
                  <div className='testimonials-content'>
                    <p>Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.</p>
                    <h3 className='author-name'>Gita Savitri</h3>
                    <h3 className='authour-designation'>Content Creator/Influencer</h3>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row className='test-slider'>
              <Col xs={24} xl={12}>
                <div className='testimonials-class'>
                  <div className='testimonials-left-side'>
                    <img src={TestimonialsImg} alt='testimonial-img' />
                    <img src={TestimonialsSvg} alt='news-svg' />
                  </div>
                </div>
              </Col>
              <Col xs={24} xl={12}>
                <div className='testimonials-right-side'>
                  <h2 className='underline-heading'>Testimonials</h2>
                  <div className='testimonials-content'>
                    <p>Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.</p>
                    <h3 className='author-name'>Gita Savitri</h3>
                    <h3 className='authour-designation'>Content Creator/Influencer</h3>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row className='test-slider'>
              <Col xs={24} xl={12}>
                <div className='testimonials-class'>
                  <div className='testimonials-left-side'>
                    <img src={TestimonialsImg} alt='testimonial-img' />
                    <img src={TestimonialsSvg} alt='news-svg' />
                  </div>
                </div>
              </Col>
              <Col xs={24} xl={12}>
                <div className='testimonials-right-side'>
                  <h2 className='underline-heading'>Testimonials</h2>
                  <div className='testimonials-content'>
                    <p>Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.</p>
                    <h3 className='author-name'>Gita Savitri</h3>
                    <h3 className='authour-designation'>Content Creator/Influencer</h3>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Carousel>
      </div>
      {/* Testimonials End */}
      {/* Instagram Start */}
      <div className='section6 container'>
        <h2 className='underline-heading'>Instagram</h2>
        <Row className='instagram-row' gutter={0}>
          {instagram.map((obj, index) => <Col xs={24} xl={4} key={index}><div className='insta-imgs'><Image src={obj.url} alt='instagram img' /></div></Col>)}
        </Row>
      </div>
      <LoginDialog open={openLogin} onClose={() => setLogin(false)} />
      {/* Instagram End */}
    </>
  )
}