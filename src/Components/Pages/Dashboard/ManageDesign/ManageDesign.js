import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Spinner from "../../Shared/Spinner/Spinner";
import DesignTable from "./DesignTable/DesignTable";
import Flash from "react-reveal/Flash";
// import Table from "./Table";

const ManageDesign = () => {
  const [designs, setDesigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { loading } = useAuth();

  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure to procced");
    if (procced) {
      // console.log(id);
      fetch(`https://safe-reaches-08421.herokuapp.com/designs/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Design Deleted");
            const remainDesigns = designs.filter((design) => design._id !== id);
            setDesigns(remainDesigns);
          }
        });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("https://safe-reaches-08421.herokuapp.com/designs")
      .then((res) => res.json())
      .then((data) => {
        setDesigns(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (loading || isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <Flash>
        <p className="text-center text-5xl font-bold pt-40 md:pt-10 ">
          Manage Post Design..
        </p>
      </Flash>
      ;
      <div style={{ height: "450px" }} className="flex flex-col mt-8  ">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    ID
                  </th>
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
                    Edit
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Delete
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {designs.map((design) => (
                  <DesignTable
                    key={design._id}
                    design={design}
                    handleDelete={handleDelete}
                  ></DesignTable>
                ))}
                {/* {bookings.map((booking) => (
                <Table
                  booking={booking}
                  handleDelete={handleDelete}
                  handleApproval={handleApproval}
                ></Table>
              ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageDesign;
