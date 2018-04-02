import { Component } from '@angular/core';
import { ApiSetting } from '../../services/api_setting/api_setting';
import {AccordionModule} from "ng2-accordion";

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
    categories: any;
    countries: any;

    constructor(private apiObj: ApiSetting) {       
        this.categories = apiObj.getCategories();
        this.countries = apiObj.getCountries();
        

    }
    

    /*onSubmit() {
        
    }*/
}