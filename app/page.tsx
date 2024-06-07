import { Button } from "@/components/ui/button";

import Link from "next/link";


export default function Home() {
  return (
   <div className='flex   flex-col gap-5 justify-center items-center h-screen w-full'>
    <h1>    Home</h1>
 
    <Button asChild>
      <Link href=" /dashboard">
      go to dashboard
      </Link>

   
      
    </Button>
   </div>
  );
}