import React from 'react'

const MenuCard = ({menuData}) => {
    // console.log(menuData);
  return (
    <>
    <section className="main-card--container">
    {
        menuData.map((curElem)=>{
            return (
                <>
                
                <div className="card-container" key={curElem.id}>
                < div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">{curElem.id}</span>
                        <span className="card-author subtle">{curElem.category}</span>                
                        <h4 className="card-title">{curElem.name}</h4>
                        <span className="card-description subtle">
                        sunny side-up egg with pasta illustration, Food Chinese cuisine Drawing Cooked rice Illustration, Watercolor style Chinese breakfast, watercolor Painting, watercolor Leaves pn
                        {curElem.description}
                        </span>
                        <div className="card-read">Read...</div>
                        </div>
                        <img src={curElem.image} alt="images" className="card-media" />
                        <a href="/orderForm"><span className="card-tag subtle">
                            Order now
                        </span></a>
                    </div>
                </div>
            </>
            )
        })
    }
    </section>
    </>
  );
};

export default MenuCard;