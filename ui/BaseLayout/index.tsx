import Image from 'next/image'
import Link from "next/link";

type BaseLayoutProps = {children: React.ReactNode}

const BaseLayout = ({children}: BaseLayoutProps) => {
  return (
    <main>
      <div className="flex justify-center align-center p-1">
        <Link href="/" passHref={false}>
          <h1 className="flex justify-center items-center p-2 cursor-pointer">
            <div className="w-[20px] h-[20px] relative mr-[5px]">
              <Image alt="website logo" src="/logo.webp" layout="fill" />
            </div>
            <div className="text-xl font-bold text-midnight">scarves without scars</div>
          </h1>
        </Link>
      </div>
      <div>
        {children}
      </div>
    </main>
  )
}

export default BaseLayout
