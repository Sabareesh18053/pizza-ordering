import Product from'./Product'
import './Home.css'
function Home(){
    return (
       <div className="home">
        <img  className="home__image"
         src="" alt=""/>
         <div className='res'> Select your preferred Pizza </div>
         Today's Top Sellers
       <div className="home__row">
        
        <Product
             id="121314"
             title="Fresh Pan Margretti Pizza - M"
             price={500}
             rating={4} 
             image="https://images.dominos.co.in/CreamyTomatoPPVG.jpg"
            />
            <Product
             id="121315"
             title="Corn n Cheese Paratha Pizza"
             price={520}
             rating={4}
             image="https://images.dominos.co.in/Corn.jpg"
            />
            <Product
             id="121316"
             title="Veggie Pizza - M"
             price={450}
             rating={5}
             image="https://images.dominos.co.in/Keema.jpg"
            />
            </div>
            <div className="home__row">
            <Product
             id="121317"
             title="Paneer Paratha Pizza"
             price={209}
             rating={4}
             image="https://images.dominos.co.in/Paneer.jpg"
            />
            <Product
             id="121318"
             title="Farmhouse Pizza - M"
             price={499}
             rating={4}
             image="https://images.dominos.co.in/farmhouse.png"
            />
            <Product
             id="121319"
             title="Paneer Makhni Pizza - M"
             price={250}
             rating={5}
             image="https://images.dominos.co.in/updated_paneer_makhani.jpg"
            />
            <Product
             id="121320"
             title="4-Cheese pizza - M"
             price={639}
             rating={5}
             image="https://images.dominos.co.in/PIZ0171.jpg"
            />
              <Product
             id="121321"
             title="The unthinkable pizza - M"
             price={549}
             rating={5}
             image="https://images.dominos.co.in/PIZ0167.jpg"
            />
            
            
       </div>
       </div>

        
    )
}
export default Home