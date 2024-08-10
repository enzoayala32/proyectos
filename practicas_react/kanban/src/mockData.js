import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: "📋por hacer",
    tasks:[
        {
            id:uuidv4(),
            title:"estudiar javascript"
        },
        {
            id:uuidv4(),
            title:"estudiar react"
        },
        {
            id:uuidv4(),
            title:"estudiar react"
        },
    ]
  },
  {
    id: uuidv4(),
    title: "✏️en proceso",
    tasks:[
        {
            id:uuidv4(),
            title:"estudiar javascript"
        },
        {
            id:uuidv4(),
            title:"estudiar react"
        },
        {
            id:uuidv4(),
            title:"estudiar react"
        },
    ]
    },
    {
        id: uuidv4(),
        title: "✔️ Completado",
        tasks:[
            {
                id:uuidv4(),
                title:"estudiar javascript"
            },
        ]
        },
];
export default mockData