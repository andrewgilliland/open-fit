import { Header } from './Header'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="font-muli bg-[#080808] text-white pt-[80px]">
        {children}
      </main>
      <footer className="bg-[#161616] border-t border-[#202020] h-[80px]"></footer>
    </>
  )
}
