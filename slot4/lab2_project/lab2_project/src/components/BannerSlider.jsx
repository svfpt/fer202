import React from "react";

function BannerSlider() {
  return (
    <section id="banner">
      <div
        id="pizzaCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        data-bs-pause="hover"
      >
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="/images/banner1.jpg"
              className="d-block w-100 banner-img"
              alt="Banner 1"
            />
            <div className="carousel-caption">
              <h1 className="fw-bold">Pizza House</h1>
              <p>Pizza tươi – giao nhanh</p>
              <a href="#menu" className="btn btn-warning btn-lg">
                Đặt ngay
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/images/banner2.jpg"
              className="d-block w-100 banner-img"
              alt="Banner 2"
            />
            <div className="carousel-caption">
              <h1 className="fw-bold">Chuẩn vị Ý</h1>
              <p>Nguyên liệu tươi mỗi ngày</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/images/banner3.jpg"
              className="d-block w-100 banner-img"
              alt="Banner 3"
            />
            <div className="carousel-caption">
              <h1 className="fw-bold">Giao nhanh tận nơi</h1>
              <p>Đặt là có</p>
            </div>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#pizzaCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#pizzaCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}

export default BannerSlider;
