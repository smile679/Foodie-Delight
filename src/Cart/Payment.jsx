import { useState } from "react";


const Payment =({ totalPrice })=>{
  const [formData, setFormData] = useState({fullName: '',phone: '', address: ''})
  const [paymentMethod, setPaymentMethod] = useState('telebirr')

  function handleSubmit(e){
    e.preventDefault();
    alert(`sorry ${formData.fullName}, it's demo only`)
    // console.log(formData.fullName)
    // console.log(formData.phone)
    // console.log(formData.address)
    // console.log(paymentMethod)
  }
  return <form onSubmit={handleSubmit} className="w-full mt-5 bg-orange-100 p-5 rounded-lg shadow-orange-800 shadow-lg">
    <div className="w-full flex flex-col">
      <h3 className="text-2xl font-bold text-orange-950">Delivery Information</h3>
      <div className="w-full flex max-md:flex-col py-3 space-y-2">
        <div className="w-full flex flex-col mr-3">
          <label htmlFor="name" className="font-bold text-orange-950 pb-1">Full Name:</label>
          <input type="name" id="name" placeholder="Samson Gidey" required className=" text-orange-950 py-2 px-3 shadow-orange-950 shadow-inner rounded-md outline-0"
          onChange={(e)=>setFormData({...formData, fullName: e.target.value})} value={formData.fullName}/>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="phone" className="font-bold text-orange-950 pb-1">phone:</label>
          <input type="tel" id="phone" name="phone" placeholder="092-34-567-89" pattern="[0-9]{10}" required
          className="text-orange-950 py-2 px-3 shadow-orange-950 shadow-inner rounded-md outline-0"
          onChange={(e)=>setFormData({...formData, phone: e.target.value})} value={formData.phone}/>
        </div>
      </div>
      <div className="w-full flex flex-col mb-3">
          <label htmlFor="address" className="font-bold text-orange-950 pb-1">Delivery Address</label>
          <input type="text" id="address" name="address" placeholder="Addis Ababa, Bole" required
          className="text-orange-950 py-2 px-3 shadow-orange-950 shadow-inner rounded-md outline-0"
          onChange={(e)=>setFormData({...formData, address: e.target.value})} value={formData.address}/>
        </div>
        <div className="w-full flex flex-col pb-3 gap-2">
          <label className="text-orange-950 font-bold">Payment Method</label>
          {['telebirr', 'cbebirr', 'mpesa'].map(method=>(
            <label htmlFor={method} key={method} className="w-full flex py-2 px-2 mt-2 text-orange-950 rounded-lg hover:bg-orange-200">
              <input type="radio" id={method} name="pay" checked={paymentMethod === method} value={method} onChange={(e)=>setPaymentMethod(e.target.value)}/>
              <span className="ml-2 capitalize">{method}</span>
            </label>
          ))}
        </div>
    </div>
      
      <button type="submit" className="w-full bg-orange-500 py-2 mt-3 text-orange-950 font-bold rounded-lg hover:rounded-md hover:bg-orange-600 hover:scale-105
      transition-all duration-150 shadow-inner shadow-orange-950">Done {totalPrice}$</button>
  </form>
}

export default Payment;