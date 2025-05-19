# pot-app-ocr-plugin-volcengine
通过火山识图api进行ocr识别，支持多种外国语言，支持将数学公式转为Latex

## 功能演示

<div align="center">
  <img src="https://github.com/user-attachments/assets/8de32343-77ff-4514-8634-fef947f6cf5b" width="60%">
  <img src="https://github.com/user-attachments/assets/07a6b65d-dadd-49aa-8949-74958df1f92a" width="60%">
  <img src="https://github.com/user-attachments/assets/03774e0b-8c3a-4282-b90e-c58732efa57b" width="60%">
  <img src="https://github.com/user-attachments/assets/7ba616d1-3099-42b6-93de-c9b460bb70a3" width="60%">
</div>


## api注册地址
- [火山引擎控制台](https://console.volcengine.com/home)
## 安装方法
- 详见[pot-app-translate-plugin-SiliconFlow](https://github.com/bushiliang/pot-app-translate-plugin-SiliconFlow)

## 可能遇到的问题
- 我发现鱼与熊掌不能一起煎，加入Latex的Prompt后当截图识别文字与数学公式时它会忽略文字，所以我会上传两种插件
### 带Latex Prompt版本
- 支持多种外国语言，支持将数学公式转为Latex，但是没办法文字公式一起识别，优点是公式识别严格遵守Latex
### 不带Latex Prompt版本
- 支持多种外国语言，支持将数学公式转为Latex，是的，它仍然支持，但是它识别出来的公式需要你把两边的括号和/去掉，优点是它可以文字公式一起识别
