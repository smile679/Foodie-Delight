

const Payment =({ totalPrice })=>{

  function handleSubmit(){
    e.preventDefault();

  }
  return <form onSubmit={handleSubmit} className="w-full mt-5 bg-orange-100 p-5 rounded-lg shadow-orange-800 shadow-lg">
    <div className="w-full flex flex-col">
      <h3 className="text-2xl font-bold text-orange-950">Delivery Information</h3>
      <div className="w-full flex max-md:flex-col py-3 space-y-2">
        <div className="w-full flex flex-col mr-3">
          <label htmlFor="name" className="font-bold text-orange-950 pb-1 ">Full Name:</label>
          <input type="name" id="name" placeholder="Samson Gidey" required className=" text-orange-950 py-2 px-3 shadow-orange-950 shadow-inner rounded-md outline-0"/>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="phone" className="font-bold text-orange-950 pb-1">phone:</label>
          <input type="tel" id="phone" name="phone" placeholder="012-34-567-89" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}" required
          className="text-orange-950 py-2 px-3 shadow-orange-950 shadow-inner rounded-md outline-0"/>
        </div>
      </div>
      <div className="w-full flex flex-col mb-3">
          <label htmlFor="phone" className="font-bold text-orange-950 pb-1">Delivery Address</label>
          <input type="text" id="phone" name="address" placeholder="Addis Ababa, Bole" required
          className="text-orange-950 py-2 px-3 shadow-orange-950 shadow-inner rounded-md outline-0"/>
        </div>
        <div className="w-full flex flex-col pb-3 gap-2">
          <div className="w-full">
            <label htmlFor="telebirr" className="w-full flex py-2 px-2 mt-2 text-orange-950 shadow-orange-950 shadow-inner rounded-lg">
              <input type="radio" id="telebirr" name="pay" value="telebirr"/>
              <span className="ml-2">Telebirr</span>
            </label>
          </div>
          <div>
            <label htmlFor="cbeBirr" className="w-full flex py-2 px-2 my-2 text-orange-950 shadow-orange-950 shadow-inner rounded-lg">
              <input type="radio" id="cbeBirr" name="pay" value="cbeBirr"/>
              <span className="ml-2">CBE BIRR</span>
            </label>
          </div>
          <div>
            <label htmlFor="mpesa" className="w-full text-orange-950 flex py-2 px-2 shadow-orange-950 shadow-inner rounded-lg">
              <input type="radio" id="mpesa" name="pay" value="mpesa"/>
              <span className="ml-2">Mpessa - Safarycom</span>
            </label>
          </div>
        </div>
    </div>
      
      <button type="submit" className="w-full bg-orange-500 py-2 mt-3 text-orange-950 font-bold rounded-lg hover:rounded-md hover:bg-orange-600 hover:scale-105
      transition-all duration-150 shadow-inner shadow-orange-950"
      onClick={()=>alert(`sorry it's demo only`)}
    >Done {totalPrice}$</button>
  </form>
}

export default Payment;
