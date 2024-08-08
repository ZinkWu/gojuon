import React, { PropsWithChildren } from 'react';

const Root: React.FC<PropsWithChildren> = ({children}) => {
  return <div className="h-dvh max-w-screen-sm m-auto p-5">
    {children}
  </div>
}

export default Root
