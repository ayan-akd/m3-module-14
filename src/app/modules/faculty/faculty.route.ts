import express from 'express';
import { FacultyControllers } from './faculty.controller';
import validateRequest from '../../middlewares/validateRequest';
import { facultyValidations } from './faculty.validation';

const router = express.Router();

router.get('/', FacultyControllers.getAllFaculties);

router.get('/:facultyId', FacultyControllers.getSingleFaculty);

router.patch('/:facultyId', validateRequest(facultyValidations.updateFacultyValidationSchema) , FacultyControllers.updateFaculty);

router.delete('/:facultyId', FacultyControllers.deleteFaculty);


export const FacultyRoutes = router;
