import "./Main.css"
import React from 'react';
export const Main = ()=>{
    return(
        <section className="main-container">
            <img className="main-discount" src={require('../../Images/discount30.png')}  alt="discount" />
            <div className="main-titles">
<h1 className="main-title">Легкі літні костюми з блузами та сорочками в популярних кольорах</h1>
<h4 className="title">ТОПОВА ЛІНІЙКА КОСТЮМІВ НА ЛІТО ТА ВЕСНУ</h4>
<ul className="main-benefits">
<li><h3>Відправка протягом 1-3 днів </h3></li>
<li><h3>Оплата при отриманні</h3></li>
<li><h3>Безпосередній контроль якості</h3></li>
</ul>

</div>
<img src={require('../../Images/logo2.png')} alt="Logo" className="main-logo" />
        </section>
    )
}