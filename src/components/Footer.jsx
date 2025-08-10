import React from 'react';

const Footer = () => (
    <footer className="bg-[#031F39] text-[#7D6445] pt-12 pb-4">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            {/* Contact */}
            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col items-start justify-start">
                <h3 className="font-bold text-lg mb-4">Contact</h3>
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row gap-2 mb-2 w-full">
                    <div className="flex items-center gap-2 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#7D6445" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" /></svg>
                        <span className="truncate">No. 158, Thiruvika Street, Uthandi</span>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#7D6445" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1.003 1.003 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.09.32.03.67-.24 1.01l-2.21 2.2z" /></svg>
                        <a href="tel:7845711997" className="hover:underline truncate">+91 9710537506</a>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#7D6445" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8l8 5 8-5v10z" /></svg>
                        <a href="mailto:fourgreenindia@gmail.com" className="hover:underline truncate">fourgreenindia@gmail.com</a>
                    </div>
                </div>
            </div>
            {/* Company */}
            <div>
                <h3 className="font-bold text-lg mb-4">Company</h3>
                <ul className="space-y-2">
                    <li><a href="#about" className="hover:underline">About</a></li>
                    <li><a href="#sitemap" className="hover:underline">Site Map</a></li>
                    <li><a href="#support" className="hover:underline">Support Center</a></li>
                    <li><a href="#terms" className="hover:underline">Terms Conditions</a></li>
                    <li><a href="#submit" className="hover:underline">Submit Listing</a></li>
                </ul>
            </div>
            {/* Quick Links */}
            <div>
                <h3 className="font-bold text-lg mb-4">Quick links</h3>
                <ul className="space-y-2">
                    <li><a href="#rentals" className="hover:underline">Rentals</a></li>
                    <li><a href="#sales" className="hover:underline">Sales</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                    <li><a href="#terms" className="hover:underline">Terms Conditions</a></li>
                    <li><a href="#blog" className="hover:underline">Our blog</a></li>
                </ul>
            </div>
            {/* About */}
            <div>
                <h3 className="font-bold text-lg mb-4">About Four Green India</h3>
                <p className="mb-4 text-sm">Launched in 2025, Four Green India is a premium property marketplace to buy, sell, and rent residential and commercial properties. Adjudged as the most preferred real estate portal in India by various independent surveys.</p>
                <div className="flex gap-3">
                    <a href="https://www.facebook.com/share/19YBA4T2Pe/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="bg-[#7D6445] rounded p-2 hover:bg-[#031F39] transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.405.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.595 1.325-1.326V1.326C24 .595 23.405 0 22.675 0z" /></svg>
                    </a>
                    <a href="https://www.instagram.com/4greenindia?igsh=MWFteWliZXQwcGszYg==" target="_blank" rel="noopener noreferrer" className="bg-[#7D6445] rounded p-2 hover:bg-[#031F39] transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.094 12 2.094zm0-2.163C8.741 0 8.332.012 7.052.07 5.782.128 4.515.4 3.54 1.374c-.974.974-1.246 2.241-1.308 3.608C2.175 8.416 2.163 8.796 2.163 12s.012 3.584.07 4.85c.062 1.366.334 2.633 1.308 3.608.974.974 2.241 1.246 3.608 1.308 1.266.058 1.646.069 4.85.069s3.584-.011 4.85-.069c1.366-.062 2.633-.334 3.608-1.308.974-.974 1.246-2.241 1.308-3.608.058-1.266.069-1.646.069-4.85s-.011-3.584-.069-4.85c-.062-1.366-.334-2.633-1.308-3.608-.974-.974-2.241-1.246-3.608-1.308C15.259.012 14.859 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
                    </a>
                    <a href="https://wa.me/917845711997" target="_blank" rel="noopener noreferrer" className="bg-green-500 rounded p-2 hover:bg-green-600 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24"><path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.69.97.99-3.59-.23-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" /></svg>
                    </a>
                    <a href="mailto:fourgreenindia@gmail.com" className="bg-[#7D6445] rounded p-2 hover:bg-[#031F39] transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8l8 5 8-5v10z" /></svg>
                    </a>
                </div>
            </div>
        </div>
        <div className="bg-[#00122A] text-[#7D6445] text-center py-3 mt-8 text-sm">
            Copyright | Four Green India. All Rights Reserved. Designed By RKS Techno Solutions
        </div>
    </footer>
);

export default Footer;
