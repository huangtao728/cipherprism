import { Tags } from 'tabler-icons-react';
import Link from 'next/link';

export function NavBox(props) {
    const { items } = props

    const stru = items.map((item, index) => (
        <Link
            href={item.href}
            className="rounded-lg border h-border transition-all duration-500 p-4 cursor-pointer flex flex-col justify-between relative">
            <div>
                <div className="group border border-slate-900/10 rounded-lg p-3 cursor-pointer hover:border-indigo-500 transition-all ease-in-out duration-250">
                    <h1 className="text-base font-['Outfit'] flex flex-row items-center space-x-1 group-hover:text-indigo-800 transition-all ease-in-out duration-250">
                        <span>{item.title}</span>
                    </h1>
                    <p className="text-xs text-black/80 md:truncate font-light font-['Plus_Jakarta_Sans'] transition-all ease-in-out duration-250">
                        {item.description}
                    </p>
                    <div className="flex flex-row items-center border-t mt-5 pt-1 pb-1">
                        <Tags size={16} strokeWidth={1} className="mr-1"/>
                        <span className="text-xs text-black/80 md:truncate font-light font-['Plus_Jakarta_Sans']">{item.tags}</span>
                    </div>
                </div>
            </div>
        </Link>
    ))

    return (
        <div className="my-1 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {stru}
        </div>
    )
}