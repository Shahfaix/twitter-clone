"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { TwitterSchema } from "@/schema"
import { SlSocialTwitter } from "react-icons/sl"
import { useState } from "react"
import moment from "moment"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

interface Tweet {
  text: string;
  time: string;
  liked: boolean;
}

const TwitterForm = () => {
  const [tweets, setTweets] = useState<Tweet[]>([])

  const form = useForm<z.infer<typeof TwitterSchema>>({
    resolver: zodResolver(TwitterSchema),
    defaultValues: {
      tweet: "",
    },
  })

  function onSubmit(values: z.infer<typeof TwitterSchema>) {
    const newTweet: Tweet = {
      text: values.tweet,
      time: moment().format('MMMM Do YYYY, h:mm:ss a'),
      liked: false
    }
    setTweets((prevTweets) => [...prevTweets, newTweet])
    form.reset({ tweet: "" }) // Reset the form values
  }

  const toggleLike = (index: number) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet, i) =>
        i === index ? { ...tweet, liked: !tweet.liked } : tweet
      )
    )
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-x-2 flex flex-row">
          <FormField
            control={form.control}
            name="tweet"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="What's on your mind" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-center">
            <Button className="flex flex-row gap-1" type="submit">
              Tweet <SlSocialTwitter />
            </Button>
          </div>
        </form>
      </Form>
      {tweets.length > 0 && (
        <div className="mt-4">
          <h2>My Tweets:</h2>
          {tweets.map((tweet, index) => (
            <div key={index} className="border rounded-xl p-2 my-2">
              <div className="flex justify-between items-center">
                <div>
                  <p>{tweet.text}</p>
                  <p className="text-sm text-gray-500">{tweet.time}</p>
                </div>
                <button onClick={() => toggleLike(index)}>
                  {tweet.liked ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TwitterForm
