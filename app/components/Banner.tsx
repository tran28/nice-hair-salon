import React from 'react';

interface BannerProps {
  phoneNumber: string;
}

const Banner: React.FC<BannerProps> = ({ phoneNumber }) => {
    return (
      <div className="bg-stone-900 text-stone-50 py-4 px-2 text-center w-full text-sm tracking-tighter">
        <p>
          Walk-ins welcome or contact{' '}
          <a href={`tel:${phoneNumber}`} className="underline">
            {phoneNumber}
          </a>{' '}
          to book an appointment. Thank you!
        </p>
      </div>
    );
  };
  
  export default Banner;