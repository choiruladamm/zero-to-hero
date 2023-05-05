// eslint-disable-next-line react/prop-types
const SharingDataComponents = ({ count, hancleClick }) => {
  return (
    <button
      onClick={hancleClick}
      style={{ marginTop: "1rem", marginRight: "1rem" }}
    >
      Button clicked {count} times
    </button>
  );
};

export default SharingDataComponents;
