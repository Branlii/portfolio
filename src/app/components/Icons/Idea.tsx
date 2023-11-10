import * as React from "react"
const SvgComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fillRule="evenodd"
    clipRule="evenodd"
    {...props}
  >
    <path d="M12.484 24v-5.991l2.224 2.352 4.042-2.12v2.416L12.484 24zm-1-.003-6.26-3.34v-2.465l4.088 2.245 2.172-2.385v5.945zm-3.7-15.313c.639.777 1.27 1.934 1.459 3.18l-3.208 1.77 5.449 2.891v.042l-2.381 2.614-4.599-2.525-.001.001-1.533-.883 2.254-2.481-2.254-2.121 4.814-2.488zm8.431.031 4.789 2.499-2.255 2.078.001.001 2.254 2.59-1.604.888-4.485 2.353-2.431-2.571v-.003l5.457-2.916-3.169-1.748c.194-1.321.695-2.266 1.443-3.171zM12.248 14h-.521a.542.542 0 0 1-.359-.127l-.693-.456H13.3l-.693.456a.54.54 0 0 1-.359.127zm1.077-1.167h-2.659a.291.291 0 1 1 0-.583h2.659a.291.291 0 0 1 0 .583zm.288-1.166h-3.251c0-2.304-1.874-3.301-1.874-5.383 0-2.172 1.748-3.367 3.498-3.367 1.75 0 3.502 1.197 3.502 3.367 0 2.082-1.875 3.047-1.875 5.383zM7.346 6.333H5.571v-1h1.821c-.039.22-.06.446-.06.676l.014.324zm11.058 0h-1.763l.013-.324c0-.23-.02-.456-.059-.676h1.809v1zm-9.998-3.02c-.227.248-.424.52-.584.811L6.381 3.101l.579-.815 1.446 1.027zm7.17-.005 1.439-1.022.579.815-1.432 1.018a4.256 4.256 0 0 0-.586-.811zm-5.307-1.223a4.774 4.774 0 0 0-.901.435L8.595.94 9.493.5l.776 1.585zm3.439-.004L14.482.5l.898.44-.77 1.574a4.932 4.932 0 0 0-.902-.433zm-1.22-.272a5.398 5.398 0 0 0-1 .001V0h1v1.809z" />
  </svg>
)
export default SvgComponent
