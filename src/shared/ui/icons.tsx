export function EditIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.333 2a1.886 1.886 0 0 1 2.667 2.667L4.889 13.778 2 14.667l.889-2.889L11.333 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DeleteIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 4h12M5.333 4V2.667a1.333 1.333 0 0 1 1.334-1.334h2.666a1.333 1.333 0 0 1 1.334 1.334V4m2 0v9.333a1.333 1.333 0 0 1-1.334 1.334H4.667a1.333 1.333 0 0 1-1.334-1.334V4h9.334ZM6.667 7.333v4M9.333 7.333v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UserIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="7.25" r="4" stroke="#C9C9C9" strokeWidth="2" />
      <path
        d="M9 13.75H15C16.6569 13.75 18 15.0931 18 16.75V20.75H6V16.75C6 15.0931 7.34315 13.75 9 13.75Z"
        stroke="#CACACA"
        strokeWidth="2"
      />
    </svg>
  );
}

export function LockIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#lock_filter)">
        <path
          d="M17 11V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V11M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V15.8C20 14.1198 20 13.2798 19.673 12.638C19.3854 12.0735 18.9265 11.6146 18.362 11.327C17.7202 11 16.8802 11 15.2 11H8.8C7.11984 11 6.27976 11 5.63803 11.327C5.07354 11.6146 4.6146 12.0735 4.32698 12.638C4 13.2798 4 14.1198 4 15.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z"
          stroke="#EDEDED"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="lock_filter"
          x="3"
          y="2"
          width="18"
          height="24"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
      </defs>
    </svg>
  );
}

export function EyeIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#eye_filter)">
        <path
          d="M2.42012 12.7132C2.28392 12.4975 2.21582 12.3897 2.1777 12.2234C2.14908 12.0985 2.14908 11.9015 2.1777 11.7766C2.21582 11.6103 2.28392 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
          stroke="#EDEDED"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3436 9 9.00042 10.3431 9.00042 12C9.00042 13.6569 10.3436 15 12.0004 15Z"
          stroke="#EDEDED"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="eye_filter"
          x="1.15625"
          y="4"
          width="21.6883"
          height="20"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
      </defs>
    </svg>
  );
}

export function EyeOffIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#eye_off_filter)">
        <path
          d="M10.7429 5.09232C11.1494 5.03223 11.5686 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7767C21.8518 11.9016 21.8517 12.0987 21.8231 12.2236C21.7849 12.3899 21.7164 12.4985 21.5792 12.7156C21.2793 13.1901 20.8222 13.8571 20.2165 14.5805M6.72432 6.71504C4.56225 8.1817 3.09445 10.2194 2.42111 11.2853C2.28428 11.5019 2.21587 11.6102 2.17774 11.7765C2.1491 11.9014 2.14909 12.0984 2.17771 12.2234C2.21583 12.3897 2.28393 12.4975 2.42013 12.7132C3.54554 14.4952 6.89541 19 12.0004 19C14.0588 19 15.8319 18.2676 17.2888 17.2766M3.00042 3L21.0004 21M9.8791 9.87868C9.3362 10.4216 9.00042 11.1716 9.00042 12C9.00042 13.6569 10.3436 15 12.0004 15C12.8288 15 13.5788 14.6642 14.1217 14.1213"
          stroke="#EDEDED"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="eye_off_filter"
          x="1.15625"
          y="2"
          width="21.6883"
          height="24"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
      </defs>
    </svg>
  );
}

export function PlusCircleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 2.0625C9.23233 2.0625 7.50436 2.58668 6.03459 3.56874C4.56483 4.55081 3.41929 5.94665 2.74283 7.57977C2.06637 9.21288 1.88938 11.0099 2.23424 12.7436C2.57909 14.4773 3.43031 16.0698 4.68024 17.3198C5.93017 18.5697 7.52268 19.4209 9.25638 19.7658C10.9901 20.1106 12.7871 19.9336 14.4202 19.2572C16.0534 18.5807 17.4492 17.4352 18.4313 15.9654C19.4133 14.4956 19.9375 12.7677 19.9375 11C19.935 8.6304 18.9926 6.35856 17.317 4.683C15.6414 3.00743 13.3696 2.065 11 2.0625ZM11 18.5625C9.50428 18.5625 8.04215 18.119 6.7985 17.288C5.55486 16.457 4.58555 15.2759 4.01316 13.894C3.44078 12.5122 3.29101 10.9916 3.58282 9.52463C3.87462 8.05765 4.59487 6.71014 5.65251 5.65251C6.71014 4.59487 8.05765 3.87461 9.52463 3.58281C10.9916 3.29101 12.5122 3.44077 13.894 4.01316C15.2759 4.58555 16.457 5.55485 17.288 6.7985C18.119 8.04215 18.5625 9.50428 18.5625 11C18.5602 13.005 17.7627 14.9272 16.345 16.345C14.9272 17.7627 13.005 18.5602 11 18.5625ZM15.125 11C15.125 11.1823 15.0526 11.3572 14.9236 11.4861C14.7947 11.6151 14.6198 11.6875 14.4375 11.6875H11.6875V14.4375C11.6875 14.6198 11.6151 14.7947 11.4861 14.9236C11.3572 15.0526 11.1823 15.125 11 15.125C10.8177 15.125 10.6428 15.0526 10.5139 14.9236C10.3849 14.7947 10.3125 14.6198 10.3125 14.4375V11.6875H7.5625C7.38017 11.6875 7.2053 11.6151 7.07637 11.4861C6.94744 11.3572 6.875 11.1823 6.875 11C6.875 10.8177 6.94744 10.6428 7.07637 10.5139C7.2053 10.3849 7.38017 10.3125 7.5625 10.3125H10.3125V7.5625C10.3125 7.38016 10.3849 7.2053 10.5139 7.07636C10.6428 6.94743 10.8177 6.875 11 6.875C11.1823 6.875 11.3572 6.94743 11.4861 7.07636C11.6151 7.2053 11.6875 7.38016 11.6875 7.5625V10.3125H14.4375C14.6198 10.3125 14.7947 10.3849 14.9236 10.5139C15.0526 10.6428 15.125 10.8177 15.125 11Z"
        fill="white"
      />
    </svg>
  );
}

export function RefreshIcon({ className }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.9873 16.0162C17.1156 16.145 17.1876 16.3195 17.1876 16.5013C17.1876 16.6831 17.1156 16.8576 16.9873 16.9864C16.8936 17.0784 14.6798 19.25 11 19.25C7.7868 19.25 5.45445 17.325 4.125 15.8254V17.875C4.125 18.0573 4.05257 18.2322 3.92364 18.3611C3.7947 18.4901 3.61984 18.5625 3.4375 18.5625C3.25516 18.5625 3.0803 18.4901 2.95136 18.3611C2.82243 18.2322 2.75 18.0573 2.75 17.875V13.75C2.75 13.5677 2.82243 13.3928 2.95136 13.2639C3.0803 13.1349 3.25516 13.0625 3.4375 13.0625H7.5625C7.74484 13.0625 7.9197 13.1349 8.04864 13.2639C8.17757 13.3928 8.25 13.5677 8.25 13.75C8.25 13.9323 8.17757 14.1072 8.04864 14.2361C7.9197 14.3651 7.74484 14.4375 7.5625 14.4375H4.76437C5.82312 15.7566 7.99219 17.875 11 17.875C14.0938 17.875 15.9964 16.0308 16.0153 16.0119C16.1448 15.8836 16.3199 15.812 16.5022 15.8128C16.6844 15.8136 16.8589 15.8868 16.9873 16.0162ZM18.5625 3.4375C18.3802 3.4375 18.2053 3.50993 18.0764 3.63886C17.9474 3.7678 17.875 3.94266 17.875 4.125V6.17461C16.5455 4.675 14.2132 2.75 11 2.75C7.32016 2.75 5.10641 4.92164 5.01359 5.01359C4.88436 5.14237 4.81158 5.31721 4.81126 5.49964C4.81094 5.68208 4.8831 5.85718 5.01187 5.98641C5.14065 6.11564 5.31549 6.18842 5.49793 6.18874C5.68036 6.18906 5.85546 6.1169 5.98469 5.98813C6.00359 5.96922 7.90625 4.125 11 4.125C14.0078 4.125 16.1769 6.24336 17.2356 7.5625H14.4375C14.2552 7.5625 14.0803 7.63493 13.9514 7.76386C13.8224 7.8928 13.75 8.06766 13.75 8.25C13.75 8.43234 13.8224 8.6072 13.9514 8.73614C14.0803 8.86507 14.2552 8.9375 14.4375 8.9375H18.5625C18.7448 8.9375 18.9197 8.86507 19.0486 8.73614C19.1776 8.6072 19.25 8.43234 19.25 8.25V4.125C19.25 3.94266 19.1776 3.7678 19.0486 3.63886C18.9197 3.50993 18.7448 3.4375 18.5625 3.4375Z"
        fill="#515161"
      />
    </svg>
  );
}

export function XIcon() {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.01031 1.00002L15.0103 17"
        stroke="#C9C9C9"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15 1.00002L1 17"
        stroke="#C9C9C9"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
