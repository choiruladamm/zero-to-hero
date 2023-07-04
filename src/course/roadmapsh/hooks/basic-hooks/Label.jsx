/* eslint-disable react/prop-types */

const Label = ({ children }) => {
  return (
    <label className="block mb-2 text-sm font-medium text-gray-900 mt-4">
      {children}
    </label>
  );
};

export default Label;
