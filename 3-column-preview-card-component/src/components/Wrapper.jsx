import Card from './Card'

const VEHICLE_INFO = [
  {
    iconUrl: '/images/icon-sedans.svg',
    heading: 'sedans',
    description:
      'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    bgColor: '#e38826',
  },
  {
    iconUrl: '/images/icon-suvs.svg',
    heading: 'suvs',
    description:
      'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    bgColor: '#006970',
  },
  {
    iconUrl: '/images/icon-luxury.svg',
    heading: 'luxury',
    description:
      'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    bgColor: '#004241',
  },
]

const Wrapper = () => (
  <main className="mx-auto w-80 md:w-230 flex flex-col mt-22 mb-8 md:mt-24 rounded md:flex-row">
    {VEHICLE_INFO.map(card => (
      <Card {...card} key={card.heading} />
    ))}
  </main>
)

export default Wrapper
