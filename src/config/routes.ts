import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Whisky from '../pages/Whisky'

interface RouteType {
    path: string,
    component: () => JSX.Element, 
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true
    },
    {
      path: "/whisky",
      component: Whisky,
      name: "Whisky",
      protected: true
    },
];

export default routes