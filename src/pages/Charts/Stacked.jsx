import React from "react";
import { Header, Stacked as StackChart } from "../../components";

const Stacked = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header
        category="Stacked"
        title="Revenue Map"
      />
      <div className="w-full">
        <StackChart/>
      </div>
    </div>
  );
};

export default Stacked;
