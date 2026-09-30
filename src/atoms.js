import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// Accept the old tableInfo key so existing course selections are preserved.
// Broken/blocked storage must not prevent the demo from opening.
const tableStorage = {
  getItem(key) {
    try {
      const saved = JSON.parse(window.localStorage.getItem(key) || '{}');
      if (!saved || Array.isArray(saved) || typeof saved !== 'object') return '{}';
      return JSON.stringify({
        finalClassArr: Array.isArray(saved.finalClassArr) ? saved.finalClassArr : [],
      });
    } catch { return '{}'; }
  },
  setItem(key, value) {
    try { window.localStorage.setItem(key, value); }
    catch { /* Existing interactions remain available without persistence. */ }
  },
};
const { persistAtom: tableInfo } = recoilPersist({
  key: 'tableInfo',
  storage: tableStorage,
});

// Keep the original key for existing saved schedules.
export const finalClassArray = atom({
  key: 'finalClassArr',
  default: [],
  effects_UNSTABLE: [tableInfo],
});
