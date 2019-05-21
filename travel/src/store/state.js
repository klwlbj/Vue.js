let defaultCity = '上海'
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {

}

export default {
    city: defaultCity //类似于cookie
}