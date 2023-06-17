/* eslint-disable react/prop-types */

import { getImageUrl } from "./utils";


export default function Avatar({ person, size }) {
  return (
    <img
      style={{borderRadius: '100px', margin: '1rem'}}
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
