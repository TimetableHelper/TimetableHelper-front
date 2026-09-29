import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// Demo entry stores only a boolean for the current tab, never credentials.
const sessionLogin = ({ setSelf, onSet }) => {
  try {
    window.localStorage.removeItem('userData'); // Retire the old persisted ID.
  } catch { /* Storage access may be blocked independently. */ }
  try {
    setSelf(window.sessionStorage.getItem('timetable-demo-login') === 'true');
  } catch {
    // Storage may be unavailable; the demo still works in memory.
  }
  onSet((value) => {
    try {
      if (value === true) window.sessionStorage.setItem('timetable-demo-login', 'true');
      else window.sessionStorage.removeItem('timetable-demo-login');
    } catch { /* Keep the current in-memory session. */ }
  });
};

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

// Demo session: boolean only, scoped to this browser tab.
export const isLoginIn = atom({
  key: 'isLoginIn',
  default: false,
  effects_UNSTABLE: [sessionLogin],
});

// Keep the original key for existing saved schedules.
export const finalClassArray = atom({
  key: 'finalClassArr',
  default: [],
  effects_UNSTABLE: [tableInfo],
});
