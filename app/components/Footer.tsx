export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white py-6 px-4 mt-8 md:fixed md:bottom-0 md:left-0 md:z-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white">Contact: uwcookingclub@email.com</div>
        <div className="flex gap-4">
          <a href="#" aria-label="Discord" className="hover:scale-110 transition-transform">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#5865F2"/>
              <path d="M16.6 17c-1.1-1-1.5-1.3-2.1-1.2-.2.1-.4.2-.6.2-.2 0-.4-.1-.6-.2-.6-.1-1 .2-2.1 1.2-.2.2-.4.1-.3-.1.2-.4.4-.8.6-1.2.1-.2.2-.3.4-.4.2-.1.4-.2.6-.2.2 0 .4.1.6.2.2.1.3.2.4.4.2.4.4.8.6 1.2.1.2-.1.3-.3.1z" fill="#fff"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="#E1306C"/>
              <path d="M12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5zm0 5.7A2.2 2.2 0 1 1 12 10.3a2.2 2.2 0 0 1 0 4.4zm4.2-5.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0zM17 8.7a4.3 4.3 0 0 0-1.2-3A4.3 4.3 0 0 0 12 4.5a4.3 4.3 0 0 0-3 1.2A4.3 4.3 0 0 0 4.5 12a4.3 4.3 0 0 0 1.2 3A4.3 4.3 0 0 0 12 19.5a4.3 4.3 0 0 0 3-1.2 4.3 4.3 0 0 0 1.2-3A4.3 4.3 0 0 0 19.5 12a4.3 4.3 0 0 0-1.2-3z" fill="#fff"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
} 