import { useState } from "react";

const PAYMENT_METHODS = [
  { id: "telebirr", label: "Telebirr" },
  { id: "cbebirr", label: "CBE Birr" },
  { id: "mpesa", label: "M-Pesa" },
];

const Payment = ({ totalPrice }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("telebirr");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Sorry ${formData.fullName}, this is a demo only.`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mt-5 bg-white border border-gray-100 p-6 rounded-2xl"
    >
      <h3 className="text-xl font-extrabold text-gray-900 mb-5">
        Delivery information
      </h3>

      <div className="w-full flex max-md:flex-col gap-4 mb-4">
        <div className="w-full flex flex-col">
          <label
            htmlFor="name"
            className="text-sm font-semibold text-gray-700 pb-1"
          >
            Full name
          </label>
          <input
            type="text"
            id="name"
            name="fullName"
            placeholder="Samson Gidey"
            required
            className="text-gray-900 text-sm py-2.5 px-3 border border-gray-200 rounded-lg outline-none focus:border-orange-500"
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            value={formData.fullName}
          />
        </div>
        <div className="w-full flex flex-col">
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-gray-700 pb-1"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="0912345678"
            pattern="[0-9]{10}"
            title="Enter a 10-digit phone number, digits only"
            required
            className="text-gray-900 text-sm py-2.5 px-3 border border-gray-200 rounded-lg outline-none focus:border-orange-500"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            value={formData.phone}
          />
        </div>
      </div>

      <div className="w-full flex flex-col mb-5">
        <label
          htmlFor="address"
          className="text-sm font-semibold text-gray-700 pb-1"
        >
          Delivery address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Addis Ababa, Bole"
          required
          className="text-gray-900 text-sm py-2.5 px-3 border border-gray-200 rounded-lg outline-none focus:border-orange-500"
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          value={formData.address}
        />
      </div>

      <div className="w-full flex flex-col mb-6">
        <label className="text-sm font-semibold text-gray-700 mb-2">
          Payment method
        </label>
        <div className="flex flex-col gap-2">
          {PAYMENT_METHODS.map((method) => (
            <label
              htmlFor={method.id}
              key={method.id}
              className={`w-full flex items-center py-3 px-4 rounded-xl border cursor-pointer transition ${
                paymentMethod === method.id
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="radio"
                id={method.id}
                name="pay"
                checked={paymentMethod === method.id}
                value={method.id}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="accent-orange-500"
              />
              <span className="ml-3 text-sm font-medium text-gray-800">
                {method.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 py-3 text-white font-semibold rounded-full transition"
      >
        Pay ${totalPrice}
      </button>
    </form>
  );
};

export default Payment;
