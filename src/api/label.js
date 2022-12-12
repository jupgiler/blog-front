import request from '@/utils/request'

export function getLabelList() {
    return request({
        url: "label/get_label_list",
        methods: "get"
    })
}