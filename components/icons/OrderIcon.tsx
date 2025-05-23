// icon:bx-sort-up | Boxicons https://boxicons.com/ | Atisa
import { SVGProps } from "./types";

function OrderIcon({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  ...props
}: SVGProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill ? fill : "currentColor"}
      height={height ? height : "1em"}
      width={width ? width : "1em"}
      {...props}
    >
      <path d="M11 9h9v2h-9zm0 4h7v2h-7zm0-8h11v2H11zm0 12h5v2h-5zm-6 3h2V8h3L6 4 2 8h3z" />
    </svg>
  );
}

export default OrderIcon;
