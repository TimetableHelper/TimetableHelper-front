import { Link } from 'react-router-dom';
import '../styles/container/bluebutton.scss';

export default function BlueBtn({ text, width, height, link }) {
  return (
    <Link to={link}>
      <div className="goScheduleBtn m-auto" style={{ top: '40px' }}>
        <span>{text}</span>
      </div>
    </Link>
  );
}
