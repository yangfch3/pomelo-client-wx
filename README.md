# pomelo-client-wx
在 [pomelo-client-websocket](https://github.com/yangfch3/pomelo-client-websocket) 基础上开发的 pomelo 微信小程序客户端

## 说明
微信小程序开发者文档：
> 小程序进入后台运行后（非置顶聊天），如果 5s 内网络请求没有结束，会回调错误信息 `fail interrupted`；在回到前台之前，网络请求接口调用都会无法调用。

由于微信的机制，本库的重连只在微信小程序/小游戏在前台时才能成功，所以使用者还需要自己考虑用户从后台回到前台的情况处理。
