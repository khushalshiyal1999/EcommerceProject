import RelateProductImg1 from '../../assets/images/product-details/RelateProductImg1.png'
import RelateProductImg2 from '../../assets/images/product-details/RelateProductImg2.png'
import RelateProductImg3 from '../../assets/images/product-details/RelateProductImg3.png'
import RelateProductImg4 from '../../assets/images/product-details/RelateProductImg4.png'

export const relateProducts = [
    {
        image: RelateProductImg1,
        title: 'Singo Maple',
        mrp:'Rp 1.500.000',
        price: 'Rp 1.264.000',
        offer:'20% OFF'
    },
    {
        image: RelateProductImg2,
        title: 'Sikka (Ebony & Maple)',
        new:true,
        price: 'Rp 1.264.000'
    },
    {
        image: RelateProductImg3,
        title: 'Sunda',
        price: 'Rp 1.170.000'
    },
    {
        image: RelateProductImg4,
        title: 'Singo Maple',
        mrp: 'Rp 1.280.000',
        price: 'Rp 960.000',
        offer:'25% OFF'
    },
]

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');
const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
const seconds = String(currentDate.getSeconds()).padStart(2, '0');

export const formattedDate = `${year}-${month}-${day}`;
export const formattedTime = `${hours}:${minutes}:${seconds}`;