export const COMPANY_LOGO_URL =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-Stp3j9l7A7FmeODEQvEwQcBTz_-55i1uZrCXG6lyA&s';

export const GITHUB_LOGO_URL =
  'https://cdn-icons-png.flaticon.com/512/25/25231.png';

const IMAGE_CDN_URL =
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

export const getCDNImage = (imageId) => {
  return `${IMAGE_CDN_URL}${imageId}`;
};

const PROXY_PORT = 3000;

const swiggyApiUrl = (uriFn) => {
  return (args) => {
    const uri = uriFn(...(args || []));
    return `http://localhost:${PROXY_PORT}/swiggy-proxy${uri}`;
  };
};

export const SWIGGY_API = {
  restaurantList: swiggyApiUrl(
    () =>
      '/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
  ),
  menuItems: swiggyApiUrl(
    (restaurantId) =>
      `/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=${restaurantId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
  ),
};

export const GITHUB_API = {
  getUser: (username) => `https://api.github.com/users/${username}`,
};
