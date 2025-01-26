import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#393E46] text-[#EEEEEE] py-4">
      <div className="container mx-auto text-center">
        <p className="text-lg font-medium">HomeAdore &copy; {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
