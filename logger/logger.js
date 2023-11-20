import {TYPE_LOG} from '../constants/constant.js';

function log(log, type = TYPE_LOG) {
    console[type](log);
}

export default log;