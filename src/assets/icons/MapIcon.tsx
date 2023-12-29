const MapIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} fill-[#7F8596] group-hover:fill-primary`}
    >
      <path d="M8.47812 10.0711C8.25169 9.95651 7.97656 10.0563 7.87345 10.2904L4.14663 18.7518C3.55368 20.0981 4.87035 21.4945 6.10391 20.8276L11.3517 17.9908C11.7598 17.7702 12.2402 17.7702 12.6483 17.9908L17.8961 20.8276C19.1297 21.4945 20.4463 20.0981 19.8534 18.7518L18.4563 15.58C18.2887 15.1994 17.9959 14.8895 17.6277 14.7031L8.47812 10.0711Z" />
      <path
        opacity="0.5"
        d="M8.98601 8.81957C8.77329 8.71188 8.68199 8.45373 8.77886 8.2338L10.6905 3.89352C11.2153 2.70216 12.7836 2.70216 13.3084 3.89352L16.8354 11.9014C17.0054 12.2873 16.604 12.6761 16.2307 12.4872L8.98601 8.81957Z"
      />
    </svg>
  );
};

export default MapIcon;
