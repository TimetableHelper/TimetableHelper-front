import { Ring } from '@uiball/loaders'; // 로딩 이미지
import { motion } from 'framer-motion';
import Header from './Header';

const alertVariants = {
  start: {
    x: -170,
    y: 50,
  },
  end: { x: -170, y: -90 },
};

function AlertModalShow() {
  return (
    <>
      <Header />

      <motion.div
        className="alertModalDiv"
        variants={alertVariants}
        initial="start"
        animate="end"
      >
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
      </motion.div>
      <div className="loadingImg">
        <Ring size={50} lineWeight={5} speed={2} color="#4c6ef5" />
      </div>
    </>
  );
}

export default AlertModalShow;
