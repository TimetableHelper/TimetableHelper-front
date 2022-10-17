import { atom } from 'recoil';
import { v1 } from 'uuid';

export const MonClassArray = atom({
  key: `MonClassArray/${v1()}`,
  default: [],
});
export const MonClassIds = atom({
  key: `MonClassIds/${v1()}`,
  default: [],
});

//
export const TueClassArray = atom({
  key: `TueClassArray/${v1()}`,
  default: [],
});
export const TueClassIds = atom({
  key: `MonClassIds/${v1()}`,
  default: [],
});

//
export const WenClassArray = atom({
  key: `TueClassArray/${v1()}`,
  default: [],
});
export const WenClassIds = atom({
  key: `MonClassIds/${v1()}`,
  default: [],
});

//
export const ThuClassArray = atom({
  key: `TueClassArray/${v1()}`,
  default: [],
});
export const ThuClassIds = atom({
  key: `MonClassIds/${v1()}`,
  default: [],
});

//
export const FriClassArray = atom({
  key: `TueClassArray/${v1()}`,
  default: [],
});
export const FriClassIds = atom({
  key: `MonClassIds/${v1()}`,
  default: [],
});

//
export const numberOfPressesAtom = atom({
  key: 'numberOfPresses',
  default: 1,
});

//
export const isUseOnMonday = atom({
  key: 'isUseOnMonday',
  default: [],
});
export const xBtnOnMonday = atom({
  key: 'xBtnOnMonday',
  default: [],
});
