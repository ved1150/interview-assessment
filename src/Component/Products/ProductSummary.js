import React from "react";
import classes from "./ProductsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Awesome Products, Delivered To You</h2>
      <p>
        An e-commerce website is one that allows people to buy and sell physical
        goods, services, and digital products over the internet rather than at a
        brick-and-mortar location.
      </p>
      <p>
        Through an e-commerce website, a business can process orders, accept
        payments, manage shipping and logistics, and provide customer service.
      </p>
    </section>
  );
};

export default MealsSummary;
