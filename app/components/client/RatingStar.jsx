import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'

const RatingStar = ({ rating }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - Math.ceil(rating)

  return (
    <div className="rating flex items-center">
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-500" />
        ))}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-gray-400" />
        ))}
      <span className="ms-2 font-medium">{rating}</span>
    </div>
  )
}

export default RatingStar
