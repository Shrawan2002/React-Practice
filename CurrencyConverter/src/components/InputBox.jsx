import { useId } from "react"

export default function InputBox({
    label,
    amount,
    optionValue;

}){
    const amountId = useId();
    return (
        <div className=" flex w-white p-3  rounded-lg text-sm">
            <div className="w-1/2">
             <label className="inline-block 
             text-black/40 mb-2"
             htmlFor={amountId}
              >
               {label}
            </label>
            <input type="number" 
            value={amount}
             id= {amountId}
             />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className='text-black/40 mb-2 w-full'>Currency Type</p>
              <select 
              className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer
                outline-none'
              >

              </select>
            </div>
        </div>
    )
}