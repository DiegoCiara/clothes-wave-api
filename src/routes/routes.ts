import { ensureAuthenticated } from '@middlewares/ensureAuthenticated';
import DealRoutes from '@routes/deal.routes';
import Router from 'express';
import AuthRoutes from './auth.routes';
import AutomationRoutes from './automation.routes';
import PartnerRoutes from './partner.routes';
import MailerRoutes from './mailer.routes';
import GoalRoutes from './goal.routes';
import CompanyRoutes from './company.routes';
import ConvenioRoutes from './convenio.routes';
import ContractRoutes from './contract.routes';
import ContactRoutes from './contact.routes';
import PipelineRoutes from './pipeline.routes';
import FunnelRoutes from './funnel.routes';
import ProductRoutes from './product.routes';
import UserRoutes from './user.routes';

const routes = Router();

routes.get('/', (req, res) => {
  res.json({ API: 'Terceiro Semetre' });
});

// prefix
routes.use('/auth', AuthRoutes);
routes.use('/user', UserRoutes); // middlewares estão no UserRoutes;
routes.use('/pipeline', PipelineRoutes);
routes.use('/automation', AutomationRoutes);
routes.use('/partner', PartnerRoutes);
routes.use('/mail', MailerRoutes);
routes.use('/goal', GoalRoutes);
routes.use('/funnel', FunnelRoutes);
routes.use('/company', CompanyRoutes);
routes.use('/product', ProductRoutes);
routes.use('/convenio', ConvenioRoutes);
routes.use('/contact', ContactRoutes);
routes.use('/contract', ContractRoutes);
routes.use('/deal', DealRoutes);

export default routes;
