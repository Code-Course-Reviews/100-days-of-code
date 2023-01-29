const Card = ({ iconUrl, heading, description, bgColor }) => {
  const borderRadiusStyles = () => {
    if (heading === 'sedans') {
      return 'rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg'
    } else if (heading === 'luxury') {
      return 'rounded-bl-lg rounded-br-lg md:rounded-bl-none md:rounded-tr-lg'
    } else {
      return ''
    }
  }

  return (
    <div
      className={`py-12 px-11 ${borderRadiusStyles()} md:px-12`}
      style={{ backgroundColor: bgColor }}>
      <img src={`${process.env.PUBLIC_URL}${iconUrl}`} alt="Vehicle icon" />
      <h2 className="font-big-shoulders-display text-very-light-gray uppercase text-card-heading mt-8 mb-5">
        {heading}
      </h2>
      <p className="text-transparent-white font-lexend-deca text-paragraph">
        {description}
      </p>
      <button
        className="rounded-full bg-white py-3 px-8 mt-6 md:mt-22"
        style={{ color: bgColor }}>
        Learn More
      </button>
    </div>
  )
}

export default Card
