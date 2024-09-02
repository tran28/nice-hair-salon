import Image, { StaticImageData } from 'next/image';
import React from 'react';
import photo1 from '@/app/assets/photo1.webp';
import photo2 from '@/app/assets/photo2.webp';
import photo3 from '@/app/assets/photo3.webp';
import photo4 from '@/app/assets/photo4.webp';
import photo5 from '@/app/assets/photo5.webp';
import photo6 from '@/app/assets/photo6.webp';
import photo7 from '@/app/assets/photo7.webp';
import photo8 from '@/app/assets/photo8.webp';
import photo9 from '@/app/assets/photo9.webp';

const images: (string | StaticImageData)[] = [
    photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9
];

const Gallery: React.FC = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 md:grid-cols-9 gap-1">
                {images.map((src, index) => (
                    <div key={index} className="w-full h-full aspect-square relative">
                        <a href='https://www.instagram.com/nicehairsalon.ca/' target="_blank" rel="noopener noreferrer">
                            <Image
                                src={src}
                                alt={'Nice Hair Salon, Mississauga'}
                                fill
                                quality={50}
                                className="object-center"
                                style={{ objectFit: 'cover' }} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
