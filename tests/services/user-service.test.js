import UserService from '../../src/services/user-service.js'
import UserRepository from '../../src/repositories/user-repository.js'

jest.mock('../../src/repositories/user-repository.js')

describe('User service signup', () => {
    test('Create a user', 
    async () => {
        const data = {
            email: 'a@b.com',
            password: 'passpass'
        };
        (UserRepository.prototype.create).mockReturnValue({
            ...data,
            createdAt: '2024-02-12',
            updatedAt: '2024-02-12',
        })
        const service = new UserService();
        const response = await service.signupUser();
        expect(response.email).toBe(data.email);
    })
})