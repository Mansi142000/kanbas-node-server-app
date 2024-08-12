import Database from "../Database/index.js";
import {
  createCourse,
  findAllCourses,
  deleteCourse,
  updateCourse,
  findCourseById,
} from "./dao.js";
export default function CourseRoutes(app) {
  app.post("/api/courses", async (req, res) => {
    const course = { ...req.body, _id: new Date().getTime().toString() };
    await createCourse(course);
    res.send(course);
  });
  app.get("/api/courses", async (req, res) => {
    res.send(await findAllCourses());
  });
  app.delete("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    await deleteCourse(id);
    res.sendStatus(204);
  });

  app.put("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    await updateCourse(id, course);
    res.sendStatus(204);
  });

  app.get("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const course = await findCourseById(id);
    console.log(course);
    res.send(course);
  });
}
