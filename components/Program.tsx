import { Program } from '../lib/types'

const ProgramCard = ({ program }: { program: Program }) => {
  const { name, workouts } = program
  return (
    <div className="text-gray-50">
      <h2 className="text-gray-100 text-xl font-semibold">
        {program.name} Program
      </h2>
      {program.workouts.map(({ day, name, exercises }) => (
        <div className="ml-4 mt-4 p-2">
          <div className="text-gray-400 text-lg font-semibold">
            <div>Day: {day}</div>
            <div>{name}</div>
          </div>
          <div>
            {exercises.map(({ name, sets }) => (
              <div className=" border-t-2 max-w-xs mt-2">
                <div className="flex justify-between mt-2">
                  <div className="ml-4">{name}</div>
                  <div className="flex flex-col">
                    {sets &&
                      sets.map((set, i) => (
                        <div className="">
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
