import React, { useState } from "react";
import styles from "../../../CSSFiles/Home/Home.module.css";
import { debounce } from "lodash";
import Card from "../../Shared Resources/Card";
import { CartState } from "../../../Store/MyContext";

const getfiltereditems = (query, state) => {
  if (!query) {
    return state;
  }
  return state.filter((e) => e.title.includes(query));
};

const Home = () => {
  const {
    state: { state },
  } = CartState();
  const [query, setquery] = useState("");
  const filteredItems = getfiltereditems(query, state);
  const updateQuery = (e) => {
    setquery(e?.target?.value);
  };
  const debouncedOnChange = debounce(updateQuery, 1000);

  return (
    <div className={styles.main_wrapper}>
      <section className={`${styles.section}`}>
        <form className="d-flex w-50 py-5 mx-auto ">
          <input
            className={`form-control me-2 ${styles.input_search}`}
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={debouncedOnChange}
          />
        </form>
      </section>

      <section className="container">
        <div className="wrapper py-4 d-flex flex-column align-items-center">
          <h1>Product Listing</h1>
          <h6>A store where you can find everything with the quality assured</h6>
        </div>
        <div>
          <div className="row">
            {filteredItems.map((prod) => {
              return (
                <div className="col-md-4 col-xs-12">
                  <Card {...prod} key={prod.id} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
