import Homepage from '../client/view/Homepage';
import SingleLogo from '../client/view/SingleLogo';
import SingleCategory from '../client/view/SingleCategory';
import About from '../client/view/About';
import AddLogo from '../client/view/AddLogo';
import AllCategories from '../client/view/AllCategories';
import SearchResults from '../client/view/SearchResults';

const routes = [
  {
    ...Homepage,
    path: '/',
    exact: true,
  },
  {
    ...SingleLogo,
    path: '/logos/:id',
    exact: true,
  },
  {
    ...SingleCategory,
    path: '/category/:id',
    exact: true,
  },
  {
    ...AllCategories,
    path: '/category',
    exact: true,
  },
  {
    ...SearchResults,
    path: '/search',
    exact: true,
  },
  {
    ...About,
    path: '/about',
    exact: true,
  },
  {
    ...AddLogo,
    path: '/addlogo',
    exact: true,
  },
];

export default routes;
