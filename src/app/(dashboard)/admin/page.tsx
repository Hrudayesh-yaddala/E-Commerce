import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

const page = async () => {
   
    const session = await getServerSession(authOptions);
    console.log(session);
    if (session?.user) {
        return (
            <div>
                <h1>Hi, {session.user.username} you have logged in to admin page </h1>
            </div>
        )
    }
    return (
        <div>
            <h1 className=" text-xl">You need to login to access this admin dashboard</h1>
        </div>
    )
    

}

export default page