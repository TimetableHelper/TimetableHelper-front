import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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

function renderEntry(path = '/') {
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

test('opens the home guide and navigation immediately without a demo session', () => {
  renderEntry();
  expect(screen.getByRole('heading', { name: '이용안내' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: '필수과목 선택하러가기' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: '내 시간표' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: '게시판' })).toBeInTheDocument();
  expect(screen.queryByLabelText('아이디')).not.toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /로그인|로그아웃/ })).not.toBeInTheDocument();
  expect(window.sessionStorage.length).toBe(0);
});

test.each([
  ['/my-timetable?view=demo#schedule', '시간표 페이지'],
  ['/make-newtimetable', '과목 선택 페이지'],
  ['/timetable-board', '샘플 게시판'],
])('opens %s directly without changing the requested address', (path, heading) => {
  renderEntry(path);
  expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
  expect(screen.getByTestId('location').textContent).toBe(path);
});

test('a legacy logged-out session does not gate navigation or clear the saved timetable', () => {
  const savedTimetable = JSON.stringify({ finalClassArr: [{ classId: 8 }] });
  window.localStorage.setItem('tableInfo', savedTimetable);
  window.sessionStorage.setItem('timetable-demo-login', 'false');
  renderEntry();
  fireEvent.click(screen.getByRole('link', { name: '내 시간표' }));
  expect(screen.getByRole('heading', { name: '시간표 페이지' })).toBeInTheDocument();
  expect(window.localStorage.getItem('tableInfo')).toBe(savedTimetable);
});

test.each(['/main', '/sign-up', '/sign-up2', '/not-a-page'])('recovers the old or unsupported route %s to the home guide', async (path) => {
  renderEntry(path);
  expect(await screen.findByRole('heading', { name: '이용안내' })).toBeInTheDocument();
  await waitFor(() => expect(screen.getByTestId('location')).toHaveTextContent(/^\/$/));
});

test('the navigation toggle exposes and closes the mobile menu state', async () => {
  renderEntry('/my-timetable');
  const toggle = screen.getByRole('button', { name: '메뉴 열기' });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(toggle);
  expect(screen.getByRole('button', { name: '메뉴 닫기' })).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', { name: '이용안내' }));
  expect(await screen.findByRole('heading', { name: '이용안내' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: '메뉴 열기' })).toHaveAttribute('aria-expanded', 'false');
});
