import { Injectable } from '@angular/core';
 
@Injectable()
export class ApiSetting {
     
    apiKey: string;
    apiUrl: string;
    newsType: string;
    categories: any[];
    countries: any[];

    constructor() {
        this.apiKey = '19bafb6a6722431abb91ff1eebbdb26e';
        this.apiUrl = 'https://newsapi.org/v2';
        this.categories = [
            {id:"business", name: "Business"},
            {id:"entertainment", name: "Entertainment"},
            {id:"general", name: "General"},
            {id:"health", name: "Health"},
            {id:"science", name: "Science"},
            {id:"sports", name: "Sports"},
            {id:"technology", name: "Technology"}
        ];
        this.countries = [
            {id:"ar", name: "Argentina"},
            {id:"au", name: "Australia"},
            {id:"eg", name: "Egypt"},
            {id:"fr", name: "France"},
            {id:"de", name: "Germany"},
            {id:"in", name: "India"},
            {id:"nz", name: "New Zealand"},
            {id:"sg", name: "Singapore"},
            {id:"za", name: "South Africa"},
            {id:"ae", name: "UAE"},
            {id:"gb", name: "United Kingdom"},
            {id:"us", name: "United States"},            
        ];
    }
  
    
  
    getApiKey() {
        return this.apiKey;
    }

    getApiUrl() {
        return this.apiUrl;
    }

    getCategories() {
        return this.categories;
    }

    getCountries() {
        return this.countries;
    }

    setNewsType(newsType) {
        this.newsType = newsType;
    }
    
    getNewsType() {
        return this.newsType;
    }
}