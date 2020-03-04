exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("show_updates")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("show_updates").insert([
        {
          show_id: 2,
          user_id: 7,
          content: "Integer ac leo. Pellentesque ultrices mattis odio."
        },
        {
          show_id: 5,
          user_id: 8,
          content:
            "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue."
        },
        {
          show_id: 1,
          user_id: 13,
          content:
            "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo."
        },
        {
          show_id: 12,
          user_id: 15,
          content: "Integer non velit."
        },
        {
          show_id: 5,
          user_id: 4,
          content:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
        },
        {
          show_id: 10,
          user_id: 5,
          content:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices."
        },
        {
          show_id: 3,
          user_id: 6,
          content:
            "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi."
        },
        {
          show_id: 2,
          user_id: 9,
          content: "Aliquam quis turpis eget elit sodales scelerisque."
        },
        {
          show_id: 8,
          user_id: 1,
          content:
            "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
        },
        {
          show_id: 13,
          user_id: 10,
          content: "Donec posuere metus vitae ipsum."
        },
        {
          show_id: 13,
          user_id: 14,
          content: "Etiam vel augue."
        },
        {
          show_id: 9,
          user_id: 8,
          content: "Vivamus tortor."
        },
        {
          show_id: 13,
          user_id: 4,
          content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        },
        {
          show_id: 3,
          user_id: 12,
          content:
            "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa."
        },
        {
          show_id: 6,
          user_id: 2,
          content:
            "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
        },
        {
          show_id: 2,
          user_id: 13,
          content:
            "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque."
        },
        {
          show_id: 12,
          user_id: 11,
          content:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
        },
        {
          show_id: 6,
          user_id: 15,
          content:
            "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus."
        },
        {
          show_id: 8,
          user_id: 2,
          content: "Sed ante."
        },
        {
          show_id: 8,
          user_id: 2,
          content: "Pellentesque at nulla."
        }
      ]);
    });
};
