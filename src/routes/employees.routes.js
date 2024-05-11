import { Router } from 'express';
import { getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployee } from '../controllers/employees.controller.js';

const router = Router()

router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployee) //Solamente será por el ID requerido

router.post('/employees', createEmployee)

//router.put('/employees/:id', updateEmployee) //Actualiza todos los datos
router.patch('/employees/:id', updateEmployee) //Actualiza parcial los datos


router.delete('/employees/:id', deleteEmployee)

export default router