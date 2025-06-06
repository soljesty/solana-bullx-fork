import { SVGProps } from "./types";

export default function BuyIcon({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  ...props
}: SVGProps) {
  return (
    <svg
      width={width || size || 32}
      height={height || size || 32}
      viewBox="0 0 32 32"
      fill={filled ? fill : "none"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2_79)">
        <path
          d="M1.2002 3.3905C1.2002 3.74597 1.4541 3.99988 1.80958 3.99988H10.9502V5.21863C10.9502 5.77722 11.585 6.03113 11.9658 5.65027L13.9971 3.61902C14.251 3.3905 14.251 3.00965 13.9971 2.78113L11.9658 0.749884C11.585 0.343634 10.9502 0.622931 10.9502 1.15613V2.37488H1.80958C1.4541 2.37488 1.2002 2.65418 1.2002 2.98426V3.3905ZM13.5908 7.24988H4.4502V6.03113C4.4502 5.49793 3.79004 5.21863 3.40918 5.62488L1.37793 7.65613C1.12402 7.88465 1.12402 8.2655 1.37793 8.49402L3.40918 10.5253C3.79004 10.9061 4.4502 10.6522 4.4502 10.0936V8.87488H13.5908C13.9209 8.87488 14.2002 8.62097 14.2002 8.2655V7.85926C14.2002 7.52918 13.9209 7.24988 13.5908 7.24988Z"
          fill={fill ? fill : "#E5E5E5"}
        />
      </g>
    </svg>
  );
}
