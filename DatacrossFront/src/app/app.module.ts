import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuesthomeComponent } from './guesthome/guesthome/guesthome.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { CsvdataviewComponent } from './user/csvdataview/csvdataview.component';
import { UserregistrationComponent } from './admin/userregistration/userregistration.component';
import { OrganizationregistrationComponent } from './admin/organizationregistration/organizationregistration.component';
import { DeviceRegistrationComponent } from './admin/device-registration/device-registration.component';
import { DeviceviewComponent } from './admin/view/deviceview/deviceview.component';
import { OrganizationViewComponent } from './admin/view/organization-view/organization-view.component';
import { UserviewComponent } from './admin/view/userview/userview.component';
import { OrganizationEditComponent } from './admin/organization-edit/organization-edit.component';
import { DeviceEditComponent } from './admin/device-edit/device-edit.component';
import { UserEditComponent } from './admin/user-edit/user-edit.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { SidebarComponent } from './static/sidebar/sidebar.component';
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';
import { UsersidebarComponent } from './static/usersidebar/usersidebar.component';
import { DeviceViewUserComponent } from './user/device-view-user/device-view-user.component';
import { OrgViewUserComponent } from './user/org-view-user/org-view-user.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { CsvviewComponent } from './user/csvview/csvview.component';
import { NgToastModule } from 'ng-angular-popup';
import { UserDeviceRegisterComponent } from './user/user-device-register/user-device-register.component';
import { UserDeviceeditComponent } from './user/user-deviceedit/user-deviceedit.component';
import { CsvgraphComponent } from './user/csvgraph/csvgraph.component';
import { CsvExportComponent } from './user/csv-export/csv-export.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { ChatComponent } from './sharedFeatures/chat/chat.component';
import { OrgprofileComponent } from './user/orgprofile/orgprofile.component';
import { EquipmentGridComponent } from './shop/equipment-grid/equipment-grid.component';
import { EquipmentViewComponent } from './shop/equipment-view/equipment-view.component';
import { CartComponent } from './shop/cart/cart.component';
import { RegisterEquipmentsComponent } from './admin/register-equipments/register-equipments.component';
import { EditEquipmentsComponent } from './admin/edit-equipments/edit-equipments.component';
import { ViewEquipmentsComponent } from './admin/view/view-equipments/view-equipments.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaymentComponent } from './sharedFeatures/payment/payment.component';
import { SumPipeModule } from './sharedFeatures/pipes/sum.pipe';
import { DeviceDetailViewComponent } from './user/device-detail-view/device-detail-view.component';
import { OrderListViewComponent } from './admin/order-list-view/order-list-view.component';
import { CreatePostComponent } from './admin/create-post/create-post.component';
import { PostViewComponent } from './admin/view/post-view/post-view.component';
import { EditPostComponent } from './admin/edit-post/edit-post.component';
import { PostDetailViewComponent } from './user/post-detail-view/post-detail-view.component';
import { BlogListViewComponent } from './user/blog-list-view/blog-list-view.component';
import { ImageUploadComponent } from './admin/image-upload/image-upload.component';
import { MediaLibraryComponent } from './admin/media-library/media-library.component';
import { ImageDropdownDirective } from './sharedFeatures/image-dropdown.directive';
import { TestComponent } from './sharedFeatures/test/test.component';
import {GoogleLoginProvider} from '@abacritt/angularx-social-login';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { EnquiryUserRegisterComponent } from './user/enquiry-user-register/enquiry-user-register.component';
import { EnquiryRegisterComponent } from './user/enquiry-register/enquiry-register.component';

@NgModule({
  declarations: [
    
    AppComponent,
    GuesthomeComponent,
    AdminDashboardComponent,
    LoginComponent,
    CsvdataviewComponent,
    UserregistrationComponent,
    OrganizationregistrationComponent,
    DeviceRegistrationComponent,
    DeviceviewComponent,
    OrganizationViewComponent,
    UserviewComponent,
    OrganizationEditComponent,
    DeviceEditComponent,
    UserEditComponent,
    UserDashboardComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    UsersidebarComponent,
    DeviceViewUserComponent,
    OrgViewUserComponent,
    UserprofileComponent,
    CsvviewComponent,
    UserDeviceRegisterComponent,
    UserDeviceeditComponent,
    CsvgraphComponent,
    CsvExportComponent,
    ForgotPasswordComponent,
    ChatComponent,
    OrgprofileComponent,
    EquipmentGridComponent,
    EquipmentViewComponent,
    CartComponent,
    RegisterEquipmentsComponent,
    EditEquipmentsComponent,
    ViewEquipmentsComponent,
    PaymentComponent,
    DeviceDetailViewComponent,
    OrderListViewComponent,
    CreatePostComponent,
    PostViewComponent,
    EditPostComponent,
    PostDetailViewComponent,
    BlogListViewComponent,
    ImageUploadComponent,
    MediaLibraryComponent,
    ImageDropdownDirective,
    TestComponent,
    EnquiryUserRegisterComponent,
    EnquiryRegisterComponent,
    
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    NgxPaginationModule,
    SumPipeModule,
    SocialLoginModule
    
  ],
  providers: [SumPipeModule, {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '702443543680-ocecs22heju4fm36fjelod4ifs43kp3j.apps.googleusercontent.com'
          )
        }
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
