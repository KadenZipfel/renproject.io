import * as React from "react";
import { MediumPost } from "../lib/medium";

interface StoreInterface {
  mediumPosts: MediumPost[];
  setMediumPosts: any;
}

export const StoreContext = React.createContext<StoreInterface | null>(null);

export const StoreProvider = (props: any) => {
  const [mediumPosts, setMediumPosts] = React.useState([]);
  const context: StoreInterface = {
    mediumPosts,
    setMediumPosts,
  };
  return (
    <StoreContext.Provider value={context}>
      {props.children}
    </StoreContext.Provider>
  );
};

export const { Consumer } = StoreContext;
