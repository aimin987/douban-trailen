const Koa = require('koa');
const app = new Koa();

const views = require('koa-views');
const { resolve } = require('path');

const { connect } = require('./database/init');

(async () => {
    connect();
})();

/**配置界面路径 */
app.use(views(resolve(__dirname, './views'), {
    extension: 'pug'
}));

/**路由 */
app.use(async (ctx, next) => {
    await ctx.render('index', {
        you: 'Luke',
        me: 'Aimin987'
    });
});

app.listen(4455)