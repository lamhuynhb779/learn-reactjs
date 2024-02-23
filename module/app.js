import logger from './my_module.js';
import { TYPE_LOG, TYPE_WARN, TYPE_ERR } from './constants.js';
// import * as constants from './constants.js';

logger('demo ...', TYPE_WARN);


import { logger2 } from './middle_man.js';

logger2('huhuhu', TYPE_ERR);