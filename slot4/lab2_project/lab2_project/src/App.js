import React from 'react';
import NavBar from './components/NavBar';
import BannerSlider from './components/BannerSlider';
import PizzaCard from './components/PizzaCard';
import Footer from './components/Footer';
import './App.css';

const pizzas = [
  {
    id: 1,
    image: '/images/p1.jpg',
    name: 'Margherita Pizza',
    price: 8.99,
    oldPrice: 12.99,
    description: 'Sự kết hợp hoàn hảo giữa phô mai Mozzarella và sốt cà chua truyền thống.',
    tags: ['Sale', 'New'],
  },
  {
    id: 2,
    image: '/images/p2.jpg',
    name: 'Mushroom Pizza',
    price: 9.50,
    oldPrice: null,
    description: 'Nấm tươi cao cấp kết hợp cùng sốt kem trắng béo ngậy.',
    tags: null,
  },
  {
    id: 3,
    image: '/images/p3.jpg',
    name: 'Hawaiian Pizza',
    price: 10.99,
    oldPrice: 15.00,
    description: 'Hương vị nhiệt đới với sự kết hợp của dứa tươi và thịt nguội.',
    tags: ['Sale'],
  },
  {
    id: 4,
    image: '/images/p4.jpg',
    name: 'Pesto Chicken',
    price: 11.99,
    oldPrice: null,
    description: 'Gà nướng thơm lừng hòa quyện cùng sốt Pesto đặc trưng từ húng tây.',
    tags: ['New'],
  },
  {
    id: 5,
    image: '/images/p5.jpg',
    name: 'Pepperoni Feast',
    price: 12.50,
    oldPrice: 14.99,
    description: 'Xúc xích Pepperoni đậm đà phủ kín mặt bánh giòn rụm.',
    tags: ['Sale'],
  },
  {
    id: 6,
    image: '/images/p6.jpg',
    name: 'Veggie Supreme',
    price: 9.99,
    oldPrice: null,
    description: 'Thế giới rau củ tươi ngon: ớt chuông, hành tây, nấm và oliu.',
    tags: null,
  },
  {
    id: 7,
    image: '/images/p7.jpg',
    name: 'BBQ Beef Pizza',
    price: 13.99,
    oldPrice: 16.50,
    description: 'Thịt bò băm nướng sốt BBQ đậm đà, khó cưỡng.',
    tags: ['New', 'Sale'],
  },
  {
    id: 8,
    image: '/images/p8.jpg',
    name: 'Seafood Deluxe',
    price: 15.99,
    oldPrice: null,
    description: 'Hải sản cao cấp: tôm, mực tươi và sốt phô mai đặc biệt.',
    tags: ['New'],
  },
  {
    id: 9,
    image: '/images/p9.jpg',
    name: 'Four Cheese',
    price: 11.00,
    oldPrice: 13.00,
    description: 'Bữa tiệc phô mai với 4 loại phô mai trứ danh thế giới.',
    tags: ['Sale'],
  },
  {
    id: 10,
    image: '/images/p10.jpg',
    name: 'Spicy Sausage',
    price: 10.50,
    oldPrice: null,
    description: 'Xúc xích cay nồng dành cho những tín đồ yêu thích vị giác mạnh.',
    tags: null,
  }
];

function App() {
  return (
    <>
      <NavBar />
      <BannerSlider />

      <main>
        <section className="bg-light py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="display-5 fw-bold">Pizza House</h1>
                <p className="lead">Pizza tươi, giao nhanh — ngon như nhà làm.</p>
                <a href="#menu" className="btn btn-primary btn-lg">
                  Xem thực đơn
                </a>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src="/images/pizza.jpg"
                  alt="Pizza hero"
                  className="img-fluid hero-img rounded"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="py-5">
          <div className="container">
            <h2 className="mb-4">Thực đơn nổi bật</h2>
            <div className="row g-4">
              {pizzas.map(p => (
                <div key={p.id} className="col-12 col-sm-6 col-md-4">
                  <PizzaCard {...p} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-5 bg-secondary text-white">
          <div className="container">
            <h2>Liên hệ & đặt hàng</h2>
            <form className="row g-3">
              <div className="col-md-6">
                <input className="form-control" placeholder="Họ và tên" />
              </div>
              <div className="col-md-6">
                <input className="form-control" placeholder="Số điện thoại" />
              </div>
              <div className="col-12">
                <textarea className="form-control" rows="1" placeholder="Địa chỉ"></textarea>
              </div>
              <div className="col-12">
                <textarea className="form-control" rows="3" placeholder="Ghi chú"></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-light">Gửi</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
