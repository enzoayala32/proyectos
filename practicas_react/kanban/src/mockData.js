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
            title:"estudiar html"
        },
    ]
  },
  {
    id: uuidv4(),
    title: "✏️en proceso",
    tasks:[
        {
            id:uuidv4(),
            title:"estudiar BBDD"
        },
        {
            id:uuidv4(),
            title:"estudiar firebase"
        },
        {
            id:uuidv4(),
            title:"estudiar angular"
        },
    ]
    },
    {
        id: uuidv4(),
        title: "✔️ Completado",
        tasks:[
            {
                id:uuidv4(),
                title:"hacer proyecto con drag and drop"
            },
        ]
        },
];
export default mockData