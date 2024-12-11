import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post('/create-academic-semester', validateRequest(AcademicSemesterValidation.CreateAcademicSemesterValidationSchema), AcademicSemesterController.createAcademicSemester);
router.get('/', AcademicSemesterController.getAllAcademicSemester);
router.get('/:id', AcademicSemesterController.getSingleAcademicSemester);
router.patch('/:id', validateRequest(AcademicSemesterValidation.UpdateAcademicSemesterValidationSchema) , AcademicSemesterController.updateAcademicSemester);

export const AcademicSemesterRoute = router;
