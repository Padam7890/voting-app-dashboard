import React from 'react'

interface TableProps {
  children: React.ReactNode;
}

const Table:React.FC<TableProps>= ({children}) => {
  return (
    <table className="w-full bg-white  text-sm text-left rtl:text-right text-gray-500 dark:bg-black dark:text-white">
     {children}

  </table>
  )
}

export default Table