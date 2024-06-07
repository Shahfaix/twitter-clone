import { z } from "zod";

export const TwitterSchema = z.object({
    tweet: z.string()
   
  })