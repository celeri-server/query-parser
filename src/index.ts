
import './extend-request';

import { parse as parseUrl } from 'url';
import { parse as parseQueryString } from 'querystring';
import { MiddlewareFunction } from '@celeri/middleware-pipeline';
import { MiddlewareInput } from '@celeri/http-server';
import { } from '@celeri/router';

export const queryParser = () : MiddlewareFunction<MiddlewareInput> => {
	return ({ req }): void => {
		if (req.query) {
			req.query = parseQueryString(req.querystring);
		}
		else {
			req.query = parseUrl(req.url, true).query;
		}
	};
};
