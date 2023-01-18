import { useState } from 'react'

import FeedbackScreen from './screens/Feedback'
import ThankYouScreen from './screens/ThankYou'

const App = () => {
  const [rating, setRating] = useState(null)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  return (
    <>
      {hasSubmitted ? (
        <ThankYouScreen rating={rating} />
      ) : (
        <FeedbackScreen
          rating={rating}
          setRating={setRating}
          setHasSubmitted={setHasSubmitted}
        />
      )}
      <div className="text-base text-center text-white">
        Challenge by{' '}
        <a
          className="text-link"
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank">
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          className="text-link"
          href="https://github.com/edward-hong"
          rel="noreferrer"
          target="_blank">
          Edward Hong
        </a>
        .
      </div>
    </>
  )
}

export default App
