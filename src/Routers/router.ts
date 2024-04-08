import {Router} from "express";
import * as auth from '../auth/auth.controller';
import * as controllerCheckin from '../Checkin/controllers/checkin.controller';
import * as controllerCliente from '../Cliente/controllers/cliente.controller';
import * as controllerEmpleado from '../Empleado/controllers/empleado.controller';
import * as controllerProveedor from '../Proveedor/controllers/proveedor.controller';
import * as controllerForma_pago from '../Forma_pago/controllers/forma-pago.controller';
import * as controllerReporte_Fallas from '../Reporte_fallas/controllers/reporte-falla.controller'


const router = Router();

router.route('/api/checkin/create').post(controllerCheckin.createCheckin);
router.route('/api/cliente/create').post(controllerCliente.createCliente);
router.route('/api/empleado/create').post(controllerEmpleado.createEmpleado);
router.route('/api/proveedor/create').post(controllerProveedor.createProveedor);
router.route('/api/forma-pago/create').post(controllerForma_pago.createFormaPago);
router.route('/api/reporte-falla/create').post(controllerReporte_Fallas.createReporte);



router.route('/api/auth/login').post(auth.login);


export default router;