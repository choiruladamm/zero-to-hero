import { user } from "../constant/data";

const DisplayingData = () => {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={`Photo of ${user.name}`}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: 90,
        }}
      />
    </>
  );
};

export default DisplayingData;
