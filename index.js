import { parse } from 'url';
import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const main = async () => {
  try {
    await app.prepare();

    const handle = app.getRequestHandler();
    const server = express();

    // server
    //   .get('*', (req, res) => {
    //     const url = parse(req.url, true);
    //     handle(req, res, url);
    //   })
    //   .listen(3000, () => {
    //     console.log(`server ready!`)
    //   })
    server
      .get('/', (req, res) => {
        res.send('Hello World!');
      })
      .get('/about', (req, res) => {
        const { query } = parse(req.url, true);
        app.render(req, res, '/about', query);
        // next.js의 페이지를 렌더링하기 위해서 render 함수를 사용해야 한다.
        // Express.js의 req, res와 렌더링할 페이지, 분석한 쿼리 문자열을 인자로 받는다.
      })
      .get('/api/greet', (req, res) => {
        res.json({ name: req.query?.name ?? 'unknown' });
      })
      .get(/_next\/.+/, (req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
        // next.js를 렌더링하려면 이 라우터를 추가로
        // 경로가 _next로 시작하는 정적 자원을 Next.js에서 처리해야 한다는 사실을 Express 서버가 모르기 때문.
        // 이게 없으면 아무것도 나오지 않는다.
        // 정적 자원의 대부분을 차지하는 자바스크립트 파일을 불러와야지 리액트를 불러오고, 하이드레이션을 처리하고 Next.js의 프런트엔드 기능을 실행할 수 있다.
      })
      .listen(3000, () => console.log('server ready'));
  } catch (err) {
    console.error(err);
    console.log(err.stack)
  }
}

main();
