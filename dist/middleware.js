import { withAuth } from 'next-auth/middleware';
export default withAuth({
    pages: {
        signIn: '/'
    }
});
export var config = {
    matcher: [
        '/users/:path*',
        '/conversations/:path*'
    ]
};