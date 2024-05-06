let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Amroha, India',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#f38ba8",
  },
  search: {
    engines: {
      w: ["http://localhost:5000/search?q=", "Whoogle"],
      g: ["https://google.com/search?q=", "Google"],
      b: ["https://search.brave.com/search?q=", "Brave"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/r/", "Reddit"],
      p: ["https://www.pinterest.ph/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: true,
  fastlink: "https://chatgpt.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [{
        name: "Productivity",
        links: [
          {
            name: "Classes",
            url: "https://www.pw.live/study/batches/study/",
            icon: "chalkboard",
            icon_color: "#f38ba8",
          },
          {
            name: "Mail",
            url: "https://mail.proton.me",
            icon: "mail",
            icon_color: "#cba6f7",
          },
          {
            name: "Chat GPT",
            url: "https://chatgpt.com",
            icon: "brand-openai",
            icon_color: "#f9e2af",
          },
          {
            name: "Docs",
            url: "https://docs.google.com",
            icon: "file-type-doc",
            icon_color: "#89b4fa",
          },
          {
            name: "Sheets",
            url: "https://sheets.google.com",
            icon: "file-spreadsheet",
            icon_color: "#a6e3a1",
          }
        ],
      }, {
        name: "Linux",
        links: [
          {
            name: "Arch Wiki",
            url: "https://wiki.archlinux.org/",
            icon: "book-2",
            icon_color: "#cba6f7",
          },
          {
            name: "Hyprland Wiki",
            url: "https://wiki.hyprland.org",
            icon: "notebook",
            icon_color: "#f38ba8",
          },
          {
            name: "AUR",
            url: "https://aur.archlinux.org",
            icon: "building-store",
            icon_color: "#89b4fa",
          },
          {
            name: "Catppuccin",
            url: "https://catppuccin.com/",
            icon: "color-swatch",
            icon_color: "#f9e2af",
          }
        ],
      },
    ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/bg-5.gif",
      categories: [
        {
          name: "Social",
          links: [
            {
              name: "WhatsApp",
              url: "https://web.whatsapp.com",
              icon: "brand-whatsapp",
              icon_color: "#a6e3a1",
            },
            {
              name: "Reddit",
              url: "https://reddit.com",
              icon: "brand-reddit",
              icon_color: "#fab387",
            },
            {
              name: "Instagram",
              url: "https://instagram.com",
              icon: "brand-instagram",
              icon_color: "#f5c2e7",
            }
          ],
        },
        {
          name: "Entertainment",
          links: [
            {
              name: "YouTube",
              url: "https://youtube.com",
              icon: "brand-youtube",
              icon_color: "#f38ba8",
            },
            {
              name: "Disney",
              url: "https://hotstar.com/in",
              icon: "brand-disney",
              icon_color: "#cba6f7",
            },
            {
              name: "Netflix",
              url: "https://netflix.com",
              icon: "brand-netflix",
              icon_color: "#eba0ac",
            },
            {
              name: "Monkey Type",
              url: "https://monkeytype.com",
              icon: "keyboard",
              icon_color: "#fab387",
            },
            {
              name: "Chess",
              url: "https://chess.com",
              icon: "chess",
              icon_color: "#a6e3a1",
            }
          ],
        },
      ],
    },
    {
      name: "Dev",
      background_url: "src/img/banners/bg-4.gif",
      categories: [
        {
          name: "Repositories",
          links: [
            {
              name: "GitHub",
              url: "https://github.com/l6174",
              icon: "brand-github",
              icon_color: "#89b4fa",
            },
            {
              name: "GitLab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#fab387",
            },
            {
              name: "Replit",
              url: "https://replit.com/",
              icon: "git-compare",
              icon_color: "#f9e2af",
            },
          ],
        },
        {
          name: "Game Development",
          links: [
            {
              name: "Textures",
              url: "https://ambientcg.com/list",
              icon: "squares-filled",
              icon_color: "#f9e2af",
            },
            {
              name: "Assets",
              url: "https://unityassets4free.com/",
              icon: "building-store",
              icon_color: "#a6e3a1",
            },
            {
              name: "Mixamo",
              url: "https://www.mixamo.com/#/?page=1&type=Motion%2CMotionPack",
              icon: "keyframes",
              icon_color: "#89b4fa",
            },
            {
              name: "Poly Pizza",
              url: "https://poly.pizza/",
              icon: "pizza",
              icon_color: "#fab387",
            },
            {
              name: "Itch",
              url: "https://itch.io/",
              icon: "device-gamepad",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "Other",
          links: [
            {
              name: "Vercel",
              url: "https://www.vercel.com/",
              icon: "brand-vercel",
              icon_color: "#f9e2af",
            },
            {
              name: "Netlify",
              url: "https://netlify.app",
              icon: "cloud-code",
              icon_color: "#f38ba8",
            }
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
