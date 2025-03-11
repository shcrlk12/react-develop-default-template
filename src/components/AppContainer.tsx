import React from "react";

type AppContainerProps = {
  children: React.ReactNode;
};

const AppContainer = (props: AppContainerProps) => {
  return (
    <div className="flex justify-center h-screen bg-gray-50">
      <div className="w-[1340px] h-4">{props.children}</div>
    </div>
  );
};

export default AppContainer;
