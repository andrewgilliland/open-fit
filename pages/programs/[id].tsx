import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { programs } from '../../data/programs'
import { H1 } from '../../components/H1'
import Program from '../../components/Program'

const ProgramPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  // @ts-ignore
  const { name, workouts, theme } = programs[id]
  console.log(id)

  return (
    <div className="">
      <div className="py-24">
        <section className="max-w-4xl mx-auto">
          <H1 theme={theme}>{name}</H1>
          <Program
            // @ts-ignore
            program={programs[id]}
          />
        </section>
      </div>
    </div>
  )
}

export default ProgramPage
