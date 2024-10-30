import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum of 3 and 5 should return 8', () => {
    assert.strictEqual(sum(3, 5), 8);
});

test('sum of 3 and "5" (non-numeric) should return 0', () => {
    assert.strictEqual(sum(3, '5'), 0);
});

test('sum of "3" (non-numeric) and 5 should return 0', () => {
    assert.strictEqual(sum('3', 5), 0);
});

test('sum of "a" and "b" (both non-numeric) should return 0', () => {
    assert.strictEqual(sum('a', 'b'), 0);
});

test('sum of -3 and 5 should return 0', () => {
    assert.strictEqual(sum(-3, 5), 0);
});

test('sum of 3 and -5 should return 0', () => {
    assert.strictEqual(sum(3, -5), 0);
});

test('sum of -3 and -5 should return 0', () => {
    assert.strictEqual(sum(-3, -5), 0);
});

test('sum of 0 and 5 should return 5', () => {
    assert.strictEqual(sum(0, 5), 5);
});

test('sum of 3 and 0 should return 3', () => {
    assert.strictEqual(sum(3, 0), 3);
});

test('sum of 0 and 0 should return 0', () => {
    assert.strictEqual(sum(0, 0), 0);
});
