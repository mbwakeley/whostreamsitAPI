exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("movies")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("movies").insert([
        {
          title: "The Irishman",
          genre: "Crime|Biography|Drama",
          description:
            "In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa -- a powerful Teamster tied to organized crime.",
          platform: "Netflix",
          image:
            "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg"
        },
        {
          title: "Marriage Story",
          genre: "Drama",
          description:
            "A stage director and his actor wife struggle through a gruelling, coast-to-coast divorce that pushes them to their personal and creative extremes.",
          platform: "Netflix",
          image:
            "https://66.media.tumblr.com/81a8bd025987f5357ae3129538a4500a/df0989fbc7cc2463-d7/s540x810/e065c9a4e7d0c48f0b97e85d33bcf21418525492.jpg"
        },
        {
          title: "Us",
          genre: "Horror|Mystery",
          description:
            "A family's serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them.",
          platform: "Hulu|HBO Now",
          image:
            "https://m.media-amazon.com/images/M/MV5BODUyODM0NjYyNF5BMl5BanBnXkFtZTgwNjAwMDU5NjM@._V1_SY1000_SX640_AL_.jpg"
        },
        {
          title: "AIRPLANE!",
          genre: "Comedy",
          description:
            "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          platform: "Netflix",
          image:
            "https://www.gstatic.com/tv/thumb/v22vodart/1671/p1671_v_v8_aj.jpg"
        },
        {
          title: "A League of Their Own",
          genre: "Comedy-Drama|Sport",
          description:
            "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
          platform: "Hulu",
          image:
            "https://www.gstatic.com/tv/thumb/v22vodart/14086/p14086_v_v8_ak.jpg"
        },
        {
          title: "Die Hard",
          genre: "Thriller|Action|Christmas",
          description:
            "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
          platform: "Hulu",
          image:
            "https://is3-ssl.mzstatic.com/image/thumb/Video118/v4/0b/e4/b9/0be4b9e4-ddb0-c206-6542-6bfe4846986b/pr_source.lsr/268x0w.png"
        },
        {
          title: "Zombieland",
          genre: "Comedy",
          description:
            "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
          platform: "Amazon Prime($4.99)| YouTube($3.99)",
          image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Zombieland-poster.jpg/220px-Zombieland-poster.jpg"
        },
        {
          title: "Deadpool",
          genre: "Action|Comedy|Adventure",
          description:
            "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          platform: "Donec quis orci eget orci vehicula condimentum.",
          image:
            "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
        },
        {
          title: "The Two Popes",
          genre: "Comedy|Drama",
          description:
            "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
          platform: "Netflix",
          image:
            "https://m.media-amazon.com/images/M/MV5BY2RiOTc1YmYtMDk0Yy00ZWI4LTgzN2YtYTg2ZDZmOGIwNTA1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        },
        {
          title: "Her Smell",
          genre: "Music|Drama",
          description:
            "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
          platform: "HBO Now|Hulu",
          image:
            "https://www.gstatic.com/tv/thumb/v22vodart/16645992/p16645992_v_v8_aa.jpg"
        },
        {
          title: "Booksmart",
          genre: "Comedy",
          description:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
          platform: "Hulu",
          image:
            "https://m.media-amazon.com/images/M/MV5BMjEzMjcxNjA2Nl5BMl5BanBnXkFtZTgwMjAxMDM2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
        },
        {
          title: "Amazing Grace",
          genre: "Documentary|Music",
          description:
            "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
          platform: "Hulu",
          image:
            "https://m.media-amazon.com/images/M/MV5BODQzNTMyNTY2NF5BMl5BanBnXkFtZTgwNDM5MTg1NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
        }
      ]);
    });
};
