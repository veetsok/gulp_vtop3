function swiperData(swiperClass, data) {
  const swiperContainer = document.createElement("div");
  swiperContainer.className = `swiper ${swiperClass}`;

  const swiperWrapper = document.createElement("div");
  swiperWrapper.className = "swiper-wrapper";

  data.forEach((item) => {
    const swiperSlide = document.createElement("div");
    swiperSlide.className = "swiper-slide";

    const imageBlock = document.createElement("div");
    imageBlock.className = "image__block";

    const img = document.createElement("img");
    img.src = `./assets/images/swiper/${item.img}.png`;
    img.alt = "banners";

    imageBlock.appendChild(img);
    swiperSlide.appendChild(imageBlock);
    swiperWrapper.appendChild(swiperSlide);
  });

  swiperContainer.appendChild(swiperWrapper);
  document.getElementById("main__swipper").appendChild(swiperContainer);
}

const banners = [
  { img: "Shield" },
  { img: "dollaz" },
  { img: "Soccer" },
  { img: "M_purple" },
  { img: "Shield" },
  { img: "dollaz" },
  { img: "Crown" },
  { img: "M_green" },
  { img: "Crown_king" },
  { img: "Timer" },
  { img: "World" },
  { img: "M_white" },
];

const banners1 = [
  { img: "M_white" },
  { img: "Timer" },
  { img: "Crown" },
  { img: "World" },
  { img: "Timer" },
  { img: "Crown_king" },
  { img: "Shield" },
  { img: "dollaz" },
  { img: "Soccer" },
  { img: "M_purple" },
  { img: "M_green" },
];

const banners2 = [
  { img: "M_white" },
  { img: "Timer" },
  { img: "Crown" },
  { img: "World" },
  { img: "Timer" },
  { img: "Crown_king" },
  { img: "Shield" },
  { img: "dollaz" },
  { img: "Soccer" },
  { img: "M_purple" },
  { img: "M_green" },
];

swiperData("mySwiper", banners);
swiperData("mySwiper1", banners1);
swiperData("mySwiper2", banners2);
