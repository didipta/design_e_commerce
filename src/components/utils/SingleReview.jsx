import Image from "next/image";

export const SingleReview = ({ reviewer, date, rating, comment, likes }) => {
  return (
    <div>
      <div className="flex items-center">
        <Image src="/images/product-img-14 (1).png" 
        width={0}
        height={0}
        sizes="100vw"
        alt="user"
        className="w-10 h-10 object-cover rounded-full"
         />
        <div>
          <div className="ml-2 flex items-center gap-2">
            <p className=" text-body font-semibold">{reviewer}</p>
            <p className=" text-caption text-text-muted">{date}</p>
          </div>
          <div className="flex items-center mt-1 ml-1">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <span
                  key={index}
                  className={`px-1 ${
                    index < rating ? "text-yellow-400" : "text-text-muted"
                  }`}
                >
                  <svg
                    key={index}
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7276 1.44418L13.4874 4.99288C13.7274 5.48687 14.3673 5.9607 14.9073 6.05143L18.0969 6.58575C20.1367 6.92853 20.6167 8.4206 19.1468 9.8925L16.6671 12.3927C16.2471 12.8161 16.0172 13.6327 16.1471 14.2175L16.8571 17.3125C17.417 19.7623 16.1271 20.71 13.9774 19.4296L10.9877 17.6452C10.4478 17.3226 9.5579 17.3226 9.0079 17.6452L6.01827 19.4296C3.8785 20.71 2.57865 19.7522 3.13859 17.3125L3.84851 14.2175C3.97849 13.6327 3.74852 12.8161 3.32856 12.3927L0.848839 9.8925C-0.611001 8.4206 -0.14105 6.92853 1.89872 6.58575L5.08837 6.05143C5.61831 5.9607 6.25824 5.48687 6.49821 4.99288L8.258 1.44418C9.2179 -0.481393 10.7777 -0.481393 11.7276 1.44418Z"
                      fill={index < rating ? "#FFCF11" : "#DFDFDF"}
                    />
                  </svg>
                </span>
              ))}
          </div>
        </div>
      </div>

      <p className="mt-4 text-body font-semibold">{comment}</p>
      <div className="flex items-center text-text-muted text-sm mt-4">
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.33325 8.33333C1.33325 7.59693 1.93021 7 2.66659 7C3.77115 7 4.66659 7.8954 4.66659 9V11.6667C4.66659 12.7713 3.77115 13.6667 2.66659 13.6667C1.93021 13.6667 1.33325 13.0697 1.33325 12.3333V8.33333Z"
              stroke="#1D1D1D"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.3192 5.20417L10.1417 5.77756C9.99622 6.24741 9.92348 6.48233 9.97941 6.66787C10.0247 6.81793 10.124 6.94733 10.2594 7.03247C10.4267 7.13767 10.6799 7.13767 11.1861 7.13767H11.4555C13.1689 7.13767 14.0255 7.13767 14.4302 7.64487C14.4764 7.7028 14.5175 7.76447 14.5531 7.82913C14.8644 8.39473 14.5105 9.15673 13.8027 10.6807C13.1532 12.0793 12.8284 12.7785 12.2254 13.1901C12.1671 13.2299 12.1071 13.2675 12.0456 13.3027C11.4107 13.6667 10.6242 13.6667 9.05101 13.6667H8.70981C6.80388 13.6667 5.85093 13.6667 5.25884 13.093C4.66675 12.5193 4.66675 11.5959 4.66675 9.74927V9.1002C4.66675 8.12973 4.66675 7.64453 4.83897 7.2004C5.0112 6.75627 5.34098 6.39109 6.00054 5.66075L8.72815 2.64037C8.79655 2.56463 8.83075 2.52675 8.86095 2.5005C9.14241 2.25552 9.57688 2.28309 9.82301 2.56157C9.84941 2.5914 9.87821 2.63327 9.93581 2.71703C10.0259 2.84803 10.071 2.91354 10.1103 2.97843C10.4619 3.55942 10.5683 4.24957 10.4073 4.90477C10.3893 4.97795 10.3659 5.0534 10.3192 5.20417Z"
              stroke="#1D1D1D"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span className="ml-2">{likes}</span>
      </div>
    </div>
  );
};
