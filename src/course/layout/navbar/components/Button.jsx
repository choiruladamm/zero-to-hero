/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Button = ({ children, px, py }) => {
  return (
    <a
      className={`inline-block px-${px} py-${py} text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500`}
      href="/download"
    >
      {children}
    </a>
  );
};

export default Button;
