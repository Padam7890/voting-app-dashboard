import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { AddSponser } from '@/helper/dynamic-imports/components'
import React from 'react'

const page = () => {
  return (
    <DefaultLayout>
        <AddSponser/>
    </DefaultLayout>
  )
}

export default page