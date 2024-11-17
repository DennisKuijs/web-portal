import Link from "next/link";
import SteamLoginButton from "./SteamLoginButton";
import { getServerSession } from "next-auth";
import UserProfile from "./UserProfile";
import UserBalance from "./UserBalance";

const Navbar = async () => {

  const user = await getServerSession();

  return user ? (
    <>
      <nav className="bg-white/75 h-14 border-b w-full border-gray-200">
          <div className="flex h-14 z-40 items-center ml-2 mr-4 justify-between">
              <Link href="/" className="font-semibold">
              Trading<span className="text-green-500">Portal</span>
              </Link>
              <div className="h-full flex items-center space-x-6">
                <UserBalance/>
                <UserProfile user={user}/>
              </div>
          </div>
      </nav>
    </>
  )
  :
  (
    <>
    <nav className="bg-white/75 h-14 border-b w-full border-gray-200">
        <div className="flex h-14 z-40 items-center ml-2 mr-2 justify-between">
            <Link href="/" className="font-semibold">
            Trading<span className="text-green-500">Portal</span>
            </Link>
            <div className="h-full flex items-center space-x-4">
                <SteamLoginButton/>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
