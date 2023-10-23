type ImageProps = { 
  width: string
  heigth: string
}

type TaskCardProps = {
  children: string
}

type FromProps = {
  onAddTask: () => void
}

type TaskListProps = {
  id: number
  task: string
  state: boolean
}

type ContentProps = {
  content: TaskListProps[]
}


export type { ImageProps, TaskCardProps, FromProps, ContentProps }