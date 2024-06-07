import TwitterForm from '@/components/form-wrapper'
import FormWrapper from '@/components/twitter'

import React from 'react'

const Dashbord = () => {
  return (
    <div className='flex justify-center items-center w-screen mt-8'>

    <FormWrapper title="Tweet">
      <TwitterForm/>
    </FormWrapper>
    </div>
  )
}

export default Dashbord