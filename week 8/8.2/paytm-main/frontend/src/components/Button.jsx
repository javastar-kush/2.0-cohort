export const Button = ({label, onClick}) =>{
    return <div className="pt-5">
        <button onClick={onClick} type="button" className="w-full bg-black text-white rounded-lg p-2">{label}</button>
    </div>
}