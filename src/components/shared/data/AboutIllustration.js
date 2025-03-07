const AboutIllustration = () => {
    return (
      <svg
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Background */}
        <rect width="800" height="400" fill="#87CEEB" />
  
        {/* Sun */}
        <circle cx="100" cy="80" r="40" fill="#FFD700" />
  
        {/* Mountains */}
        <polygon points="150,300 300,100 450,300" fill="#6B8E23" />
        <polygon points="350,300 500,120 650,300" fill="#556B2F" />
  
        {/* Road */}
        <rect x="200" y="300" width="400" height="100" fill="#2F4F4F" />
        <line x1="200" y1="350" x2="600" y2="350" stroke="white" strokeWidth="5" strokeDasharray="20 10" />
  
        {/* Airplane */}
        <path d="M700 100 L750 120 L730 130 L770 160 L740 165 L725 140 L710 150 Z" fill="white" />
  
        {/* Trees */}
        <rect x="140" y="280" width="20" height="40" fill="#8B4513" />
        <circle cx="150" cy="270" r="30" fill="#228B22" />
  
        <rect x="660" y="280" width="20" height="40" fill="#8B4513" />
        <circle cx="670" cy="270" r="30" fill="#228B22" />
  
        {/* Text */}
        <text x="300" y="50" fontSize="30" fontFamily="Arial" fill="white">
          Explore the World with Us
        </text>
      </svg>
    );
  };
  
  export default AboutIllustration;