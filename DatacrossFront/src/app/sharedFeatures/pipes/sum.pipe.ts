import { NgModule, Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sum"
})
export class SumPipe implements PipeTransform {
  transform(items: any[], attr: string): any {
    let a = items.reduce((a, b) => a + b [attr], 0);
    // console.log('pipe',a);
    localStorage.setItem('gt',a);
    return a;
  }
}

@NgModule({
  declarations: [SumPipe],
  exports: [SumPipe]
})
export class SumPipeModule {}
