实时聊天应用，默认所有用户互为好友，可创建群组

技术栈：Nextjs13.4(app router)、react hooks、ts、tailwindcss、prisma、zustand等

## 在线预览：https://messenger-next-gamma.vercel.app/

- 使用 Pusher 进行实时消息传递
- 新消息通知和提醒
- 流畅的tailwindcss设计
- tailwindcss动画和transition过渡效果
- 对所有设备的响应式
- 使用 NextAuth 进行凭证身份验证
- 谷歌身份验证集成
- Github身份验证集成
- 使用Cloudinary CDN上传文件和图像
- 使用react-hook-form进行客户端表单验证和处理
- 使用react-toast处理服务器错误与成功通知
- 消息已读回执
- Pusher实现的在线/离线用户状态
- 创建群组聊天和一对一消息传递
- 消息附件和文件共享
- 用户个人资料定制和设置
- 如何在路由处理程序 (app/api) 中编写 POST、GET 和 DELETE 路由
- 如何在nextjs应用中通过直接访问数据库来获取服务器React组件中的数据
- 在实时环境中处理服务器和子组件之间的关系
- 创建和管理聊天室和频道channel

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/next13-messenger.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
NEXTAUTH_SECRET=

NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_APP_ID=
PUSHER_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### Setup Prisma

```shell
npx prisma db push
```

### Start the app

```shell
npm run dev
```
