import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/Brand';

@Pipe({
  name: 'filterpipe1'
})
export class Filterpipe1Pipe implements PipeTransform {

  transform(value: Brand[], filtertext: string): Brand[] {
    filtertext = filtertext?filtertext.toLocaleLowerCase():""
    return filtertext?value
    .filter((p:Brand)=>p.brands.toLocaleLowerCase()
    .indexOf(filtertext)!==-1):value;//Burada filtreleme işlemleri gerçekleştirilecektir.
    //Satır satır bu anlama gelmektedir.
    //ilk satırda ternary bir ifade kullanılmıştır.
    //gönderilen ifade bir filterText ise lowercase durumuna getir anlamındadır.
    //ikinci satırda filtertext ile bir değer gönderilmişse değerimizi hatırlayın Product[] cinsinden bir değerdi
    //3.satırda bunu filtreleme anlamına gelecek olan bir değişknee gerekli ataması yapılmıştır.
    //ve p'ye atana değerin productName'i metod aracılığı ile lowercase durumuna geçilmiştir.
    //eğer verilen ifadelere uygun bir ifade yok ise yani -1 değil ise
    //burada aslında değerin bulunduğu ve yazdırılacağı anlamına gelmektedir.
    //value döndür denmektedir.(Yani Product'ı döndür anlamındadır) 
  }

}
