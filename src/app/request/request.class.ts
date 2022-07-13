import { User } from "../user/user.class";
import { RequestLine } from "./request-line.class";

export class UserRequest {
    constructor(
        public id: number = 0,
        public description : string = "",
        public justification : string = "",
        public rejectionReason : string = "",
        public deliveryMode : string = "",
        public status : string = "",
        public total : number = 0,
        public userId : number = 0,
        public user : User,
        public requestlines : RequestLine[]
    ) {}
}
