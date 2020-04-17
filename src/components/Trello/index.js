import React, { useEffect, useState } from "react"
import Board from "react-trello"
import { getStorage, storeData } from "./storageManagement"
import { board } from "./styling"

const components = {
  BoardWrapper: board,
}
let initialData = {
  lanes: [
    {
      id: "lane1",
      title: "Planned Tasks",
      label: "2/2",
      cards: [
        {
          id: "Card1",
          title: "Write Blog",
          description: "Can AI make memes",
          label: "30 mins",
        },
        {
          id: "Card2",
          title: "Pay Rent",
          description: "Transfer via NEFT",
          label: "5 mins",
          metadata: { sha: "be312a1" },
        },
      ],
    },
    {
      id: "lane2",
      title: "Completed",
      label: "0/0",
      cards: [],
    },
  ],
}

const Trello = () => {
  const [boardData, setboardData] = useState(initialData)
  const dataChange = argA => {
    storeData(argA)
  }

  useEffect(() => {
    // Runs on user mount
    const storedVal = getStorage()
    if (storedVal) {
      setboardData(storedVal)
    }
  }, [])

  return (
    <Board
      editable
      canAddLanes
      editLaneTitle
      data={boardData}
      onDataChange={dataChange}
      components={components}
    />
  )
}

export default Trello