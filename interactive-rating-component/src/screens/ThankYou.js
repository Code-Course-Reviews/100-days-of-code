import Rating from '../components/thank-you/Rating'
import ThankYouImage from '../components/thank-you/ThankYouImage'
import ContentText from '../components/thank-you/ContentText'

const ThankYouScreen = ({ rating }) => (
  <div className="text-white mx-auto w-80 mt-40 bg-gradient-to-b from-dark-blue to-very-dark-blue text-sm font-overpass rounded-2xl p-5 md:mt-48 md:w-108 md:rounded-4xl md:p-9">
    <div className="scale-90 flex items-center justify-center md:scale-100">
      <ThankYouImage />
    </div>
    <Rating rating={rating} />
    <ContentText />
  </div>
)

export default ThankYouScreen
