import { ItemSpecInterface } from "./item-spec-interface.model";

export interface ItemInterface
{
    id: number,
    name: String,
    price: number,
    Description: String,
    Spec: ItemSpecInterface,
    Image: String,
    IsViewAble: boolean,
    IsImageExists: boolean,
}