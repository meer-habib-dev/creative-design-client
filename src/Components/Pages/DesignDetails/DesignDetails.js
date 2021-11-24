import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import Navigation from "../Shared/Navigation/Navigation";
import ShowDetails from "./ShowDetails/ShowDetails";

const DesignDetails = () => {
  const [designs, setDesigns] = useState({});
  const { designId } = useParams();
  console.log(designId);

  useEffect(() => {
    fetch(`https://safe-reaches-08421.herokuapp.com/designs/${designId}`)
      .then((res) => res.json())
      .then((data) => setDesigns(data));
  }, []);
  console.log(designs);
  return (
    <div>
      <Navigation></Navigation>
      <ShowDetails designs={designs}></ShowDetails>
    </div>
  );
};

export default DesignDetails;
