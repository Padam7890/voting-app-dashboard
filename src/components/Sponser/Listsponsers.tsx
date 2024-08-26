"use client";
import React, { useEffect } from "react";
import Button from "../smallComponents/Button";
import TableHeading from "../Tables/Table/TableHeading";
import Table from "../Tables/Table/Table";
import Thead from "../Tables/Table/Thead";
import Link from "next/link";
import {
  useDeleteSponserMutation,
  useGetSponsersQuery,
} from "@/redux/api/sponserApi/sponserAPi";
import { handleError } from "@/helper/errorHandler";
import { S3_URL } from "@/config";
import { useRouter } from "next/navigation";
import { dismissToast, loadingToast, successToast } from "@/utils/toastNotification";

const Listsponsers = () => {

  const router = useRouter();
  const {
    data: SponserData,
    isError: SponsersIsError,
    isLoading: SponsersisLoading,
    error: SponserError,
  } = useGetSponsersQuery();

  const [
    deleteSponser,
    {
      isError: deleteSponserError,
      isLoading: delSponserILoad,
      error: delsponserError,
      isSuccess:delSponserSuccess
    },
  ] = useDeleteSponserMutation();

 
  useEffect(() => {
  if (delSponserILoad) {
    successToast("Sponser deleting");
  } else if (deleteSponserError && delsponserError) {
    handleError(delsponserError);
  } else if (delSponserSuccess) {
    dismissToast();
    successToast("Sponser deleted successfully" );
  } else {
    dismissToast();
  }
}, [delSponserILoad, deleteSponserError, delsponserError, delSponserSuccess]);

const deleteSpon = (id: string) => {
  deleteSponser(id);
};

const addSponser = () => {
  router.push("/sponser/add");
}

  return (
    <div className=" relative h-full w-full">
      <div className=" flex items-center justify-between">
        <h2 className="mb-4 text-2xl font-semibold">Sponser List</h2>
        <Button
          className="px-3 py-3"
          type="button"
          label="Add Sponser"
          onClick={addSponser}
        />
      </div>
      <div className=" relative mt-5 overflow-x-auto pb-4 shadow-md dark:bg-black sm:rounded-xl">
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
            {SponserData?.data.map((sponserdata, index) => (
              <tr className="border-b border-gray bg-white dark:border-stone-500 dark:bg-black dark:text-white">
                <td className="p-4">{index + 1}</td>
                <td>{sponserdata.title}</td>
                <td>+91 9876543210</td>
                <td className="image">
                  <img
                    className="w-10"
                    src={S3_URL.concat(sponserdata?.logo as string)}
                    alt="pic"
                  />
                </td>{" "}
                <td className="flex items-center gap-2 px-4 py-4">
                  <Link
                    className=" rounded-lg bg-green-500 px-4 py-2 text-center text-xs font-normal text-white"
                    href={`/sponser/${sponserdata.id}`}
                  >
                    Edit
                  </Link>
                  <div onClick={()=> deleteSpon(sponserdata.id!)} className=" cursor-pointer rounded-lg bg-red px-4 py-2 text-center text-xs font-normal text-white">
                    Delete
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Listsponsers;
