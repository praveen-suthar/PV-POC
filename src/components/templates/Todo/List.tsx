import { Task } from '../../../data/models/Task'
import { TaskRow } from '../../organisms/TaskRow'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Button, NavSection, Section, Text } from '@jeraoss/jera-design-ui'
import React from 'react'

const TaskRowContainer: React.FC<{
  editButtonHrefBase: string
  task: Task
  useTrashButtonProps: (
    id: number
  ) => { disabled: boolean; onClick: () => void }
}> = ({ editButtonHrefBase, task, useTrashButtonProps }) => {
  const trashButtonProps = useTrashButtonProps(task.id)
  const editButtonProps = { href: `${editButtonHrefBase}/${task.id}` }

  return <TaskRow {...{ editButtonProps, task, trashButtonProps }} />
}

export const List: React.FC<{
  newTaskButtonHref: string
  editButtonHrefBase: string
  tasks: Task[]
  useTrashButtonProps: (
    id: number
  ) => { disabled: boolean; onClick: () => void }
}> = ({
  newTaskButtonHref,
  editButtonHrefBase,
  tasks,
  useTrashButtonProps,
}) => (
  <>
    <NavSection>
      <Text.Title>Todo List</Text.Title>
      <></>
      <Button.Middle href={newTaskButtonHref}>New task</Button.Middle>
    </NavSection>
    <Section>
      <table className="uk-table uk-table-striped uk-table-small">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskRowContainer
              key={task.id}
              {...{ editButtonHrefBase, task, useTrashButtonProps }}
            />
          ))}
        </tbody>
      </table>
    </Section>
  </>
)
