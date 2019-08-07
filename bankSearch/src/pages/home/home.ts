import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomeProvider } from '../../providers/home/home'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public searchTerm;
  constructor(public homeProvider: HomeProvider) {
    this.getBanks("MUMBAI");
  }
  private bankList: any = [];
  private filteredBankList: any = [];
  private searching = true;
  getBanks(bank?) {
    this.searchTerm = "";
    console.log(bank);
    this.searching = true;
    this.filteredBankList = [];
    this.bankList = [];
    this.homeProvider.getBanks(bank).then(
      res => {
        // console.log(res);
        this.bankList = res;
        this.filteredBankList = res;
        this.searching = false;
      },
      err => {
        console.log(err);
        this.searching = false;
        // this.bankList = err;
      }
    );
  }

  // filterItems(searchTerm) {
  //   this.bankList = this.bankList.filter((bankList) => {
  //     return bankList.bank_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  //   });
  // }

  filterItems(searchTerm) {
    this.searching = true;
    this.filteredBankList = this.bankList.filter((item) => {
      return item.bank_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
    this.searching = false;
  }

}
