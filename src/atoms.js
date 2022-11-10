import { atom } from 'recoil';
import { v1 } from 'uuid';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'userData',
  storage: localStorage,
});
const { persistAtom: tableInfo } = recoilPersist({
  key: 'tableInfo',
  storage: localStorage,
});

export const isLoginIn = atom({
  key: 'isLoginIn',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
export const firstAccess = atom({
  key: 'firstAccess',
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const studentID = atom({
  key: 'studentID',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

//
export const finalClassArray = atom({
  key: `finalClassArr`,
  default: [],
  effects_UNSTABLE: [tableInfo],
});
export const finalClassIdsAtom = atom({
  key: `finalClassIds`,
  default: [],
  effects_UNSTABLE: [tableInfo],
});

export const MonClassArray = atom({
  key: `MonClassArray`,
  default: [],
  effects_UNSTABLE: [tableInfo],
});
export const MonClassIds = atom({
  key: `MonClassIds`,
  default: [],
  effects_UNSTABLE: [tableInfo],
});

//
export const TueClassArray = atom({
  key: `TueClassArray`,
  default: [],
  effects_UNSTABLE: [tableInfo],
});
export const TueClassIds = atom({
  key: `TueClassIds`,
  default: [],
  effects_UNSTABLE: [tableInfo],
});

//
export const WenClassArray = atom({
  key: `WenClassArray`,
  default: [],
  effects_UNSTABLE: [tableInfo],
});
export const WenClassIds = atom({
  key: `WenClassIds`,
  default: [],
  effects_UNSTABLE: [tableInfo],
});

//
export const ThuClassArray = atom({
  key: `ThuClassArray`,
  default: [],
  effects_UNSTABLE: [tableInfo],
});
export const ThuClassIds = atom({
  key: `ThuClassIds`,
  default: [],
  effects_UNSTABLE: [tableInfo],
});

//
export const FriClassArray = atom({
  key: `FriClassArray`,
  default: [],
  effects_UNSTABLE: [tableInfo],
});
export const FriClassIds = atom({
  key: `FriClassIds`,
  default: [],
  effects_UNSTABLE: [tableInfo],
});

//
export const numberOfPressesAtom = atom({
  key: 'numberOfPresses',
  default: 1,
});

// 마지막으로 클릭한 수업의 데이터
export const nowClickClassData = atom({
  key: 'nowClickClassData',
  default: [],
});

export const nowClickClassDataArray = atom({
  key: 'nowClickClassDataArray',
  default: [],
});

//////////////////
// ClassList
export const mondayClassListAtom = atom({
  key: 'mondayClassListAtom',
  default: [],
});
export const tuedayClassListAtom = atom({
  key: 'tuedayClassListAtom',
  default: [],
});
export const wendayClassListAtom = atom({
  key: 'wendayClassListAtom',
  default: [],
});
export const thudayClassListAtom = atom({
  key: 'thudayClassListAtom',
  default: [],
});
export const fridayClassListAtom = atom({
  key: 'fridayClassListAtom',
  default: [],
});
