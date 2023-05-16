export let API_HOST;
export let API_PORT;

if (process.env.NODE_ENV === 'development') {
    API_HOST = '127.0.0.1';
    API_PORT = 8000;
} else {
    API_HOST - process.env.API_HOST
    API_PORT = process.env.API_PORT;
}
