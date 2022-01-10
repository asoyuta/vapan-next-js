import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import logoUrl from '../../public/img/logo.png'
import { MenuIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { HeaderMenu } from '..'

function Header() {
  const router = useRouter()
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className="flex justify-between bg-white px-3 sm:px-5 lg:px-10 py-3 sm:py-5 items-center shadow-md">
      {/* Left */}
      <div>
        {/* 1 : 4.12 */}
        <div
          onClick={() => router.push('/')}
          className="relative h-[30px] w-[124px] sm:h-[40px] sm:w-[165px] lg:h-[50px] lg:w-[206px] cursor-pointer"
        >
          <Image src={logoUrl} layout="fill" objectFit="fill" />
        </div>
      </div>
      <div>
        <div onClick={() => setOpenMenu(!openMenu)} className=" cursor-pointer">
          <MenuIcon className="h-6 w-6" />
        </div>
        <HeaderMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
    </header>
  )
}

export default Header
