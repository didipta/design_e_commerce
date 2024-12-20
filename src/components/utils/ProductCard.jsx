import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({
  img,
  title,
  price,
  className,
  off = false,
  rating = false,
}) => {
  return (
    <div className={`w-fit p-2 rounded-2xl space-y-4  ${className}`}>
      <Link href="/product/1" className="space-y-4">
        <div className=" w-fit p-2 bg-background-muted rounded-lg relative">
          <Image
            src={img}
            alt="product"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[286px] h-[287px] object-cover object-center"
          />
          {off && (
            <div className="absolute top-0 right-4  w-14  bg-primary-600 text-text-light px-3 pb-2 rounded-b-full text-center">
              Up to 50%
            </div>
          )}
        </div>
        {rating && (
          <div className=" flex items-center gap-2 pb-1">
            <svg
              width="96"
              height="16"
              viewBox="0 0 96 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.15177 2.29616L10.325 4.66196C10.485 4.99129 10.9116 5.30717 11.2716 5.36766L13.398 5.72387C14.7578 5.95239 15.0778 6.94711 14.0979 7.92837L12.4448 9.59517C12.1648 9.87744 12.0115 10.4218 12.0981 10.8117L12.5714 12.875C12.9447 14.5082 12.0848 15.14 10.6516 14.2864L8.65851 13.0968C8.29857 12.8818 7.70531 12.8818 7.33864 13.0968L5.34555 14.2864C3.91904 15.14 3.05247 14.5015 3.42577 12.875L3.89905 10.8117C3.9857 10.4218 3.83239 9.87744 3.55241 9.59517L1.89927 7.92837C0.92604 6.94711 1.23934 5.95239 2.59919 5.72387L4.72562 5.36766C5.07891 5.30717 5.50553 4.99129 5.66551 4.66196L6.83871 2.29616C7.47864 1.01245 8.51851 1.01245 9.15177 2.29616Z"
                fill="#FFC700"
              />
              <path
                d="M29.1518 2.29616L30.325 4.66196C30.485 4.99129 30.9116 5.30717 31.2716 5.36766L33.398 5.72387C34.7578 5.95239 35.0778 6.94711 34.0979 7.92837L32.4448 9.59517C32.1648 9.87744 32.0115 10.4218 32.0981 10.8117L32.5714 12.875C32.9447 14.5082 32.0848 15.14 30.6516 14.2864L28.6585 13.0968C28.2986 12.8818 27.7053 12.8818 27.3386 13.0968L25.3456 14.2864C23.919 15.14 23.0525 14.5015 23.4258 12.875L23.899 10.8117C23.9857 10.4218 23.8324 9.87744 23.5524 9.59517L21.8993 7.92837C20.926 6.94711 21.2393 5.95239 22.5992 5.72387L24.7256 5.36766C25.0789 5.30717 25.5055 4.99129 25.6655 4.66196L26.8387 2.29616C27.4786 1.01245 28.5185 1.01245 29.1518 2.29616Z"
                fill="#FFC700"
              />
              <path
                d="M49.1518 2.29616L50.325 4.66196C50.485 4.99129 50.9116 5.30717 51.2716 5.36766L53.398 5.72387C54.7578 5.95239 55.0778 6.94711 54.0979 7.92837L52.4448 9.59517C52.1648 9.87744 52.0115 10.4218 52.0981 10.8117L52.5714 12.875C52.9447 14.5082 52.0848 15.14 50.6516 14.2864L48.6585 13.0968C48.2986 12.8818 47.7053 12.8818 47.3386 13.0968L45.3456 14.2864C43.919 15.14 43.0525 14.5015 43.4258 12.875L43.899 10.8117C43.9857 10.4218 43.8324 9.87744 43.5524 9.59517L41.8993 7.92837C40.926 6.94711 41.2393 5.95239 42.5992 5.72387L44.7256 5.36766C45.0789 5.30717 45.5055 4.99129 45.6655 4.66196L46.8387 2.29616C47.4786 1.01245 48.5185 1.01245 49.1518 2.29616Z"
                fill="#FFC700"
              />
              <path
                d="M69.1518 2.29616L70.325 4.66196C70.485 4.99129 70.9116 5.30717 71.2716 5.36766L73.398 5.72387C74.7578 5.95239 75.0778 6.94711 74.0979 7.92837L72.4448 9.59517C72.1648 9.87744 72.0115 10.4218 72.0981 10.8117L72.5714 12.875C72.9447 14.5082 72.0848 15.14 70.6516 14.2864L68.6585 13.0968C68.2986 12.8818 67.7053 12.8818 67.3386 13.0968L65.3456 14.2864C63.919 15.14 63.0525 14.5015 63.4258 12.875L63.899 10.8117C63.9857 10.4218 63.8324 9.87744 63.5524 9.59517L61.8993 7.92837C60.926 6.94711 61.2393 5.95239 62.5992 5.72387L64.7256 5.36766C65.0789 5.30717 65.5055 4.99129 65.6655 4.66196L66.8387 2.29616C67.4786 1.01245 68.5185 1.01245 69.1518 2.29616Z"
                stroke="#FFC700"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M89.1518 2.29616L90.325 4.66196C90.485 4.99129 90.9116 5.30717 91.2716 5.36766L93.398 5.72387C94.7578 5.95239 95.0778 6.94711 94.0979 7.92837L92.4448 9.59517C92.1648 9.87744 92.0115 10.4218 92.0981 10.8117L92.5714 12.875C92.9447 14.5082 92.0848 15.14 90.6516 14.2864L88.6585 13.0968C88.2986 12.8818 87.7053 12.8818 87.3386 13.0968L85.3456 14.2864C83.919 15.14 83.0525 14.5015 83.4258 12.875L83.899 10.8117C83.9857 10.4218 83.8324 9.87744 83.5524 9.59517L81.8993 7.92837C80.926 6.94711 81.2393 5.95239 82.5992 5.72387L84.7256 5.36766C85.0789 5.30717 85.5055 4.99129 85.6655 4.66196L86.8387 2.29616C87.4786 1.01245 88.5185 1.01245 89.1518 2.29616Z"
                stroke="#FFC700"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-caption text-text-dark">(50)</span>
          </div>
        )}
        <div className="text-text-dark flex items-center justify-between">
          <p className=" text-body">{title}</p>
          <p className=" text-body font-semibold">BDT {price}</p>
        </div>
      </Link>
      <div>
        <button className="w-full h-[40px] border border-primary-600 rounded-lg hover:bg-primary-700 hover:text-text-light text-primary-600 font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
