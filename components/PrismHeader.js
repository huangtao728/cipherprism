import { Logo } from './Logo';

export function PrismHeader({ children }) {
    return (
      <>
        <nav className="bg-white p-2 mt-0 fixed w-full z-10 top-0 border-b border-slate-900/10">
            <div className="container mx-auto flex flex-wrap items-center">
                <div className="flex w-full px-2 md:w-1/2 justify-center md:justify-start text-black font-extrabold">
                    <Logo />
                </div>
                <div className="flex w-full content-center justify-between md:w-1/2 md:justify-end">
                    {/*Sidebar*/}
                </div>
            </div>
        </nav>
      </>
    )
  }