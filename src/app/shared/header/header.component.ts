import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isLoaded = false;
  isMoreOpen = false;

  menuItems = [
    {
      label: 'قوانین و مقررات',
      link: '#',
      svg: '../../../assets/svg/header/role.svg',
    },
    {
      label: 'درباره ما',
      link: '#',
      svg: '../../../assets/svg/header/about.svg',
    },
    {
      label: 'تماس با ما',
      link: '#',
      svg: '../../../assets/svg/header/phone.svg',
    },
    {
      label: 'برگزار کنندگان',
      link: '#',
      svg: '../../../assets/svg/header/brgzr.svg',
    },
    {
      label: 'دسته بندی',
      link: '#',
      svg: '../../../assets/svg/header/dastebandi.svg',
    },
    { label: 'دوره ها', link: '#', svg: '../../../assets/svg/header/dore.svg' },
  ];

  visibleMenuItems = [...this.menuItems];
  hiddenMenuItems: any[] = [];

  ngOnInit() {
    this.adjustMenuItems();
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleMoreMenu() {
    this.isMoreOpen = !this.isMoreOpen;
  }


  @HostListener('window:resize', [])
  adjustMenuItems() {
    const screenWidth = window.innerWidth;

    let visibleCount;
    if (screenWidth > 1591) {
      visibleCount = this.menuItems.length;
    } else if (screenWidth > 1400) {
      visibleCount = this.menuItems.length - 2;
    } else if (screenWidth > 1200) {
      visibleCount = this.menuItems.length - 3;
    } else if (screenWidth > 992) {
      visibleCount = this.menuItems.length - 4;
    } else {
      visibleCount = 0; 
    }

    this.visibleMenuItems = this.menuItems.slice(0, visibleCount);
    this.hiddenMenuItems = this.menuItems.slice(visibleCount);
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    const target = event.target as HTMLElement;
    const isClickInsideNavbar = target.closest('.navbar') !== null;
    const isClickInsideSidebar = target.closest('.menu-sidebar') !== null;

    if (!isClickInsideNavbar && !isClickInsideSidebar && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
  
}
