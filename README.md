# bingketang
丙课堂，功能不全的雨课堂

## 开发日志
### 2022-01-17
1.  初始配置：react + typescript + webpack + antd + less + classnames
2.  add component：headtoolbar

心得: 1. react-react-app时要加上--typescript；2. webpack默认配置中minicss报错，改为.default就可以解决；3.antd组件的内容真多，而且好像几乎所有组件都支持classname下传（虽然不知道具体会传到哪一层），好像ud还有一些组件不支持。开发antd的人员真厉害，只会用轮子的我就很逊啦； 4. 开始想用react-bootstrap组件库，但是因为内容不如antd多所以放弃了，不过antd没有那么支持移动端适配，需要自己把适配内容写得尽量简洁、完善；

### 2022-01-18
1.  add component: foottoolbar
2.  配置eslint

心得: 1. 尽量把用共性的内容写成可复用的组件或者函数。今天重写了headtoolbar里两处相似的菜单，包装成了函数，重写了foottoolbar中的选项标签，包装成了组件foottab，如果一开始就有复用的意识，就不需要重写了；2. webpack要把less-loader放在最后，否则会无法识别.less文件中的//；
