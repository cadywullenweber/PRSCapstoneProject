export class UserRequest {
    constructor(
        public id: number = 0,
        public description : string = "",
        public justification : string = "",
        public rejectionreason : string = "",
        public deliverymode : string = "",
        public status : string = "",
        public total : number = 0,
        public userid : number = 0
    ) {}
}
