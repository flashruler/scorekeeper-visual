export default function MatchPlay() {
  return (
    <div className="w-[1920px] h-[1080px] bg-green-500">
      {/* Phase Indicator (Auto/Tele-op/Endgame) */}
      <div className="absolute rounded-md w-[125px] h-[32px] ml-[898px] mt-[855px] bg-[#323232]">
        <h1 className="text-center text-white uppercase text-2xl italic font-light">
          Auto
        </h1>
      </div>
      {/* Timer */}
      <h1 className=" z-10 absolute leading-[42px] text-3xl ml-[928px] mt-[930px] font-normal">
        2:30
      </h1>
      {/* Red Score */}
      <h1 className="min-w-[95px] absolute z-10 mt-[923px] ml-[815px] leading-[56px] text-[48px] text-white italic text-center">
        0
      </h1>
      {/* Blue Score */}
      <h1 className="min-w-[95px] absolute z-10 mt-[923px] ml-[1010px] leading-[56px] text-[48px] text-white italic text-center">
        0
      </h1>
      <svg
        className="absolute mt-[899px] ml-[804px]"
        width="312"
        height="102"
        viewBox="0 0 312 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="19" width="312" height="65" rx="10" fill="#323232" />
        <circle cx="156" cy="51" r="51" fill="#757575" />
        <circle cx="156" cy="51" r="41" fill="#C4C4C4" />
      </svg>
      {/* Autonomous Icons Red Side*/}
      {/* If Duck is not scored */}
      <svg
        className="absolute ml-[696px] mt-[855.33px]"
        width="76"
        height="64"
        viewBox="0 0 76 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1_125_108" fill="white">
          <path d="M75.1062 32.1672C75.1062 36.3475 74.2828 40.4869 72.6831 44.349C71.0834 48.2111 68.7386 51.7202 65.7827 54.6762C62.8268 57.6321 59.3176 59.9768 55.4555 61.5765C51.5934 63.1763 47.4541 63.9996 43.2738 63.9996C39.0935 63.9996 34.9541 63.1763 31.092 61.5765C27.23 59.9768 23.7208 57.632 20.7649 54.6761C17.809 51.7202 15.4642 48.211 13.8645 44.3489C12.2648 40.4869 11.4414 36.3475 11.4414 32.1672L43.2738 32.1672L75.1062 32.1672Z" />
        </mask>
        <path
          d="M75.1062 32.1672C75.1062 36.3475 74.2828 40.4869 72.6831 44.349C71.0834 48.2111 68.7386 51.7202 65.7827 54.6762C62.8268 57.6321 59.3176 59.9768 55.4555 61.5765C51.5934 63.1763 47.4541 63.9996 43.2738 63.9996C39.0935 63.9996 34.9541 63.1763 31.092 61.5765C27.23 59.9768 23.7208 57.632 20.7649 54.6761C17.809 51.7202 15.4642 48.211 13.8645 44.3489C12.2648 40.4869 11.4414 36.3475 11.4414 32.1672L43.2738 32.1672L75.1062 32.1672Z"
          stroke="#323232"
          stroke-width="6"
          mask="url(#path-1-inside-1_125_108)"
        />
        <mask id="path-2-inside-2_125_108" fill="white">
          <path d="M47.0334 30.1899C47.0334 25.3657 45.117 20.739 41.7057 17.3277C38.2944 13.9164 33.6678 12 28.8435 12C24.0192 12 19.3925 13.9164 15.9813 17.3277C12.57 20.739 10.6535 25.3657 10.6535 30.1899L28.8435 30.1899H47.0334Z" />
        </mask>
        <path
          d="M47.0334 30.1899C47.0334 25.3657 45.117 20.739 41.7057 17.3277C38.2944 13.9164 33.6678 12 28.8435 12C24.0192 12 19.3925 13.9164 15.9813 17.3277C12.57 20.739 10.6535 25.3657 10.6535 30.1899L28.8435 30.1899H47.0334Z"
          stroke="#323232"
          stroke-width="6"
          mask="url(#path-2-inside-2_125_108)"
        />
        <mask id="path-3-inside-3_125_108" fill="white">
          <path d="M18.38 30.19C18.38 28.9832 18.1423 27.7881 17.6805 26.6731C17.2186 25.5582 16.5417 24.5451 15.6883 23.6917C14.8349 22.8383 13.8218 22.1614 12.7069 21.6995C11.5919 21.2377 10.3968 21 9.19 21C7.98315 21 6.78812 21.2377 5.67314 21.6995C4.55816 22.1614 3.54506 22.8383 2.69169 23.6917C1.83832 24.5451 1.16139 25.5582 0.699547 26.6731C0.237706 27.7881 -1.05506e-07 28.9832 0 30.19L9.19 30.19H18.38Z" />
        </mask>
        <path
          d="M18.38 30.19C18.38 28.9832 18.1423 27.7881 17.6805 26.6731C17.2186 25.5582 16.5417 24.5451 15.6883 23.6917C14.8349 22.8383 13.8218 22.1614 12.7069 21.6995C11.5919 21.2377 10.3968 21 9.19 21C7.98315 21 6.78812 21.2377 5.67314 21.6995C4.55816 22.1614 3.54506 22.8383 2.69169 23.6917C1.83832 24.5451 1.16139 25.5582 0.699547 26.6731C0.237706 27.7881 -1.05506e-07 28.9832 0 30.19L9.19 30.19H18.38Z"
          stroke="#323232"
          stroke-width="6"
          mask="url(#path-3-inside-3_125_108)"
        />
      </svg>
      {/* If Duck is scored */}
      <svg
        className="absolute ml-[696px] mt-[855.33px]"
        width="76"
        height="64"
        viewBox="0 0 76 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M75.1062 32.1672C75.1062 36.3475 74.2828 40.4869 72.6831 44.349C71.0834 48.2111 68.7386 51.7202 65.7827 54.6762C62.8268 57.6321 59.3176 59.9768 55.4555 61.5765C51.5934 63.1763 47.4541 63.9996 43.2738 63.9996C39.0935 63.9996 34.9541 63.1763 31.092 61.5765C27.23 59.9768 23.7208 57.632 20.7649 54.6761C17.809 51.7202 15.4642 48.211 13.8645 44.3489C12.2648 40.4869 11.4414 36.3475 11.4414 32.1672L43.2738 32.1672L75.1062 32.1672Z"
          fill="#323232"
        />
        <path
          d="M47.0334 30.1899C47.0334 25.3657 45.117 20.739 41.7057 17.3277C38.2944 13.9164 33.6678 12 28.8435 12C24.0192 12 19.3925 13.9164 15.9813 17.3277C12.57 20.739 10.6535 25.3657 10.6535 30.1899L28.8435 30.1899H47.0334Z"
          fill="#323232"
        />
        <path
          d="M18.38 30.19C18.38 28.9832 18.1423 27.7881 17.6805 26.6731C17.2186 25.5582 16.5417 24.5451 15.6883 23.6917C14.8349 22.8383 13.8218 22.1614 12.7069 21.6995C11.5919 21.2377 10.3968 21 9.19 21C7.98315 21 6.78812 21.2377 5.67314 21.6995C4.55816 22.1614 3.54506 22.8383 2.69169 23.6917C1.83832 24.5451 1.16139 25.5582 0.699547 26.6731C0.237706 27.7881 -1.05506e-07 28.9832 0 30.19L9.19 30.19H18.38Z"
          fill="#323232"
        />
      </svg>
      {/* Depot Score */}
      <div className="w-[98px] h-[65.48px] absolute ml-[679px] mt-[932px] flex flex-row justify-center items-center">
        <svg
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.5"
            y="2.5"
            width="42"
            height="42"
            rx="7.5"
            stroke="#323232"
            stroke-width="5"
          />
        </svg>
        <h1 className="text-[#323232] justify-self-center text-5xl font-medium text-center ml-2">
          0
        </h1>
      </div>
      {/* Hub Score */}
      <div className="absolute w-[98px] h-[65.48px] ml-[679px] mt-[997px] flex flex-row justify-center items-center">
        <svg
          width="53"
          height="65"
          viewBox="0 0 53 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M53 51.0168C53 52.7431 52.3244 54.4525 51.0119 56.0473C49.6993 57.6422 47.7755 59.0914 45.3502 60.312C42.9249 61.5327 40.0456 62.501 36.8768 63.1616C33.708 63.8222 30.3117 64.1623 26.8818 64.1623C23.4519 64.1623 20.0556 63.8222 16.8868 63.1616C13.718 62.501 10.8388 61.5327 8.41347 60.312C5.98818 59.0914 4.06433 57.6422 2.75176 56.0473C1.4392 54.4525 0.763637 52.7431 0.763638 51.0168L26.8818 51.0168L53 51.0168Z"
            fill="#323232"
          />
          <rect x="24.5506" width="5.00779" height="47.574" fill="#323232" />
          <rect x="7" y="32" width="40" height="4" fill="#323232" />
          <rect x="11" y="16" width="31" height="4" fill="#323232" />
        </svg>
        <h1 className="text-[#323232] justify-self-center text-5xl font-medium text-center ml-2">
          0
        </h1>
      </div>
      {/* Red Marker 1*/}
      <div className="absolute w-[144px] h-[56px] ml-[518px] mt-[867px] flex flex-row justify-center items-center">
        <svg
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.5"
            y="2.5"
            width="42"
            height="42"
            rx="7.5"
            stroke="#323232"
            stroke-width="5"
          />
        </svg>
        <h1 className="text-5xl text-[#323232] ml-2">DB</h1>
      </div>
      {/* Red Marker 2 */}
      <div className="absolute w-[144px] h-[56px] ml-[518px] mt-[926px] flex flex-row justify-center items-center">
        <svg
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.5"
            y="2.5"
            width="42"
            height="42"
            rx="7.5"
            stroke="#323232"
            stroke-width="5"
          />
        </svg>
        <h1 className="text-5xl text-[#323232] ml-2">DB</h1>
      </div>
      <div className="absolute w-[144px] h-[56px] ml-[518px] mt-[1000px] flex flex-row justify-center items-center">
        {/* Unparked 1*/}
        <svg
          width="32"
          height="56"
          viewBox="0 0 32 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="14.5" stroke="#323232" stroke-width="3" />
          <path
            d="M29.7171 20.5L16 52.2208L2.28289 20.5L29.7171 20.5Z"
            stroke="#323232"
            stroke-width="3"
          />
          <circle cx="16" cy="16" r="8.5" stroke="#323232" stroke-width="3" />
          <circle cx="16" cy="16" r="7" fill="white" />
        </svg>
        {/* Unparked 2 */}
        <svg
          className="ml-3"
          width="32"
          height="56"
          viewBox="0 0 32 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="14.5" stroke="#323232" stroke-width="3" />
          <path
            d="M29.7171 20.5L16 52.2208L2.28289 20.5L29.7171 20.5Z"
            stroke="#323232"
            stroke-width="3"
          />
          <circle cx="16" cy="16" r="8.5" stroke="#323232" stroke-width="3" />
          <circle cx="16" cy="16" r="7" fill="white" />
        </svg>
      </div>
    </div>
  );
}
