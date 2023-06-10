import React from "react";

const SubHeader = () => {
  return (
    <div className={"w-full flex justify-center bg-gray-100 py-2.5"}>
      <span className={"text-sm"}>
        마지막 중고가 확인은{" "}
        <span className={"text-red-700"}>{new Date().toLocaleString()}</span>에
        실행되었습니다.
      </span>
    </div>
  );
};

export default SubHeader;
