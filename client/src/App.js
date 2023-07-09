import React from "react";
import {createBrowserRouter , RouterProvider , Route , createRoutesFromElements} from 'react-router-dom' ;
import Login from "./pages/Login";
import MoviePage from "./pages/Movies";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import Signup from "./pages/Signup";
import TVShows from "./pages/TVShows";
import Info from "./pages/Info";
import UserListedMovies from "./pages/UserListedMovies";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route index path="/signup" element={<Signup />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/player" element={<Player />} />
        <Route  path="/tv" element={<TVShows />} />
        <Route  path="/movies" element={<MoviePage />} />
        <Route  path="/info" element={<Info />} />
        <Route  path="/new" element={<Player />} />
        <Route  path="/mylist" element={<UserListedMovies />} />
        <Route  path="/"  element={<Netflix />} />
      </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;