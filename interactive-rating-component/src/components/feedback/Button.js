const Button = ({ setHasSubmitted }) => (
  <button
    onClick={() => setHasSubmitted(true)}
    className="uppercase flex items-center justify-center w-full h-12 rounded-full bg-orange tracking-widest hover:bg-white hover:text-orange transition ease-in-out md:text-paragraph">
    submit
  </button>
)

export default Button
