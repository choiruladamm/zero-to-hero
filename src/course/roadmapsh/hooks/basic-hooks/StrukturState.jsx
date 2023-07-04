/* eslint-disable no-unused-vars */
import { useState } from "react";
import InputField from "./InputField";
import Label from "./Label";

const StrukturState = () => {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");

  const fullName = firstName + " " + lastname;

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastname(e.target.value);
  };

  return (
    <>
      <h2 className="text-2xl font-bold">Izinkan kami memeriksa anda</h2>
      <Label>Nama Depan</Label>
      <InputField
        value={firstName}
        onChange={handleFirstNameChange}
        placeholder="Input nama depan"
      />
      <Label>Nama Belakang</Label>
      <InputField
        value={lastname}
        onChange={handleLastNameChange}
        placeholder="Input nama belakang"
      />
      <p className="mt-4">
        Tiket anda akan diberikan kepada{" "}
        <span className="font-bold">{fullName}</span>
      </p>
    </>
  );
};

export default StrukturState;
