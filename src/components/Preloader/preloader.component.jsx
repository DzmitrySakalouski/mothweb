import {Digital} from 'react-activity';
import 'react-activity/dist/Digital.css';

export const Preloader = () => {
  return (
    <div className="preloader">
      <Digital color="white" size={50} />
    </div>
  );
};
