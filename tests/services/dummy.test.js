import { execute } from '../../src/services/dummy-execute-service.js';
import { helper } from '../../src/services/dummy-helper-service.js';

jest.mock('../../src/services/dummy-helper-service.js');

test('result is true, returns Learning JS', 
() => {
    helper.mockReturnValue(true);
    const result = execute();
    expect(result).toBe('Learning JS');
})

test('result is false, returns Learning ReactJS', 
() => {
    helper.mockReturnValue(false);
    const result = execute();
    expect(result).toBe('Learning ReactJS');
})