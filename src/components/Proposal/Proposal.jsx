import './Proposal.css';
import { Link } from 'react-scroll';
import CountTimeDown from '../CountTimeDown/CountTimeDown';

export const Proposal = () => {
  return (
    <section className="proposal-section">
      <ul className="proposal-list">
        <li className="proposal-item">
          <img
            className="proposal-img"
            src={require('../../Images/proposal1.jpg')}
            alt="Дівчина в жилетці"
          />
          <p className="proposal-item-text">
          Легко підібрати розмір
            <br />
            за рахунок вільного фасону
          </p>
        </li>
        <li className="proposal-item">
          {' '}
          <img
            className="proposal-img"
            src={require('../../Images/proposal2.jpg')}
            alt="Жилетка на вішаку"
          />
          <p className="proposal-item-text">
          Приємні, практичні та 
            <br />
            ефектні тканини
          </p>
        </li>
        <li className="proposal-item">
          {' '}
          <img
            className="proposal-img"
            src={require('../../Images/proposal3.jpg')}
            alt="Дівчина в жилетці"
          />
          <p className="proposal-item-text">
            Увага до деталей виробу <br /> для вашого комфорту
          </p>
        </li>
      </ul>
      <div className="proposal-discount">
        <p className="proposal-discountPercent">-30%</p>
        <span className="proposal-discount-text">
        На топову лінійку легких літніх костюмів!
        </span>
      </div>
      <h3 className="proposal-text">Пропозиція діє ще:</h3>
      <CountTimeDown />
      <button type="button" className="proposal-button">
        {' '}
        <Link
          to="chooseColor"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Обрати костюм
        </Link>
      </button>
      <p className="proposal-text">
        Залишилося <span style={{ background: '#ff671e' }}>17</span> штук по
        акції. Встигніть замовити свій розмір!
      </p>
    </section>
  );
};
