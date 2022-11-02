function AlertModalShow() {
  return (
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
  );
}

export default AlertModalShow;
