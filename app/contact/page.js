"use client";

import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Loader2, 
  Send,
  ArrowRight,
  Check,
  ChevronDown,
  Search 
} from 'lucide-react';

// Country codes data
const countryCodes = [
  { "code": "+1", "flag": "🇺🇸", "name": "United States" },
  { "code": "+1", "flag": "🇨🇦", "name": "Canada" },
  { "code": "+7", "flag": "🇷🇺", "name": "Russia" },
  { "code": "+20", "flag": "🇪🇬", "name": "Egypt" },
  { "code": "+27", "flag": "🇿🇦", "name": "South Africa" },
  { "code": "+30", "flag": "🇬🇷", "name": "Greece" },
  { "code": "+31", "flag": "🇳🇱", "name": "Netherlands" },
  { "code": "+32", "flag": "🇧🇪", "name": "Belgium" },
  { "code": "+33", "flag": "🇫🇷", "name": "France" },
  { "code": "+34", "flag": "🇪🇸", "name": "Spain" },
  { "code": "+36", "flag": "🇭🇺", "name": "Hungary" },
  { "code": "+39", "flag": "🇮🇹", "name": "Italy" },
  { "code": "+40", "flag": "🇷🇴", "name": "Romania" },
  { "code": "+41", "flag": "🇨🇭", "name": "Switzerland" },
  { "code": "+42", "flag": "🇸🇰", "name": "Slovakia" },
  { "code": "+43", "flag": "🇦🇹", "name": "Austria" },
  { "code": "+44", "flag": "🇬🇧", "name": "United Kingdom" },
  { "code": "+45", "flag": "🇩🇰", "name": "Denmark" },
  { "code": "+46", "flag": "🇸🇪", "name": "Sweden" },
  { "code": "+47", "flag": "🇳🇴", "name": "Norway" },
  { "code": "+48", "flag": "🇵🇱", "name": "Poland" },
  { "code": "+49", "flag": "🇩🇪", "name": "Germany" },
  { "code": "+51", "flag": "🇵🇪", "name": "Peru" },
  { "code": "+52", "flag": "🇲🇽", "name": "Mexico" },
  { "code": "+53", "flag": "🇨🇺", "name": "Cuba" },
  { "code": "+54", "flag": "🇦🇷", "name": "Argentina" },
  { "code": "+55", "flag": "🇧🇷", "name": "Brazil" },
  { "code": "+56", "flag": "🇨🇱", "name": "Chile" },
  { "code": "+57", "flag": "🇨🇴", "name": "Colombia" },
  { "code": "+58", "flag": "🇻🇪", "name": "Venezuela" },
  { "code": "+60", "flag": "🇲🇾", "name": "Malaysia" },
  { "code": "+61", "flag": "🇦🇺", "name": "Australia" },
  { "code": "+62", "flag": "🇮🇩", "name": "Indonesia" },
  { "code": "+63", "flag": "🇵🇭", "name": "Philippines" },
  { "code": "+64", "flag": "🇳🇿", "name": "New Zealand" },
  { "code": "+65", "flag": "🇸🇬", "name": "Singapore" },
  { "code": "+66", "flag": "🇹🇭", "name": "Thailand" },
  { "code": "+81", "flag": "🇯🇵", "name": "Japan" },
  { "code": "+82", "flag": "🇰🇷", "name": "South Korea" },
  { "code": "+84", "flag": "🇻🇳", "name": "Vietnam" },
  { "code": "+86", "flag": "🇨🇳", "name": "China" },
  { "code": "+90", "flag": "🇹🇷", "name": "Turkey" },
  { "code": "+91", "flag": "🇮🇳", "name": "India" },
  { "code": "+92", "flag": "🇵🇰", "name": "Pakistan" },
  { "code": "+93", "flag": "🇦🇫", "name": "Afghanistan" },
  { "code": "+94", "flag": "🇱🇰", "name": "Sri Lanka" },
  { "code": "+95", "flag": "🇲🇲", "name": "Myanmar" },
  { "code": "+98", "flag": "🇮🇷", "name": "Iran" },
  { "code": "+211", "flag": "🇸🇸", "name": "South Sudan" },
  { "code": "+212", "flag": "🇲🇦", "name": "Morocco" },
  { "code": "+213", "flag": "🇩🇿", "name": "Algeria" },
  { "code": "+216", "flag": "🇹🇳", "name": "Tunisia" },
  { "code": "+218", "flag": "🇱🇾", "name": "Libya" },
  { "code": "+220", "flag": "🇬🇲", "name": "Gambia" },
  { "code": "+221", "flag": "🇸🇳", "name": "Senegal" },
  { "code": "+222", "flag": "🇲🇷", "name": "Mauritania" },
  { "code": "+223", "flag": "🇲🇱", "name": "Mali" },
  { "code": "+224", "flag": "🇬🇳", "name": "Guinea" },
  { "code": "+225", "flag": "🇨🇮", "name": "Ivory Coast" },
  { "code": "+226", "flag": "🇧🇫", "name": "Burkina Faso" },
  { "code": "+227", "flag": "🇳🇪", "name": "Niger" },
  { "code": "+228", "flag": "🇹🇬", "name": "Togo" },
  { "code": "+229", "flag": "🇧🇯", "name": "Benin" },
  { "code": "+230", "flag": "🇲🇺", "name": "Mauritius" },
  { "code": "+231", "flag": "🇱🇸", "name": "Liberia" },
  { "code": "+232", "flag": "🇸🇱", "name": "Sierra Leone" },
  { "code": "+233", "flag": "🇬🇭", "name": "Ghana" },
  { "code": "+234", "flag": "🇳🇬", "name": "Nigeria" },
  { "code": "+235", "flag": "🇹🇩", "name": "Chad" },
  { "code": "+236", "flag": "🇨🇫", "name": "Central African Republic" },
  { "code": "+237", "flag": "🇨🇲", "name": "Cameroon" },
  { "code": "+238", "flag": "🇨🇻", "name": "Cape Verde" },
  { "code": "+239", "flag": "🇬🇼", "name": "Guinea-Bissau" },
  { "code": "+240", "flag": "🇬🇶", "name": "Equatorial Guinea" },
  { "code": "+241", "flag": "🇧🇮", "name": "Burundi" },
  { "code": "+242", "flag": "🇧🇼", "name": "Botswana" },
  { "code": "+243", "flag": "🇨🇬", "name": "Republic of Congo" },
  { "code": "+244", "flag": "🇦🇴", "name": "Angola" },
  { "code": "+245", "flag": "🇬🇲", "name": "Gambia" },
  { "code": "+246", "flag": "🇮🇴", "name": "British Indian Ocean Territory" },
  { "code": "+247", "flag": "🇧🇴", "name": "Bolivia" },
  { "code": "+248", "flag": "🇸🇭", "name": "Saint Helena" },
  { "code": "+249", "flag": "🇸🇩", "name": "Sudan" }
]


const DataStreamLoader = ({ message }) => (
  <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center overflow-hidden">
    <div className="relative w-full max-w-xs sm:w-64 h-64">
      <div className="absolute inset-0 binary-rain opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <Loader2 className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 animate-spin" />
        <div className="mt-4 font-mono text-green-500 animate-pulse text-sm sm:text-base">
          {message || "ESTABLISHING CONNECTION_"}
        </div>
      </div>
    </div>
  </div>
);

const SuccessLoader = () => {
  const [currentMessage, setCurrentMessage] = useState("TRANSMISSION_RECEIVED");
  const messages = [
    "TRANSMISSION_RECEIVED",
    "ENCRYPTING_DATA",
    "ESTABLISHING_SECURE_CHANNEL",
    "WILL_CONTACT_SHORTLY"
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % messages.length;
      setCurrentMessage(messages[currentIndex]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-xs sm:w-64 h-64 flex items-center justify-center">
        <div className="absolute inset-0 binary-rain opacity-20" />
        <div className="flex flex-col items-center justify-center space-y-4 z-10">
          <Check className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 animate-pulse" />
          <div className="font-mono text-green-500 text-center">
            <div className="animate-pulse text-sm sm:text-base">
              {currentMessage}_
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Contact() {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    phone: '',
    message: ''
  });
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false
  });
  // Filter countries based on search query
  const filteredCountries = countryCodes.filter(country => 
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.code.includes(searchQuery)
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleCountrySelect = (code, flag) => {
    setFormData(prev => ({
      ...prev,
      countryCode: code
    }));
    setIsCountryDropdownOpen(false);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus({ loading: false, error: null, success: true });
      setFormData({ 
        name: '', 
        email: '', 
        countryCode: '+1', 
        phone: '', 
        message: '' 
      });

      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      setStatus({
        loading: false,
        error: 'TRANSMISSION FAILED. RETRY SEQUENCE INITIATED.',
        success: false
      });
    }
  };

  const socialLinks = [
  {
    icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
    label: "GitHub",
    href: "https://github.com/tanishktiwari",
    color: "hover:text-green-400",
    target: "_blank"
  },
  {
    icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tanishktiwari/",
    color: "hover:text-green-400",
    target: "_blank"
  },
  {
    icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6 " />,
    label: "Email",
    href: "mailto:tanishktiwari12@gmail.com",
    color: "hover:text-green-400",
    target: "_blank"
  }
];

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Prevent dropdown from closing when clicking search input
  const handleSearchClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="min-h-screen bg-black pt-8 sm:pt-16">
      {loading && <DataStreamLoader />}
      {status.loading && <DataStreamLoader message="INITIATING_TRANSMISSION" />}
      {status.success && <SuccessLoader />}
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-20">
        <div className="flex items-center mb-8 sm:mb-12">
          <Terminal className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-green-500 animate-pulse" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500 font-mono">
            ESTABLISH_CONNECTION_
          </h1>
        </div>

        <div className="max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 sm:mb-12">
  {socialLinks.map((link, index) => (
    <a
      key={index}
      href={link.href}
      target={link.href.startsWith("mailto:") ? "_self" : "_blank"} // Ensure mailto uses _self (same window)
      rel={link.href.startsWith("mailto:") ? "" : "noopener noreferrer"} // No rel needed for mailto
      className={`flex items-center justify-center space-x-2 text-green-500 ${link.color} 
                  transform transition-all duration-300 hover:scale-110
                  border border-green-500 rounded-full px-4 sm:px-6 py-2 sm:py-3
                  hover:shadow-lg hover:shadow-green-500/50 text-sm sm:text-base`}
    >
      {link.icon}
      <span className="font-mono">{link.label}</span>
      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
    </a>
  ))}
</div>



          <div className="relative">
            <div className="form-grid-animation absolute inset-0 opacity-10" />
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-green-500 font-mono mb-1">
                  IDENTIFIER_
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-green-500 bg-black text-green-500 
                           shadow-sm focus:border-green-400 focus:ring-green-400 font-mono text-sm sm:text-base
                           placeholder-green-700 relative z-10 px-3 py-2"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-green-500 font-mono mb-1">
                  COMMUNICATION_CHANNEL_
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-green-500 bg-black text-green-500 
                           shadow-sm focus:border-green-400 focus:ring-green-400 font-mono text-sm sm:text-base
                           placeholder-green-700 relative z-10 px-3 py-2"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-green-500 font-mono mb-1">
                  COMMUNICATION_FREQUENCY_
                </label>
                <div className="mt-1 flex">
                  <div className="relative">
      <button
        type="button"
        className="flex items-center space-x-1 rounded-l-md border border-green-500 bg-black text-green-500 
                   px-3 py-2 text-sm font-mono hover:bg-green-900/20"
        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
      >
        <span>{countryCodes.find(c => c.code === formData.countryCode)?.flag}</span>
        <span>{formData.countryCode}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isCountryDropdownOpen && (
        <div className="absolute z-20 mt-1 w-64 rounded-md border border-green-500 bg-black shadow-lg">
          <div className="p-2 border-b border-green-500">
            <div className="flex items-center space-x-2 px-2 py-1 bg-black border border-green-500 rounded-md">
              <Search className="w-4 h-4 text-green-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onClick={handleSearchClick}
                placeholder="Search countries..."
                className="w-full bg-transparent text-green-500 border-none focus:ring-0 text-sm font-mono placeholder-green-700"
              />
            </div>
          </div>
          <div className="max-h-48 overflow-y-auto no-scrollbar">
            {filteredCountries.map((country) => (
              <button
                key={`${country.code}-${country.name}`}
                type="button"
                className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-green-500 hover:bg-green-900/20 font-mono"
                onClick={() => handleCountrySelect(country.code, country.flag)}
              >
                <span>{country.flag}</span>
                <span>{country.code}</span>
                <span className="text-green-600">{country.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>

                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="flex-1 rounded-r-md border-green-500 bg-black text-green-500 
                             shadow-sm focus:border-green-400 focus:ring-green-400 font-mono text-sm sm:text-base
                             placeholder-green-700 relative z-10 px-3 py-2"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-green-500 font-mono mb-1">
                  TRANSMISSION_CONTENT_
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-green-500 bg-black text-green-500 
                           shadow-sm focus:border-green-400 focus:ring-green-400 font-mono text-sm sm:text-base
                           placeholder-green-700 relative z-10 px-3 py-2"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className={`w-full bg-green-500 text-black py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-green-400 
                         transition-all duration-300 font-mono flex items-center justify-center space-x-2
                         hover:shadow-lg hover:shadow-green-500/50 transform hover:scale-105 relative z-10
                         text-sm sm:text-base ${status.loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{status.loading ? 'TRANSMITTING...' : 'INITIATE_TRANSMISSION'}</span>
              </button>

              {status.error && (
                <div className="text-red-500 text-center mt-4 font-mono animate-pulse relative z-10 text-sm sm:text-base">
                  {status.error}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}