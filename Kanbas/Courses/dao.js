import model from "./model.js";
import pkg from 'mongodb';
const { ObjectId } = pkg;

export const createCourse = (course) => {
    return model.create(course);
}

export const findAllCourses = () => model.find();

export const findCourseById = (courseId) => model.findOne({_id: courseId });

export const updateCourse = (courseId, course) => model.updateOne({ _id: courseId }, { $set: course });

export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });

export const findCourseNumber = (courseId) => model.findById(courseId).select('number');