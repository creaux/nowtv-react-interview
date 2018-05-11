const { __REDUX_DEVTOOLS_EXTENSION__ } = window;

export default __REDUX_DEVTOOLS_EXTENSION__ ? __REDUX_DEVTOOLS_EXTENSION__() : enhancer => enhancer;
