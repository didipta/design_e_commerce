const Arrow = ({ className, style, onClick, arrowside }) => (
  <div
    className={className}
    style={{ ...style, display: "block",}}
    onClick={onClick}
  >
    {arrowside === "left" ? (
      <svg
        width="34"
        height="35"
        viewBox="0 0 34 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1286_307)">
          <rect
            x="32.5"
            y="33"
            width="31"
            height="31"
            rx="15.5"
            transform="rotate(180 32.5 33)"
            stroke="#7E53D4"
            shape-rendering="crispEdges"
          />
          <path
            d="M9.00002 17.5002H25"
            stroke="#7E53D4"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.9997 12.5C13.9997 12.5 8.99976 16.1824 8.99976 17.5C8.99976 18.8176 13.9998 22.5 13.9998 22.5"
            stroke="#7E53D4"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1286_307"
            x="0"
            y="0.5"
            width="34"
            height="34"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.204123 0 0 0 0 0.204123 0 0 0 0 0.204123 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1286_307"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1286_307"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ) : (
      <svg
        width="34"
        height="35"
        viewBox="0 0 34 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1286_308)">
          <rect
            x="1.5"
            y="2"
            width="31"
            height="31"
            rx="15.5"
            stroke="#7E53D4"
            shape-rendering="crispEdges"
          />
          <path
            d="M25 17.4998H9"
            stroke="#7E53D4"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.0003 22.5C20.0003 22.5 25.0002 18.8176 25.0002 17.5C25.0002 16.1824 20.0002 12.5 20.0002 12.5"
            stroke="#7E53D4"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1286_308"
            x="0"
            y="0.5"
            width="34"
            height="34"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.204123 0 0 0 0 0.204123 0 0 0 0 0.204123 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1286_308"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1286_308"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    )}
  </div>
);

export default Arrow;
