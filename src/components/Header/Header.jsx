import React from "react";

const Header = (props) => {
  const { name, title, location, nameInitials } = props;
  return (
    <header className="inline-flex justify-between items-baseline mb-2 w-full align-top border-b-4 border-gray-300">
      <section className="block">
        <h1 className="mb-0 text-5xl font-bold text-gray-700">{name}</h1>
        <h2 className="m-0 ml-2 text-2xl font-semibold text-gray-700 leading-snugish">
          {title}
        </h2>
        {location && (
          <h3 className="m-0 mt-2 ml-2 text-xl font-semibold text-gray-500 leading-snugish">
            {location}
          </h3>
        )}
      </section>
      {nameInitials && (
        <section
          className="justify-between px-3 mt-0 mb-5 text-4xl font-black leading-none text-white bg-gray-700 initials-container print:bg-black"
          style={{ "padding-bottom": "1.5rem", "padding-top": "1.5rem" }}
        >
          {nameInitials.map((initial) => {
            return <section className="text-center initial">{initial}</section>;
          })}
        </section>
      )}
    </header>
  );
};

export default Header;
