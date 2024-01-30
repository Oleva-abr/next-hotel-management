import { FC } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Rating: FC<{ rating: number }> = ({ rating }) => {
  const fullStarts = Math.floor(rating);

  const decimalPart = rating - fullStarts;

  const fullstarElements = Array(fullStarts).fill(<FaStar />);

  let halfStarElement = null;

  if (decimalPart > 0) {
    halfStarElement = <FaStarHalf />;
  }

  return <>{fullstarElements}</>;
};
export default Rating;
