export type EditTaskForm = {
  editedTaskState: {
    id: number
    title: {
      value: string
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
      placeholder: string | undefined
      textColor: 'uk-text-warning' | undefined
    }
    description: {
      value: string
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
      placeholder: string | undefined
      textColor: 'uk-text-warning' | undefined
    }
  }
  saveButtonClickHandler: () => void
}
