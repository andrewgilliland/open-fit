export type Program = {
  name: string
  workouts: Workout[]
}

export type Workout = {
  day: number
  name: string
  exercises: Exercise[]
}

export type Exercise = {
  name: string
  targetGroup: string
  sets: number[]
}
