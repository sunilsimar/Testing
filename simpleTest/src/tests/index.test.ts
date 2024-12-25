import { describe, expect, it } from '@jest/globals';
import { sum } from '../index';
import { multiply } from '../index';

describe('Testing sum function', () => {
    it('should sum 1 and 2 correctly', () => {
        const finalAnswer = sum(1,2);
        expect(finalAnswer).toBe(3);
    });
    it('should sum 1 and 3 correctly', () => {
        const finalAnswer = sum(1,3);
        expect(finalAnswer).toBe(4);
    });
});

describe('Testing multiply function', () => {
    it('multiply 1 and 2 correctly', () => {
        const finalAnswer = multiply(1,2);
        expect(finalAnswer).toBe(2);
    });
    it('multiply 1 and 3 correctly', () => {
        const finalAnswer = multiply(1,3);
        expect(finalAnswer).toBe(3);
    });
});