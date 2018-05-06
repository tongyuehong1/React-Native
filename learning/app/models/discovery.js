/*
 * MIT License
 *
 * Copyright (c) 2018 SmartestEE Co., Ltd..
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Revision History:
 *     Initial: 2018/01/30        LiuQi
 */

export default {
  namespace: 'discovery',

  state: {
    hotVideo: [{
      id: 1,
      title: '生活的方式淳朴也是一种乐趣！',
      image: 'https://images.pexels.com/photos/814263/pexels-photo-814263.jpeg?h=350&auto=compress&cs=tinysrgb',
      playtimes: '9134',
      time: '04:33',
      share: '241',
      comment: '987',
      like: '872',
    },
    {
      id: 2,
      title: '日本轻敌的最终下场有多惨烈！',
      image: 'https://cdn.magdeleine.co/wp-content/uploads/2018/01/annie-spratt-458149-1400x933.jpg',
      playtimes: '1894',
      time: '06:22',
      share: '846',
      comment: '924',
      like: '483',
    },
    {
      id: 3,
      title: '这件瓷器凭什么值800多万！',
      image: 'https://cdn.magdeleine.co/wp-content/uploads/2017/12/espresso-914749-1400x933.jpg',
      playtimes: '1570',
      time: '02:25',
      share: '249',
      comment: '972',
      like: '524',
    }],

    hotPicture: [{
      id: 1,
      title: '1908年2月6日，上海首次试行有轨电车。',
      image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2182278005,4292695282&fm=27&gp=0.jpg',
      topic: '上海首次试行有轨电车。',
      article: '德国工程师维尔纳·冯·西门子1881年在柏林近郊铺设的第一条电车轨道，靠一条铁轨通电，另一条铁轨作回路。但这种线路对街上的交通太危险了，西门子于是采用将输电线路架高的方式解决了供电和安全问题。1884年，美国人C·J·范德波尔在多伦多农业展览会上试用电车运载乘客。他试用的电车用一根带触轮的集电杆和一条架空触线输电并以钢轨为另一回路的供电方法。',
      share: '3241',
    }],

    humanHistory: [{
      id: 1,
      title: '200秒告诉你古代最美的女子...',
      subtitle: '这78位绝代美女你最喜欢哪一个？',
      image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1652705607,3395673328&fm=27&gp=0.jpg',
      playtimes: '4789',
      time: '02:55',
      smallImageLeft: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2866289165,1648338696&fm=27&gp=0.jpg',
      smallWordLeft: '妓院行话如何变成现代热词的？',
      smallImageCenter: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1903853569,2802726857&fm=27&gp=0.jpg',
      smallWordCenter: '古代男人最喜欢看女人的...',
      smallImageRight: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3939040372,2021811204&fm=27&gp=0.jpg',
      smallWordRight: '沙漠之都，这里出土的...',
    }],

    geographic: [{
      id: 1,
      title: '盘点北纬30度各种诡异谜团！',
      subtitle: '这个位置为何如此神秘？',
      image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1718825749,1520242595&fm=27&gp=0.jpg',
      playtimes: '5345',
      time: '03:44',
      smallImageLeft: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=382943148,2937235670&fm=27&gp=0.jpg',
      smallWordLeft: '这口井里的水能治病！',
      smallImageCenter: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4060917517,1000292509&fm=27&gp=0.jpg',
      smallWordCenter: '外星人原来真的存在！',
      smallImageRight: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2078129266,2622785416&fm=27&gp=0.jpg',
      smallWordRight: '《山海经》中的“四不像”...',
    }],

    various: [{
      id: 1,
      title: '四爷雍正登基背后另有隐情？他...',
      image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4102518227,680721820&fm=27&gp=0.jpg',
      playtimes: '1894',
      time: '06:22',
      share: '846',
      comment: '924',
      like: '483',
    }],

    toYou: [{
      id: 1,
      title: '100秒看皇帝如何对妃子雨露均沾！',
      image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2236500277,2320635387&fm=27&gp=0.jpg',
      playtimes: '359083',
      time: '03:52',
      share: '1233',
      comment: '21',
      like: '546',
    },
    {
      id: 2,
      title: '为什么高层干部都是年长者？',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49UEEwX54U0J1Qy2J38q9HynNpwVbW_rFMtnyWWbDmrroUIRdwQ',
      playtimes: '88914',
      time: '03:52',
      share: '306',
      comment: '10',
      like: '237',
    },
    {
      id: 3,
      title: '为了艺术毁掉家园的奇葩皇帝',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUuDhJhFI5UYu_X6XvmxaaMhdqNyuKmG3MsBTyaQHYhLKwikMV',
      playtimes: '102800',
      time: '03:52',
      share: '774',
      comment: '7',
      like: '270',
    }],
  },
};
