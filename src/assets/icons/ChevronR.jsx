
const ChevronR = (props) => {
  return (
    <svg
      width="23px"
      height="23px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.1}
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        fill="#323232"
      />
      <path
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="#323232"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <path
        d="M11 15l2.716-2.716v0a.402.402 0 000-.568v0L11 9"
        stroke="#323232"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChevronR