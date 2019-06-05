import * as React from "react";
import { MediumPost } from "../lib/medium";
import { GithubRepo } from "../lib/github";

interface StoreInterface {
  mediumPosts: MediumPost[];
  githubRepos: GithubRepo[];
  setMediumPosts: any;
  setGithubRepos: any;
}

export const StoreContext = React.createContext<StoreInterface | null>(null);

export const StoreProvider = (props: any) => {
  const [mediumPosts, setMediumPosts] = React.useState([]);
  const [githubRepos, setGithubRepos] = React.useState([]);
  const context: StoreInterface = {
    mediumPosts,
    setMediumPosts,
    githubRepos,
    setGithubRepos,
  };
  return (
    <StoreContext.Provider value={context}>
      {props.children}
    </StoreContext.Provider>
  );
};

export const { Consumer } = StoreContext;
