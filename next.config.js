module.exports = {
	target: "serverless",
	images: {
		domains:["cdn.aglty.io"]
	}
};
// async rewrites(){
	// 	return[
	// 		{
	// 			source: '/api/:path*',
	// 			destination: 'https://api.aglty.io/:path*',
	// 		},
	// 	]
	// }
