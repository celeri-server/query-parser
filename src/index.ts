
import { parse as parseUrl } from 'url';
import { parse as parseQueryString } from 'querystring';
import { MiddlewareFunction } from '@celeri/middleware-pipeline';
import { MiddlewareInput } from '@celeri/http-server';

type InputWithQuery = MiddlewareInput<any, { query?: any; }>;

export const queryParser = () : MiddlewareFunction<InputWithQuery> => {
	return ({ req }): void => {
		if (req.querystring) {
			req.query = parseQueryString(req.querystring);
		}
		
		else {
			req.query = parseUrl(req.url, true).query;
		}
	};
};
