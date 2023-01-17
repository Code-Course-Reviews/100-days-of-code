const RATINGS = [
  {
    rating: 1,
  },
  {
    rating: 2,
  },
  {
    rating: 3,
  },
  {
    rating: 4,
  },
  {
    rating: 5,
  },
]

const Ratings = ({ ratingProp, setRating }) => (
  <div className="flex justify-between my-7">
    {RATINGS.map(({ rating }) => (
      <div
        onClick={() => setRating(rating)}
        className={`rounded-full bg-medium-dark-blue w-9 h-9 flex items-center justify-center hover:bg-orange hover:text-white cursor-pointer transition ease-in-out ${
          ratingProp === rating
            ? 'bg-medium-grey text-white'
            : 'text-medium-grey'
        } md:w-12 md:h-12 md:text-paragraph md:font-bold`}>
        {rating}
      </div>
    ))}
  </div>
)

export default Ratings
