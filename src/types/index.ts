import { ReactNode } from "react"

type ImageProps = { 
  width: string
  heigth: string
}

type TaskCardProps = {
  children: ReactNode
  concluid: boolean
  taskId: number
  handleConcluidTask: (taskId: number) => void
}

type FromProps = {
  onAddTask: (newTask: object[]) => void
}

type TaskListProps = {
  id: number
  newTask: string
  concluid: boolean
}

type ContentProps = {
  content: TaskListProps[]
}

type CheckBoxProps = {
  state: boolean
}


export type { 
  ImageProps,
  TaskCardProps,
  FromProps,
  ContentProps,
  TaskListProps,
  CheckBoxProps
}