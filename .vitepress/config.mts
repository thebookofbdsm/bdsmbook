import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/bdsmbook/',
  title: "BDSM小说",
  description: "BDSM小说精选",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      // { text: 'sm小说',  items: [
      //   { text: '债务下的沉沦游戏', link: '/book/债务下的沉沦游戏/第1章：投资失败，债务危机' },
      //   { text: '贵妇的沉沦', link: '/book/贵妇的沉沦/贵妇的沉沦' },
      //   { text: '性奴隶服务公司', link: '/book/性奴隶服务公司/001_第一章' },
      //   { text: '性奴隶王志平', link: '/book/性奴隶王志平/001_第一章' }
      // ]
      // },
      { text: '绳缚视频',
        items: [
          { text: 'GTJ-159-一字马', link: '/video/GTJ-159' },
          { text: 'GTJ-159-1倒吊', link: '/video/GTJ-159-1' },
          { text: 'GTJ-166-竹杆吊缚', link: '/video/GTJ-166' },
          { text: 'MYB-015-后手缚吊', link: '/video/MYB-015' },
        ]
      }
    ],

    sidebar: 
      {
        '/book/债务下的沉沦游戏': 
        [
          {
            text: '债务下的沉沦游戏',
            items: [
              { text: '第1章：投资失败，债务危机', link: '/book/债务下的沉沦游戏/第1章：投资失败，债务危机' },
              { text: '第2章：再陷深渊，打工还债', link: '/book/债务下的沉沦游戏/第2章：再陷深渊，打工还债' },
              { text: '第3章：威胁与妥协', link: '/book/债务下的沉沦游戏/第3章：威胁与妥协' },
              { text: '第4章：隐藏的兴奋', link: '/book/债务下的沉沦游戏/第4章：隐藏的兴奋' },
              { text: '第5章：女王的诞生', link: '/book/债务下的沉沦游戏/第5章：女王的诞生' },
              { text: '第6章：激素与伪娘', link: '/book/债务下的沉沦游戏/第6章：激素与伪娘' },
              { text: '第7章：奴隶的枷锁', link: '/book/债务下的沉沦游戏/第7章：奴隶的枷锁' },
              { text: '第8章：身体的改造', link: '/book/债务下的沉沦游戏/第8章：身体的改造' },
              { text: '第9章：无法回头', link: '/book/债务下的沉沦游戏/第9章：无法回头' },
              { text: '第10章：永恒的沉沦', link: '/book/债务下的沉沦游戏/第10章：永恒的沉沦' },
            ]
          }
        ],
        '/book/性奴隶服务公司': 
        [
          {
            text: '性奴隶服务公司',
            items: [
              { text: '第一章', link: '/book/性奴隶服务公司/001_第一章' },
              { text: '第二章', link: '/book/性奴隶服务公司/002_第二章' },
              { text: '第三章', link: '/book/性奴隶服务公司/003_第三章' },
              { text: '第四章', link: '/book/性奴隶服务公司/004_第四章' },
              { text: '第五章', link: '/book/性奴隶服务公司/005_第五章' },
              { text: '第六章', link: '/book/性奴隶服务公司/006_第六章' },
              { text: '第七章', link: '/book/性奴隶服务公司/007_第七章' },
              { text: '第八章', link: '/book/性奴隶服务公司/008_第八章' },
              { text: '第九章', link: '/book/性奴隶服务公司/009_第九章' },
              { text: '第十章', link: '/book/性奴隶服务公司/010_第十章' },
              { text: '第十一章', link: '/book/性奴隶服务公司/011_第十一章' },
              { text: '第十二章', link: '/book/性奴隶服务公司/012_第十二章' },
              { text: '第十三章', link: '/book/性奴隶服务公司/013_第十三章' },
              { text: '第十四章', link: '/book/性奴隶服务公司/014_第十四章' },
              { text: '第十五章', link: '/book/性奴隶服务公司/015_第十五章' },
              { text: '第十六章', link: '/book/性奴隶服务公司/016_第十六章' },
              { text: '第十七章', link: '/book/性奴隶服务公司/017_第十七章' },
              { text: '第十八章', link: '/book/性奴隶服务公司/018_第十八章' },
              { text: '第十九章', link: '/book/性奴隶服务公司/019_第十九章' },
              { text: '第二十章', link: '/book/性奴隶服务公司/020_第二十章' },
              { text: '第二十一章', link: '/book/性奴隶服务公司/021_第二十一章' },
              { text: '第二十二章', link: '/book/性奴隶服务公司/022_第二十二章' },
              { text: '第二十三章', link: '/book/性奴隶服务公司/023_第二十三章' },
              { text: '第二十四章', link: '/book/性奴隶服务公司/024_第二十四章' },
              { text: '第二十五章', link: '/book/性奴隶服务公司/025_第二十五章' },

            ]
          }
        ],
        '/book/性奴隶王志平': 
        [
          {
            text: '性奴隶王志平',
            items: [
              { text: '第一章', link: '/book/性奴隶王志平/001_第一章' },
              { text: '第二章', link: '/book/性奴隶王志平/002_第二章' },
              { text: '第三章', link: '/book/性奴隶王志平/003_第三章' },
              { text: '第四章', link: '/book/性奴隶王志平/004_第四章' },
              { text: '第五章', link: '/book/性奴隶王志平/005_第五章' },
              { text: '第六章', link: '/book/性奴隶王志平/006_第六章' },
              { text: '第七章', link: '/book/性奴隶王志平/007_第七章' },
              { text: '第八章', link: '/book/性奴隶王志平/008_第八章' },
              { text: '第九章', link: '/book/性奴隶王志平/009_第九章' },
            ]
          }
        ]
      },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
