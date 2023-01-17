import Button from '../components/feedback/Button'
import ContentText from '../components/feedback/ContentText'
import IconStar from '../components/feedback/IconStar'
import Ratings from '../components/feedback/Ratings'

const FeedbackScreen = ({ rating, setRating }) => (
  <div className="text-white mx-auto w-80 mt-40 bg-gradient-to-b from-dark-blue to-very-dark-blue text-sm font-overpass rounded-2xl p-5 md:mt-48 md:w-108 md:rounded-4xl md:p-9">
    <div className="rounded-full bg-medium-dark-blue w-9 h-9 flex items-center justify-center md:w-12 md:h-12">
      <IconStar />
    </div>
    <ContentText />
    <Ratings ratingProp={rating} setRating={setRating} />
    <Button />
  </div>
)

export default FeedbackScreen
