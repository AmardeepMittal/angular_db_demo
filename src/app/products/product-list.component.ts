
import { Component, OnInit } from "@angular/core";
import { IProduct } from "./IProducts";
import { ProductService } from "./products.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    
    
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin : number = 2;
    showImage : boolean = false;
    
    _filter: string = "cart";

    get filter(): string{
        return this._filter ;
    }

    set filter(value: string)
    {
        this._filter = value;
        this.filteredProducts = this._filter ? this.filterProducts(this._filter) : this.products;
    }

    filteredProducts : IProduct[] = null;

    products: IProduct[] = []

    constructor(private _productService: ProductService) 
    {
    }

    filterProducts(filter: string) : IProduct[] 
    {
        filter = filter.toLocaleLowerCase();
        var result =  this.products.filter( (product: IProduct ) =>  product.productName.toLocaleLowerCase().indexOf(filter) !== -1);
        return result;
    }

    toggleImage() : void {
        this.showImage = !this.showImage;
    }

    notify(message: string): void {
        this.pageTitle = "Product List: " + message ;
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
    }

 }