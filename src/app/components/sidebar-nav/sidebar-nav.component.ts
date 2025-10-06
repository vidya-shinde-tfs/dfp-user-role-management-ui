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
      name: "Product Lines",
      path: "/product-lines",
      icon: "", // Using fontello icon-product-lines
    },
    {
      name: "Catalogs",
      path: "/catalogs",
      icon: "", // Using fontello icon-catalog
    },
    {
      name: "Products",
      path: "/products",
      icon: "assets/icons/products.svg",
    },
    {
      name: "Files",
      path: "/files",
      icon: "", // Using fontello icon-files
    },
    {
      name: "Members",
      path: "/members",
      icon: "", // Using fontello icon-members
    }
  ];

  constructor(private router: Router) {
    // Initialize expanded menus
    this.expandedMenus["SUPPORT"] = true;
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
      '/create-product-line',
      '/edit-product-line',
      '/view-product-line'
    ],
    '/catalogs': [
      '/catalogs',
      '/view-catalog',
      '/create-catalog',
      '/edit-catalog'
    ],
    '/products': [
      '/products',
      '/view-product',
      '/create-product',
      '/edit-product'
    ],
    '/files': [
      '/files',
      '/create-file',
      '/edit-file'
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