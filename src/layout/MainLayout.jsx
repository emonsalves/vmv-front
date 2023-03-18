import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Bio from "../pages/Bio/Bio";
import Class from "../pages/Class/Class";
import Login from "../pages/Platform/Login/Login";
import ExerciseGallery from "../pages/Platform/ExerciseGallery/ExerciseGallery";
import ExerciseDetail from "../pages/Platform/ExerciseDetail";
import AdminView from "../pages/Admin/Admin";
import ExerciseUpload from "../pages/Admin/ExerciseUpload/ExerciseUpload";
import PendingPractices from "../pages/Admin/PendingPractices/PendingPractices";
import UserList from "../pages/Admin/UserList/UserList";
import UserProfile from "../pages/Profile/UserProfile";
import ProtectedRoutes from "./ProtectedRoutes";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function MainLayout() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/bio" element={<Bio />} />
        <Route exact path="/clases" element={<Class />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/ejercicios" element={<ExerciseGallery />} />
        <Route exact path="/ejercicio/:id" element={<ExerciseDetail />} />
        <Route
          exact
          path="/user"
          element={
            <ProtectedRoutes>
              <UserProfile />
            </ProtectedRoutes>
          }
        />
        <Route exact path="/admin" element={<AdminView />}>
          <Route path="/admin/ejercicios" element={<ExerciseUpload />} />
          <Route path="/admin/practicas" element={<PendingPractices />} />
          <Route path="/admin/usuarios" element={<UserList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default MainLayout;
