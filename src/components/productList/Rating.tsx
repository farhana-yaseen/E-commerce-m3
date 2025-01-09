import { IoStar, IoStarHalf } from "react-icons/io5";

// Helper function to generate stars based on rating
const getStarsFromRating = (rating: number) => {
    // Get the integer part of the rating for full stars
    const fullStarsCount = Math.floor(rating);
    
    // Check if there is a decimal part for the half star
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Create full stars with unique keys
    const fullStars = [...Array(fullStarsCount)].map((_, index) => (
        <IoStar key={`full-${index}`} className="text-yellow-500" />
    ));
    
    // Create half star with a unique key if applicable
    const halfStar = hasHalfStar ? [
        <IoStarHalf key="half-0" className="text-yellow-500" />
    ] : [];
    
    // Return the combination of full and half stars
    return [...fullStars, ...halfStar];
};

export default getStarsFromRating;
