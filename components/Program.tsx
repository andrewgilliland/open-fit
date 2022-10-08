import { Program } from '../lib/types'

const ProgramCard = ({ program }: { program: Program }) => {
  const { workouts } = program
  return (
    <div className="text-gray-50">
      {workouts.map(({ day, name, exercises }, i) => (
        <div key={i} className="ml-4 mt-4 p-2">
          <div className="text-gray-400 text-lg font-semibold">
            <div>Day: {day}</div>
            <div>{name}</div>
          </div>
          <div>
            {exercises.map(({ name, sets }, i) => (
              <div key={i} className=" border-t-2 max-w-xs mt-2">
                <div className="flex justify-between mt-2">
                  <div className="ml-4">{name}</div>
                  <div className="flex flex-col">
                    {sets &&
                      sets.map((set, i) => (
                        <div key={i} className="">
                          {i} Set - {set} Reps
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProgramCard
