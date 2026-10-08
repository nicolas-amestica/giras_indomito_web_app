import {inject, Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {RouterStateSnapshot, TitleStrategy, PRIMARY_OUTLET} from '@angular/router';

/** Keeps SEO metadata synchronized with Angular router navigation and SSR prerender. */
@Injectable()
export class PageSeoTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  override updateTitle(snapshot:RouterStateSnapshot):void {
    const nextTitle=this.buildTitle(snapshot);
    if(nextTitle){this.title.setTitle(nextTitle);this.meta.updateTag({property:'og:title',content:nextTitle});}
    let route=snapshot.root;
    while(route.firstChild){route=route.children.find(child=>child.outlet===PRIMARY_OUTLET) ?? route.firstChild;}
    const description=route.data['description'] as string | undefined;
    if(description){
      this.meta.updateTag({name:'description',content:description});
      this.meta.updateTag({property:'og:description',content:description});
    }
  }
}