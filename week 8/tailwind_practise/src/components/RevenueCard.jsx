 export const RevenueCard = ({
   title,
   orderCount,
   amount
 }) =>{
    return <div className="bg-white rounded-md shadow-md p-5 hover:bg-gray-200">
      <div className="flex text-gray-500">
         {title}
         <div className="ml-1 pt-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
               <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
         </div>
      </div>
      <div className="flex justify-between pt-3">
         <div className="font-semibold text-2xl">₹ {amount}</div>
         <div className="pt-2">
            {orderCount ? <div className="flex cursor-pointer">
               <div className="text-blue-500 underline font-medium">
               {orderCount} Order(s) 
               </div>
               <div className="pt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-blue-600 size-5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
               </div>
            </div> : null}
         </div>
      </div>
    </div>
 }