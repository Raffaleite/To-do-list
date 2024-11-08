import Clipboard from '../../assets/Clipboard.png'

export function Empty() {
    return (
        <div className='w-[736px] h-[244px] mt-6 border-t rounded-tl-lg rounded-tr-lg border-[#333333] flex flex-col items-center justify-center'>
            <img src={Clipboard} alt="Caderno de anotações" className='mb-4' />
            <div>
                <p className='font-bold font-sans text-base leading-[1.4rem] text-[#808080]'>Você ainda não tem tarefas cadastradas</p>
                <p className='font-normal font-sans text-base leading-[1.4rem] text-[#808080] text-center'>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}