import { Logo } from './Logo';

export function PrismApp({ children }) {
    return (
      <div className="container shadow-lg mx-auto bg-white mt-24 md:mt-16 h-full p-2 pb-64">
        <div className="px-4 lg:px-64 mt-0">
            {children}
        </div>
      </div>
    )
  }