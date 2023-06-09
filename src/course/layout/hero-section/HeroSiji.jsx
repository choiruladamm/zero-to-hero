import { useState } from "react";
import { features } from "./constant/features";
import Button from "./components/Button";

export default function HeroSiji() {
  const [isVideoPoppedUp, setVideoPopUp] = useState(false);

  return (
    <section>
      <div className="max-w-screen-xl gap-12 px-4 py-10 mx-auto text-gray-600 md:px-8 xl:flex md:py-28">
        <div className="max-w-2xl mx-auto space-y-5 text-center xl:text-left">
          <div className="flex flex-wrap items-center justify-center gap-6 xl:justify-start">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center text-sm text-gray-500 gap-x-2"
              >
                {item.icon}
                {item.name}
              </div>
            ))}
          </div>
          <h1 className="mx-auto text-4xl font-extrabold text-gray-800 md:text-5xl">
            Explore in-demand careers and develop cutting edge skills
          </h1>
          <p className="max-w-xl mx-auto xl:mx-0">
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          </p>
          <div className="items-center justify-center space-y-3 gap-x-3 sm:flex sm:space-y-0 xl:justify-start">
            <Button px={6} py={3}>Browse Features</Button>
          </div>
        </div>
        <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="rounded-lg"
              alt=""
            />
            <button
              className="absolute inset-0 w-16 h-16 m-auto text-white duration-150 bg-blue-500 rounded-full hover:bg-blue-600 ring-offset-2 focus:ring"
              onClick={() => setVideoPopUp(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 m-auto"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isVideoPoppedUp ? (
        <div className="fixed inset-0 flex items-center justify-center w-full h-full">
          <div
            className="absolute inset-0 w-full h-full bg-black/50"
            onClick={() => setVideoPopUp(false)}
          ></div>
          <div className="relative px-4">
            <button
              className="w-12 h-12 mb-5 text-white duration-150 bg-gray-800 rounded-full hover:bg-gray-700"
              onClick={() => setVideoPopUp(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 m-auto"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
            <video
              className="w-full max-w-2xl rounded-lg"
              controls
              autoPlay={true}
            >
              <source
                src="https://res.cloudinary.com/floatui/video/upload/v1669411003/Binary_Search_Algorithm_in_100_Seconds_hyg6n5.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
