import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum of 1 and 2 should be 3', () => {
    assert.strictEqual(sum(1, 2), 3);
});

test('sum of 10 and -5 should be 5', () => {
    assert.strictEqual(sum(10, -5), 5);
});

test('sum of -3 and -7 should be -10', () => {
    assert.strictEqual(sum(-3, -7), -10);
});

test('sum of 0 and 5 should be 5', () => {
    assert.strictEqual(sum(0, 5), 5);
});

test('sum of 0 and 0 should be 0', () => {
    assert.strictEqual(sum(0, 0), 0);
});
