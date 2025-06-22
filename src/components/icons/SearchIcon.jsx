const SearchIcon = ({ fill = "none", stroke = "#f0f0f0", size = "36px" }) => {
  return (
    <svg
      //   height={size}
      viewBox="0 0 24 24"
      //   width={size}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SearchIcon;
