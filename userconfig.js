let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Manila, Philippines',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#f38ba8",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      b: ["https://search.brave.com/search?q=", "Brave"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.ph/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [{
        name: "Productivity",
        links: [
          {
            name: "quipper",
            url: "https://learn.quipper.com/en/todos/active",
            icon: "chalkboard",
            icon_color: "#a6e3a1",
          },
          {
            name: "bible",
            url: "https://www.bible.com/users/ZachQuita/reading-plans/",
            icon: "bible",
            icon_color: "#f0c6c6",
          },
          {
            name: "chatgpt",
            url: "https://chat.openai.com/",
            icon: "brand-openai",
            icon_color: "#94e2d5",
          },
          {
            name: "canva",
            url: "https://www.canva.com/",
            icon: "writing",
            icon_color: "#89b4fa",
          },
          {
            name: "gmail",
            url: "https://mail.google.com",
            icon: "brand-gmail",
            icon_color: "#f38ba8",
          },
          {
            name: "documents",
            url: "https://docs.google.com",
            icon: "text-size",
            icon_color: "#cba6f7",
          },
        ],
      }, {
        name: "japanese",
        links: [
          {
            name: "takoboto",
            url: "https://takoboto.jp",
            icon: "book-2",
            icon_color: "#f38ba8",
          },
          {
            name: "ichi moe",
            url: "https://ichi.moe",
            icon: "language",
            icon_color: "#cba6f7",
          },
          {
            name: "deepl",
            url: "https://www.deepl.com/en/translator",
            icon: "language-hiragana",
            icon_color: "#89b4fa",
          },
          {
            name: "conjugation",
            url: "https://baileysnyder.com/jconj/",
            icon: "message-language",
            icon_color: "#fab387",
          },
          {
            name: "nhk",
            url: "https://www3.nhk.or.jp/news/easy/",
            icon: "news",
            icon_color: "#89b4fa",
          },
        ],
      },
    ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/bg-5.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "pinterest",
              url: "https://www.pinterest.ph/",
              icon: "brand-pinterest",
              icon_color: "#f38ba8",
            },
            {
              name: "reddit",
              url: "https://reddit.com",
              icon: "brand-reddit",
              icon_color: "#fab387",
            },
            {
              name: "facebook",
              url: "https://facebook.com",
              icon: "brand-facebook",
              icon_color: "#89b4fa",
            },
            {
              name: "messenger",
              url: "https://messenger.com",
              icon: "brand-messenger",
              icon_color: "#cba6f7",
            },
            {
              name: "instagram",
              url: "https://instagram.com",
              icon: "brand-instagram",
              icon_color: "#f38ba8",
            },
            {
              name: "discord",
              url: "https://canary.discord.com",
              icon: "brand-discord",
              icon_color: "#cba6f7",
            },
            {
              name: "cinny",
              url: "https://app.cinny.in",
              icon: "brand-matrix",
              icon_color: "#cdd6f4",
            },
          ],
        },
        {
          name: "entertainment",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/user/Zakar98k/",
              icon: "list-details",
              icon_color: "#89b4fa",
            },
            {
              name: "mangadex",
              url: "https://mangadex.org",
              icon: "book",
              icon_color: "#fab387",
            },
            {
              name: "anix",
              url: "https://anix.to",
              icon: "player-play",
              icon_color: "#74c7ec",
            },
            {
              name: "rym",
              url: "https://anix.to",
              icon: "headphones",
              icon_color: "#cba6f7",
            },
            {
              name: "yt",
              url: "https://youtube.com",
              icon: "brand-youtube",
              icon_color: "#f38ba8",
            },
            {
              name: "flixhd",
              url: "https://flixhd.cc",
              icon: "movie",
              icon_color: "#f9e2af",
            },
            {
              name: "netflix",
              url: "https://netflix.com",
              icon: "brand-netflix",
              icon_color: "#f38ba8",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/bg-4.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#89b4fa",
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#fab387",
            },
          ],
        },
        {
          name: "gamedev",
          links: [
            {
              name: "itch",
              url: "https://itch.io",
              icon: "device-gamepad",
              icon_color: "#f38ba8",
            },
            {
              name: "godot forums",
              url: "https://forum.godotengine.org/",
              icon: "messages",
              icon_color: "#89b4fa",
            },
            {
              name: "godot docs",
              url: "https://docs.godotengine.org/en/stable/index.html",
              icon: "code-asterix",
              icon_color: "#89b4fa",
            },
          ],
        },
        {
          name: "other",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com/",
              icon: "box",
              icon_color: "#a6e3a1",
            },
            {
              name: "cs50",
              url: "https://learning.edx.org/course/course-v1:HarvardX+CS50+X/home",
              icon: "certificate",
              icon_color: "#89b4fa",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
