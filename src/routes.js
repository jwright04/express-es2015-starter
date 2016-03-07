import { Router } from 'express';
import rootPath from 'root-path';

const router = Router();

router.get('*', (req, res) => {
    res.sendFile(rootPath() + '/public/index.html');
})

export default router;