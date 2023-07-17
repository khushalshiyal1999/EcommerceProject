import ProductImage1 from '../../assets/images/products/image1.png'
import ProductImage2 from '../../assets/images/products/image2.png'
import ProductImage3 from '../../assets/images/products/image3.png'
import ProductImage4 from '../../assets/images/products/image4.png'
import ProductImage5 from '../../assets/images/products/image5.png'
import ProductImage6 from '../../assets/images/products/image6.png'
import ProductImage7 from '../../assets/images/products/image7.png'
import ProductImage8 from '../../assets/images/products/image8.png'
import ProductImage9 from '../../assets/images/products/image9.png'
import InstagramImg1 from '../../assets/images/instagram/instagram1.png'
import InstagramImg2 from '../../assets/images/instagram/instagram2.png'
import InstagramImg3 from '../../assets/images/instagram/instagram3.png'
import InstagramImg4 from '../../assets/images/instagram/instagram4.png'
import InstagramImg5 from '../../assets/images/instagram/instagram5.png'
import FooterImage1 from '../../assets/images/footer-images/img1.png'
import FooterImage2 from '../../assets/images/footer-images/img2.png'
import FooterImage3 from '../../assets/images/footer-images/img3.png'
import FooterImage4 from '../../assets/images/footer-images/img4.png'
import FooterImage5 from '../../assets/images/footer-images/img5.png'
import FooterImage6 from '../../assets/images/footer-images/img6.png'
import FooterImage7 from '../../assets/images/footer-images/img7.png'
import FooterImage8 from '../../assets/images/footer-images/img8.png'
import FooterImage9 from '../../assets/images/footer-images/img9.png'
import FooterImage10 from '../../assets/images/footer-images/img10.png'
import DealImage1 from '../../assets/images/monthly-deals/image1.png'
import DealImage2 from '../../assets/images/monthly-deals/image2.png'
import DealImage3 from '../../assets/images/monthly-deals/image3.png'
import DealImage4 from '../../assets/images/monthly-deals/image4.png'
import { NextArrow, PrevivousArrow, TestimonialLeft, TestimonialRight, UserOutline } from '../../assets/icons';
import { Menu } from 'antd'



export const localStorageData = JSON.parse(localStorage.getItem('userData')) || {}
export const userRole = localStorageData.username
export const productData = [
  {
    image: ProductImage1,
    title: 'Way Kambas Maple',
    price: 'Rp 1.280.000'
  },
  {
    image: ProductImage2,
    title: 'Kaili',
    price: 'Rp 950.000'
  },
  {
    image: ProductImage3,
    title: 'Sunda',
    price: 'Rp 1.170.000'
  },
]

export const productData2 = [
  {
    image: ProductImage4,
    title: 'Tomia Ebony',
    mrpPrice: 'Rp 1.280.000',
    price: 'Rp 960.000'
  },
  {
    image: ProductImage5,
    title: 'Mori',
    price: 'Rp 950.000'
  },
  {
    image: ProductImage6,
    title: 'Alor',
    price: 'Rp 1.170.000'
  }
]

export const productData3 = [{
  image: ProductImage7,
  title: 'Sikka (Ebony & Maple)',
  price: 'Rp 1.198.000'
}, {
  image: ProductImage8,
  title: 'Lore Walnut',
  price: 'Rp 1.280.000'
}, {
  image: ProductImage9,
  title: 'Way Kambas Limited Edition',
  price: 'Rp 1.170.000'
}]

export const instagram = [{ url: InstagramImg1 }, { url: InstagramImg2 }, { url: InstagramImg3 }, { url: InstagramImg4 }, { url: InstagramImg5 }]

export const footerData = [
  { url: FooterImage1 },
  { url: FooterImage2 },
  { url: FooterImage3 },
  { url: FooterImage4 },
  { url: FooterImage5 },

]
export const footerData2 = [{ url: FooterImage6 },
{ url: FooterImage7 },
{ url: FooterImage8 },
{ url: FooterImage9 },
{ url: FooterImage10 }]

const NextArrowFun = props => {
  const { onClick } = props
  return (
    <div
      className={'next-btn'}
      onClick={onClick}
    >
      <NextArrow />
    </div>
  )
}
const Right = props => {
  const { onClick } = props
  return (
    <div
      className={'next-btn-testimonial'}
      onClick={onClick}
    >
      <TestimonialRight />
    </div>
  )
}
const Left = props => {
  const { onClick } = props
  return (
    <div
      className={'pre-btn-testimonial'}
      onClick={onClick}
    >
      <TestimonialLeft />
    </div>
  )
}
const PrevivousArrowFun = props => {
  const { onClick } = props
  return (
    <div
      className={'pre-btn'}
      onClick={onClick}
    >
      <PrevivousArrow />
    </div>
  )
}
export const settings = {
  nextArrow:
    <NextArrowFun />
  ,
  prevArrow:
    <PrevivousArrowFun />
  ,
}
export const testimonialSettings = {
  nextArrow:
    <Right />
  ,
  prevArrow:
    <Left />
  ,
}

const username = JSON.parse(localStorage.getItem('userData')) || {}
export const loginUser = JSON.parse(localStorage.getItem("userData")) || {}
export const cartProductData = [
  { id: 0, title: 'Singo Maple', mrp: 1.500, price: 1.264, image: DealImage1, offer: 20,username:username.username},
  { id: 1, title: 'Singo Ebony', mrp: 1.500, price: 1.264, image: DealImage2, offer: 20,username:username.username },
  { id: 2, title: 'Rakai Ebony', mrp: 1.280, price: 1.118, image: DealImage3, offer: 15,username:username.username },
  { id: 3, title: 'Way Kambas Mini Maple', mrp: 1.280, price: 1.024, image: DealImage4, offer: 10,username:username.username }
]
export const items = [
  {
    key: '1',
    label: (
      <Menu>
        <Menu.Item key="logout" onClick={() => {
          localStorage.removeItem('userData')
          window.location.reload()
        }} className='logOut-item'>
          <div className="header-login" >
            <UserOutline />
            <p>Log out</p>
          </div>
        </Menu.Item>
      </Menu>
    ),
  },
];
export const getInitials = (fullName) => {
  const nameParts = fullName.split(' ');
  const initials = nameParts
    .map((name) => name[0])
    .join('')
    .toUpperCase();
  return initials;
};