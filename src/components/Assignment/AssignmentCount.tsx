
interface AssignmentCountProps {
  taskCounter: number
  checkedTasksCounter: number
}

export function AssignmentCount({ taskCounter, checkedTasksCounter }: AssignmentCountProps) {


  return (
    <div className='w-[736px]'>
      <div className='flex justify-between'>
        <p className='text-[#4EA8DE] font-sans font-bold'>Tarefas criadas <span className='text-white bg-[#333333] px-2 py-[2px] rounded-full ml-2'>{taskCounter}</span></p>
        <p className='text-[#8284FA] font-sans font-bold'>Concluídas
          <span className='text-white bg-[#333333] px-2 py-[2px] rounded-full ml-2'>
            { taskCounter === 0 ? taskCounter : `${checkedTasksCounter} de ${taskCounter}` }
          </span>
        </p>
      </div>
    </div>
  )
}