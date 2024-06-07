/*"use server";

import { db } from "@/lib/db";
import { z } from "zod" 
import {TwitterSchema}from "@/schema"
export const CreateEmployee= async(values:z.infer<typeof TwitterSchema>)=>{
console.log(values)
const validatedFields = TwitterSchema.safeParse(values)
if(!validatedFields.success){
    return{
        error: "Invalid fields"
    }
}

const tweet = await db.tweet.create({
    data:{
        tweet:validatedFields.data?.tweet,
       
      



    }

})
console.log(tweet)

}*/