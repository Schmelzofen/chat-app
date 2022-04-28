export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.accessToken) {
        // for node.js express back-end
        return { "x-access-token": user.accessToken };
    } else {
        return {};
    }
}