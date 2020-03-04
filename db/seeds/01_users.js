exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "afosdick0",
          email: "tlinebarger0@walmart.com",
          password: "RKQynHLSf",
          rank: "admin"
        },
        {
          username: "uyuille1",
          email: "ktassell1@scribd.com",
          password: "V3kjgWxXDg",
          rank: "admin"
        },
        {
          username: "cfessler2",
          email: "lroyan2@google.com",
          password: "cYRckoavoX",
          rank: "admin"
        },
        {
          username: "eaish3",
          email: "acancott3@wix.com",
          password: "DlA4kuVC",
          rank: "admin"
        },
        {
          username: "ghawksworth4",
          email: "ajermin4@mac.com",
          password: "ALhNC7JgJB6y",
          rank: "admin"
        },
        {
          username: "agemlbett5",
          email: "ttopp5@tuttocitta.it",
          password: "JjuRWkHANh0b",
          rank: "user"
        },
        {
          username: "hcabral6",
          email: "sscarlet6@wix.com",
          password: "rU5sCsPN",
          rank: "user"
        },
        {
          username: "umarcos7",
          email: "bmenier7@tinypic.com",
          password: "XS80fFl1lhgH",
          rank: "user"
        },
        {
          username: "abalaison8",
          email: "mmatzeitis8@stanford.edu",
          password: "stzUQFwy",
          rank: "user"
        },
        {
          username: "nmarton9",
          email: "fbaggally9@google.co.uk",
          password: "E0r8GFKEz",
          rank: "user"
        },
        {
          username: "spigdena",
          email: "gtirreya@yolasite.com",
          password: "07zltDf1",
          rank: "user"
        },
        {
          username: "wpaikb",
          email: "alemmonb@acquirethisname.com",
          password: "7p07sKDIgAb",
          rank: "user"
        },
        {
          username: "lraglesc",
          email: "dhellicarc@meetup.com",
          password: "7SHMePUp",
          rank: "user"
        },
        {
          username: "snewissd",
          email: "medwardsond@cdc.gov",
          password: "KuqZOPbxw",
          rank: "user"
        },
        {
          username: "vsalamane",
          email: "jfilyashine@bloglines.com",
          password: "ZDZVzz4VH2",
          rank: "user"
        },
        {
          username: "bdodgef",
          email: "bgorvinf@a8.net",
          password: "faWP8fNRl",
          rank: "user"
        },
        {
          username: "sedgesong",
          email: "pwitterickg@histats.com",
          password: "DacK1FDpG",
          rank: "user"
        },
        {
          username: "adeshonh",
          email: "fphettish@photobucket.com",
          password: "F12yc5ueOLO",
          rank: "user"
        },
        {
          username: "jtoffuli",
          email: "dbolzeni@elegantthemes.com",
          password: "odrjblHTqV",
          rank: "user"
        },
        {
          username: "cclementj",
          email: "ikeenerj@php.net",
          password: "TbRQbMym5",
          rank: "user"
        }
      ]);
    });
};
