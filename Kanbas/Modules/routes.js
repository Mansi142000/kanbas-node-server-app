import db from "../Database/index.js";
import {
  createModule,
  updateModule,
  deleteModule,
  findModuleforCourse,
} from "./dao.js";
export default function ModuleRoutes(app) {
  app.get("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const modules = await findModuleforCourse(cid);
    res.json(modules);
  });
  app.post("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const module = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    await createModule(module);
    res.json(module);
  });

  app.delete("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    await deleteModule(mid);
    res.sendStatus(200);
  });
  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const module = req.body;
    await updateModule(mid, module);
    res.sendStatus(204);
  });
}
