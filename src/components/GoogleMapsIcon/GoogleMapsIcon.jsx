function GoogleMapsIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        fill="#34A853"
        d="M32 3C20.5 3 11.3 12.2 11.3 23.7c0 14.9 20.7 37.3 20.7 37.3S52.7 38.6 52.7 23.7C52.7 12.2 43.5 3 32 3Z"
      />
      <path
        fill="#4285F4"
        d="M32 3c7.2 0 13.6 3.7 17.3 9.2L32 32.5 20.6 19.2 32 3Z"
      />
      <path
        fill="#FBBC04"
        d="M14.8 12.3 32 32.5 22.7 43.4C17.5 36 11.3 27 11.3 23.7c0-4.2 1.2-8 3.5-11.4Z"
      />
      <path
        fill="#EA4335"
        d="M20.6 19.2 32 32.5 14.8 12.3C18.5 6.8 24.4 3.4 31.1 3l-10.5 16.2Z"
      />
      <circle cx="32" cy="24" r="8.2" fill="white" />
      <circle cx="32" cy="24" r="4.6" fill="#4285F4" />
    </svg>
  );
}

export default GoogleMapsIcon;
