/* eslint-disable react/prop-types */

const Button = ({ children, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="px-5 py-2 mb-20 mr-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
    >
      {children}
    </button>
  );
};

export default Button;
