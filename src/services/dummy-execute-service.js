import { helper } from './dummy-helper-service.js'

export const execute = () => {
    const result = helper();
    if (result) {
        return "Learning JS";
    } else {
        return "Learning ReactJS";
    }
}