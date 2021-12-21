const {news} = require('./data.json')


export default (req, res) => {

  const nw = news.filter(nw => nw.slug == req.query.slug)  
//   nw is single news article

  if(req.method === 'GET') {
  res.status(200).json(nw)
} else {
  res.setHeader('Allow', ['GET'])
  res.status(405).json({message: `Method ${req.method} is not allowed` })
}
}