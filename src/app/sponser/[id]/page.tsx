import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { EditSponser } from "@/helper/dynamic-imports/components";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

const page = ({ params }: Params) => {
  return (
    <DefaultLayout>
      <EditSponser sponserId={params.id}  />
    </DefaultLayout>
  );
};

export default page;
