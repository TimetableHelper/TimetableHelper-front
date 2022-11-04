import { Ring } from '@uiball/loaders'; // 로딩 이미지

function AlertModalShow() {
  return (
    <>
      <div className="alertModalDiv">
        <div
          style={{
            width: '100%',
            height: '20px',
            backgroundColor: '#91a7ff',
          }}
        ></div>
        <h4>로그인이 필요한 페이지입니다.</h4>
        <button
          onClick={() => {
            document.location.href = '/';
          }}
        >
          확인
        </button>
      </div>
      <div className="loadingImg">
        <Ring size={50} lineWeight={5} speed={2} color="#4c6ef5" />
      </div>
    </>
  );
}

export default AlertModalShow;
