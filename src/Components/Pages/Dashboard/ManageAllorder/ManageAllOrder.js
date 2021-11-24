import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Spinner from "../../Shared/Spinner/Spinner";

import Flash from "react-reveal/Flash";
import OrdersTable from "./OrdersTable/OrdersTable";

const ManageAllOrder = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { loading } = useAuth();

  // const handleApproval = (id) => {
  //   let newData = [];
  //   const filter = allOrders.find((match) => match._id === id);
  //   const rest = allOrders.filter((match) => match._id !== id);
  //   const { status } = filter;
  //   let updatedData = { ...filter };

  //   updatedData[status] = "Shipped";
  //   newData = [...rest, updatedData];
  //   setAllOrders(newData);
  //   // console.log(rest, updatedData);

  //   fetch(`https://safe-reaches-08421.herokuapp.com/orders/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(updatedData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data) {
  //         console.log(data);
  //       }
  //     });
  // };

  const handleApproval = (bk) => {
    let newData = [];
    const orders = allOrders.map((book) => book);
    const find = orders.find((matched) => matched._id === bk._id);
    if (find.status !== "Shipped") {
      const rest = allOrders.filter((pd) => pd._id !== bk._id);
      find.status = "Shipped";
      newData = [...rest, find];
      // console.log(find);
      setAllOrders(newData);

      fetch(`https://safe-reaches-08421.herokuapp.com/orders/${bk._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(find),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            alert("Hitting Put");
            setSuccess(true);
          }
        });
    }
  };

  const handleDelete = (id) => {
    setIsLoading(true);
    const proceed = window.confirm("Are you sure to proceed");
    if (proceed) {
      fetch(`https://safe-reaches-08421.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingOrders = allOrders.filter(
              (match) => match._id !== id
            );
            setAllOrders(remainingOrders);
            alert("Order Removed");
            setSuccess(true);
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("https://safe-reaches-08421.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      })
      .finally(() => setIsLoading(false));
    // console.log(allOrders);
  }, []);
  if (loading || isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      {success && (
        <div
          className="flex justify-between items-center bg-blue-100 border-t border-b border-green-500 text-green-700 px-4 py-3"
          role="alert"
        >
          <div>
            <p class="font-bold">Informational message</p>
            <p class="text-sm">Order Updated Successfully</p>
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
                    Name
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Email
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Product Title
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Status
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Edit
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Delete
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {allOrders.map((order) => (
                  <OrdersTable
                    key={order._id}
                    order={order}
                    handleDelete={handleDelete}
                    handleApproval={handleApproval}
                  ></OrdersTable>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrder;
