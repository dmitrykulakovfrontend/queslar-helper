import Image from "next/image";
import React from "react";

type Props = {
  icon?: {
    src: string;
    action: () => void;
  };
  label: string;
  placeholder?: string;
} & React.ComponentPropsWithoutRef<"input">;

function Input({ icon, label, placeholder, ...props }: Props) {
  return (
    <div className="relative mt-1 lg:w-64">
      {icon && (
        <Image
          src={icon.src}
          onClick={icon.action}
          alt="search"
          className="absolute text-gray-500 cursor-pointer inset-y-3 left-3"
        />
      )}
      <label htmlFor="topbar-search" className="sr-only">
        {label}
      </label>
      <input
        type="text"
        name="email"
        id="topbar-search"
        className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full ${
          icon ? "pl-10" : ""
        } p-2.5`}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

export default Input;
