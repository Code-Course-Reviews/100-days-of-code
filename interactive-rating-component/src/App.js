import { useState } from 'react'

import FeedbackScreen from './screens/Feedback'
import ThankYouScreen from './screens/ThankYou'

const App = () => {
  const [rating, setRating] = useState(null)

  return (
    <>
      {rating ? (
        <ThankYouScreen rating={rating} />
      ) : (
        <FeedbackScreen rating={rating} setRating={setRating} />
      )}
    </>
  )
}

export default App
