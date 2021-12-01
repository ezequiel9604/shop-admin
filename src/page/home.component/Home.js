import { Fragment, useState } from "react";

import GeneralsOverview from "./generalsOverview.component/GeneralsOverview";
import TimeOverview from "./timeOverview.component/TimeOverview";
import ViewsOverview from "./viewsOverview.component/ViewsOverview";
import UserOverview from "./userOverview.component/UserOverview";
import { Entities } from "../../dummyData";

function Home(props) {
  const [entities] = useState(Entities);

  return (
    <Fragment>
      <TimeOverview />
      <GeneralsOverview entities={entities} />
      <ViewsOverview />
      <UserOverview />
    </Fragment>
  );
}

export default Home;
