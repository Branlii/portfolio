import * as React from "react"
const SvgComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fillRule="evenodd"
    clipRule="evenodd"
    {...props}
  >
    <path d="M6.72 20.492A9.941 9.941 0 0 0 12 22c1.934 0 3.741-.55 5.272-1.503l1.24 1.582A11.94 11.94 0 0 1 12 24c-2.403 0-4.642-.708-6.52-1.926l1.24-1.582zm6.405-.992-.594.391a.465.465 0 0 1-.307.109h-.447a.466.466 0 0 1-.308-.109l-.594-.391h2.25zM24 19h-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zM6 19H0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zm7.146-.5a.25.25 0 0 1 0 .5h-2.279a.25.25 0 0 1 0-.5h2.279zm.247-.5c0-2.002 1.607-2.83 1.607-4.614 0-1.86-1.501-2.886-3.001-2.886S9 11.524 9 13.386c0 1.784 1.607 2.639 1.607 4.614h2.786zM21 12a2.25 2.25 0 1 1-.002 4.502A2.25 2.25 0 0 1 21 12zM3 12a2.25 2.25 0 1 1-.002 4.502A2.25 2.25 0 0 1 3 12zm12.87 2.385 1.349.612-.413.911-1.298-.588c.15-.3.275-.608.362-.935zm-7.739 0c.087.332.208.631.36.935l-1.296.588-.414-.911 1.35-.612zM17.5 12.5v1h-1.501c.01-.335-.02-.672-.093-1H17.5zm-9.406 0a4.076 4.076 0 0 0-.092.997v.003H6.5v-1h1.594zm6.928-1.714 1.242-.882.579.816-1.252.888a3.627 3.627 0 0 0-.569-.822zm-6.044-.001c-.23.252-.418.525-.569.823l-1.251-.888.578-.816 1.242.881zm4.435-1.046.663-1.345.897.443-.664 1.345a4.063 4.063 0 0 0-.896-.443zm-2.826-.001c-.315.11-.618.258-.897.442l-.663-1.343.897-.443.663 1.344zM8 .684v2.149a10.026 10.026 0 0 0-5.798 7.158L.168 9.988C.9 5.66 3.953 2.116 8 .684zm8 0c4.047 1.432 7.1 4.976 7.832 9.304l-2.034.003A10.026 10.026 0 0 0 16 2.833V.684zM12.5 9.53a4.233 4.233 0 0 0-1-.001V8h1v1.53zM15 7H9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zm-3-7a2.25 2.25 0 1 1-.002 4.502A2.25 2.25 0 0 1 12 0z" />
  </svg>
)
export default SvgComponent
