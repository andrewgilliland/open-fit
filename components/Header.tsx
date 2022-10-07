import { animated } from 'react-spring'
import { useBoop } from '../lib/hooks/use-boop'
import { GithubIcon } from '../components/GithubIcon'

export const Header = () => {
  const [style, trigger] = useBoop({ scale: 1.15 })

  return (
    <header className="fixed flex justify-between text-muli font-semibold text-white bg-[#161616] border-b border-[#202020] h-[80px] w-full px-[10%]">
      <div className="flex items-center">
        <h2>Open Fit</h2>
      </div>
      <div className="flex items-center">
        <animated.a
          onMouseEnter={trigger}
          style={style}
          href="https://github.com/andrewgilliland/open-fit"
        >
          <GithubIcon className="h-6 w-6 fill-white" />
        </animated.a>
      </div>
    </header>
  )
}
