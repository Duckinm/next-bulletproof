import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <div className="container mx-auto min-h-screen w-full">
        <div className="bg-slate-300">Template layout</div>
        {children}
      </div>
    </>
  )
}
