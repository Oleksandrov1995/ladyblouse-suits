import './AboutProduct.css'

export const AboutProduct = () => {
  return (
    <section className='aboutProduct'>
      <ul className='aboutProduct-list'>
        <li className='aboutProduct-item item-color'>
          <img className='about-img' src={require('../../Images/aboutProduct1.jpg')}alt="Жилетка на вішаку" />
          <h4 className='aboutProduct-listTitle'>Лекала</h4>
          <p className='aboutProduct-listText'>Продумана конструкція виробів та розмірів задля зручності на будь яких параметрах, стильного силуету та можливість по різному обігравати елементи костюмів.</p>
        </li>
        <li className='aboutProduct-item'>
          <img className='about-img' src={require('../../Images/aboutProduct2.jpg')} alt="Дівчина в жилетці" />
          <h4 className='aboutProduct-listTitle'>Тканина</h4>
          <p className='aboutProduct-listText'>Гарно підібрані матеріали, що чудово підходять для спекотної пори року та гарно обдуваються вітром.</p>
        </li>
        <li className='aboutProduct-item item-color'>
          <img className='about-img' src={require('../../Images/aboutProduct3.jpg')} alt="Жилетки на вішаку" />
          <h4 className='aboutProduct-listTitle'>Легкість</h4>
          <p className='aboutProduct-listText'>Вільні елементи виробу що сприяють гарній циркуляції повітря та не сковує рухи.</p>
        </li>
        <li className='aboutProduct-item '>
          <img className='about-img' src={require('../../Images/aboutProduct4.jpg')}alt="Жилетка на вішаку" />
          <h4 className='aboutProduct-listTitle'>Гумка</h4>
          <p className='aboutProduct-listText'>Еластична та зручна резинка, що добре розрахована під різні параметри, аби не було обмеження в рухах та надавала відчуття легкості та свободи.</p>
        </li>
        <li className='aboutProduct-item item-color'>
          <img className='about-img' src={require('../../Images/aboutProduct5.jpg')} alt="Дівчина в жилетці" />
          <h4 className='aboutProduct-listTitle'>Універсальність</h4>
          <p className='aboutProduct-listText'>Елементи костюму можна носити по окремості або комбінувати з іншими костюмами, завдяки своїм універсальним та трендовим фасонам.</p>
        </li>
       
      </ul>
    </section>
  );
};
