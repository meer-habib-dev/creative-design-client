import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Spinner from "../../Shared/Spinner/Spinner";
import MyOrderTable from "./MyOrderTable/MyOrderTable";
import Flash from "react-reveal/Flash";

const Myorder = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user, loading } = useAuth();
  const [success, setSuccess] = useState(false);
  // const { email } = user;
  const handleOrderDelete = (id) => {
    const process = window.confirm("Are you sure to proceed");
    if (process) {
      fetch(`https://safe-reaches-08421.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            setSuccess(true);
            alert("Order Removed");
          }
          const remainingOrders = myOrders.filter((match) => match._id !== id);
          setMyOrders(remainingOrders);
        });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://safe-reaches-08421.herokuapp.com/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
      })
      .finally(() => setIsLoading(false));
  }, [user]);
  if (loading || isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      {success && (
        <div
          className="flex justify-between items-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
          role="alert"
        >
          <div>
            <p class="font-bold">Informational message</p>
            <p class="text-sm">Your Order Removed Successfully</p>
          </div>
          <button
            className=" font-extrabold text-2xl  mr-12"
            onClick={() => setSuccess(false)}
          >
            <p>X</p>
          </button>
        </div>
      )}
      <Flash>
        <p className="text-center text-5xl font-bold pt-40 md:pt-20 ">
          Manage Users Orders..
        </p>
      </Flash>
      <div style={{ height: "450px" }} className="flex flex-col mt-20 h-full ">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Title
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Brand
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Price
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Status
                  </th>

                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Delete
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {myOrders.map((order) => (
                  <MyOrderTable
                    order={order}
                    handleOrderDelete={handleOrderDelete}
                  ></MyOrderTable>
                ))}
                {/* <MyOrderTable></MyOrderTable> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myorder;
