import { useSession, signIn, signOut } from "next-auth/react"
import Mytab from './MyTab'
import Log from './log'



export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
     <Mytab/> <br />
        {/* <button onClick={() => signOut()}>Sign out</button> */}
        <button onClick={() => signOut()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
Sign out
</button>
      </>
    )
  }
  return (
    <>
     <div className="flex justify-center items-center h-screen bg-linkedin">
      <div className="flex flex-col justify-center items-center w-80 h-96 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-8">Its Getdevkit..!</h1>
        <button onClick={() => signIn()} className="flex justify-center items-center w-60 h-12 bg-white border-2 border-linkedin rounded-full text-linkedin font-bold text-lg focus:outline-none hover:bg-linkedin hover:text-white transition-colors duration-300">
         
          Sign in with Google
        </button>
      </div>
    </div>
   
     
    </>
  )
}