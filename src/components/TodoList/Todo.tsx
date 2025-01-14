import { useCallback, useState } from 'react'

import { db, DBTodo } from '@/src/db'
import overtimeAudio from '@/src/static/audio/overtime.ogg'

import { useLiveQuery } from 'dexie-react-hooks'
import useSound from 'use-sound'
import { TodoInput } from './TodoInput'

interface Props {
  id: string
  isActive: boolean
}
export function Todo({ id, isActive }: Props) {
  const [playOvertime] = useSound(overtimeAudio)
  const [played, setPlayed] = useState(false)
  const todo = useLiveQuery(async () => {
    const todo = await db.todos.get(id)

    // FIXME: Don't do this here. Make the timer emit events or something like that.
    if (!played && isActive && todo && todo.remainingMs <= 0) {
      playOvertime()
      setPlayed(true)
    }

    return todo
  }, [id, isActive, played])

  const handleChange = useCallback(async (todo: DBTodo) => {
    await db.todos.put(todo)
    setPlayed(false)
  }, [])

  if (!todo) return null

  return (
    <TodoInput
      submitOnBlur
      isActive={isActive}
      {...todo}
      onSubmit={handleChange}
      onDelete={({ id }) => db.todos.delete(id)}
    />
  )
}
