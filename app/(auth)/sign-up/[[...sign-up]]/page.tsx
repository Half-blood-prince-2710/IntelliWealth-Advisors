import { SignUp} from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return(
  <div className='w-full h-screen flex items-center justify-center'>
    <div className='hidden md:w-1/2 '>
      <Image
        src='/taskmanage.jpg'
        alt='logo'
        width={100}
        height={100}
      />
    </div>
    <div className='w-full flex items-center justify-center md:w-1/2 '>
      <SignUp />
    </div>
    </div>
  )
}
