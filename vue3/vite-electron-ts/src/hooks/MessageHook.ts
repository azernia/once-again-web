import {ElMessage} from "element-plus";

export const msg = (message: string, type: any) => {
    if (type === 'error') {
        ElMessage.error(message);
    } else {
        ElMessage({
            message,
            type
        });
    }
}
