
import { Request } from '@celeri/http-server';
import { ParsedUrlQuery } from 'querystring';

declare module '@celeri/http-server' {
	interface Request {
		query?: ParsedUrlQuery
	}
}
