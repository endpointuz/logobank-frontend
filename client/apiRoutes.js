const host = 'https://logobank.uz:8005/api';



export default {
  categories: () => [host, 'core/categories/'].join('/'),
  logos: () => [host, 'core/logos/'].join('/'),
  logoRead: (id) => [host, 'core/logos', id, ''].join('/'),
  logosCount: () => [host, 'core/logos/count/'].join('/'),
  logoCreate: () => [host, 'core/logos/create/'].join('/'),
};
