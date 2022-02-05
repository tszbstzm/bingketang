# bingketang
丙课堂 = 网络学堂的公开课程推荐 + 雨课堂的开设课程、课程邀请码 + 网络学堂的基本功能

## 开发日志
### 2022-01-17
1.  初始配置：react + typescript + webpack + antd + less + classnames
2.  add component：headtoolbar

心得: 1. react-react-app时要加上--typescript；2. webpack默认配置中minicss报错，改为.default就可以解决；3.antd组件的内容真多，而且好像几乎所有组件都支持classname下传（虽然不知道具体会传到哪一层），好像ud还有一些组件不支持。开发antd的人员真厉害，只会用轮子的我就很逊啦； 4. 开始想用react-bootstrap组件库，但是因为内容不如antd多所以放弃了，不过antd没有那么支持移动端适配，需要自己把适配内容写得尽量简洁、完善；

### 2022-01-18
1.  add component: foottoolbar
2.  配置eslint

心得: 1. 尽量把用共性的内容写成可复用的组件或者函数。今天重写了headtoolbar里两处相似的菜单，包装成了函数，重写了foottoolbar中的选项标签，包装成了组件foottab，如果一开始就有复用的意识，就不需要重写了；2. webpack要把less-loader放在最后，否则会无法识别.less文件中的//；

### 2022-01-23
1. add service: 路由配置
2. add page: message page
3. update page: message page

心得：1. router很好用，但是不能乱用，v6和v5改了不少东西，脑壳痛； 2. js读取本地文件有点问题，虽然是为了web安全考虑； 4. 一开始没想好怎么用纯css的方法（指不监听）在pc上做到列表页与聊天页并存，移动端显示列表页但是点进去是聊天页，所以把移动端设计成上面是头像icon横排排列，下面是聊天页，还调了蛮久样式。结果睡觉前在床上想到解决方案了（加了一个activechat的hook），早上急忙起来update了一下，成功；3. 几件浪费了时间的小时： 3.1 修了半个小时scrolltobottom的bug，没想到是因为把messages写成了message（是个全局变量vs还不给我报错） 3.2 textarea 输入回车发送后还会再次输入回车的问题，第一个方案是在keyup事件做清空，第二个方案顺应原生textarea，enter换行，ctrl+enter发送，最后还是看别人代码的时候想到正确的解决方案应该是 e.preventDefault() 呀； 

### 2022-01-26
1. add page: personal page

心得：没有实现功能的个人页，需要写一个全局的弹窗组件

### 2022-01-27
1. add page: home page + course page

心得：有的时候要想一想切换是用hook还是router

### 2022-01-30
1. add page: login panel + register page

心得：1. 写了一个用open调用panel的函数，参考https://juejin.cn/post/7031719940348624933; 2. antd的modal弹出时会隐藏body的滚动条并且调整宽度，但是没有调整fixed宽度，会有一个闪动的视觉效果，为了避免手动setattribute了一下。

### 2022-02-06
1. 配置 egg + mysql + axios, update: login

心得：1. 用egg配置了后端，mysql配置了数据库，axios实现ajax请求 2. 数据库要 运行 -> 连接 -> 访问，开始还以为是密码记错了，折腾了好久TAT 3. session跨域需要配置 4. 虽然花了半天时间才实现了小小的login功能，不过可以算把后端基本配好了，哈哈哈