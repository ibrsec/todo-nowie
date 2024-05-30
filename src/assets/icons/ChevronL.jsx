import * as React from "react"

function ChevronL(props) {
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
      />
      <path
        d="M13 9l-2.738 2.738v0a.371.371 0 000 .524v0L13 15"
        stroke="#323232"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChevronL
