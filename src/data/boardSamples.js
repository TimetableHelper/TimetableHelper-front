export const BOARD_STORAGE_KEY = 'timetableHelper.boardReactions.v1';

export const boardReactions = [
  { emoji: '🧡', label: '좋아요' },
  { emoji: '😄', label: '멋져요' },
  { emoji: '😱', label: '놀라워요' },
];

// 화면 체험을 위한 예시이며 실제 학생의 시간표나 수강 정보가 아닙니다.
export const boardSamples = [
  {
    id: 'morning',
    title: '오전 수업으로 시작하는 하루',
    description: '오전에 수업을 듣고 오후 시간을 활용하는 구성입니다.',
    courses: [
      { day: 0, start: 9, end: 11, name: '자료구조', color: 'blue' },
      { day: 0, start: 11, end: 13, name: '교양영어', color: 'purple' },
      { day: 1, start: 9, end: 12, name: '컴퓨터구조', color: 'mint' },
      { day: 2, start: 9, end: 11, name: '자료구조', color: 'blue' },
      { day: 2, start: 11, end: 13, name: '글쓰기', color: 'peach' },
      { day: 3, start: 9, end: 11, name: '교양영어', color: 'purple' },
      { day: 4, start: 10, end: 12, name: '수학의 이해', color: 'lavender' },
    ],
  },
  {
    id: 'balanced',
    title: '수업 사이에 여유를 둔 시간표',
    description: '수업 사이에 점심과 복습 시간을 남겨두었습니다.',
    courses: [
      { day: 0, start: 10, end: 12, name: '운영체제', color: 'blue' },
      { day: 0, start: 14, end: 16, name: '교양영어', color: 'purple' },
      { day: 1, start: 11, end: 13, name: '웹프로그래밍', color: 'mint' },
      { day: 2, start: 10, end: 12, name: '운영체제', color: 'blue' },
      { day: 2, start: 14, end: 16, name: '글쓰기', color: 'peach' },
      { day: 3, start: 11, end: 13, name: '데이터베이스', color: 'lavender' },
      { day: 4, start: 14, end: 16, name: '교양영어', color: 'purple' },
    ],
  },
  {
    id: 'afternoon',
    title: '오후에 모아 듣는 수업',
    description: '오전에는 여유를 두고 오후 수업에 집중하는 구성입니다.',
    courses: [
      { day: 0, start: 13, end: 15, name: '알고리즘', color: 'blue' },
      { day: 0, start: 15, end: 17, name: '디지털디자인', color: 'purple' },
      { day: 1, start: 14, end: 17, name: '웹프로그래밍', color: 'mint' },
      { day: 2, start: 13, end: 15, name: '알고리즘', color: 'blue' },
      { day: 3, start: 13, end: 15, name: '문화와 예술', color: 'peach' },
      { day: 3, start: 15, end: 17, name: '디지털디자인', color: 'purple' },
      { day: 4, start: 14, end: 16, name: '데이터베이스', color: 'lavender' },
    ],
  },
];

export function emptyBoardReactions() {
  return Object.fromEntries(boardSamples.map(({ id }) => [id, [false, false, false]]));
}

export function parseBoardReactions(serialized) {
  const result = emptyBoardReactions();
  try {
    const saved = JSON.parse(serialized);
    if (!saved || typeof saved !== 'object' || Array.isArray(saved)) return result;

    boardSamples.forEach(({ id }) => {
      if (Array.isArray(saved[id])) {
        result[id] = boardReactions.map((_, index) => saved[id][index] === true);
      }
    });
  } catch {
    // 손상되었거나 이전 형식의 저장값은 빈 반응으로 복구합니다.
  }
  return result;
}

export function toggleBoardReaction(current, sampleId, reactionIndex) {
  if (
    !boardSamples.some(({ id }) => id === sampleId) ||
    !Number.isInteger(reactionIndex) ||
    reactionIndex < 0 ||
    reactionIndex >= boardReactions.length
  ) {
    return current;
  }

  return {
    ...current,
    [sampleId]: current[sampleId].map((selected, index) =>
      index === reactionIndex ? !selected : selected
    ),
  };
}
