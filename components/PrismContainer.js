export function PrismContainer({ children }) {
    return (
      <>
        <div className="h-screen w-full h-full flex flex-col">
          <div>
            {children}
          </div>
        </div>
      </>
    )
  }