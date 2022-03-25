export default function CompletelyParked(props) {
  return (
    <svg
      width="60"
      height="75"
      viewBox="0 0 60 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_165_25)">
        <rect
          x="6.50003"
          y="14.5"
          width="47"
          height="47"
          rx="5.5"
          stroke="#323232"
          stroke-width="5"
          shape-rendering="crispEdges"
        />
      </g>
      <path
        d="M30.8438 42.4062H19.125V35.6562H30.8438C32.7604 35.6562 34.3125 35.3438 35.5 34.7188C36.7084 34.0729 37.5938 33.1979 38.1563 32.0938C38.7188 30.9688 39 29.6875 39 28.25C39 26.8542 38.7188 25.5521 38.1563 24.3438C37.5938 23.1354 36.7084 22.1562 35.5 21.4062C34.3125 20.6562 32.7604 20.2812 30.8438 20.2812H21.9375V59H13.3438V13.5H30.8438C34.3854 13.5 37.4063 14.1354 39.9063 15.4062C42.4271 16.6562 44.3438 18.3958 45.6563 20.625C46.9896 22.8333 47.6563 25.3542 47.6563 28.1875C47.6563 31.125 46.9896 33.6562 45.6563 35.7812C44.3438 37.9062 42.4271 39.5417 39.9063 40.6875C37.4063 41.8333 34.3854 42.4062 30.8438 42.4062Z"
        fill="#323232"
      />
      <defs>
        <filter
          id="filter0_d_165_25"
          x="3.05176e-05"
          y="12"
          width="60"
          height="60"
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
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_165_25"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_165_25"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
