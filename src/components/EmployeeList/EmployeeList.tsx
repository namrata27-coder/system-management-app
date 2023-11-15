import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const EmployeeList = (): JSX.Element => {
  const dispatch = useDispatch();

  const loadEmplotyeeList = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

    dispatch({ type: "EMPLOYEE_LIST_DATA", payload: res.data });
  };
  const data: any = useSelector((state) => state);
  console.log(data?.store.listData, "data");

  useEffect(() => {
    loadEmplotyeeList();
  }, []);
  return <>List comp</>;
};
