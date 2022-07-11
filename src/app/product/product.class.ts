export class Product {
    constructor(
        public id: number = 0,
        public partnbr : string = "",
        public name : string = "",
        public price : number = 0,
        public unit : string = "",
        public photopath : string = "",
        public vendorid : number = 0
    ) {}
}
