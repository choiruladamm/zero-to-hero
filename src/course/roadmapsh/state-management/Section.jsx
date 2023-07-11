/* eslint-disable react/prop-types */

const Section = ({ children }) => {
  return (
      <section className="p-8 border border-gray-300 bg-gray-50 rounded-md">
      {children}
    </section>
  );
};

export default Section;
