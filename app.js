import mylog from './logger/logger.js';

import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from './constants/constant.js';

import * as error_code from './enums/error_code.js';

mylog('Test message...', TYPE_ERROR);