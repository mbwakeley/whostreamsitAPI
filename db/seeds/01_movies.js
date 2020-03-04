exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("movies")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("movies").insert([
        {
          title: "Tempest",
          genre: "Comedy|Drama",
          description:
            "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
          platform: "Mauris ullamcorper purus sit amet nulla.",
          image: "http://dummyimage.com/225x109.jpg/dddddd/000000"
        },
        {
          title: "Slaughter Rule, The",
          genre: "Drama",
          description:
            "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
          platform: "Ut tellus.",
          image: "http://dummyimage.com/175x106.jpg/dddddd/000000"
        },
        {
          title: "The Search for Santa Paws",
          genre: "Adventure|Children",
          description:
            "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
          platform:
            "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
          image: "http://dummyimage.com/215x158.jpg/ff4444/ffffff"
        },
        {
          title: "Inequality for All",
          genre: "Documentary",
          description:
            "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          platform: "Cras pellentesque volutpat dui.",
          image: "http://dummyimage.com/127x118.jpg/cc0000/ffffff"
        },
        {
          title: "Sandglass, The (Sanatorium pod klepsydra)",
          genre: "Mystery",
          description:
            "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
          platform: "Proin at turpis a pede posuere nonummy.",
          image: "http://dummyimage.com/119x118.jpg/ff4444/ffffff"
        },
        {
          title: "Satan Met a Lady",
          genre: "Comedy|Drama|Mystery",
          description:
            "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
          platform: "Sed ante.",
          image: "http://dummyimage.com/165x108.jpg/cc0000/ffffff"
        },
        {
          title: "Waterland",
          genre: "Drama",
          description:
            "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
          platform: "Nulla nisl.",
          image: "http://dummyimage.com/184x187.jpg/dddddd/000000"
        },
        {
          title: "Moebius",
          genre: "Drama",
          description:
            "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          platform: "Donec quis orci eget orci vehicula condimentum.",
          image: "http://dummyimage.com/235x213.jpg/5fa2dd/ffffff"
        },
        {
          title: "Tough Guise: Violence, Media & the Crisis in Masculinity",
          genre: "Documentary",
          description:
            "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
          platform: "Aenean lectus.",
          image: "http://dummyimage.com/245x223.jpg/dddddd/000000"
        },
        {
          title: "Four Days in July",
          genre: "Comedy|Drama",
          description:
            "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
          platform: "Vestibulum sed magna at nunc commodo placerat.",
          image: "http://dummyimage.com/121x209.jpg/ff4444/ffffff"
        },
        {
          title: "Hopscotch",
          genre: "Comedy",
          description:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
          platform: "In hac habitasse platea dictumst.",
          image: "http://dummyimage.com/147x165.jpg/ff4444/ffffff"
        },
        {
          title: "Chained",
          genre: "Horror|Thriller",
          description:
            "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
          platform: "Aliquam quis turpis eget elit sodales scelerisque.",
          image: "http://dummyimage.com/168x231.jpg/ff4444/ffffff"
        },
        {
          title: "Assault, The (Aanslag, De)",
          genre: "Drama|Romance|War",
          description:
            "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
          platform:
            "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
          image: "http://dummyimage.com/243x227.jpg/cc0000/ffffff"
        },
        {
          title: "Robot Monster",
          genre: "Horror|Sci-Fi",
          description:
            "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
          platform: "Aenean sit amet justo.",
          image: "http://dummyimage.com/235x168.jpg/cc0000/ffffff"
        },
        {
          title: "Suspicious River",
          genre: "Drama",
          description:
            "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
          platform: "Morbi non lectus.",
          image: "http://dummyimage.com/137x124.jpg/cc0000/ffffff"
        },
        {
          title: "Plague Dogs, The",
          genre: "Adventure|Animation|Drama",
          description:
            "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
          platform: "Duis at velit eu est congue elementum.",
          image: "http://dummyimage.com/246x239.jpg/5fa2dd/ffffff"
        },
        {
          title: "Ida",
          genre: "Drama",
          description:
            "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
          platform: "Quisque id justo sit amet sapien dignissim vestibulum.",
          image: "http://dummyimage.com/127x111.jpg/ff4444/ffffff"
        },
        {
          title: "Hound of the Baskervilles, The",
          genre: "Comedy|Crime|Mystery",
          description:
            "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
          platform: "Sed vel enim sit amet nunc viverra dapibus.",
          image: "http://dummyimage.com/119x221.jpg/cc0000/ffffff"
        },
        {
          title: "Gregory's Girl",
          genre: "Comedy|Romance",
          description:
            "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
          platform: "Morbi quis tortor id nulla ultrices aliquet.",
          image: "http://dummyimage.com/229x175.jpg/ff4444/ffffff"
        },
        {
          title: "Mystery of Picasso, The (Le mystère Picasso)",
          genre: "Documentary",
          description:
            "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
          platform: "Nullam molestie nibh in lectus.",
          image: "http://dummyimage.com/226x131.jpg/dddddd/000000"
        }
      ]);
    });
};
