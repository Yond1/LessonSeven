import React, { useState } from "react";
import  List  from "./components/TaskTwo/List/List";
import { data2 } from "./data/data";

export default function App() {
  const [list, setList] = useState(data2);

  return <List list={list} />;
}
