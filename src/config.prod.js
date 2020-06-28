const path = require('path');
module.exports = {
  now: {
    token: 'AGWk8Lf7TwnuM1TMgQnGGkjO',
    url: 'https://api.vercel.com/v8/now',
    templateDir: path.join(__dirname, 'template'),
    whiteList: ['ant-design-landing-build'],
  },
}
