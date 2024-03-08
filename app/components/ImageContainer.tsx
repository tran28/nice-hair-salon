import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ImageContainerProps {
    src: string | StaticImageData;
    alt: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ src, alt }) => {
    return (
        <div className="w-full">
                <Image
                    src={src}
                    alt={alt}
                    style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                    className="w-full h-auto"
                />
        </div>
    );
};

export default ImageContainer;
