const posts = [
  {
    title: "Learn Js",
    _id: "05dfms545dr",
    genre: "tech",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non iure, a eveniet id quos natus officia explicabo ut dolores eius sequi exercitationem, pariatur laudantium alias necessitatibus minima dolorem, ea neque? Vero laudantium quia quae debitis dolore magni adipisci fugiat ad veniam laborum autem reprehenderit sunt nemo quam, ab eligendi?",
    subContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non iure, a eveniet id quos natus officia explicabo ut dolores eius sequi exercitationem, pariatur laudantium alias necessitatibus minima dolorem...",
  },
  {
    title: "Learn React",
    _id: "55dfms545ds",
    genre: "tech",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non iure, a eveniet id quos natus officia explicabo ut dolores eius sequi exercitationem, pariatur laudantium alias necessitatibus minima dolorem, ea neque? Vero laudantium quia quae debitis dolore magni adipisci fugiat ad veniam laborum autem reprehenderit sunt nemo quam, ab eligendi?",
    subContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non iure, a eveniet id quos natus officia explicabo ut dolores eius sequi exercitationem, pariatur laudantium alias necessitatibus minima dolorem...",
  },
  {
    title: "How the brain works",
    _id: "02deds545ds",
    genre: "science",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non iure, a eveniet id quos natus officia explicabo ut dolores eius sequi exercitationem, pariatur laudantium alias necessitatibus minima dolorem, ea neque? Vero laudantium quia quae debitis dolore magni adipisci fugiat ad veniam laborum autem reprehenderit sunt nemo quam, ab eligendi?",
    subContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non iure, a eveniet id quos natus officia explicabo ut dolores eius sequi exercitationem, pariatur laudantium alias necessitatibus minima dolorem...",
  },
  {
    title: "Corona virus",
    _id: "55dedse85ds",
    genre: "science",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non iure, a eveniet id quos natus officia explicabo ut dolores eius sequi exercitationem, pariatur laudantium alias necessitatibus minima dolorem, ea neque? Vero laudantium quia quae debitis dolore magni adipisci fugiat ad veniam laborum autem reprehenderit sunt nemo quam, ab eligendi?",
    subContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non iure, a eveniet id quos natus officia explicabo ut dolores eius sequi exercitationem, pariatur laudantium alias necessitatibus minima dolorem...",
  },
  {
    title: "How to earn money",
    _id: "55r3ds545ds",
    genre: "business",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non iure, a eveniet id quos natus officia explicabo ut dolores eius sequi exercitationem, pariatur laudantium alias necessitatibus minima dolorem, ea neque? Vero laudantium quia quae debitis dolore magni adipisci fugiat ad veniam laborum autem reprehenderit sunt nemo quam, ab eligendi?",
    subContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non iure, a eveniet id quos natus officia explicabo ut dolores eius sequi exercitationem, pariatur laudantium alias necessitatibus minima dolorem...",
  },
  {
    title: "The history of football",
    _id: "58dess545ds",
    genre: "sport",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non iure, a eveniet id quos natus officia explicabo ut dolores eius sequi exercitationem, pariatur laudantium alias necessitatibus minima dolorem, ea neque? Vero laudantium quia quae debitis dolore magni adipisci fugiat ad veniam laborum autem reprehenderit sunt nemo quam, ab eligendi?",
    subContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non iure, a eveniet id quos natus officia explicabo ut dolores eius sequi exercitationem, pariatur laudantium alias necessitatibus minima dolorem...",
  },
  {
    title: "The history of tenis",
    _id: "55deds545ds",
    genre: "sport",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non iure, a eveniet id quos natus officia explicabo ut dolores eius sequi exercitationem, pariatur laudantium alias necessitatibus minima dolorem, ea neque? Vero laudantium quia quae debitis dolore magni adipisci fugiat ad veniam laborum autem reprehenderit sunt nemo quam, ab eligendi?",
    subContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non iure, a eveniet id quos natus officia explicabo ut dolores eius sequi exercitationem, pariatur laudantium alias necessitatibus minima dolorem...",
  },
  {
    title: "Learn forex",
    _id: "55ded8545ds",
    genre: "business",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non iure, a eveniet id quos natus officia explicabo ut dolores eius sequi exercitationem, pariatur laudantium alias necessitatibus minima dolorem, ea neque? Vero laudantium quia quae debitis dolore magni adipisci fugiat ad veniam laborum autem reprehenderit sunt nemo quam, ab eligendi?",
    subContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non iure, a eveniet id quos natus officia explicabo ut dolores eius sequi exercitationem, pariatur laudantium alias necessitatibus minima dolorem...",
  },
];

export const getPosts = () => {
  return posts;
};

export const getChosenPost = id => {
  const data = posts.filter(post => post._id === id);
  return data[0];
};
