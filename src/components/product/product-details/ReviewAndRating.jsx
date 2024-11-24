import { SingleReview } from "@/components/utils/SingleReview";
import React from "react";

const ReviewAndRating = () => {
  const breakdown = [
    { rating: 5, percentage: 50 },
    { rating: 4, percentage: 30 },
    { rating: 3, percentage: 10 },
    { rating: 2, percentage: 5 },
    { rating: 1, percentage: 5 },
  ];
  const reviews = [
    {
      reviewer: "Cameron Williamson",
      date: "3 days ago",
      rating: 4,
      comment: "Very Nice!!",
      likes: 10,
    },
    {
      reviewer: "Jane Cooper",
      date: "1 week ago",
      rating: 5,
      comment: "Amazing product!",
      likes: 20,
    },
  ];
  return (
    <div className="text-text-base py-6">
      {/* Tabs */}
      <div className="flex justify-start space-x-8 border-b border-primary-700 pb-2">
        <button className=" text-text-muted hover:text-primary-600 focus:text-primary-500">
          Details
        </button>
        <button className="text-primary-600 font-bold">Review & Rating</button>
        <button className="text-text-muted hover:text-primary-500 focus:text-primary-500">
          Discussion
        </button>
      </div>

      {/* Filter Dropdown */}
      <div className="mt-6 flex items-center justify-between">
        <select className=" text-text-muted border border-primary-600 rounded-md px-4 py-2 text-caption">
          <option>Newest</option>
          <option>Oldest</option>
          <option>Highest Rated</option>
          <option>Lowest Rated</option>
        </select>
      </div>

      <div className=" grid grid-cols-12 justify-between items-start py-6">
        {/* Individual Reviews */}
        <div className=" col-span-8 space-y-6 pr-6">
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <React.Fragment key={index}>
                <SingleReview {...review} />
                {index < reviews.length - 1 && (
                  <hr className="border-primary-700" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Rating Breakdown */}
        <div className=" col-span-4">
          <div className="flex items-center gap-2 text-caption font-semibold py-4">
            <h3 className=" ">Product Review</h3>
            <a href="#" className="text-primary-600">
              121 reviews
            </a>
          </div>
          <div className=" w-full flex items-center justify-between">
            <div className="flex items-center mt-1 ml-1">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <span
                    key={index}
                    className={`px-1 ${
                      index < 4 ? "text-yellow-400" : "text-text-muted"
                    }`}
                  >
                    <svg
                      key={index}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7276 1.44418L13.4874 4.99288C13.7274 5.48687 14.3673 5.9607 14.9073 6.05143L18.0969 6.58575C20.1367 6.92853 20.6167 8.4206 19.1468 9.8925L16.6671 12.3927C16.2471 12.8161 16.0172 13.6327 16.1471 14.2175L16.8571 17.3125C17.417 19.7623 16.1271 20.71 13.9774 19.4296L10.9877 17.6452C10.4478 17.3226 9.5579 17.3226 9.0079 17.6452L6.01827 19.4296C3.8785 20.71 2.57865 19.7522 3.13859 17.3125L3.84851 14.2175C3.97849 13.6327 3.74852 12.8161 3.32856 12.3927L0.848839 9.8925C-0.611001 8.4206 -0.14105 6.92853 1.89872 6.58575L5.08837 6.05143C5.61831 5.9607 6.25824 5.48687 6.49821 4.99288L8.258 1.44418C9.2179 -0.481393 10.7777 -0.481393 11.7276 1.44418Z"
                        fill={index < 4 ? "#FFCF11" : "#DFDFDF"}
                      />
                    </svg>
                  </span>
                ))}
            </div>
            <span className="text-text-muted font-semibold">(4.0)</span>
          </div>
          <div className="mt-4">
            {breakdown.map((item) => (
              <div className="flex items-center text-sm mt-2" key={item.rating}>
                <span className="text-yellow-400">{item.rating}</span>
                <div className="w-full bg-primary-100 h-2 mx-4 rounded-full">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="text-text-muted">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewAndRating;
