import {onBeforeMount, onMounted, reactive} from "vue";

// export const getPointByMouse = () => {
//     const Point = reactive({
//         x: 0,
//         y: 0
//     });
//
//     const getPoint = (event) => {
//         Point.x = event.pageX;
//         Point.y = event.pageY;
//     }
//
//     onMounted(() => {
//         window.addEventListener('click', getPoint)
//     });
//     onBeforeMount(() => {
//         window.removeEventListener('click', getPoint);
//     });
//
//     return Point;
// }

export default function () {
    const Point = reactive({
        x: 0,
        y: 0
    });

    const getPoint = (event) => {
        Point.x = event.pageX;
        Point.y = event.pageY;
    }

    onMounted(() => {
        window.addEventListener('click', getPoint)
    });
    onBeforeMount(() => {
        window.removeEventListener('click', getPoint);
    });

    return Point;
}

// function a(a) {
//
// }
//
// export default a;
