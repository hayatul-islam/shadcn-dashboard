const DashboardIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} fill-[#7F8596] group-hover:fill-primary`}
    >
      <path
        opacity="0.5"
        d="M12.8008 14.72C12.8008 13.0606 12.8008 12.2309 13.328 11.7154C13.8552 11.2 14.7037 11.2 16.4008 11.2C18.0978 11.2 18.9464 11.2 19.4736 11.7154C20.0008 12.2309 20.0008 13.0606 20.0008 14.72V16.48C20.0008 18.1393 20.0008 18.969 19.4736 19.4845C18.9464 20 18.0978 20 16.4008 20C14.7037 20 13.8552 20 13.328 19.4845C12.8008 18.969 12.8008 18.1393 12.8008 16.48V14.72Z"
      />
      <path d="M4 9.28C4 10.9393 4 11.769 4.52721 12.2845C5.05442 12.8 5.90294 12.8 7.6 12.8C9.29706 12.8 10.1456 12.8 10.6728 12.2845C11.2 11.769 11.2 10.9393 11.2 9.28V7.52C11.2 5.86066 11.2 5.03098 10.6728 4.51549C10.1456 4 9.29706 4 7.6 4C5.90294 4 5.05442 4 4.52721 4.51549C4 5.03098 4 5.86066 4 7.52V9.28Z" />
      <path d="M12.8008 6.8C12.8008 5.93024 12.8008 5.49536 12.9378 5.15232C13.1205 4.69494 13.4709 4.33155 13.912 4.14209C14.2427 4 14.6621 4 15.5008 4H17.3008C18.1395 4 18.5588 4 18.8896 4.14209C19.3307 4.33155 19.6811 4.69494 19.8638 5.15232C20.0008 5.49536 20.0008 5.93024 20.0008 6.8C20.0008 7.66976 20.0008 8.10464 19.8638 8.44768C19.6811 8.90506 19.3307 9.26845 18.8896 9.45791C18.5588 9.6 18.1395 9.6 17.3008 9.6H15.5008C14.6621 9.6 14.2427 9.6 13.912 9.45791C13.4709 9.26845 13.1205 8.90506 12.9378 8.44768C12.8008 8.10464 12.8008 7.66976 12.8008 6.8Z" />
      <path
        opacity="0.5"
        d="M4 17.2C4 18.0698 4 18.5046 4.13702 18.8477C4.31971 19.3051 4.67012 19.6684 5.11117 19.8579C5.44196 20 5.86131 20 6.7 20H8.5C9.33869 20 9.75804 20 10.0888 19.8579C10.5299 19.6684 10.8803 19.3051 11.063 18.8477C11.2 18.5046 11.2 18.0698 11.2 17.2C11.2 16.3302 11.2 15.8954 11.063 15.5523C10.8803 15.0949 10.5299 14.7315 10.0888 14.5421C9.75804 14.4 9.33869 14.4 8.5 14.4H6.7C5.86131 14.4 5.44196 14.4 5.11117 14.5421C4.67012 14.7315 4.31971 15.0949 4.13702 15.5523C4 15.8954 4 16.3302 4 17.2Z"
      />
    </svg>
  );
};

export default DashboardIcon;
