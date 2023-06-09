/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { dataGallery } from "./utils";

export default function ChallengePropsOne() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Notable Scientists</h1>
      <GallerySection />
    </div>
  );
}

function GallerySection() {
  return (
    <>
      {dataGallery.map((data) => (
        <section
          key={data.id}
          className="border p-5 rounded-xl border-slate-700 my-5"
        >
          <h1 className="font-bold text-xl">{data.nama}</h1>
          <img
            className="rounded-full"
            src={data.image}
            alt={data.nama}
            width={70}
            height={70}
          />
          <ul>
            <li>
              <b>Profesi: </b> {data.profesi}
            </li>
            <li>
              <b>Penghargaan: {data.penghargaan.total}</b>{" "}
              {data.penghargaan.namaPenghargaan}
            </li>
            <li>
              <b>Telah Menemukan: </b> {data.penemuan}
            </li>
          </ul>
        </section>
      ))}
    </>
  );
}
