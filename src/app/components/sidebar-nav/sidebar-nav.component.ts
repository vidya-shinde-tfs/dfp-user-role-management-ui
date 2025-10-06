import {
  Component,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";

interface NavigationItem {
  name: string;
  path: string;
  icon: string;
  isSubMenu?: boolean;
  subItems?: NavigationItem[];
}

@Component({
  selector: "app-sidebar-nav",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./sidebar-nav.component.html",
  styleUrls: ["./sidebar-nav.component.scss"],
})
export class SidebarNavComponent {
    @Input() isCollapsed = false;
  @Output() collapseToggle = new EventEmitter<boolean>();
  expandedMenus: Record<string, boolean> = {};
  
  navigationItems: NavigationItem[] = [
    {
      name: "SOFTWARE SERVICES",
      path: "",
      icon: "assets/icons/cloud.svg", 
      isSubMenu: true,
      subItems: [
        {
          name: "Products",
          path: "/product-lines",
          icon: "assets/icons/documentation.svg",
        },
        {
          name: "Product Releases",
          path: "/product-release",
          icon: "assets/icons/badge.svg",
        },
      ],
    }
  ];

  constructor(private router: Router) {
    // Initialize expanded menus
    this.expandedMenus["SOFTWARE SERVICES"] = true;
    this.expandedMenus["ADMINISTRATION"] = true;
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.collapseToggle.emit(this.isCollapsed);
  }

  toggleSubMenu(menuName: string) {
    // if (!this.isCollapsed) {
    this.expandedMenus[menuName] = !this.expandedMenus[menuName];
    // }
  }
  // Route mapping for main sections and their related routes
  private readonly routeMap: Record<string, string[]> = {
    '/product-lines': [
      '/product-lines',
      '/view-product',
      '/create-product',
      '/edit-product'
    ],
    '/product-release': [
      '/product-release',
      '/view-product-release',
      '/create-product-release',
      '/edit-product-release'
    ]
  };

  navigateToRoute(path: string) {
    if (path) {
      this.router.navigate([path]);
    }
  }    

  isActiveRoute(path: string): boolean {
    if (!path) return false;
    const currentUrl = this.router.url;
    // Check if this path has related routes defined
    const relatedRoutes = this.routeMap[path];
    if (relatedRoutes) {
      return relatedRoutes.some(route => 
        currentUrl === route || currentUrl.startsWith(route + "/")
      );
    }
    // Default behavior for routes without special handling
    return currentUrl === path || currentUrl.startsWith(path + "/");
  }

  isSubMenuActive(subItems: NavigationItem[]): boolean {
    return subItems.some((item) => this.isActiveRoute(item.path));
  }
 
}