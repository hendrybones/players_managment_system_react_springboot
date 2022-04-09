import Register from "./Authetication/Register";
import Login from "./Authetication/Login";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Editor from "./Authetication/Editor";
import Admin from "./Authetication/Admin";
import Missing from "./Authetication/Missing";
import Unauthorized from "./Authetication/Unauthorized";
import Lounge from "./Authetication/Lounge";
import LinkPage from "./Authetication/LinkPage";
import HeaderComponent from "./components/HeaderComponents";
import FooterComponent from "./components/FooterComponet";
import ListPlayersComponent from "./components/ListPlayersComponent";
import CreatePlayerComponent from "./components/CreatePlayerComponent";
import ViewPlayerComponent from "./components/ViewPlayerComponent";
import RequireAuth from "./Authetication/RequireAuth";
// import RequireAuth from './components/RequireAuth';
import { Routes, Route } from "react-router-dom";

const ROLES ={
  "User": 2001,
  "Editor": 1984,
  "Admin ": 5150
}
function App() {
  //
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="Home" element={<Home />}></Route>

        {/* protected routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />}/>
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
        <Route path="editor" element={<Editor />}/>
        </Route>


        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
        <Route path="admin" element={<Admin />}/>
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor,ROLES.Admin]} />}>
        <Route path="lounge" element={<Lounge />}/>
        </Route>
        
        <Route element={<RequireAuth allowedRoles={[ROLES.Editor,ROLES.Admin]} />}>
        <Route path="/players" component={<ListPlayersComponent />}/>
        <Route path="/add-player/:id" component={<CreatePlayerComponent />}/>
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor,ROLES.Admin]} />}>
        <Route path="/view-player/:id" component={<ViewPlayerComponent />}/>
        </Route>
        {/* <Route path="/update-player/:id" component={UpdatePlayerComponent}></Route> */}

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
