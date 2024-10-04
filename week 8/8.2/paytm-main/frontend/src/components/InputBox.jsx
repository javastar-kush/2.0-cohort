export const InputBox = ({content,placeholder, onChange}) =>{
    return <div>
        <div className="text-lg font-medium text-left py-2">
            {content}
        </div>
        <input type="text" onChange={onChange} className="border border-slate-700 py-1 placeholder:p-1 rounded w-full px-1" placeholder={placeholder}/>
    </div>
}