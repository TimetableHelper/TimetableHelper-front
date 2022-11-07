import { motion } from 'framer-motion';
import styled from 'styled-components';
import '../styles/component/LoadingLogo.scss';

const Svg = styled.svg`
  width: 150px;
  height: 150px;
  color: black;
  > path {
    stroke-width: 2;
    fill: black;
  }
`;

const svgVariants = {
  start: { pathLength: 0, fill: 'rgba(48, 74, 226,0)' },
  end: { fill: 'rgba(48, 74, 226,1)', pathLength: 1 },
};
const textVariants = {
  start: { pathLength: 0, fill: 'rgba(0,0,0,0)' },
  end: { fill: 'rgba(0,0,0,1)', pathLength: 1 },
};

function LoadingPage() {
  return (
    <>
      <motion.div
        className="LoadingPage-Circle"
        variants={textVariants}
        initial="start"
        animate="end"
        transition={{
          default: {
            duration: 2,
          },
          fill: { duration: 2, delay: 2 },
        }}
        stroke="black"
        strokeWidth="2"
        fill="black"
      >
        <Svg
          className="LoadingPageSvg"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="361.000000pt"
          height="128.000000pt"
          viewBox="0 0 361.000000 128.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <motion.g
            transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
            variants={textVariants}
            initial="start"
            animate="end"
            transition={{
              default: {
                duration: 1,
              },
              fill: { duration: 2, delay: 1 },
            }}
            stroke="black"
            strokeWidth="2"
            fill="black"
          >
            <motion.path
              variants={svgVariants}
              initial="start"
              animate="end"
              transition={{
                default: {
                  duration: 1,
                },
                fill: { duration: 2, delay: 1 },
              }}
              stroke="black"
              strokeWidth="2"
              fill="black"
              d="M260 835 l0 -285 145 0 145 0 0 -140 0 -140 420 0 420 0 0 140 0 140
-140 0 -140 0 0 140 0 140 -140 0 -140 0 0 -140 0 -141 -142 3 -143 3 -3 283
-2 282 -140 0 -140 0 0 -285z"
            />
            <motion.path d="M2460 695 l0 -425 55 0 55 0 0 425 0 425 -55 0 -55 0 0 -425z" />
            <motion.path
              variants={textVariants}
              initial="start"
              animate="end"
              transition={{
                default: {
                  duration: 1,
                },
                fill: { duration: 2, delay: 1 },
              }}
              stroke="black"
              strokeWidth="2"
              fill="black"
              d="M2880 880 l0 -210 200 0 200 0 0 40 0 40 -140 0 -140 0 0 130 0 130
140 0 140 0 0 40 0 40 -200 0 -200 0 0 -210z"
            />
            <motion.path
              variants={textVariants}
              initial="start"
              animate="end"
              transition={{
                default: {
                  duration: 1,
                },
                fill: { duration: 2, delay: 1 },
              }}
              stroke="black"
              strokeWidth="2"
              fill="black"
              d="M2060 883 c-67 -117 -99 -182 -93 -191 4 -7 22 -22 40 -33 l31 -20
58 103 c31 57 61 109 67 116 7 9 27 -17 74 -100 35 -62 66 -114 68 -116 2 -2
22 9 44 24 l41 27 -34 61 c-93 166 -175 301 -184 304 -5 1 -56 -77 -112 -175z"
            />
            <motion.path
              variants={textVariants}
              initial="start"
              animate="end"
              transition={{
                default: {
                  duration: 1,
                },
                fill: { duration: 2, delay: 1 },
              }}
              stroke="black"
              strokeWidth="2"
              fill="black"
              d="M3020 470 l0 -110 -140 0 -140 0 0 -45 0 -45 340 0 340 0 0 45 0 45
-140 0 -140 0 0 110 0 110 -60 0 -60 0 0 -110z"
            />
          </motion.g>
        </Svg>
      </motion.div>
    </>
  );
}

export default LoadingPage;
