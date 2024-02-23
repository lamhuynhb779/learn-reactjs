// Thằng middle man này sẽ đứng trung gian export default của module khác
export {default} from './my_module.js';

// Hoặc viết cách này, kiểu không làm mà muốn có ăn =)))
// import logger from './my_module.js';
// export default logger;

// Tiếp theo là kiểu ăn cướp xong rồi phi tang chứng cứ
export {default as logger2} from './my_module.js';