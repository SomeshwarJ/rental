import React from "react";

const ServiceRequestIcon = (props) => {
  return (
    <svg
      fill="currentColor"
      flexshrink="0"
      userselect="none"
      {...props}
    >
      <path
        d="M0 2.002A2 2 0 0 1 2.002 0h11.996A2 2 0 0 1 16 2.002v11.996A2 2 0 0 1 13.998 16H2.002A2 2 0 0 1 0 13.998V2.002z"
        fill="#36B37E"
      />
      <path
        d="M9 12.5a1 1 0 0 1-2 0v-9a1 1 0 1 1 2 0v9z"
        fill="#FFF"
        fillRule="nonzero"
      />
      <path
        d="M3.5 9a1 1 0 1 1 0-2h9a1 1 0 0 1 0 2h-9z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default ServiceRequestIcon;
