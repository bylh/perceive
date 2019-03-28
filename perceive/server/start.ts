
import http from 'http';
import express from 'express';
import cors from 'cors';

(async function main() {

    let app = express();
    let httpServer = http.createServer(app);

    app.use(cors()); // 解决跨域访问的问题
    // app.use('/', (req, res, next) => {
    // });
    app.get('/', (req: express.Request, res: express.Response) => {
        res.send('hello');
    });
    app.get('/about', about);

    app.post('/download', (req: express.Request, res: express.Response) => {
        
    });
   
    // 启动监听

    httpServer.listen(4000);
    if (process.send != null) process.send('ready');

    console.log('监听http 4000端口');

    process.on('SIGINT', async () => {  // 保存log后退出
        process.exit(); // 程序结束
    });
})();

async function about(req: express.Request, res: express.Response) {
    res.status(200).send('this is proxy');
}
