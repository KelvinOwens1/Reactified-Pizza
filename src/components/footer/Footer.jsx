import React from 'react';
import Order from '../order/Order';

function Footer() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order />
      ) : (
        <p>We're closed, we welcome you to return between 10:00 AM and 10:00 PM.</p>
      )}
    </footer>
  );
}

export default Footer;
