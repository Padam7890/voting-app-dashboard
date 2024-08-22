import React from "react";

interface TheadProps {
  children: React.ReactNode;
}

const Thead = ({ children }:TheadProps) => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      {children}
    </thead>
  );
};

export default Thead;
