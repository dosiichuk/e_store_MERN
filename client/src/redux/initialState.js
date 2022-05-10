export const initialState = {
  posts: {
    data: [
      // {
      //   id: 1,
      //   title: 'Post 1',
      //   summary: 'This is a post about selling smth.',
      //   content:
      //     'sjadf kjwbfij kjbfij kjebfi kejrfbi kjebrfiejr kejnfier Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned',
      //   publishedDate: '10/04/2022',
      //   updatedDate: '11/04/2022',
      //   email: 'test@test.com',
      //   author: 'Melania Dull',
      //   status: 'published',
      //   photo: 'header4.jpg',
      //   price: 10,
      //   phone: '999-999-999',
      //   location: 'Warsaw',
      // },
    ],
    loading: {
      active: false,
      error: false,
    },
    filters: { author: { _id: '28340' } },
  },
  user: {
    loggedIn: true,
    name: 'John Doe',
    email: 'test@test.com',
    location: 'Warsaw',
    role: undefined,
    id: '625dd54c1ed2a75524bb1e77',
    loading: {
      active: true,
      error: false,
    },
  },
};
