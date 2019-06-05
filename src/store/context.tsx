import * as React from "react";
import { MediumPost } from "../lib/medium";
import { GithubRepo } from "../lib/github";

interface StoreInterface {
  mediumPosts: MediumPost[];
  githubRepos: GithubRepo[];
  githubActivity: number[];
  setMediumPosts: any;
  setGithubRepos: any;
  setGithubActivity: any;
}

export const StoreContext = React.createContext<StoreInterface | null>(null);

export const StoreProvider = (props: any) => {
  const [mediumPosts, setMediumPosts] = React.useState([]);
  const [githubRepos, setGithubRepos] = React.useState([]);
  const [githubActivity, setGithubActivity] = React.useState([]);
  const context: StoreInterface = {
    mediumPosts,
    setMediumPosts,
    githubActivity,
    setGithubActivity,
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
