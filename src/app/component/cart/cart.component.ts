import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note-services/note.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  address = new FormControl('', [Validators.required]);
  TokenAuth: boolean = true;
  cartid: any;
  type: any;
  options:any;

  constructor(private _formBuilder: FormBuilder,private noteService: NoteService) { }

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.GetMyCart();
  }
  GetMyCart()
  {
    this.noteService.MyCart(this.TokenAuth).subscribe((res:any)=>
    {
      console.log(res);
      this.cartid = res.data[0].id;
      this.type = res.data[0].productId;
       console.log("data list.....",this.type);  
    })
  }
  placeOrder(){
    let note={
      address: this.address.value,
      cartId: this.cartid
    }
    this.options = {
      data: note
    }
    this.noteService.PlaceOrder(this.options,this.TokenAuth).subscribe((response: any) => {
      console.log("hit api...",response);   
    }, (error) => {
      console.log(error);
    });
  }

}
