/* eslint-disable no-unused-vars */

import { people } from "./data";
import { getImageUrl } from "./utils";

export default function RenderingList() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const listItems = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {" " + person.profession + " "}
        <br />
        know for {person.accomplishment}
      </p>
    </li>
  ));

  return <ul>{listItems}</ul>;
}
