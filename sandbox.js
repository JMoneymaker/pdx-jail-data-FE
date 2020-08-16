// import AbortController from 'abort-controller';
// const controller = new AbortController();
// const signal = controller.signal;

// setTimeout(() => controller.abort(), 5000);

// const url = 'http//localhost:7890';

// fetch(url, { signal })
//   .then(res => res.text())
//   .then(console.log)
//   .catch(err => {
//     if(err.name === 'AbortError') {
//       console.log('Fetch Aborted');
//     } else {
//       console.error('Uh oh, an error!', err);
//     }
//   });
