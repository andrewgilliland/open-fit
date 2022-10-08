import Link from 'next/link'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import { animated } from 'react-spring'
import { useBoop } from '../lib/hooks/use-boop'

export const ProgramCard = ({ program }: { program }) => {
  const [style, trigger] = useBoop({ x: 2 })
  const { name, theme, duration, workoutsPerWeek, id } = program
  console.log(theme)

  return (
    <div
      className={`font-muli flex flex-col justify-between aspect-square rounded-lg bg-gradient-to-r from-${theme[0]}-500 to-${theme[1]}-500 p-8`}
    >
      <div>
        <h3
          style={{ textShadow: '1px 1px black' }}
          className="text-white text-[28px] font-semibold tracking-[-0.896px]"
        >
          {name}
        </h3>
        <div className="mt-2">
          <h4 className="text-gray-200 text-xs">Duration</h4>
          <p className="text-white">{duration}</p>
        </div>
        <div className="mt-2">
          <h4 className="text-gray-200 text-xs">Workouts Per Week</h4>
          <p className="text-white">{`${workoutsPerWeek} workouts`}</p>
        </div>
      </div>
      <div>
        <Link href={`programs/${id}`}>
          <a>
            <button
              onMouseEnter={trigger}
              className="flex justify-center items-center text-white bg-black/20 rounded-lg pl-4 pr-3 py-2 space-x-2 transition hover:bg-black/30"
            >
              <span>Get Started</span>
              <animated.div style={style}>
                <ArrowRightCircleIcon className="text-white h-5 w-5 " />
              </animated.div>
            </button>
          </a>
        </Link>
      </div>
    </div>
  )
}
