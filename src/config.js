const config = {
  //网页元数据
  metaData:{
    title: '顾熙的个人主页🎉',
    description: '欢迎来到顾熙的奇妙世界！',
    keywords: '顾熙,个人主页,个人网站',
    icon: '/favicon.ico'
  },

  avatar: "/img/avatar.jpg", // 头像
  welcometitle: "Hi, I'm 顾熙", // 标题

  // 颜色配置
  color: {
    themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
    welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
  },
  
  brightness: 85, // 背景亮度 --%
  blur: 5, // 毛玻璃模糊效果

  // 我的标签
  tags : ['乐观开朗','温柔体贴','随和亲切','冷静沉着','才思敏捷','风趣幽默','刚正不阿','善解人意'],

  // 默认背景壁纸
  background: {
    "pc":{   //pc端
      "type":"pic",   //"pic":静态壁纸;"video":动态壁纸
      "datainfo":{
        "title":"海洋女孩", 
        "preview":"/img/wallpaper/static/海洋女孩/image-pre.webp",
        "url":"/img/wallpaper/static/海洋女孩/image.png",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
      },
    },
    "mobile":{   //移动端
      "type":"pic",
      "datainfo":{
        "title":"0001", 
        "preview":"/img/wallpaper/static-mobile/0001/image-pre.webp",
        "url":"/img/wallpaper/static-mobile/0001/image.png"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
      }
    }
      
  },

  //极坐标图数据
  polarChart:{
    skills: ['Vue.js', 'React', 'JavaScript', 'Node', 'Java', 'Python', 'linux', 'Docker', 'MySQL', 'MongoDB', 'AWS'],
    skillPoints: [85, 78, 88, 90, 80, 78, 85, 65, 82, 78, 70],
  },

  //社交按钮
  socialPlatformIcons: [
    {icon:"mdi-github",link:"https://www.github.com/guxi666"},
    {icon:"mdi-email",link:"mailto:1@s686.cn/"},
    {icon:"mdi-qqchat",link:"https://wpa.qq.com/msgrd?v=3&uin=407177932&site=qq&menu=yes/"},
    {icon:"mdi-wechat",link:"https://wx.qq.com/"},
    {icon:"mdi-youtube",link:"https://www.youtube.com/@%E9%A1%BE%E7%86%99-s2e"},
    {icon:"mdi-facebook",link:"https://www.facebook.com/profile.php?id=100080902644398&mibextid=ZbWKwL"}
  ],

  //打字机
  typeWriterStrings: [
    "如果你看到了这行字，说明我已经成功吸引到了你的注意力。",
    "顶峰的少年，给了你所有细节，你却说我不是迪迦，给不了你想要的光。",
    "心简单，世界就简单，幸福才会生长；心自由，生活就自由，到哪都有快乐。",
    "生命太短，没有时间留给遗憾，若不是终点，请微笑一直向前。"
  ],

  //音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
  musicPlayer:{
    server: 'netease',  //服务提供商 --网易云音乐
    type: 'playlist',   //歌单类型
    id: '8672474416'  //歌单id ---> music.163.com/#/playlist?id=8672474416
  },

  //壁纸数据 -----可以将壁纸文件上传到uhsea.com获取网络直链。若想调用api，请前往脚本自行修改逻辑
  wallpaper:{
    pic:[
      {"title":"海洋女孩","preview":"/img/wallpaper/static/海洋女孩/image-pre.webp","url":"/img/wallpaper/static/海洋女孩/image.png"},
      {"title":"书房夜晚","preview":"/img/wallpaper/static/书房夜晚/image-pre.webp","url":"/img/wallpaper/static/书房夜晚/image.png"},
      {"title":"安逸舒适","preview":"/img/wallpaper/static/安逸舒适/image-pre.webp","url":"/img/wallpaper/static/安逸舒适/image.png"},
      {"title":"jswcMaMj","preview":"https://file.uhsea.com/2503/76a4f03e8654d6e66bbbc7e8149c2fe33M.png","url":"https://file.uhsea.com/2503/5b8a20a5f2b269659911c9485d0d0c3f0F.png"},
      {"title":"pgtTqoqq","preview":"https://file.uhsea.com/2503/caeae6b4fc1aba41bff4ad4ec59d6d8aA5.png","url":"https://file.uhsea.com/2503/45aa0a5a31a0ae95f7cc660e3ab4148eUT.png"},
      {"title":"cvKMKhue","preview":"https://file.uhsea.com/2503/7a693bf725b501e0907ce40f18d2edc49P.png","url":"https://file.uhsea.com/2503/55e7191130d160a8e4421497308ffb67DT.png"},
      {"title":"XpxvQVoP","preview":"https://file.uhsea.com/2503/f4b6804c7189357d3252aa0f981b59c4EF.png","url":"https://file.uhsea.com/2503/66359907715d46e0a4523da0142a6f63EU.png"},
      {"title":"fVEEjEOA","preview":"https://file.uhsea.com/2503/ed0a4c0a43118ac4e2f39bab75ec19f4PI.png","url":"https://file.uhsea.com/2503/4adbf54af317a075c6b98483a552641f61.png"},
      {"title":"jgnIKMpd","preview":"https://file.uhsea.com/2503/5d4d35ed1c286afc930184231456edc9BR.png","url":"https://file.uhsea.com/2503/3bf8025d8ad7ccefcf7e72c9368a245cLL.png"},
      {"title":"mgqyySeh","preview":"https://file.uhsea.com/2503/38994dc4ef8659067537a3ea11af0927KB.png","url":"https://file.uhsea.com/2503/6e3b14778e879234826b9d5c793474ffOS.png"},
      {"title":"dSXZfZp","preview":"https://file.uhsea.com/2503/22c27ea8c1e44209a223a28026146115LS.png","url":"https://file.uhsea.com/2503/8d1203a01e7a5a639caf91ca6c9608acVL.png"},
      
    ],
    picMobile:[
      {"title":"0001","preview":"/img/wallpaper/static-mobile/0001/image-pre.webp","url":"/img/wallpaper/static-mobile/0001/image.png"},
      {"title":"0002","preview":"/img/wallpaper/static-mobile/0002/image-pre.webp","url":"/img/wallpaper/static-mobile/0002/image.png"},
      {"title":"0003","preview":"/img/wallpaper/static-mobile/0003/image-pre.webp","url":"/img/wallpaper/static-mobile/0003/image.png"},
      {"title":"0004","preview":"/img/wallpaper/static-mobile/0004/image-pre.webp","url":"/img/wallpaper/static-mobile/0004/image.png"},
      {"title":"DfNHPPcc","preview":"https://file.uhsea.com/2503/e3510f4d0286e37b828f74494230f0efM2.png","url":"https://file.uhsea.com/2503/97b50adb3d4cd6f1a4132f6d3e8c98483T.png"},
      {"title":"WIOlrGSy","preview":"https://file.uhsea.com/2503/99162abfe07e18cfe6182ca3458561ef3A.png","url":"https://file.uhsea.com/2503/609532b992163117db9b341dde87b78f3C.png"},
      {"title":"cZZwzhis","preview":"https://file.uhsea.com/2503/cf558fa1989c07726778c60be47b9928K8.png","url":"https://file.uhsea.com/2503/e27b91f1604f73d0444c807024ef7c9fI3.png"},
      {"title":"aANKZHPX","preview":"https://file.uhsea.com/2503/0aa1cb875c8c7c20afd1aa72530294350K.png","url":"https://file.uhsea.com/2503/b09b65e20e176cb0d22dbc319981b5b45L.png"},
    ],
    video:[
      {
        "title":"尼尔：机械纪元 团队",
        "preview":"/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
        "url":"/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
      },
      {
        "title":"向往航天的女孩",
        "preview":"/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
        "url":"/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
      },
    ],
    videoMobile:[
      {
        "title":"幻觉镇-gaako_illust",
        "preview":"/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
      },
      {
        "title":"chuva",
        "preview":"/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
      },
      {
        "title":"Doodle-小猫女仆降临",
        "preview":"/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
      },
    ],
  },


  //项目卡片 其中 字段"show"控制初始卡片的text是否展开
  projectcards:[ 
    {go:"🚀 前往",img:"/img/1.jpg",title:"顾熙博客",subtitle:"没时间更新，将就看看吧", text:"喜欢欢玩网站的可以交个朋友.",url:"https://blog.a686.de",show:false},
    {go:"🗂️ 前往",img:"/img/2.jpg",title:"我的导航",subtitle:"方便查看旗下站点", text:"看一看呗.",url:"https://a686.de",show:false},
    {go:"📝 前往",img:"/img/3.jpg",title:"顾熙无限邮箱",subtitle:"自用临时邮箱", text:"我自己用的邮箱，看着短一点.",url:"https://webmail.a686.de",show:false},
    {go:"👍 前往",img:"/img/4.jpg",title:"顾熙图床",subtitle:"自用图床系统", text:"利用CF和Telegram搭建的图床.",url:"https://img.a686.de",show:false},
    {go:"🗃 前往",img:"/img/5.jpg",title:"私人聊天室",subtitle:"自用聊天室", text:"Fiora聊天室，博客有搭建教程.",url:"https://qq.a686.de",show:false},
    {go:"🎨 前往",img:"/img/6.jpg",title:"谷歌搜索",subtitle:"谷歌一下", text:"点一下就行.",url:"https://www.google.com/search?q=site%3Ablog.a686.de&sca_esv=a023834be663cdb6&sxsrf=AHTn8zoq_xmOOamq_6sGuERg7ulCRIKQYg%3A1743932247182&ei=V0vyZ67lCp6XnesP3ar1iQo&oq=site%3A&gs_lp=Egxnd3Mtd2l6LXNlcnAiBXNpdGU6KgIIADIEECMYJzIEECMYJzIEECMYJzIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywFIlhBQjgVYrglwAXgAkAEAmAHtAaABkgaqAQUwLjIuMrgBA8gBAPgBAZgCAaACuQGYAwCIBgGSBwMwLjGgB8gHsgcDMC4xuAe5AQ&sclient=gws-wiz-serp",show:false},
    {go:"💍 前往",img:"/img/7.jpg",title:"百度搜索",subtitle:"百度一下", text:"点一下就行.",url:"https://www.baidu.com/s?wd=site%3Ablog.a686.de&rsv_spt=1&rsv_iqid=0x88150af703c8d8c4&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_dl=tb&rsv_enter=1&oq=%25E9%25A1%25BE%25E7%2586%2599%25E5%258D%259A%25E5%25AE%25A2&rsv_btype=t&inputT=10921&rsv_t=67caukFld2VjO234PZ6kSTLJccoczgdtedoT6YtuEVyosB5thXvas%2BvjY58o6HeZ3NN6&rsv_pq=8a252ceb01a71b2e&rsv_sug3=31&rsv_sug1=20&rsv_sug7=100&rsv_sug2=0&rsv_sug4=10921",show:false},
    {go:"🔍 前往",img:"/img/8.jpg",title:"必应搜索",subtitle:"必应一下", text:"点一下就行.",url:"https://cn.bing.com/search?q=%e9%a1%be%e7%86%99%e5%8d%9a%e5%ae%a2&qs=n&sp=-1&lq=0&pq=%e9%a1%be%e7%86%99%e5%8d%9a%e5%ae%a2&sc=0-4&sk=&cvid=2D0D8B4D7B594633BBD3E601928F8BE3&FPIG=9ADA658EA3F54971B80CA880C327BF79&first=1&FORM=PEREp",show:false},
  ],
  
  statement: ["备案号：印ICP备88888888号","Copyright © 2025 顾熙"],
}

export default config
