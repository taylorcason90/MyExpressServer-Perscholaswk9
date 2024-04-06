import {Router} from 'express';

import usersRoute from './users';

export default function(app: Router) {
    const route = Router();
    app.use('/join-us',route);

    return route;
}