import * as userService from './userService.js'

const request = async (method, url, data) => {
    let options = {};
    let token = userService.getAccessToken();

    if (method !== 'GET') {
        options = {
            method,
            headers: {
                'content-type': 'application/json'
            }
        }
    }

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        }
    }

    if (data) {
        options.body = JSON.stringify(data)
    }

    try {
        const res = await fetch(url, options);

        if (!res.ok) {
            if (res.status === 403) {
                userService.clearUserData();
            }
            const error = await res.json();
            throw new Error(error.message);
        }

        if (res.status === 204) {
            return res;
        } else {
            return await res.json();
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const patch = request.bind({}, 'PATCH');
export const del = request.bind({}, 'DELETE');