import "dotenv/config";
import express, {Request, Response} from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/api/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "healthy",
    message: "running",
  });
});

app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`)
})