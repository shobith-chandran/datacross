import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})

export class DbconnectService {
data:any;
  constructor(private http: HttpClient) { }

  getOrg(): Observable<any> {
    return this.http.get('http://localhost:8080/org');
  }
  getPostbyID(id:any): Observable<any> {
    let x = localStorage.getItem('token')
    let head_obj = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.get('http://localhost:8080/post/'+id, { headers: head_obj  });
  }
  getCurrentUser(): Observable<any> {
    let x = localStorage.getItem('token')
    let head_obj = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.get('http://localhost:8080/login', { headers: head_obj });
  }
  getDevicebyId(id:any): Observable<any> {
    let x = localStorage.getItem('token')
    let head_obj = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.get('http://localhost:8080/QR/device/'+id, { headers: head_obj });
  }

  SearchUser(key: any): Observable<any> {
    let x = localStorage.getItem('token')
    console.log("sssssss", key.keyword.value)
    let head_obj = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.get('http://localhost:8080/users/search/' + key.keyword, { headers: head_obj });
  }

  getChat(id: any): Observable<any> {
    let x = localStorage.getItem('token')
    let head_obj = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.get('http://localhost:8080/chat/' + id, { headers: head_obj });
  }
  sendChat(data: any): Observable<any> {
    let x = localStorage.getItem('token')
    let head_obj = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.post('http://localhost:8080/chat/send', data, { headers: head_obj });
  }
  adduser(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/users', data);
  }

  forgotPassword(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/email/emailsentotp', data);
  }
  verfyOTP(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/verify', data);
  }

  addOrg(data: any): Observable<any> {
    let x = localStorage.getItem('token')
    let head_obj = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.post('http://localhost:8080/org', data, { headers: head_obj });

  }
  addDevice(data: any): Observable<any> {
    let x = localStorage.getItem('token')
    let head_obj = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.post('http://localhost:8080/device', data, { headers: head_obj });
  }

  addEquipment(data: any): Observable<any> {
    let x = localStorage.getItem('token')
    let head_obj = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.post('http://localhost:8080/equipment', data, { headers: head_obj });
  }

  AddPost(data: any,ImageId:any): Observable<any> {
    let x = localStorage.getItem('token')
    console.log(ImageId)
    let head_obj = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.post('http://localhost:8080/post/'+ImageId, data, { headers: head_obj });
  }

  EditPost(data: any,postId:any,ImageId:any): Observable<any> {
    let x = localStorage.getItem('token')
    console.log(ImageId)
    let head_obj = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.put('http://localhost:8080/post/'+postId+"/"+ImageId, data, { headers: head_obj });
  }

  getDevice(): Observable<any> {
    let x = localStorage.getItem('token')
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.get('http://localhost:8080/device');
  }

  getEquip(): Observable<any> {
    let x = localStorage.getItem('token')
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.get('http://localhost:8080/equipment');
  }

  DeleteImage(ImageId:any): Observable<any> {
    let x = localStorage.getItem('token')
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.delete('http://localhost:8080/deleteImg/'+ImageId,{ headers: value });
  }

  getImageList(): Observable<any> {
    let x = localStorage.getItem('token')
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.get('http://localhost:8080/getall',{ headers: value });
  }

  getBlogList(): Observable<any> {
    let x = localStorage.getItem('token')
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.get('http://localhost:8080/post' ,{ headers: value });
  }
  getCartOfUser(): Observable<any> {
    let x = localStorage.getItem('token')
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.get('http://localhost:8080/cart/user', { headers: value });
  }

  AddToCartOfUser(data: any): Observable<any> {
    let x = localStorage.getItem('token')
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.post('http://localhost:8080/cart', data, { headers: value });
  }

  getEquipByID(id: any): Observable<any> {
    let x = localStorage.getItem('token')
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.get('http://localhost:8080/equipment/' + id, { headers: value });
  }

  deleteFromCart(id: any): Observable<any> {
    let x = localStorage.getItem('token')
    console.log("aa", id)
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.delete('http://localhost:8080/cart/delete/' + id, { headers: value });
  }

  QuantityUpdateCart(id: any, form: any): Observable<any> {
    let x = localStorage.getItem('token')
    console.log("aa", id)
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.put('http://localhost:8080/cart/update/' + id, form, { headers: value });
  }

  Order(data: any): Observable<any> {
    let x = localStorage.getItem('token')
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.post('http://localhost:8080/order', data, { headers: value });
  }
  OrderUpdate(id: any, form: any): Observable<any> {
    let x = localStorage.getItem('token')
    console.log("aa", id)
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.put('http://localhost:8080/order/update/' + id, form, { headers: value });
  }
  // getOrderList(): Observable<any> {
  //   let x = localStorage.getItem('token')
  //   let value = new HttpHeaders({ "Authorization": "Projectone " + x })
  //   return this.http.get('http://localhost:8080/order/list',{ headers: value });
  // }
  getOrderList(pagesize: any,tableSize:any): Observable<any> {
    let x = localStorage.getItem('token')
    console.log(pagesize)
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.get('http://localhost:8080/order/' + pagesize +'/'+ tableSize, { headers: value });
  }

  getPaginatedDevices(pagesize: any,tableSize:any): Observable<any> {
    let x = localStorage.getItem('token')
    console.log(pagesize)
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.get('http://localhost:8080/device/' + pagesize +'/'+ tableSize, { headers: value });
  }



  getPaginatedOrg(pagesize: any,tableSize:any): Observable<any> {
    let x = localStorage.getItem('token')
    console.log(pagesize)
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.get('http://localhost:8080/org/' + pagesize +'/'+ tableSize, { headers: value });
  }
  getUser(pagesize: any,tableSize:any): Observable<any> {
    let x = localStorage.getItem('token')
    console.log(pagesize)
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.get('http://localhost:8080/users/' + pagesize +'/'+ tableSize, { headers: value });
  }

  getPostList(pagesize: any,tableSize:any): Observable<any> {
    let x = localStorage.getItem('token')
    console.log(pagesize)
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.get('http://localhost:8080/post/' + pagesize +'/'+ tableSize, { headers: value });
  }

  getOrgbyID(id: any): Observable<any> {
    let x = localStorage.getItem('token')
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.get('http://localhost:8080/org/' + id, { headers: value });
  }
  getUserbyID(id: any): Observable<any> {
    console.log("fffffffffffff", id)
    let x = localStorage.getItem('token')
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.get('http://localhost:8080/users/' + id, { headers: value });;
  }

  getDevicebyID(id: any): Observable<any> {
    let x = localStorage.getItem('token')
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.get('http://localhost:8080/device/' + id, { headers: value });;
  }

  getEquipbyID(id: any): Observable<any> {
    let x = localStorage.getItem('token')
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.get('http://localhost:8080/equipment/' + id, { headers: value });;
  }

  EditEquipById(id: any, data: any): Observable<any> {
    console.log("p", id)
    let x = localStorage.getItem('token')
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.put('http://localhost:8080/equipment/' + id, data, { headers: value });
  }

  AdminEditDeviceById(id: any, data: any): Observable<any> {
    console.log("p", id)
    let x = localStorage.getItem('token')
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.put('http://localhost:8080/device/admin/' + id, data, { headers: value });
  }
  editDeviceById(id: any, data: any): Observable<any> {
    console.log("p", id)
    let x = localStorage.getItem('token')
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.put('http://localhost:8080/device/' + id, data, { headers: value });
  }
  editUserById(id: any, data: any): Observable<any> {
    console.log("p", id)
    let x = localStorage.getItem('token')
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.put('http://localhost:8080/users/' + id, data, { headers: value });
  }

  editOrgById(id: any, data: any): Observable<any> {
    let x = localStorage.getItem('token')
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.put('http://localhost:8080/org/' + id, data, { headers: value });
  }
  deleteOrg(id: any): Observable<any> {
    let x = localStorage.getItem('token')
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.delete('http://localhost:8080/org/' + id, { headers: value });
  }
  deleteUser(id: any): Observable<any> {
    console.log("qqq", id)
    let x = localStorage.getItem('token')
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.delete('http://localhost:8080/users/' + id, { headers: value });
  }
  deletePost(id: any): Observable<any> {
    console.log("qqq", id)
    let x = localStorage.getItem('token')
    console.log(x);
    
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.delete('http://localhost:8080/post/' + id, { headers: value });
  }

  PublishPost(id: any): Observable<any> {
    console.log("qqq", id)
    let x = localStorage.getItem('token')
    console.log(x);

    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.put('http://localhost:8080/post/publish/' + id, this.data,{ headers: value });
  }


  AdmindeleteDev(id: any): Observable<any> {
    let x = localStorage.getItem('token')
    console.log("aa", id)
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.delete('http://localhost:8080/device/admin/' +id, { headers: value });
  }
  deleteDev(id: any): Observable<any> {
    let x = localStorage.getItem('token')
    console.log("aa", id)
    let value = new HttpHeaders({ "Authorization": "Projectone " + x })
    return this.http.delete('http://localhost:8080/device/' +id, { headers: value });
  }

}

