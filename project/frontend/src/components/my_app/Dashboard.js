import React, { Fragment } from "react";
import Form from "./Form";
import MyApp from "./MyApp";

export default function Dashboard() {
  return (
    <div>
      <Fragment>
        <Form />
        <MyApp />
      </Fragment>
    </div>
  );
}
