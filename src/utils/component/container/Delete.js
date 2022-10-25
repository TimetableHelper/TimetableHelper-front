import { useRecoilValue, useRecoilState } from 'recoil';
import {
  finalClassArray,
  finalClassIdsAtom,
  MonClassArray,
  TueClassArray,
  WenClassArray,
  ThuClassArray,
  FriClassArray,
  MonClassIds,
  TueClassIds,
  WenClassIds,
  ThuClassIds,
  FriClassIds,
} from '../../atoms';

export default function onDelete(wantDeleteID) {
  const [finalClassArr, setFinalClassArr] = useRecoilState(finalClassArray);
  const [finalClassIds, setFinalClassIds] = useRecoilState(finalClassIdsAtom);

  const [myMonClassArray, setMyMonClassArray] = useRecoilState(MonClassArray);
  const [myMonClassIds, setMyMonClassIds] = useRecoilState(MonClassIds);

  const [myTueClassArray, setMyTueClassArray] = useRecoilState(TueClassArray);
  const [myTueClassIds, setMyTueClassIds] = useRecoilState(TueClassIds);

  const [myWenClassArray, setMyWenClassArray] = useRecoilState(WenClassArray);
  const [myWenClassIds, setMyWenClassIds] = useRecoilState(WenClassIds);

  const [myThuClassArray, setMyThuClassArray] = useRecoilState(ThuClassArray);
  const [myThuClassIds, setMyThuClassIds] = useRecoilState(ThuClassIds);

  const [myFriClassArray, setMyFriClassArray] = useRecoilState(FriClassArray);
  const [myFriClassIds, setMyFriClassIds] = useRecoilState(FriClassIds);

  var newFinalList = [...finalClassArr];
  setFinalClassArr(
    newFinalList.filter((data) => data.classId !== wantDeleteID)
  );
  var newFinalIDs = [...finalClassIds];
  setFinalClassIds(newFinalIDs.filter((data) => data !== wantDeleteID));
  //
  var newMonList = [...myMonClassArray];
  setMyMonClassArray(
    newMonList.filter((data) => data.classId !== wantDeleteID)
  );
  var newMonIDs = [...myMonClassIds];
  setMyMonClassIds(newMonIDs.filter((data) => data !== wantDeleteID));
  //
  var newTueList = [...myTueClassArray];
  setMyTueClassArray(
    newTueList.filter((data) => data.classId !== wantDeleteID)
  );
  var newTueIDs = [...myTueClassIds];
  setMyTueClassIds(newTueIDs.filter((data) => data !== wantDeleteID));
  //
  var newWendayList = [...myWenClassArray];
  setMyWenClassArray(
    newWendayList.filter((data) => data.classId !== wantDeleteID)
  );
  var newWendayIDs = [...myWenClassIds];
  setMyWenClassIds(newWendayIDs.filter((data) => data !== wantDeleteID));
  //
  var newThudayList = [...myThuClassArray];
  setMyThuClassArray(
    newThudayList.filter((data) => data.classId !== wantDeleteID)
  );
  var newThudayIDs = [...myThuClassIds];
  setMyThuClassIds(newThudayIDs.filter((data) => data !== wantDeleteID));

  //
  var newFridayList = [...myFriClassArray];
  setMyFriClassArray(
    newFridayList.filter((data) => data.classId !== wantDeleteID)
  );
  var newFridayIDs = [...myFriClassIds];
  setMyFriClassIds(newFridayIDs.filter((data) => data !== wantDeleteID));
}
