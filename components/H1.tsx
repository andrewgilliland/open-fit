export const H1 = ({
  children,
  theme,
}: {
  children: React.ReactNode
  theme: string[]
}) => (
  <h1
    className={`font-muli font-semibold text-[116px] text-transparent leading-[132px] tracking-[-5.336px] bg-clip-text bg-gradient-to-r from-${theme[0]}-500 to-${theme[1]}-500`}
  >
    {children}
  </h1>
)
