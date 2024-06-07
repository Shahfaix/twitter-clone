import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { title } from 'process'

interface FormWrapperProps{
    children:React.ReactNode
    title:String
}
  

const FormWrapper = ({children,title}:FormWrapperProps) => {
  return (
    <Card>
  <CardHeader>
    <CardTitle>{title}</CardTitle>
    
  </CardHeader>

  <CardContent>

  {children}
  </CardContent>
 
</Card>

  )
}

export default FormWrapper