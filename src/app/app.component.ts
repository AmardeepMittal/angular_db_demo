

import { Component } from "@angular/core";
import { ProductService } from "./products/products.service";

@Component({
  
  selector: 'pm-root',
  template: `<h1>{{pageTitle}}</h1>
              <div>
                <pm-products></pm-products>
              </div>
            `,
  providers: [ProductService]
})
export class AppComponent{
  pageTitle: string  = 'Acme Product Management'
}