import { Navigate, useRoutes } from 'react-router-dom';
import CommonLayout from './layouts/CommonLayout';
import MoviesList from './components/MoviesList';
import MoveDetails from './components/MoveDetails';

export default function Router() { 
    const routes = useRoutes([
        {

        path:'/demo',
        element:<CommonLayout />,
        children : [
            {
                path: 'movies-list',
                element: <MoviesList />
            },
            {
                path: 'movie-details',
                element: <MoveDetails />
            }
        ]
        },
        {
            path: '/',
            element: <Navigate to="/demo/movies-list" exact />
        }
    ])
     return routes;
}