import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbconnectService } from 'src/app/admin/services/dbconnect.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  // public greaterThanValue = 0;
  // public lessThanValue = 1;
  // public isInvalid: boolean = false;

  responseData: any;
  searchUser:any;
  CurrentUser:any;
  users:any;
  receiver:any;
  admins:any;
  senderData:any;
  receiverData:any;
  tableSize:number=7
  id: any;
  SearchFormGroup: FormGroup = new FormGroup(
    {
      keyword: new FormControl('', Validators.required),
    }
  )
  
  FormGroup: FormGroup = new FormGroup(
    {
      message: new FormControl('', Validators.required),
    }
  )
  chatFormGroup: FormGroup = new FormGroup(
    {
      message: new FormControl('', Validators.required),
      senderId: new FormControl(''),
      receiverId: new FormControl('')
    }
  )
  constructor(private route:Router,private dbService:DbconnectService, private router: ActivatedRoute) { }

  ngOnInit(): void {



    this.id = this.router.snapshot.params['id'];
    this.dbService.getCurrentUser().subscribe(result=>{
      this.CurrentUser=result;
       console.log("ssssssssssssssssssssssssssss",result)

    })
    console.log("s",this.CurrentUser)


      this.dbService.getChat(this.id).subscribe(result=>{
      this.responseData=result;
      // window.location.reload()
      if(result){
      // alert("Device view Successfully")
      console.log(result)}

   
  })
  
  this.dbService.getUser(1,this.tableSize).subscribe(result=>{
    this.users=result.result;
    if(result){
    // alert("Device view Successfully")
    console.log("sssssss",result)}
    

    this.receiverData = this.responseData.filter((obj: { receiverId: number }) => {
      return obj.receiverId !==this.CurrentUser.userId;
    });
    console.log("aaaa",this.receiverData[0].receiverId)
})

  this.dbService.getUserbyID(this.id).subscribe(result=>{
    this.receiver=result;
    console.log("ambo",this.receiver)
})

}

sendChat(){
  this.chatFormGroup.setValue({
      senderId: this.CurrentUser.userId,
      receiverId: this.id,
      message: this.FormGroup.controls['message'].value
  });
  console.log("hell Yeagh",this.chatFormGroup.value)
  this.dbService.sendChat(this.chatFormGroup.value).subscribe(result=>{
    this.responseData=result;
    console.log(result)
    window.location.reload()
    if(result){

    console.log(result)}

 
})

}
onKeypressEvent(event: any){
  if(this.SearchFormGroup.value==null)
  {
    
  }
  this.dbService.SearchUser(this.SearchFormGroup.value).subscribe(result=>{
    this.searchUser=result
    console.log(result);
    // window.location.reload()
    if(result){
    // alert("Device view Successfully")
    console.log(this.SearchFormGroup.value)}
})


}

}