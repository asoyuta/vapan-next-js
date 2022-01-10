import { XCircleIcon, LoginIcon, LogoutIcon, UserIcon } from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

function HeaderMenu({ openMenu, setOpenMenu }) {
  const router = useRouter()
  const { data: session } = useSession()

  return (
    <div
      className={`fixed top-0 right-0 h-screen shadow-xl bg-gray-100 transition-all ease-out ${
        !openMenu && 'translate-x-full'
      }`}
    >
      <div className="flex flex-col items-start px-5">
        <div className="pb-5 mb-5 mt-6 border-b-2 border-gray-300">
          <div
            className="flex items-center space-x-4 cursor-pointer p-2 rounded-md"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <XCircleIcon className="h-5 w-5" />
            <p>Close Menu</p>
          </div>
        </div>
        {session ? (
          <div className="flex flex-col spacey-1">
            <div
              className="flex items-center space-x-4 cursor-pointer p-2 hover:bg-gray-200 rounded-md"
              onClick={() => router.push(`/${session.user.id}`)}
            >
              <UserIcon className="h-5 w-5" />
              <p>Profile</p>
            </div>
            <div
              className="flex items-center space-x-4 cursor-pointer p-2 hover:bg-gray-200 rounded-md"
              onClick={() => router.push(`/edit_dialogues/new`)}
            >
              <UserIcon className="h-5 w-5" />
              <p>Create Dialogue</p>
            </div>
            <div
              className="flex items-center space-x-4 cursor-pointer p-2 hover:bg-gray-200 rounded-md"
              onClick={signOut}
            >
              <LogoutIcon className="h-5 w-5" />
              <p>Sign Out</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-4 cursor-pointer p-2 hover:bg-gray-200 rounded-md" onClick={signIn}>
            <LoginIcon className="h-5 w-5" />
            <p>Sign In</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeaderMenu
