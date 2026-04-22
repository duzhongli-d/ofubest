import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 5L16 12L9 19" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 5L16 12L9 19" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M11.5396 4.23798C11.8985 4.23817 12.1891 4.5295 12.1891 4.88837V11.3044C12.1888 11.663 11.8983 11.9536 11.5396 11.9538C11.1809 11.9537 10.8895 11.6631 10.8893 11.3044V6.44305L4.82285 12.5104C4.569..."
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronUpIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      className="transform-rotate duration-300 rotate-90"
      {...props}
    >
      <g clipPath="url(#clip0_mobile_nav)">
        <path d="M7.07107 17.5713L14.1421 10.5002L7.07107 3.42918" stroke="black" strokeWidth="2" />
      </g>
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_footer_gh)">
        <path
          d="M18.0001 8C12.4779 8 8 12.5904 8 18.2532C8 22.7833 10.8653 26.6266 14.8387 27.9824C15.3384 28.0773 15.5219 27.76 15.5219 27.4891C15.5219 27.2446 15.5126 26.437 15.5126 25.6139V22.9327C10.3183 23.6643 9.03225 21.3728 9.03225 21.3728C8.31025 19.771 7.15225 19.4348 7.15225 19.4348C5.78425 18.7852 7.18125 18.8095 7.18125 18.8095C8.61625 18.899 9.44325 20.0849 9.44325 20.0849C10.9513 22.0451 12.7983 21.5937 13.4633 21.3046C13.5543 20.5047 13.8533 19.9459 14.1713 19.5868C10.8753 19.3049 8.68125 17.3042 8.68125 12.9577C8.68125 11.5219 9.38725 10.3687 10.4633 9.55325C10.2733 9.25725 9.66425 7.99625 10.4243 6.45325C10.4243 6.45325 11.6063 6.17725 13.4633 8.09725C14.6793 7.77325 15.9623 7.60525 17.2453 7.60125C18.5273 7.60525 19.8113 7.77325 21.0273 8.09725C22.8843 6.17725 24.0653 6.45325 24.0653 6.45325C24.8263 7.99625 24.2163 9.25725 24.0273 9.55325C25.1033 10.3687 25.8083 11.5219 25.8083 12.9577C25.8083 17.3105 23.6103 19.3099 20.3093 19.5868C20.6943 20.0229 20.9503 20.7355 20.9503 21.7252V25.6139C20.9503 26.4411 20.9393 27.2489 20.9393 27.4891C20.9393 27.762 21.1213 28.0817 21.6293 27.9774C25.6053 26.6225 28.4713 22.7797 28.4713 18.2492C28.4713 12.5864 23.9933 8 18.4713 8"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_footer_gh">
          <rect width="20.4713" height="20" fill="white" transform="translate(8 8)" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function HuggingFaceIcon(props: IconProps) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.75195 12.536C9.75195 11.4709 10.6154 10.6074 11.6805 10.6074H25.8234C26.8885 10.6074 27.752 11.4709 27.752 12.536V12.9756L19.2449 18.648C19.1249 18.7252..."
        fill="currentColor"
      />
    </svg>
  );
}

export function DiscordIcon(props: IconProps) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 0.345703C27.75 0.345703 35.6543 8.25005 35.6543 18C35.6543 27.75 27.75 35.6543 18 35.6543C8.25005 35.6543 0.345703 27.75 0.345703 18C0.345703 8.25005 8.25005 0.345703 18 0.345703Z"
        fill="white"
      />
    </svg>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 9.5V13.5C12 13.7761 11.7761 14 11.5 14H2.5C2.22386 14 2 13.7761 2 13.5V4.5C2 4.22386 2.22386 4 2.5 4H6.5M9 2H14V7M14 2L7.5 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}