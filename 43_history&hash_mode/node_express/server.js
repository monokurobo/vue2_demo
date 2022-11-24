const express = require('express');
const history = require('connect-history-api-fallback'); //后端解决 前端路由 hash 模式刷新的问题

const app = express();
app.use(history())
app.use(express.static(__dirname+'/static'))    //localhost:5005/index.html 将静态资源(框架项目 build 后的资源)放入 static

app.get('/person', (req, res) => {  //localhost:5005/person
    res.send({
        name:'tom',
        age: 18
    })
})

app.listen(5005,(err)=>{
    if(!err){
        console.log('success')
    }
})