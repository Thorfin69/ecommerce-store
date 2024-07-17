import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
    name: string;
    image: string;
    price: number;
    description: string;
    bgColor?: string;
    textColor?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
    borderColor?: string;
    hoverScale?: string;
    hoverShadow?: string;
    fontFamily?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    name,
    image,
    price,
    description,
    bgColor,
    textColor,
    width,
    height,
    borderRadius,
    borderColor,
    hoverScale,
    hoverShadow,
    fontFamily
}) => (
    <div
        className="product-card"
        style={{
            backgroundColor: bgColor || '#fff',
            color: textColor || '#333',
            width: width || '300px',
            height: height || '400px',
            borderRadius: borderRadius || '8px',
            borderColor: borderColor || '#ddd',
            '--hover-scale': hoverScale || '1.03',
            '--hover-shadow': hoverShadow || '0 8px 16px rgba(0, 0, 0, 0.2)',
            'font-family': fontFamily || ''
        } as React.CSSProperties} // Type assertion for custom CSS properties
    >
        <div className="product-card-image">
            <img src={image} alt={name} />
        </div>
        <div className="product-card-content">
            <h2 className="product-card-name">{name}</h2>
            <p className="product-card-description">{description}</p>
            <div className="product-card-footer">
                <span className="product-card-price">${price}</span>
                <button className="product-card-button">Add to Cart</button>
            </div>
        </div>
    </div>
);

export default ProductCard;
