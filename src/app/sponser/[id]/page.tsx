import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { EditSponser } from "@/helper/dynamic-imports/components";
import React from "react";

const page = ({ params }: any) => {
  return (
    <DefaultLayout>
      <EditSponser />
    </DefaultLayout>
  );
};

export default page;
