import dynamic from "next/dynamic";

export const EditSponser = dynamic( ()=> import("@/components/Sponser/EditSponser"),{
    ssr: false,
})

export const AddSponser = dynamic( ()=> import("@/components/Sponser/addSponser"),{
    ssr: false,
})