import Logo from '../assets/Logo.png';

export function Header() {
    return (
        <div className="bg-[#0D0D0D] h-[200px] w-full flex flex-col justify-center items-center">
            <img src={Logo} alt="Logo da to-do-list" />
        </div>
    )
}