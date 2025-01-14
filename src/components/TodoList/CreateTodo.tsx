import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";

import { db } from "@/src/db";
import { SettingsContext } from "@/src/SettingsContextProvider";

import { TodoInput } from "./TodoInput";

const twentyFiveMinutes = 1000 * 60 * 25;

export function CreateTodo() {
  const [{ activeProject }] = useContext(SettingsContext);
  const [refresh, setReferesh] = useState(Math.random());

  return (
    <TodoInput
      autoFocus
      key={refresh}
      id="none"
      pos={0}
      placeholder="Add a new Task"
      projectId={activeProject.id}
      completed={0}
      description=""
      remainingMs={twentyFiveMinutes}
      createdAt={0}
      onSubmit={async (newTodo) => {
        const pos = await db.todos.count();
        await db.todos.add({
          ...newTodo,
          id: uuid(),
          createdAt: Date.now(),
          pos,
        });
        setReferesh(Math.random());
      }}
    />
  );
}
