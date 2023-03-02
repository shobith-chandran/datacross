import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbconnectService } from 'src/app/admin/services/dbconnect.service';
import { SumPipe } from 'src/app/sharedFeatures/pipes/sum.pipe';
declare var Razorpay: any;


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  formGroup: FormGroup = new FormGroup(
    {
      quantity: new FormControl('', Validators.required)
    })

  //PAYMENT
  message: any = "Not yet stared";
  paymentId = "";
  error = "";
  title = 'angular-razorpay-intergration';
  options = {
    "key": "rzp_test_7z2YIWtTzdWzRh",
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "DATACROSS",
    "description": "Test Transaction",
    "image": "",
    "account_id": "",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response: any) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature)
      var event = new CustomEvent("payment.success",
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );
      window.dispatchEvent(event);
    },
    "prefill": {
      "name": "",
      "email": "",
      "contact": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
  };


  //CART 
  responseData: any;
  RealQuantity: any;

  id: any;
  equipId: any;
  price: any;
  form: any[] = [];
  GetCart: any;
  updatedCart: any;
  QuantityUpdated: any;
  GrandTotal: any;
  order: any;
  OrderAmount: any;
  OrderUpdate:any;
  Dummy:any=0;

  constructor(private route: Router,
    private router: ActivatedRoute,
    private dbService: DbconnectService,
  ) { }

  ngOnInit(): void {
    console.log(this.message)
    this.id = this.router.snapshot.params['id'];
    this.equipId = this.router.snapshot.params['equipId'];
    this.price = this.router.snapshot.params['price'];
    this.form.push({ equipId: this.equipId, price: this.price })
    console.log(this.form[0], "gggggghggggg")
    this.GrandTotal = localStorage.getItem('gt');
    localStorage.removeItem('gt');



    this.dbService.getCartOfUser().subscribe(result => {
      this.responseData = result;
      console.log(result)
      this.formGroup.patchValue(result)
    })
    let x = localStorage.getItem("reload")
    if (x) { this.reload() }
    localStorage.removeItem("reload")
    this.tester()
  }
  reload() {
    window.location.reload()
  }
  addtoCart() {
    this.dbService.AddToCartOfUser(this.form[0]).subscribe(result => {
      this.GetCart = result;
      console.log(result)
    })
  }

  deleteEquip(data: any) {
    console.log("d", data)
    this.id = data.cartId
    console.log(this.id)

    this.dbService.deleteFromCart(this.id).subscribe(results => {
      this.updatedCart = results;
      console.log(results)
      alert("Removed")
      window.location.reload();


    });
  }
  tester(){
    if(this.Dummy==1)
  {alert("errorrrrr")}
}

  QuantityUpdate(data: any) {
    if (this.formGroup.value == 0) {
      this.deleteEquip(data);
    }
    console.log("fff", data);
    let id = data.cartId;
    console.log(this.formGroup.value, id)
    this.dbService.QuantityUpdateCart(id, this.formGroup.value).subscribe(results => {
      this.QuantityUpdated = results;
      console.log(results)
      this.ngOnInit()


    });


  }
  paynow() {
    this.Dummy=1;
    this.GrandTotal = localStorage.getItem('gt');
    localStorage.removeItem('gt')
    this.OrderAmount = { amount: this.GrandTotal };
    console.log(this.OrderAmount)
    this.dbService.Order(this.OrderAmount).subscribe(results => {
      this.order = results;
      console.log(results)
    });

    this.paymentId = '999999999';
    this.error = '4';
    let GT: any = parseInt(this.GrandTotal) * 100;
    this.options.amount = GT  //paise
    this.options.prefill.name = this.responseData.userName;
    this.options.prefill.email = "abcd@gmail.com";
    this.options.prefill.contact = "9999999999";
    var rzp1 = new Razorpay(this.options);
    let x=rzp1;
    console.log(x._evts)
  
    rzp1.open();
   
    rzp1.on('payment.failed', function (response: any) {
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
    });
   
  }
  // @HostListener('$event')
  // on(event: any): void {
  //   console.log(event)}
  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    console.log(event)
    this.message = "Success Payment";
    this.OrderUpdate = { razorPayId: event.detail.razorpay_payment_id };
    this.dbService.OrderUpdate(this.order.orderId , this.OrderUpdate ).subscribe(results => {
      this.QuantityUpdated = results;
      console.log(results)
      this.ngOnInit()
      this.Dummy=2;
    });
    if(this.message=="Success Payment"){
    this.Dummy=2;
    }else{this.Dummy=1
    alert("heyyy") }
  }
}
