exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("shows")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("shows").insert([
        {
          title: "My Hero Academia",
          genre: "Anime|Action|Adventure",
          description:
            "Izuku has dreamt of being a hero all his life—a lofty goal for anyone, but especially challenging for a kid with no superpowers. That’s right, in a world where eighty percent of the population has some kind of super-powered “quirk,” Izuku was unlucky enough to be born completely normal. But that’s not enough to stop him from enrolling in one of the world’s most prestigious hero academies.",
          platform: "crunchyroll|Hulu|YouTubeTV|Sling TV",
          image:
            "https://ib1.hulu.com/user/v3/artwork/36e318dc-3daf-47fb-8219-9e3cb5cd28f2?base_image_bucket_name=image_manager&base_image=fdc7e972-fd46-4a23-bf7c-f1f9ab83053d&size=400x600&format=jpeg"
        },
        {
          title: "Superstore",
          genre: "Family|Sitcom|Comedy",
          description:
            "Revolving around a group of employees at a big-box store, it examines love, friendship and the beauty of everyday moments.",
          platform: "Hulu|YouTube TV|Sling|NBC|Sling",
          image:
            "https://tvguide1.cbsistatic.com/mediabin/showcards/tvshows/800000-900000/800949-superstore.png"
        },
        {
          title: "Game of Thrones",
          genre: "Action|Drama|Adventure",
          description:
            "Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.",
          platform: "HBO Now|Hulu|Amazon Prime|YouTube",
          image:
            "https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
        },
        {
          title: "Friends",
          genre: "Comedy|Romance",
          description:
            "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
          platform: "Hulu|YouTube TV|fubo TV|Amazon Prime",
          image:
            "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR0,0,182,268_AL_.jpg"
        },
        {
          title: "Russian Doll",
          genre: "Mystery ",
          description:
            "The series follows Nadia Vulvokov (Lyonne), a game developer who repeatedly dies and relives the same night in an ongoing time loop and tries to solve it, leading to her finding Alan Zaveri in the same situation (portrayed by Charlie Barnett). It also stars Greta Lee, Yul Vazquez, and Elizabeth Ashley.",
          platform: "Netflix",
          image:
            "https://www.gstatic.com/tv/thumb/tvbanners/16356645/p16356645_b_v8_ab.jpg"
        },
        {
          title: "Stranger Things",
          genre: "Sci-Fi|Horror",
          description:
            "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
          platform: "Netflix",
          image:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg"
        },
        {
          title: "The Witcher",
          genre: "Drama",
          description:
            "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
          platform: "Netflix",
          image:
            "https://www.gstatic.com/tv/thumb/tvbanners/17580215/p17580215_b_v8_ac.jpg "
        },
        {
          title: "The Boys",
          genre: "Drama",
          description:
            "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
          platform: "Amazon Prime Video",
          image:
            "https://www.gstatic.com/tv/thumb/tvbanners/16826253/p16826253_b_v8_ac.jpg"
        },
        {
          title: "Doctor Who",
          genre: "Drama",
          description:
            "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
          platform: "YouTube TV|Philo|fuboTV|",
          image:
            "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0d/Doctor_Who_11._sezon.png/220px-Doctor_Who_11._sezon.png"
        },
        {
          title: "Watchmen",
          genre: "Sci-fi",
          description:
            "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
          platform: "HBO|Hulu|Amazon Prime Video|YouTube",
          image:
            "https://www.gstatic.com/tv/thumb/tvbanners/17308019/p17308019_b_v8_ac.jpg"
        },
        {
          title: "The Mandalorian",
          genre: "Action",
          description:
            "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
          platform: "Disney+",
          image:
            "https://www.gstatic.com/tv/thumb/tvbanners/17612208/p17612208_b_v8_aa.jpg"
        },
        {
          title: "The Expanse",
          genre: "Drama",
          description:
            "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
          platform: "Amazon Prime Video",
          image:
            "https://www.gstatic.com/tv/thumb/tvbanners/17179505/p17179505_b_v8_ad.jpg"
        },
        {
          title: "Jack Ryan ",
          genre: "Action",
          description:
            "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          platform: "Amazon Prime",
          image:
            "https://www.gstatic.com/tv/thumb/tvbanners/17351835/p17351835_b_v8_ac.jpg"
        },
        {
          title: "Brooklyn Nine-Nine",
          genre: "Comedy",
          description:
            "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
          platform: "NBC|Hulu|YouTube TV|Sling TV|fuboTV",
          image:
            "https://www.gstatic.com/tv/thumb/tvbanners/17602950/p17602950_b_v8_ab.jpg"
        },
        {
          title: "The Good Place",
          genre: "SitCome|Comedy",
          description:
            "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
          platform: "NBC|Hulu|YouTube TV|Sling TV|fuboTV",
          image:
            "https://www.gstatic.com/tv/thumb/tvbanners/17156086/p17156086_b_v8_ab.jpg"
        },
        {
          title: "Kimetsu no Yaiba",
          genre: "Anime|Action|Adventure",
          description:
            "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
          platform: "Cruchyroll|Hulu",
          image:
            "https://animefable.com/wp-content/uploads/2019/09/Kimetsu-no-Yaiba-Tanjiro-has-a-hidden-power.jpg"
        },
        {
          title: "Dr. Stone",
          genre: "Anime",
          description:
            "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
          platform: "Crunchyroll",
          image: "https://cdn.myanimelist.net/images/anime/1613/102576l.jpg"
        },
        {
          title: "Black Clover",
          genre: "Anime|Action|Adventure",
          description:
            "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
          platform: "Cruchyroll|Hulu",
          image:
            "https://www.animefillerlist.com/sites/default/files/styles/anime_poster/public/black_clover_5.jpg?itok=bysAuZyI"
        },
        {
          title: "Hunter × Hunter",
          genre: "Anime|Action|Adventure",
          description:
            "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
          platform: "Cruchyroll|Hulu",
          image:
            "https://cdn11.bigcommerce.com/s-l71eudan7b/images/stencil/1280x1280/products/427/861/BB820HunterHunterGrouponmap__20406.1557962200.jpg?c=2&imbypass=on"
        },
        {
          title: "Attack on Titan",
          genre: "Anime",
          description:
            "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          platform: "Cruchyroll",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/91M9VaZWxOL.jpg"
        },
        {
          title: "Fire Force",
          genre: "Anime",
          description:
            "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
          platform: "Cruchyroll|Hulu",
          image:
            "https://ib.hulu.com/user/v3/artwork/5973d358-1997-47d0-942d-e85b455ed9db?base_image_bucket_name=image_manager&base_image=e7777ba6-7f66-41fd-9d54-8f7bd846cbf3&size=400x600&format=jpeg"
        },
        {
          title: "Sherlock",
          genre: "Comedy",
          description:
            "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
          platform: "Netflix",
          image:
            "https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          title: "Chilling Adventures of Sabrina",
          genre: "Drama|Horror",
          description:
            "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
          platform: "Netflix",
          image:
            "https://www.gstatic.com/tv/thumb/tvbanners/17710206/p17710206_b_v8_aa.jpg"
        },
        {
          title: "Lost in Space",
          genre: "Sci-fi",
          description:
            "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
          platform: "Netflix",
          image:
            "https://www.gstatic.com/tv/thumb/tvbanners/17467742/p17467742_b_v8_aa.jpg"
        },
        {
          title: "The Handmaid's Tale",
          genre: "Sci-fi|Drama",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
          platform: "Hulu",
          image:
            "https://www.gstatic.com/tv/thumb/tvbanners/16580107/p16580107_b_v8_aa.jpg"
        },
        {
          title: "Saturday Night Live",
          genre: "Comedy",
          description:
            "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
          platform: "Hulu|NBC|YouTube|Sling TV|fubo TV",
          image:
            "https://www.gstatic.com/tv/thumb/tvbanners/17312881/p17312881_b_v8_aa.jpg"
        },
        {
          title: "GLOW (TV series)",
          genre: "Drama|Comedy|",
          description:
            "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
          platform: "Hulu",
          image:
            "https://www.gstatic.com/tv/thumb/tvbanners/17003042/p17003042_b_v8_aa.jpg"
        },
        {
          title: "One Punch Man",
          genre: "Anime",
          description:
            "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
          platform: "Crunchyroll",
          image:
            "https://m.media-amazon.com/images/M/MV5BMzQxMzE5NzM2NV5BMl5BanBnXkFtZTgwMDQ4NTUyNzE@._V1_.jpg"
        },
        {
          title: "Naruto",
          genre: "Anime",
          description:
            "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
          platform: "Crunchyroll|Netflix|Hulu",
          image:
            "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR0,0,182,268_AL_.jpg"
        },
        {
          title: "Unbreakable Kimmy Schmidt",
          genre: "Comedy",
          description:
            "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
          platform: "Netflix",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTgyNTQyNjUwN15BMl5BanBnXkFtZTgwNjMwNjUzNzM@._V1_.jpg"
        }
      ]);
    });
};
