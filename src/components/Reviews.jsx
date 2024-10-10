import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ReviewsComponent = () => {
  const reviews = [
    {
      id: 1,
      name: "Покупатель Строй Сити",
      date: "24 сентября",
      rating: 5,
      comment:
        "Lorem ipsum odor amet, consectetur adipiscing elit. Litora tempus consequat interdum suscipit sodales condimentum auctor? Sit orci tempor cursus suspendi.",
      image: "/path/to/image.png", // replace with actual image path
    },
    {
      id: 2,
      name: "Покупатель Строй Сити",
      date: "24 сентября",
      rating: 5,
      comment:
        "Lorem ipsum odor amet, consectetur adipiscing elit. Litora tempus consequat interdum suscipit sodales condimentum auctor? Sit orci tempor cursus suspendi.",
      image: "/path/to/image.png", // replace with actual image path
    },
    {
      id: 3,
      name: "Покупатель Строй Сити",
      date: "24 сентября",
      rating: 5,
      comment:
        "Lorem ipsum odor amet, consectetur adipiscing elit. Litora tempus consequat interdum suscipit sodales condimentum auctor? Sit orci tempor cursus suspendi.",
      image: "/path/to/image.png", // replace with actual image path
    },
  ];

  const totalRating = "5.0";
  const totalReviews = 101;

  return (
    <div className="reviews-section">
      {/* Overall Rating */}
      <div className="rating-summary flex items-center mb-4 mt-20">
        <h2 className="text-5xl font-bold">{totalRating}</h2>
        <div className="ml-4 flex items-center">
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className="text-orange-500 text-4xl"
            />
          ))}
        </div>
        <p className="ml-4 text-lg">{totalReviews} оценка</p>
      </div>

      {/* Carousel */}
      <div className="review-carousel flex items-center mb-8">
        {/* Placeholder for review images */}
        <div className="flex space-x-4">
          {[...Array(window.innerWidth < 768 ? 3 : 5)].map(
            (
              _,
              index // Adjusted to show 3 items on smaller screens
            ) => (
              <div
                key={index}
                className="w-24 h-24 bg-gray-200"
                style={{ borderRadius: "4px" }}
              ></div>
            )
          )}
        </div>
        {/* Next arrow */}
        <div className="ml-4">
          <button className="p-3 px-[15px] bg-orange-500 rounded-full text-white">
            <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Reviews */}
      <div className="reviews-grid grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="review-card p-4 bg-white shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{review.name}</h3>
              <span className="text-sm text-gray-400">{review.date}</span>
            </div>
            <div className="flex items-center mb-4">
              {[...Array(review.rating)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className="text-orange-500 text-sm"
                />
              ))}
            </div>
            <p className="text-gray-700 mb-4">{review.comment}</p>
            <div className="w-24 h-24 bg-gray-200">
              <img src={review.image} alt="review" className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsComponent;
