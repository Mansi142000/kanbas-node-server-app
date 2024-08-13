import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import UserRoutes from "./Users/routes.js";
import session from "express-session";
import "dotenv/config";

//                         mongodb+srv://Mansinegi14:<password>     @kanbas.ty8bc.mongodb.net/?retryWrites=true&w=majority&appName=Kanbas
const CONNECTION_STRING = "mongodb+srv://Mansinegi14:Mneg1234567890!@kanbas.ty8bc.mongodb.net/Kanbas?retryWrites=true&w=majority&appName=Kanbas";
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
  })
);
app.use(express.json());
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));

UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);
