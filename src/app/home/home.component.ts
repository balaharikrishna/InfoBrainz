import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HomeService } from '../services/home.service';

interface IObjects {
    ObjectId:number
    typeId:number
    name: string
    image: string
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    vehicles: IObjects[] | undefined
    gadgets: IObjects[] | undefined
    constructor(public homeService: HomeService) { }
    searchText = '';

    items: MenuItem[] | undefined;

    ngOnInit() {
        // this.vehicles = [
        //     {ObjectId:1, typeId: 1 , name: "Two Wheeler", image: "../../assets/home-images/rikas-rasheed-iq5jLDMVXZQ-unsplash.jpg" },
        //     {ObjectId:1, typeId: 1 , name:  "Four Wheeler", image: "../../assets/home-images/aaron-huber-8qYE6LGHW-c-unsplash.jpg" },
        //     {ObjectId:2, typeId: 1 , name:  "Mobiles" ,image:"../../assets/home-images/mobile.jpg"},
        //     {ObjectId:2, typeId: 2 , name:  "Laptops" ,image:"../../assets/home-images/laptop.jpg"},
        //     {ObjectId:2, typeId: 3 , name: "T.V's" ,image:"../../assets/home-images/tv.jpg"},
        // ] 
        this.getAllHomeObjects();

        this.items = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-fw pi-video'
                            }
                        ]
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Left',
                        icon: 'pi pi-fw pi-align-left'
                    },
                    {
                        label: 'Right',
                        icon: 'pi pi-fw pi-align-right'
                    },
                    {
                        label: 'Center',
                        icon: 'pi pi-fw pi-align-center'
                    },
                    {
                        label: 'Justify',
                        icon: 'pi pi-fw pi-align-justify'
                    }
                ]
            },
            {
                label: 'Users',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Events',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }

    getAllHomeObjects() {
        this.homeService.getAllHomeObjects().subscribe((data) => {
          if (data) {
            this.vehicles = data.filter(obj => obj.ObjectId == 1);
            this.gadgets = data.filter(obj => obj.ObjectId == 2);
          }
        });
      }

    selectedCard(){
        
    }

    userLogin(){
        
    }
}
