import test from 'node:test';
import assert from 'node:assert/strict';
import { Model } from '../src';
import userModel from './data/user';

test('hello', () => {
	const message = 'Hello';
	assert.equal(message, 'Hello', 'checking the greeting');
});

const model: Model.Player = new Model.Player({
	id: 1,
	name: 'Matt Kenefick',
});

/**
 * Model Player Test
 */
test('ModelPlayer', () => {
	const name = model.getName();

	assert.equal(name, 'Matt Kenefick', 'checking the name');
});
