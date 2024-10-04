export const Balance = ({value}) =>{
    return <div className="flex shadow h-15 flex justify-center p-4 pb-2">
        <div className="text-lg font-bold mt-5">
            Your Balance
        </div>
        <div className="text-lg mt-5 ml-2 font-semibold">
           INR {value}
        </div>
    </div>
}