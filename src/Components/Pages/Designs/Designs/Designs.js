import React from "react";
import useAuth from "../../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Spinner from "../../Shared/Spinner/Spinner";
import DesignHome from "../DesignHome/DesignHome";
import DesignMain from "../DesignMain/DesignMain";

const Designs = () => {
  const { loading } = useAuth();
  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="relative">
      <Navigation></Navigation>
      <DesignHome></DesignHome>
      <DesignMain></DesignMain>
      <Footer></Footer>
    </div>
  );
};

export default Designs;
