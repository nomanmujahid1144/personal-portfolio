import * as React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./about";
import Posts from "./blog/posts";
import RepositoriesList from "./repositories-list";
import Home from "./home";
import TechStack from "./tech-stack";
import Achievements from "./achievements";
import NotebookPost from "./blog/notebook-app/notebook-post";
import MyStory from "./my-story";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/blog/notebook-app" element={<NotebookPost />} />
      <Route path="/open-source" element={<RepositoriesList />} />
      <Route path="/blog" element={<Posts />} />
      <Route path="/tech-stack" element={<TechStack />} />
      <Route path="/story-timeline" element={<MyStory />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Navigation;
