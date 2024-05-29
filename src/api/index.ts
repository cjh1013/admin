import request from "@/utils/index";
import {lingList} from "@/api/loginlist/index"
export const login=(params:lingList)=>{
    return request("/v1_0/authorizations","POST",params)
}
export const user=()=>{
    return request("/v1_0/user/channels","GET")
}