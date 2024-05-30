const reviews = [
  {
    title: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
    date: "10.02.2023",
  },
  {
    title: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
    date: "10.02.2023",
  },
  {
    title: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
    date: "10.02.2023",
  },
  {
    title: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
    date: "10.02.2023",
  },
  {
    title: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
    date: "10.02.2023",
  },
  {
    title: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
    date: "10.02.2023",
  },
  {
    title: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
    date: "10.02.2023",
  },
];

const blogAreaScroll = document.getElementById("blog__area__scroll");

reviews.forEach((review) => {
  const reviewCard = document.createElement("div");
  reviewCard.className = "review__card";

  const reviewCardText = document.createElement("div");
  reviewCardText.className = "review__card__text";

  const titleElement = document.createElement("h4");
  titleElement.textContent = review.title;

  const dateElement = document.createElement("h6");
  dateElement.textContent = review.date;

  reviewCardText.appendChild(titleElement);
  reviewCardText.appendChild(dateElement);
  reviewCard.appendChild(reviewCardText);

  blogAreaScroll.appendChild(reviewCard);
});
