import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { v4 } from "uuid"; // used to generate unique id

export const PlaygroundContext = createContext();

const initialData = [
  {
    id: v4(),
    title: "ZainFolder",
    folder: [
      {
        id: v4(),
        title: "Folder name",
        language: "javascript",
        code: "console.log(hello);",
      },
      {
        id: v4(),
        title: "Folder name",
        language: "javascript",
        code: "console.log(hello);",
      },
      {
        id: v4(),
        title: "Folder name",
        language: "javascript",
        code: "console.log(hello);",
      },
    ],
  },
  {
    id: v4(),
    title: "ZainFolder_1",
    folder: [
      {
        id: v4(),
        title: "Folder name",
        language: "cpp",
        code: "cout<<hello;",
      },
    ],
  },
  {
    id: v4(),
    title: "ZainFolder",
    folder: [
      {
        id: v4(),
        title: "Folder name",
        language: "javascript",
        code: "console.log(hello);",
      },
    ],
  },
  {
    id: v4(),
    title: "ZainFolder",
    folder: [
      {
        id: v4(),
        title: "Folder name",
        language: "javascript",
        code: "console.log(hello);",
      },
    ],
  },
  {
    id: v4(),
    title: "ZainFolder",
    folder: [
      {
        id: v4(),
        title: "Folder name",
        language: "javascript",
        code: "console.log(hello);",
      },
    ],
  },
];

function Provider({ children }) {
  const [data,setData] = useState(initialData);

  useEffect(()=>{
    localStorage.setItem('data',JSON.stringify(data))
  },[data])

  return (
    <>
      <PlaygroundContext.Provider value={data}>
        {children}
      </PlaygroundContext.Provider>
    </>
  );
}

export default Provider;
