import React, { useState } from "react";
import { VideoList } from "./components/VideoList/VideoList";
import { HOCVideo } from "./components/HOC/HOCVideoList";
import { data } from "./data/data";

export default function App() {
  const [list, setList] = useState(data);

  return HOCVideo(list)(VideoList)
}
