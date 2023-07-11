/* eslint-disable react/prop-types */

const Heading = ({ level, children }) => {
  switch (level) {
    case 1:
      return <h1 className="text-6xl">{children}</h1>;
    case 2:
      return <h2 className="text-5xl">{children}</h2>;
    case 3:
      return <h3 className="text-4xl">{children}</h3>;
    case 4:
      return <h4 className="text-3xl">{children}</h4>;
    case 5:
      return <h5 className="text-2xl">{children}</h5>;
    case 6:
      return <h6 className="text-xl">{children}</h6>;
    default:
      throw Error("Unknown level: " + level);
  }
};

export default Heading;
