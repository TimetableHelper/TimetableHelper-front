import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { AppRoutes } from './Router';

jest.mock('./container/MyTimetable', () => {
  const Header = require('./component/Header').default;
  return function TimetablePage() {
    return <><Header /><h1>시간표 페이지</h1></>;
  };
});
jest.mock('./container/article', () => () => <h1>과목 선택 페이지</h1>);
jest.mock('./container/TimetableBoard', () => () => <h1>샘플 게시판</h1>);

function LocationIndicator() {
  const location = useLocation();
  return <output data-testid="location">{location.pathname}{location.search}{location.hash}</output>;
}

function renderEntry(path = '/', loggedIn = false) {
  if (loggedIn) window.sessionStorage.setItem('timetable-demo-login', 'true');
  return render(
    <RecoilRoot>
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
        <LocationIndicator />
      </MemoryRouter>
    </RecoilRoot>
  );
}

beforeEach(() => {
  window.localStorage.clear();
  window.sessionStorage.clear();
});

test('rejects whitespace and returns to the requested page after demo entry without saving inputs', async () => {
  renderEntry('/my-timetable?view=demo#schedule');
  const idInput = await screen.findByLabelText('아이디');
  const passwordInput = screen.getByLabelText('비밀번호');
  fireEvent.change(idInput, { target: { value: '   ' } });
  fireEvent.change(passwordInput, { target: { value: '   ' } });
  fireEvent.click(screen.getByRole('button', { name: '로그인' }));
  expect(screen.getByRole('alert')).toHaveTextContent('각각 입력해주세요');
  expect(screen.queryByRole('heading', { name: '시간표 페이지' })).not.toBeInTheDocument();

  fireEvent.change(idInput, { target: { value: 'demo-only-id' } });
  fireEvent.change(passwordInput, { target: { value: 'demo-only-password' } });
  userEvent.type(passwordInput, '{enter}');
  expect(await screen.findByRole('heading', { name: '시간표 페이지' })).toBeInTheDocument();
  expect(screen.getByTestId('location')).toHaveTextContent('/my-timetable?view=demo#schedule');
  for (const storage of [window.localStorage, window.sessionStorage]) {
    for (let index = 0; index < storage.length; index += 1) {
      expect(storage.getItem(storage.key(index))).not.toMatch(/demo-only-id|demo-only-password/);
    }
  }
});

test('logout ends the demo session while preserving the local timetable', async () => {
  const savedTimetable = JSON.stringify({ finalClassArr: [{ classId: 8 }] });
  window.localStorage.setItem('tableInfo', savedTimetable);
  renderEntry('/my-timetable', true);
  fireEvent.click(await screen.findByRole('button', { name: '로그아웃' }));
  expect(await screen.findByRole('heading', { name: '로그인' })).toBeInTheDocument();
  expect(window.localStorage.getItem('tableInfo')).toBe(savedTimetable);
  expect(window.sessionStorage.getItem('timetable-demo-login')).toBeNull();
});

test.each(['/sign-up', '/sign-up2', '/not-a-page'])('recovers the unsupported route %s to the entry page', async (path) => {
  renderEntry(path);
  expect(await screen.findByRole('heading', { name: '로그인' })).toBeInTheDocument();
  await waitFor(() => expect(screen.getByTestId('location')).toHaveTextContent(/^\/$/));
  expect(screen.queryByRole('link', { name: '회원가입' })).not.toBeInTheDocument();
});

test('the navigation toggle exposes and closes the mobile menu state', async () => {
  renderEntry('/my-timetable', true);
  const toggle = await screen.findByRole('button', { name: '메뉴 열기' });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(toggle);
  expect(screen.getByRole('button', { name: '메뉴 닫기' })).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', { name: '이용안내' }));
  expect(await screen.findByRole('heading', { name: '이용안내' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: '메뉴 열기' })).toHaveAttribute('aria-expanded', 'false');
});
