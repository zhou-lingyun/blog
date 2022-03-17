module.exports = [
  {text: '首页', link: '/'},
  {
    text: '计算机语言',
    link: '/Language/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {text: '编程语言', items: [
        {text: 'Python', link: '/pages/8143cc480faf9a11/'}, // 注意link结尾有斜杠和没有斜杠的区别
        {text: 'C++', link: '/note/c++-base/'},
      ]},
      {text: '学习笔记', items:[
        {text: '《C++基础教程》笔记', link: '/note/c++-base/'},
        {text: '《C++提高教程》', link: '/note/c++—core/'},
        {text: '《C++进阶教程》', link: '/note/c++—increase/'},
        {text: '《python 教程》笔记', link: '/note/python/'},
        {text: '《操作系统》笔记', link: '/note/operating system/'},
        {text: '小程序笔记', link: '/note/wx-miniprogram/'},
      ]}
    ]
  },
  {
    text: '人工智能',
    link: '/AI/',
    items: [
      {text: '计算机视觉', link: '/pages/8309a5b876fc95e3/'},
      {text: '自然语言处理', link: '/pages/0a83b083bdf257cb/'},
      {text: '机器学习', link: '/pages/0a83b083bdf256cd/'},
      {text: '强化学习', link: '/pages/0a83b083bdf423cd/'},
    ]
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      {text: '技术文档', link: '/pages/9a7ee40fc232253e/'},
      {text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/'},
      {text: 'Nodejs', link: '/pages/117708e0af7f0bd9/'},
      {text: '博客搭建', link: '/pages/41f87d890d0a02af/'},
    ]
  },
  {
    text: '面试',
    link: '/interview/',
    items: [
      {text: '面试题库', items: [
        {text: '数据结构', link: '/pages/58734d/'},
        {text: 'C++', link: '/pages/26864d/'},
        {text: 'Python', link: '/pages/ceea45/'},
        {text: '机器学习', link: '/pages/4547e6/'},
        {text: '深度学习', link: '/pages/a134b2/'}
      ]}
      ,
      {text: '面试心得', items: [
        {text: '杂言碎语', link: '/pages/331dbf/'},
      ]}
    ]
  },
  {
    text: '读书派', 
    link: '/bookssent/',
    items: [
      {text: '摘抄收录', items: [
        {text: '☆ 励志鸡汤', link: '/ChickenSoup/'},
        {text: '❀ 人间烟火', link: '/PassionLife/'},
        {text: '☣ 万物沦丧', link: '/ThingsLost/'},
        {text: '✌ 关掉烦恼', link: '/NoTrouble/'},
        {text: '✲ 小酒馆', link: '/Bistro/'}
      ]}, //link: '/pages/wordsof/'}
      {text: '读书笔记', items: [
        {text: '《毛泽东选集》', link: '/note/mzdxj/'},
        {text: '《曾国藩传》', link: '/note/qbbfbb/'},
        {text: '《亲密关系》', link: '/note/cmrsyfgbjb/'}
      ]}
    ]
  },
  {
    text: '更多', 
    link: '/more/',
    items: [
      {text: '学习', link: '/pages/f2a556/'},
      {text: '面试', link: '/pages/aea6571b7a8bae86/'},
      // {text: '心情杂货', link: '/pages/2d615df9a36a98ed/'},
      {text: '友情链接', link: '/friends/'},
    ]
  },
  {text: '关于', link: '/about/'},
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      {text: '网站', link: '/pages/beb6c0bd8a66cea6/'},
      {text: '资源', link: '/pages/eee83a9211a70f9d/'},
      {text: '博客', link: '/pages/12df8ace52d493f6/'},
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  }
]