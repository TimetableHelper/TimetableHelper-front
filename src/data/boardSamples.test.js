import {
  boardSamples,
  emptyBoardReactions,
  parseBoardReactions,
  toggleBoardReaction,
} from './boardSamples';

test('invalid or unexpected storage falls back to empty reactions', () => {
  [null, '{broken', 'null', '[]', 'true', '"text"'].forEach((saved) => {
    expect(parseBoardReactions(saved)).toEqual(emptyBoardReactions());
  });
});

test('only known samples and boolean reaction values are restored', () => {
  const restored = parseBoardReactions(JSON.stringify({
    morning: [true, 200, 'true', true],
    balanced: 'invalid',
    unknown: [true, true, true],
  }));
  expect(restored).toEqual({
    morning: [true, false, false],
    balanced: [false, false, false],
    afternoon: [false, false, false],
  });
});

test('a reaction toggles back off and persists without changing another card', () => {
  const empty = emptyBoardReactions();
  const selected = toggleBoardReaction(empty, 'morning', 0);
  expect(selected.morning).toEqual([true, false, false]);
  expect(selected.balanced).toEqual([false, false, false]);
  expect(empty.morning).toEqual([false, false, false]);
  expect(parseBoardReactions(JSON.stringify(selected))).toEqual(selected);
  expect(toggleBoardReaction(selected, 'morning', 0)).toEqual(empty);
});

test('invalid reaction requests do not alter the state', () => {
  const empty = emptyBoardReactions();
  expect(toggleBoardReaction(empty, 'unknown', 0)).toBe(empty);
  expect(toggleBoardReaction(empty, 'morning', 3)).toBe(empty);
  expect(toggleBoardReaction(empty, 'morning', -1)).toBe(empty);
});

test('sample courses fit in the displayed week and do not overlap', () => {
  boardSamples.forEach((sample) => {
    const occupied = new Set();
    sample.courses.forEach((course) => {
      expect(course.day).toBeGreaterThanOrEqual(0);
      expect(course.day).toBeLessThan(5);
      expect(course.start).toBeGreaterThanOrEqual(9);
      expect(course.end).toBeLessThanOrEqual(18);
      expect(course.end).toBeGreaterThan(course.start);
      for (let hour = course.start; hour < course.end; hour += 1) {
        const slot = `${course.day}-${hour}`;
        expect(occupied.has(slot)).toBe(false);
        occupied.add(slot);
      }
    });
  });
});
