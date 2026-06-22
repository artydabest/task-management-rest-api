const express = require("express");
const app = express();
app.use(express.json());

const tasks = [
{
    id: 1,
    title: "Learn APIs",
    description: "Complete API training module",
    status: "Loading",
    priority: "High",
    createdAt: "2026-06-17T10:00:00Z"
}  
,
    {
    id: 2,
    title: "Build Task Manager",
    description: "Implement CRUD operations",
    status: "Done",
    priority: "Low",
    createdAt: "2026-06-18T10:00:00Z"
}
];

app.get("/tasks", (req, res) => {

    let filteredtasks = tasks;

    if (req.query.status) {
        const q = String(req.query.status).toLowerCase();
        filteredtasks = filteredtasks.filter(
            task => String(task.status || "").toLowerCase() === q
        );
    }
    if (req.query.priority) {
        const q = String(req.query.priority).toLowerCase();
        filteredtasks = filteredtasks.filter(
            task => String(task.priority || "").toLowerCase() === q
        );
    }
    if (req.query.sort === "asc") {
    filteredtasks.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
}

if (req.query.sort === "desc") {
    filteredtasks.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
}
const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || filteredtasks.length;

const start = (page - 1) * limit;
const end = start + limit;

filteredtasks = filteredtasks.slice(start, end);

    res.status(200).json(filteredtasks);
});

app.get("/", (req,res) =>{
    res.status(200).json({
        message:"Task Is running"
    });
});

app.get("/tasks/:id", (req,res) =>{
    const task = tasks.find(task => task.id === Number(req.params.id));
    if(!task)
    {
        return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
});

app.post("/tasks", (req,res)=>{
    if(!req.body.title)
    {
        return res.status(400).json({message:"title is required"})
    }
    if(!req.body.description)
    {
        return res.status(400).json({message:"description is required"})
    }
    if(!req.body.status)
    {
            return res.status(400).json({message:"status is required"})
    }
    if(!req.body.priority)
    {
        return res.status(400).json({message:"priority is required"})
    }
     const newTask = {
        id: (tasks.length ? Math.max(...tasks.map(t => t.id)) : 0) + 1,
        title: String(req.body.title).trim(),
        status: String(req.body.status).trim(),
        priority: String(req.body.priority).trim(),
        createdAt: new Date().toISOString(),
        description: req.body.description,
        };
    tasks.push(newTask);
    res.status(201).json(newTask);
    });

app.put("/tasks/:id", (req,res) =>{
    const task = tasks.find(
        task => task.id === Number(req.params.id)
    );
    if (!task) {
        return res.status(404).json({message: "Task not found"
        });
    }
    if(req.body.title) 
        {
         task.title = req.body.priority;
        }
    if(req.body.description)
        {
        task.description = req.body.description;
        }
    if(req.body.status)
        {
        task.status = req.body.status;
        } 
    if(req.body.priority)
        {
        task.priority = req.body.priority;
        }
        res.status(200).json(task);
    });

app.delete("/tasks/:id", (req,res) => {
     const taskIndex = tasks.findIndex(
        task => task.id === Number(req.params.id)
    );

    if (taskIndex === -1) {
        return res.status(404).json({
            message: "Task not found"
        });
}
 tasks.splice(taskIndex, 1);

    res.status(200).json({
        message: "Task deleted successfully"
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
