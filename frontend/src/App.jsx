import React, { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Features } from "./components/Features/Features";
import { Testimonial } from "./components/Testimonial/Testimonial";
import { StartOrganizing } from "./components/StartOrganizing/StartOrganizing";
import { Footer } from "./components/Footer/Footer";
import { TodoData } from "./components/TodoData/TodoData";
import axios from "axios";

export const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/todos");
      setTodos(response.data); 
      console.log(todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    } 
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <Header />
      <Hero fetchTodos={fetchTodos} />
      <Features />
      <Testimonial />
      <StartOrganizing />
      {todos.length > 0 ? <TodoData todos={todos} fetchTodos={fetchTodos} /> : null}
      <Footer />
    </>
  );
};
