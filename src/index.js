
import url from 'url';
import querystring from 'querystring';

export const queryParser = () => {
	return ({ req, res }) => {
		if (req.query) {
			req.query = querystring.parse(req.query);
		}
		else {
			req.query = url.parse(req.url, true).query;
		}
	};
};
