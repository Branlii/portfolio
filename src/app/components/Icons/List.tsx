import * as React from "react"
const SvgComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fillRule="evenodd"
    clipRule="evenodd"
    {...props}
  >
    <path d="M13.403 24H0V2h3C4.231 2 5.181.916 6 0h8c.821.916 1.772 2 3 2h3v9.15a7.57 7.57 0 0 0-1.5-.15l-.5.016V4h-4l-2 2H8.103L6 4H2v18h9.866a7.529 7.529 0 0 0 1.537 2zM18.5 13c3.035 0 5.5 2.464 5.5 5.5S21.535 24 18.5 24c-3.036 0-5.5-2.464-5.5-5.5s2.464-5.5 5.5-5.5zm0 2c1.931 0 3.5 1.568 3.5 3.5S20.431 22 18.5 22c-1.932 0-3.5-1.568-3.5-3.5s1.568-3.5 3.5-3.5zm2.5 4h-3v-3h1v2h2v1zM5.849 14.948 4.8 13.964l-.8.823 1.864 1.776L9 13.371l-.815-.808-2.336 2.385zM12 16h-2v-1h2v1zm2-2h-4v-1h4v1zM5.849 9.975 4.8 8.992l-.8.823 1.864 1.776L9 8.399l-.815-.808-2.336 2.384zM14 11h-4v-1h4v1zm0-2h-4V8h4v1zM9 3a1.001 1.001 0 1 0 2.002-.002A1.001 1.001 0 0 0 9 3z" />
  </svg>
)
export default SvgComponent
