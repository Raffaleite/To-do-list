import { CheckCircle } from "@phosphor-icons/react";
import { Circle, Trash2 } from "lucide-react";
import { Task } from '../../app'


interface ItemProps {
    data: Task
    removeTask: (id: number) => void
    toggleTaskStatus: ({id, value}: {id:number, value:boolean}) => void
}

export function Item({ data, removeTask, toggleTaskStatus } :ItemProps) {

    function handleTaskToggle() {
        console.log({ id: data.id, value: !data.completed })
        toggleTaskStatus({ id: data.id, value: !data.completed })
    }

    function handleRemove() {
        removeTask(data.id);
    }

    return (
        <div
            className={` bg-[#262626] p-4 rounded-lg flex gap-3 items-center`}
        >
            {data.completed ? (
                <>
                    <CheckCircle size={23} weight="fill" className='text-[#5E60CE] flex-shrink-0 cursor-pointer' onClick={handleTaskToggle} />
                    <span className="font-sans font-normal leading-[1.4rem] text-sm text-[#808080] flex-grow line-through">{data.text}</span>
                    <Trash2 className='size-4 text-[#808080] flex-shrink-0 cursor-pointer' onClick={handleRemove}/>
                </>
            ) : (
                <>
                    <Circle className='text-[#4EA8DE] size-6 flex-shrink-0 cursor-pointer' onClick={handleTaskToggle} />
                    <span className="font-sans font-normal leading-[1.4rem] text-sm text-[#F2F2F2] flex-grow">{data.text}</span>
                    <Trash2 className='size-4 text-[#808080] flex-shrink-0 cursor-pointer' onClick={handleRemove}/>
                </>
            )}
        </div>
    )
}
