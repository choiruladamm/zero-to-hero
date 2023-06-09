import { useState } from "react";
import IconBurger from "./icon/IconBurger";
import IconClose from "./icon/IconClose";
import Button from "./components/Button";
import Logo from "./components/Logo";

export default function NavbarSiji() {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
    { title: "Guides", path: "javascript:void(0)" },
    { title: "Partners", path: "javascript:void(0)" },
  ];

  return (
    <nav className="w-full bg-white border-b md:border-0 md:static">
      <div className="items-center max-w-screen-xl px-4 mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Logo />
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? <IconClose /> : <IconBurger />}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-600 hover:text-indigo-600">
                  <a href={item.path}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <Button px={5} py={2}>
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
