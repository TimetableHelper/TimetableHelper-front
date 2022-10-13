import MontoSun from '../component/container/mon-to-sun';
import ClassList from '../component/select-class-schedule';
import SearchClassList from '../component/container/search-class-list';
import Header from '../component/Header';

import '../styles/container/select-in-classlist.scss';

function SelectInClasslist() {
  return (
    <>
      <Header />
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
