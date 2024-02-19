import classes from "./Home.module.css";
import Product from "./Product";

function Home() {
  return (
    <div className={classes.homeimage}>
      <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg" />
        <div>
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
