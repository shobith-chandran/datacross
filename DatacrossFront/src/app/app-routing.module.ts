import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { DeviceRegistrationComponent } from './admin/device-registration/device-registration.component';
import { OrganizationregistrationComponent } from './admin/organizationregistration/organizationregistration.component';
import { UserregistrationComponent } from './admin/userregistration/userregistration.component';
import { DeviceviewComponent } from './admin/view/deviceview/deviceview.component';
import { OrganizationViewComponent } from './admin/view/organization-view/organization-view.component';
import { UserviewComponent } from './admin/view/userview/userview.component';
import { GuesthomeComponent } from './guesthome/guesthome/guesthome.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardGuard } from './services/login-guard.guard';
import { HeaderComponent } from './static/header/header.component';
import { SidebarComponent } from './static/sidebar/sidebar.component';
import { CsvdataviewComponent } from './user/csvdataview/csvdataview.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UsersidebarComponent } from './static/usersidebar/usersidebar.component';
import { DeviceViewUserComponent } from './user/device-view-user/device-view-user.component';
import { DeviceEditComponent } from './admin/device-edit/device-edit.component';
import { OrganizationEditComponent } from './admin/organization-edit/organization-edit.component';
import { UserEditComponent } from './admin/user-edit/user-edit.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { UserDeviceRegisterComponent } from './user/user-device-register/user-device-register.component';
import { UserDeviceeditComponent } from './user/user-deviceedit/user-deviceedit.component';
import { CsvviewComponent } from './user/csvview/csvview.component';
import { CsvgraphComponent } from './user/csvgraph/csvgraph.component';
import { CsvExportComponent } from './user/csv-export/csv-export.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { ChatComponent } from './sharedFeatures/chat/chat.component';
import { UserloginGuardGuard } from './services/userlogin-guard.guard';
import { DeactivateGuard } from './services/deactivate.guard';
import { OrgprofileComponent } from './user/orgprofile/orgprofile.component';
import { EquipmentGridComponent } from './shop/equipment-grid/equipment-grid.component';
import { EquipmentViewComponent } from './shop/equipment-view/equipment-view.component';
import { CartComponent } from './shop/cart/cart.component';
import { RegisterEquipmentsComponent } from './admin/register-equipments/register-equipments.component';
import { EditEquipmentsComponent } from './admin/edit-equipments/edit-equipments.component';
import { ViewEquipmentsComponent } from './admin/view/view-equipments/view-equipments.component';
import { PaymentComponent } from './sharedFeatures/payment/payment.component';
import { DeviceDetailViewComponent } from './user/device-detail-view/device-detail-view.component';
import { OrderListViewComponent } from './admin/order-list-view/order-list-view.component';

import { CreatePostComponent } from './admin/create-post/create-post.component';
import { PostViewComponent } from './admin/view/post-view/post-view.component';
import { PostDetailViewComponent } from './user/post-detail-view/post-detail-view.component';
import { BlogListViewComponent } from './user/blog-list-view/blog-list-view.component';
import { MediaLibraryComponent } from './admin/media-library/media-library.component';
import { ImageUploadComponent } from './admin/image-upload/image-upload.component';
import { TestComponent } from './sharedFeatures/test/test.component';
import { EditPostComponent } from './admin/edit-post/edit-post.component';
import { EnquiryUserRegisterComponent } from './user/enquiry-user-register/enquiry-user-register.component';
import { EnquiryRegisterComponent } from './user/enquiry-register/enquiry-register.component';

const routes: Routes = [{ path:'',redirectTo:'guesthome',pathMatch:'full'},


{path:"guesthome", component:GuesthomeComponent,canActivate: [DeactivateGuard]},
{path:"userdash", component:UserDashboardComponent,canActivate: [UserloginGuardGuard]},
{path:"header", component:HeaderComponent,canActivate: [UserloginGuardGuard]},
{path:"sidebar", component:SidebarComponent},
{path:"userprofile", component:UserprofileComponent,canActivate: [UserloginGuardGuard]},
{path:"editDevice/:id/:device", component:DeviceEditComponent,canActivate: [LoginGuardGuard] },
{path:"userDeviceedit/:id/:device", component:UserDeviceeditComponent,canActivate: [UserloginGuardGuard]},
{path:"useredit/:id", component:UserEditComponent,canActivate: [LoginGuardGuard] },
{path:"orgedit/:id", component:OrganizationEditComponent,canActivate: [LoginGuardGuard] },
{path:"user", component:UserregistrationComponent},
{path: 'orgregistration', component: OrganizationregistrationComponent,canActivate: [LoginGuardGuard] },
{path: 'deviceregistration',component: DeviceRegistrationComponent,canActivate: [LoginGuardGuard] },
{path: 'deviceview',component: DeviceviewComponent,canActivate: [LoginGuardGuard] },
{path: 'orgview',component: OrganizationViewComponent,canActivate: [LoginGuardGuard] },
{path: 'userview',component: UserviewComponent,canActivate: [LoginGuardGuard] },
{path: 'usersidebar',component:UsersidebarComponent},
{path: 'userdevice',component:DeviceViewUserComponent,canActivate: [UserloginGuardGuard]},
{path: 'userdevicereg',component:UserDeviceRegisterComponent,canActivate: [UserloginGuardGuard]},
{path: 'passwordreset',component:ForgotPasswordComponent},
{path:"adminhome", component:AdminDashboardComponent,canActivate: [LoginGuardGuard] },
// children: [
//   { // another child route component that the router renders 
// },
// ]
// },
{path:"login", component:LoginComponent ,canActivate: [DeactivateGuard]},
{path:"csvdata/:id/:device", component:CsvdataviewComponent,canActivate: [UserloginGuardGuard]},
{path:"csvtableview/:id/:device", component:CsvviewComponent,canActivate: [UserloginGuardGuard]},
{path:"csvgraphview/:id/:device", component:CsvgraphComponent,canActivate: [UserloginGuardGuard]},
{path:"csvexport/:id/:device", component:CsvExportComponent,canActivate: [UserloginGuardGuard]},
{path:"chat/:id", component:ChatComponent},
{path:"org", component:OrgprofileComponent},
{path:"EquipmentGrid", component:EquipmentGridComponent},
{path:"EquipmentView/:equipId/:price", component:EquipmentViewComponent},
{path:"cart", component:CartComponent},
{path:"AdminEquipView", component:ViewEquipmentsComponent},
{path:"equipReg", component:RegisterEquipmentsComponent},
{path:"editEquip/:id", component:EditEquipmentsComponent},
{path:"OrderList", component:OrderListViewComponent},
{path:"checkout", component:PaymentComponent},
{path:"createPost", component:CreatePostComponent},
{path:"test", component:TestComponent},
{path:"imageUpload", component:ImageUploadComponent},
{path:"mediaLibrary", component:MediaLibraryComponent},
{path:"editPost/:id", component:EditPostComponent},
{path:"posts/grid", component:BlogListViewComponent},
{path:"postList", component:PostViewComponent},
{path:"EnquiryRegister", component:EnquiryRegisterComponent},
{path:"enquiryLogin", component:EnquiryUserRegisterComponent},
{path:"post/:id/:slug", component:PostDetailViewComponent},
{path:":id/:slug", component:DeviceDetailViewComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
