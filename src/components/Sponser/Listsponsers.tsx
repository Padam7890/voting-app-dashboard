"use client";
import React from "react";
import Button from "../smallComponents/Button";
import TableHeading from "../Tables/Table/TableHeading";
import Table from "../Tables/Table/Table";
import Thead from "../Tables/Table/Thead";
import Link from "next/link";

const Listsponsers = () => {
  return (
    <div className=" relative h-full w-full">
      <div className=" flex items-center justify-between">
        <h2 className="mb-4 text-2xl font-semibold">Sponser List</h2>
        <Button
          className="px-3 py-3"
          type="button"
          label="Add Sponser"
          onClick={() => {}}
        ></Button>
      </div>
      <div className=" relative overflow-x-auto shadow-md sm:rounded-xl mt-5 dark:bg-black pb-4">
        <TableHeading />
        <Table>
          <Thead>
            <tr>
              <th scope="col" className="p-4">
                S.No
              </th>
              <th scope="col">Sponser Title</th>
              <th scope="col">Sponser Contact</th>
              <th scope="col">Sponser Logo</th>
              <th scope="col">Action</th>
            </tr>
          </Thead>
          <tbody>
            <tr className="border-b border-gray dark:border-stone-500 bg-white dark:bg-black dark:text-white">
              <td className="p-4">1</td>
              <td>ABC Sponsor</td>
              <td>+91 9876543210</td>
              <td>Image</td>
              <td className="flex items-center gap-2 px-4 py-4">
                <Link
                  className=" rounded-lg bg-green-500 px-3 py-1 text-center text-xs font-normal text-white"
                  href={`/edit/${1}`}
                >
                  Edit
                </Link>
                <div className=" rounded-lg bg-red px-3 py-1 text-center text-xs font-normal text-white">
                  Delete
                </div>
              </td>
            </tr>

          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Listsponsers;
