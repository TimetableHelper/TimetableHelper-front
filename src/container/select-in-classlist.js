import MontoSun from '../component/container/mon-to-sun';
import ClassList from '../component/select-class-schedule';
import SearchClassList from '../component/container/search-class-list';
import Header from '../component/Header';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import '../styles/container/select-in-classlist.scss';

function SelectInClasslist() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>강의 정보</title>
        </Helmet>
        <Header />
      </HelmetProvider>

      <div className="SelectInClasslist__column">
        <div className="SelectInClasslist__left">
          <MontoSun />
        </div>
        <div className="SelectInClasslist__right">
          <div className="SelectInClasslist__right__one">
            <ClassList width="610px" height="310px" />
          </div>
          <div className="SelectInClasslist__right__two">
            <SearchClassList />
          </div>
        </div>
      </div>
    </>
  );
}
export default SelectInClasslist;
