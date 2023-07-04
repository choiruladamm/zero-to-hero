/* eslint-disable react/prop-types */

const InputField = ({value, onChange, placeholder}) => {
  return (
    <>
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-900 focus:border-slate-900 block w-full p-2.5"
        placeholder={placeholder}
      />
    </>
  );
};

export default InputField;
