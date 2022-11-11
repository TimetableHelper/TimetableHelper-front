export default function addToMonToFriArray({
  finalClassArr,
  myMonClassIds,
  myMonClassArray,
  setMyMonClassArray,
  setMyMonClassIds,
  myTueClassIds,
  myTueClassArray,
  setMyTueClassArray,
  setMyTueClassIds,
  myWenClassIds,
  setMyWenClassArray,
  myThuClassIds,
  myThuClassArray,
  setMyThuClassArray,
  setMyThuClassIds,
  myFriClassIds,
  setMyFriClassArray,
  setMyFriClassIds,
  myWenClassArray,
  setMyWenClassIds,
  myFriClassArray,
}) {
  for (var i = 0; i < finalClassArr.length; i++) {
    if (finalClassArr[i].ClassTime) {
      // 위 if문은 유효성 검사 (별 의미 x)
      if (finalClassArr[i].ClassTime.split(',')[0]) {
        // 수업 요일이 하루 이상이라면 ...
        // 월,화,수,목,금 배열에 넣기 -->
        // 아래 if문을 하루이상, 2일이상, 3일이상 ==> 모든 if에서 반복.
        if (finalClassArr[i].ClassTime.split(',')[0].substr(0, 1)) {
          // Output==> 월 , 화 , 수 , 목 , 금
          if (
            // 수업 요일의 첫째날이 월요일이라면  && 수업데이터가 들어있지 않다면(동일 체크)
            finalClassArr[i].ClassTime.split(',')[0].substr(0, 1) === '월' &&
            myMonClassIds.indexOf(finalClassArr[i].classId) === -1
          ) {
            /* if (
              // 아직 시간표가 안채워졌다면
              isUsedOnMonday[
                finalClassArr[i].ClassTime.split(',')[0].substr(1, 1) - 1
              ] === false
            ) { */
            // 그 수업의 데이터를 add Arr에 담고, 월요일 배열에 추가.

            if (finalClassArr[i].continuity[0] == 1) {
              var addMon0data = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[0],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[0],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[0].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1),
                ],
              };
            }
            if (finalClassArr[i].continuity[0] == 2) {
              var addMon0data = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[0],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[0],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[0].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1) + 1,
                ],
              };
            }
            if (finalClassArr[i].continuity[0] == 3) {
              var addMon0data = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[0],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[0],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[0].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1) + 1,
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1) + 2,
                ],
              };
            }

            var newMon0arr = [...myMonClassArray, addMon0data];
            setMyMonClassArray(newMon0arr);
            var newMon0ClassIds = [...myMonClassIds, finalClassArr[i].classId];
            setMyMonClassIds(newMon0ClassIds);

            /* // 중복 체크용
              var monday0CheckArr = [...isUsedOnMonday];
              monday0CheckArr[
                finalClassArr[i].ClassTime.split(',')[0].substr(1, 1) - 1
              ] = true;
              setIsUsedOnMonday(monday0CheckArr);
            } else {
              console.log('겹침');
            } */
          }

          if (
            // 수업 요일의 첫째날이 화요일이라면
            finalClassArr[i].ClassTime.split(',')[0].substr(0, 1) === '화' &&
            // && 수업데이터가 들어있지 않다면(동일 체크)
            myTueClassIds.indexOf(finalClassArr[i].classId) === -1
          ) {
            // 그 수업의 데이터를 add Arr에 담고, 화요일 배열에 추가.

            if (finalClassArr[i].continuity[0] == 1) {
              var addTue0Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[0],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[0],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[0].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1),
                ],
              };
            }
            if (finalClassArr[i].continuity[0] == 2) {
              var addTue0Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[0],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[0],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[0].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1) + 1,
                ],
              };
            }
            if (finalClassArr[i].continuity[0] == 3) {
              var addTue0Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[0],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[0],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[0].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1) + 1,
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1) + 2,
                ],
              };
            }

            var newTue0arr = [...myTueClassArray, addTue0Arr];
            setMyTueClassArray(newTue0arr);
            var newTue0ClassIds = [...myTueClassIds, finalClassArr[i].classId];
            setMyTueClassIds(newTue0ClassIds);
          }

          if (
            // 수업 요일의 첫째날이 수요일이라면
            finalClassArr[i].ClassTime.split(',')[0].substr(0, 1) === '수' &&
            // && 수업데이터가 들어있지 않다면(동일 체크)
            myWenClassIds.indexOf(finalClassArr[i].classId) === -1
          ) {
            // 그 수업의 데이터를 add Arr에 담고, 수요일 배열에 추가.

            if (finalClassArr[i].continuity[0] == 1) {
              var addWen0Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[0],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[0],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[0].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1),
                ],
              };
            }
            if (finalClassArr[i].continuity[0] == 2) {
              var addWen0Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[0],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[0],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[0].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1) + 1,
                ],
              };
            }
            if (finalClassArr[i].continuity[0] == 3) {
              var addWen0Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[0],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[0],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[0].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1) + 1,
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1) + 2,
                ],
              };
            }

            var newWen0arr = [...myWenClassArray, addWen0Arr];
            setMyWenClassArray(newWen0arr);
            var newWen0ClassIds = [...myWenClassIds, finalClassArr[i].classId];
            setMyWenClassIds(newWen0ClassIds);
          }

          if (
            // 수업 요일의 첫째날이 목요일이라면
            finalClassArr[i].ClassTime.split(',')[0].substr(0, 1) === '목' &&
            // && 수업데이터가 들어있지 않다면(동일 체크)
            myThuClassIds.indexOf(finalClassArr[i].classId) === -1
          ) {
            // 그 수업의 데이터를 add Arr에 담고, 목요일 배열에 추가.

            if (finalClassArr[i].continuity[0] == 1) {
              var addThu0Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[0],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[0],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[0].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1),
                ],
              };
            }
            if (finalClassArr[i].continuity[0] == 2) {
              var addThu0Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[0],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[0],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[0].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1) + 1,
                ],
              };
            }
            if (finalClassArr[i].continuity[0] == 3) {
              var addThu0Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[0],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[0],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[0].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1) + 1,
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1) + 2,
                ],
              };
            }

            var newThu0arr = [...myThuClassArray, addThu0Arr];
            setMyThuClassArray(newThu0arr);
            var newThu0ClassIds = [...myThuClassIds, finalClassArr[i].classId];
            setMyThuClassIds(newThu0ClassIds);
          }
          if (
            // 수업 요일의 첫째날이 금요일이라면
            finalClassArr[i].ClassTime.split(',')[0].substr(0, 1) === '금' &&
            // && 수업데이터가 들어있지 않다면(동일 체크)
            myFriClassIds.indexOf(finalClassArr[i].classId) === -1
          ) {
            // 그 수업의 데이터를 add Arr에 담고, 목요일 배열에 추가.

            if (finalClassArr[i].continuity[0] == 1) {
              var addFri0Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[0],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[0],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[0].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1),
                ],
              };
            }
            if (finalClassArr[i].continuity[0] == 2) {
              var addFri0Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[0],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[0],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[0].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1) + 1,
                ],
              };
            }
            if (finalClassArr[i].continuity[0] == 3) {
              var addFri0Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[0],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[0],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[0].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1) + 1,
                  +finalClassArr[i].ClassTime.split(',')[0].substr(1, 1) + 2,
                ],
              };
            }

            var newFri0arr = [...myFriClassArray, addFri0Arr];
            setMyFriClassArray(newFri0arr);
            var newFri0ClassIds = [...myFriClassIds, finalClassArr[i].classId];
            setMyFriClassIds(newFri0ClassIds);
          }
        }
      }
      if (finalClassArr[i].ClassTime.split(',')[1]) {
        // 수업 요일이 2일이상이라면 ...
        // 월,화,수,목,금 배열에 넣기 -->
        // 아래 if문을 하루이상, 2일이상, 3일이상 ==> 모든 if에서 반복.
        if (finalClassArr[i].ClassTime.split(',')[1].substr(0, 1)) {
          // Output==> 월 , 화 , 수 , 목 , 금
          // 아래 함수를5번 반복
          if (
            // 수업 요일의 둘째날이 월요일이라면
            finalClassArr[i].ClassTime.split(',')[1].substr(0, 1) === '월' &&
            // && 수업데이터가 들어있지 않다면(동일 체크)
            myMonClassIds.indexOf(finalClassArr[i].classId) === -1
          ) {
            // 그 수업의 데이터를 add Arr에 담고, 월요일 배열에 추가.

            if (finalClassArr[i].continuity[1] == 1) {
              var addMon1data = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[1],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[1],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[1].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1),
                ],
              };
            }
            if (finalClassArr[i].continuity[1] == 2) {
              var addMon1data = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[1],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[1],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[1].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1) + 1,
                ],
              };
            }
            if (finalClassArr[i].continuity[1] == 3) {
              var addMon1data = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[1],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[1],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[1].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1) + 1,
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1) + 2,
                ],
              };
            }

            var newMon1arr = [...myMonClassArray, addMon1data];
            setMyMonClassArray(newMon1arr);
            var newMon1ClassIds = [...myMonClassIds, finalClassArr[i].classId];
            setMyMonClassIds(newMon1ClassIds);
          }
          if (
            // 수업 요일의 둘째날이 화요일이라면
            finalClassArr[i].ClassTime.split(',')[1].substr(0, 1) === '화' &&
            // && 수업데이터가 들어있지 않다면(동일 체크)
            myTueClassIds.indexOf(finalClassArr[i].classId) === -1
          ) {
            // 그 수업의 데이터를 add Arr에 담고, 화요일 배열에 추가.

            ///
            if (finalClassArr[i].continuity[1] == 1) {
              var addTue1Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[1],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[1],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[1].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1),
                ],
              };
            }
            if (finalClassArr[i].continuity[1] == 2) {
              var addTue1Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[1],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[1],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[1].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1) + 1,
                ],
              };
            }
            if (finalClassArr[i].continuity[1] == 3) {
              var addTue1Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[1],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[1],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[1].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1) + 1,
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1) + 2,
                ],
              };
            }

            var newTue1arr = [...myTueClassArray, addTue1Arr];
            setMyTueClassArray(newTue1arr);
            var newTue1ClassIds = [...myTueClassIds, finalClassArr[i].classId];
            setMyTueClassIds(newTue1ClassIds);
          }
          if (
            // 수업 요일의 둘째날이 수요일이라면
            finalClassArr[i].ClassTime.split(',')[1].substr(0, 1) === '수' &&
            // && 수업데이터가 들어있지 않다면(동일 체크)
            myWenClassIds.indexOf(finalClassArr[i].classId) === -1
          ) {
            // 그 수업의 데이터를 add Arr에 담고, 수요일 배열에 추가.

            if (finalClassArr[i].continuity[1] == 1) {
              var addWen1Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[1],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[1],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[1].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1),
                ],
              };
            }
            if (finalClassArr[i].continuity[1] == 2) {
              var addWen1Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[1],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[1],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[1].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1) + 1,
                ],
              };
            }
            if (finalClassArr[i].continuity[1] == 3) {
              var addWen1Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[1],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[1],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[1].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1) + 1,
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1) + 2,
                ],
              };
            }

            var newWen1arr = [...myWenClassArray, addWen1Arr];
            setMyWenClassArray(newWen1arr);
            var newWen1ClassIds = [...myWenClassIds, finalClassArr[i].classId];
            setMyWenClassIds(newWen1ClassIds);
          }
          if (
            // 수업 요일의 둘째날이 목요일이라면
            finalClassArr[i].ClassTime.split(',')[1].substr(0, 1) === '목' &&
            // && 수업데이터가 들어있지 않다면(동일 체크)
            myThuClassIds.indexOf(finalClassArr[i].classId) === -1
          ) {
            // 그 수업의 데이터를 add Arr에 담고, 목요일 배열에 추가.

            if (finalClassArr[i].continuity[1] == 1) {
              var addThu1Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[1],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[1],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[1].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1),
                ],
              };
            }
            if (finalClassArr[i].continuity[1] == 2) {
              var addThu1Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[1],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[1],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[1].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1) + 1,
                ],
              };
            }
            if (finalClassArr[i].continuity[1] == 3) {
              var addThu1Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[1],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[1],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[1].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1) + 1,
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1) + 2,
                ],
              };
            }

            var newThu1arr = [...myThuClassArray, addThu1Arr];
            setMyThuClassArray(newThu1arr);
            var newThu1ClassIds = [...myThuClassIds, finalClassArr[i].classId];
            setMyThuClassIds(newThu1ClassIds);
          }
          if (
            // 수업 요일의 둘째날이 금요일이라면
            finalClassArr[i].ClassTime.split(',')[1].substr(0, 1) === '금' &&
            // && 수업데이터가 들어있지 않다면(동일 체크)
            myFriClassIds.indexOf(finalClassArr[i].classId) === -1
          ) {
            // 그 수업의 데이터를 add Arr에 담고, 목요일 배열에 추가.

            if (finalClassArr[i].continuity[1] == 1) {
              var addFri1Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[1],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[1],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[1].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1),
                ],
              };
            }
            if (finalClassArr[i].continuity[1] == 2) {
              var addFri1Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[1],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[1],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[1].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1) + 1,
                ],
              };
            }
            if (finalClassArr[i].continuity[1] == 3) {
              var addFri1Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[1],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[1],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[1].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1) + 1,
                  +finalClassArr[i].ClassTime.split(',')[1].substr(1, 1) + 2,
                ],
              };
            }

            var newFri1arr = [...myFriClassArray, addFri1Arr];
            setMyFriClassArray(newFri1arr);
            var newFri1ClassIds = [...myFriClassIds, finalClassArr[i].classId];
            setMyFriClassIds(newFri1ClassIds);
          }
        }
      }
      if (finalClassArr[i].ClassTime.split(',')[2]) {
        // 수업 요일이 3일이라면 ...
        // 월,화,수,목,금 배열에 넣기 -->
        // 아래 if문을 하루이상, 2일이상, 3일이상 ==> 모든 if에서 반복.
        if (finalClassArr[i].ClassTime.split(',')[2].substr(0, 1)) {
          // Output==> 월 , 화 , 수 , 목 , 금
          // 아래 함수를5번 반복
          if (
            // 수업 요일의 첫째날이 월요일이라면
            finalClassArr[i].ClassTime.split(',')[2].substr(0, 1) === '월' &&
            // && 수업데이터가 들어있지 않다면(동일 체크)
            myMonClassIds.indexOf(finalClassArr[i].classId) === -1
          ) {
            // 그 수업의 데이터를 add Arr에 담고, 월요일 배열에 추가.

            if (finalClassArr[i].continuity[2] == 1) {
              var addMon2data = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[2],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[2],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[2].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1),
                ],
              };
            }
            if (finalClassArr[i].continuity[2] == 2) {
              var addMon2data = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[2],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[2],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[2].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1) + 1,
                ],
              };
            }
            if (finalClassArr[i].continuity[2] == 3) {
              var addMon2data = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[2],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[2],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[2].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1) + 1,
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1) + 2,
                ],
              };
            }

            var newMon2arr = [...myMonClassArray, addMon2data];
            setMyMonClassArray(newMon2arr);
            var newMon2ClassIds = [...myMonClassIds, finalClassArr[i].classId];
            setMyMonClassIds(newMon2ClassIds);
          }
          if (
            // 수업 요일의 첫째날이 화요일이라면
            finalClassArr[i].ClassTime.split(',')[2].substr(0, 1) === '화' &&
            // && 수업데이터가 들어있지 않다면(동일 체크)
            myTueClassIds.indexOf(finalClassArr[i].classId) === -1
          ) {
            // 그 수업의 데이터를 add Arr에 담고, 화요일 배열에 추가.

            if (finalClassArr[i].continuity[2] == 1) {
              var addTue2Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[2],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[2],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[2].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1),
                ],
              };
            }
            if (finalClassArr[i].continuity[2] == 2) {
              var addTue2Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[2],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[2],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[2].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1) + 1,
                ],
              };
            }
            if (finalClassArr[i].continuity[2] == 3) {
              var addTue2Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[2],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[2],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[2].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1) + 1,
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1) + 2,
                ],
              };
            }

            var newTue2arr = [...myTueClassArray, addTue2Arr];
            setMyTueClassArray(newTue2arr);
            var newTue2ClassIds = [...myTueClassIds, finalClassArr[i].classId];
            setMyTueClassIds(newTue2ClassIds);
          }
          if (
            // 수업 요일의 첫째날이 수요일이라면
            finalClassArr[i].ClassTime.split(',')[2].substr(0, 1) === '수' &&
            // && 수업데이터가 들어있지 않다면(동일 체크)
            myWenClassIds.indexOf(finalClassArr[i].classId) === -1
          ) {
            if (finalClassArr[i].continuity[2] == 1) {
              var addWen2Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[2],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[2],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[2].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1),
                ],
              };
            }
            if (finalClassArr[i].continuity[2] == 2) {
              var addWen2Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[2],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[2],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[2].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1) + 1,
                ],
              };
            }
            if (finalClassArr[i].continuity[2] == 3) {
              var addWen2Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[2],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[2],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[2].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1) + 1,
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1) + 2,
                ],
              };
            }

            // 그 수업의 데이터를 add Arr에 담고, 수요일 배열에 추가.

            var newWen2arr = [...myWenClassArray, addWen2Arr];
            setMyWenClassArray(newWen2arr);
            var newWen2ClassIds = [...myWenClassIds, finalClassArr[i].classId];
            setMyWenClassIds(newWen2ClassIds);
          }
          if (
            // 수업 요일의 첫째날이 목요일이라면
            finalClassArr[i].ClassTime.split(',')[2].substr(0, 1) === '목' &&
            // && 수업데이터가 들어있지 않다면(동일 체크)
            myThuClassIds.indexOf(finalClassArr[i].classId) === -1
          ) {
            // 그 수업의 데이터를 add Arr에 담고, 목요일 배열에 추가.

            if (finalClassArr[i].continuity[2] == 1) {
              var addThu2Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[2],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[2],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[2].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1),
                ],
              };
            }
            if (finalClassArr[i].continuity[2] == 2) {
              var addThu2Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[2],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[2],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[2].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1) + 1,
                ],
              };
            }
            if (finalClassArr[i].continuity[2] == 3) {
              var addThu2Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[2],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[2],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[2].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1) + 1,
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1) + 2,
                ],
              };
            }

            var newThu2arr = [...myThuClassArray, addThu2Arr];
            setMyThuClassArray(newThu2arr);
            var newThu2ClassIds = [...myThuClassIds, finalClassArr[i].classId];
            setMyThuClassIds(newThu2ClassIds);
          }
          if (
            // 수업 요일의 첫째날이 금요일이라면
            finalClassArr[i].ClassTime.split(',')[2].substr(0, 1) === '금' &&
            // && 수업데이터가 들어있지 않다면(동일 체크)
            myFriClassIds.indexOf(finalClassArr[i].classId) === -1
          ) {
            // 그 수업의 데이터를 add Arr에 담고, 목요일 배열에 추가.

            if (finalClassArr[i].continuity[2] == 1) {
              var addFri2Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[2],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[2],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[2].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1),
                ],
              };
            }
            if (finalClassArr[i].continuity[2] == 2) {
              var addFri2Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[2],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[2],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[2].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1) + 1,
                ],
              };
            }
            if (finalClassArr[i].continuity[2] == 3) {
              var addFri2Arr = {
                classId: finalClassArr[i].classId,
                className: finalClassArr[i].className,
                Professor: finalClassArr[i].Professor,
                ClassTime: finalClassArr[i].ClassTime.split(',')[2],
                lectureRoom: finalClassArr[i].lectureRoom,
                Classification: finalClassArr[i].Classification,
                Grades: finalClassArr[i].Grades,
                continuity: finalClassArr[i].continuity[2],
                firstClassNum: finalClassArr[i].ClassTime.split(',')[2].substr(
                  1,
                  1
                ),
                numberOfPresses: finalClassArr[i].numberOfPresses,
                totalClass: [
                  0,
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1),
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1) + 1,
                  +finalClassArr[i].ClassTime.split(',')[2].substr(1, 1) + 2,
                ],
              };
            }

            var newFri2arr = [...myFriClassArray, addFri2Arr];
            setMyFriClassArray(newFri2arr);
            var newFri2ClassIds = [...myFriClassIds, finalClassArr[i].classId];
            setMyFriClassIds(newFri2ClassIds);
          }
        }
      }
    }
  }
}
