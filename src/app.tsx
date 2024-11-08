import { CirclePlus } from 'lucide-react';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { Empty } from './components/Assignment/Empty';
import { AssignmentCount } from './components/Assignment/AssignmentCount';
import { Item } from './components/Assignment/Item';
import { useState } from 'react';



export interface Task {
  id: number;
  text: string;
  completed: boolean;
};

export function App() {
  const[tasks, setTasks] = useState<Task[]>([])
  const[inputValue, setInputValue] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.completed) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddTask() {
    if(!inputValue) {
      return
    }

    const newTask: Task = {
      id: new Date().getTime(),
      text: inputValue,
      completed: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }
  
  function handleRemoveTask(id: number) {
    const filteredTaks = tasks.filter((task) => task.id !== id)

    if(!confirm('Deseja mesmo apagar esta tarefa?')) {
      return
    }

    setTasks(filteredTaks)

  }

  function handleToggleTask({id, value}: {id:number, value:boolean}){
    const updatedTasks = tasks.map((task) => {
      if(task.id === id){
        return {...task, completed: value}
      }

      return {...task}
    })

    setTasks(updatedTasks)
  }


  return (
    <main className="h-screen bg-[#1A1A1A] flex flex-col items-center">
      <Header />

      <div className="w-full flex justify-center relative ">
        <div className="flex justify-center absolute -top-6 gap-2 w-full">
          <Input 
            type="text" 
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue} 
          />
          <Button onClick={handleAddTask}>
            Criar 
            <CirclePlus className='size-4 font-bold' />
          </Button>
        </div>
      </div>

      <div className="bg-[#1A1A1A] h-full w-full flex flex-col items-center mt-24">
        <AssignmentCount 
          taskCounter={tasks.length}
          checkedTasksCounter={checkedTasksCounter}
        
        />

        {tasks.length > 0 ?
          (
            <div className="w-[736px] flex flex-col gap-3 mt-6">
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}

      </div>
    </main>
  );
}
