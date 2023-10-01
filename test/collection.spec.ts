import { expect } from 'chai';
import { Collection, Constants, Enum, Environment, EventDispatcher, Exception, Model, Provider } from '../src/index';

const model: Model.Player = new Model.Player({
    id: 1,
	name: 'Matt Kenefick',
});

/**
 * Model Player Test
 */
describe('ModelPlayer', () => {
    it('should have a name', () => {
		console.log(Constants);
		console.log(Exception);
		console.log(Provider);
		console.log(Environment);
		console.log(EventDispatcher);

		const name = model.getName();

        expect(name).to.equal('Matt Kenefick');
    });
});
