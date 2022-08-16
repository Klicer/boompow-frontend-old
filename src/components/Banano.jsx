const formatNum = (num) => {
  return num.toLocaleString("en-US", { minimumFractionDigits: 2 });
};

export const Banano = ({ width }) => {
  return (
    <svg
      width={width || "18px"}
      viewBox="0 0 256 135"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style={{
        minWidth: "18px",
      }}
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="mark"
          transform="translate(-372.000000, -433.000000)"
          fill={"#FBDD11"}
        >
          <g id="banano-mark" transform="translate(150.000000, 150.000000)">
            <path d="M406.134747,416.853542 C325.463057,427.034424 288.316054,355.829753 294.904666,348.882384 C299.255084,344.295715 306.019472,344.020398 311.88155,343.862237 C338.854141,343.13001 377.032355,374.700704 384.77522,374.545472 C399.771711,374.237937 422.332364,350.343909 437.114996,330.647006 C443.302257,322.407989 481.955062,309.99235 477.669095,331.639906 C463.771194,401.845819 416.414624,415.556036 406.134747,416.853542 Z M293.865253,283.994195 C374.536944,273.813312 411.683947,345.017984 405.092404,351.965352 C400.741987,356.552022 393.980529,356.827339 388.11845,356.9855 C361.145859,357.717727 322.967645,326.144103 315.22478,326.302264 C300.228289,326.6098 277.667637,350.503827 262.882075,370.200731 C256.697743,378.439748 218.044938,390.855387 222.330906,369.21076 C236.228807,299.001917 283.585377,285.291701 293.865253,283.994195 Z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export const formatBan = (value, width) => {
  return (
    <div className="flex gap-2">
      <Banano width={width} />
      <div>{formatNum(parseFloat(value.toFixed(2)))}</div>
    </div>
  );
};
